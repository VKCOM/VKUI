Документацию по миграции с v4 на v5 можно найти [здесь](https://github.com/VKCOM/VKUI/releases/tag/v5.0.1).

<br/><br/>

## Удалили завязку на [VK Mini Apps](https://vk.com/miniapps)

Изначально, **VKUI** создавался как инструмент для создания клиентской части мини-приложений [ВКонтакте](https://vk.com).
Сейчас **VKUI** уже больше чем просто мини-приложения. Разработчики используют библиотеку, чтобы
создавать полноценные независимые приложения, которые никак не связаны с [VK Mini Apps](https://vk.com/miniapps).

В связи с этим мы отказались от завязки на мини-приложения [ВКонтакте](https://vk.com). Для этого мы
удалили интеграцию с библиотекой [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), а
также убрали упоминания о [VK Mini Apps](https://vk.com/miniapps) в документации. Это привнесло в
библиотеку ряд изменений касающихся API.

**Гайд ниже предназначен для разработчиков мини-приложений ВКонтакте.** Если вы таким не являетесь,
то смело пропускайте эту секцию.

### Первоначальная настройка VKUI

Из [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge) мы доставали несколько настроек:

1. тему (`light` или `dark`);
2. параметры адаптивности;
3. размеры безопасных зон (в CSS это `--safe-area-insets-*`);
4. открыто веб-вью или нет.

Первые три пункта перенесли в библиотеку [@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge-react).

Помимо **VK Bridge**, была завязка на мини-приложения в параметре `webviewType` за счёт свойства
`"vkapps"`. Теперь это параметр `hasCustomPanelHeaderAfter`, который по умолчанию `false`.

По итогу бойлерплейт для [VK Mini Apps](https://vk.com/miniapps) должен выглядеть так:

> **Note**
>
> Также обновили шаблон в [Create VK Mini App](https://github.com/VKCOM/create-vk-mini-app) под это
> дело.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import { useAppearance, useInsets, useAdaptivity } from '@vkontakte/vk-bridge-react';
import { Platform, ConfigProvider, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import { getPlatformByQueryString } from './selectors/getPlatformByQueryString';
import { transformBridgeAdaptivity } from './transformers/transformBridgeAdaptivity';
import { App } from './App';

// Init VK  Mini App
bridge.send('VKWebAppInit');

const Root = () => {
  const bridgeAppearance = useAppearance() || undefined; // вместо undefined можно задать значение по умолчанию
  const bridgeInsets = useInsets() || undefined; // вместо undefined можно задать значение по умолчанию
  const bridgeAdaptivityProps = transformBridgeAdaptivity(useAdaptivity());

  return (
    <ConfigProvider
      appearance={bridgeAppearance}
      platform={getPlatformByQueryString(location.search)}
      isWebView={bridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
    >
      <AdaptivityProvider {...bridgeAdaptivityProps}>
        <AppRoot safeAreaInsets={bridgeInsets}>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
```

Файл `./selectors/getPlatformByQueryString.ts`

```tsx
import type { PlatformType } from '@vkontakte/vkui';
import { querystring } from '@vkontakte/vkjs';

/**
 * Это пример функции, которая вытаскивает из URL'а мини-приложения GET-параметр, содержащий
 * платформу для передачи в ConfigProvider.
 *
 * VK Bridge не предоставляет эту функцию, поэтому необходимо создавать реализацию на стороне
 * своего проекта.
 *
 * @see https://dev.vk.com/mini-apps/development/launch-params#vk_platform
 */
export const getPlatformByQueryString = (queryString: string): PlatformType | undefined => {
  const PLATFORM_ALIAS = { desktop_web: 'vkcom' };
  const isPlatformAlias = (platformAlias: string): platformAlias is keyof typeof PLATFORM_ALIAS =>
    platformAlias in PLATFORM_ALIAS;
  try {
    const parsedQuery = querystring.parse(queryString);
    const platformAliasByQuery = parsedQuery['vk_platform'];
    return typeof platformAliasByQuery === 'string' && isPlatformAlias(platformAliasByQuery)
      ? PLATFORM_ALIAS[platformAliasByQuery]
      : undefined;
  } catch (e) {
    console.warn(e);
    return;
  }
};
```

Файл `./transformers/transformBridgeAdaptivity.ts`

```ts
import {
  type AdaptivityProps,
  getViewWidthByViewportWidth,
  getViewHeightByViewportHeight,
  ViewWidth,
  SizeType,
} from '@vkontakte/vkui';
import type { UseAdaptivity } from '@vkontakte/vk-bridge-react';

/**
 * Требуется конвертировать данные из VK Bridge в те, что принимает AdaptivityProvider из VKUI.
 */
export const transformBridgeAdaptivity = (bridgeAdaptivity: UseAdaptivity): AdaptivityProps => {
  let viewWidth;
  let viewHeight;
  let sizeX;
  let sizeY;

  if (bridgeAdaptivity.type === 'adaptive') {
    const { viewportWidth, viewportHeight } = bridgeAdaptivity;
    viewWidth = getViewWidthByViewportWidth(viewportWidth);
    viewHeight = getViewHeightByViewportHeight(viewportHeight);
  } else if (
    bridgeAdaptivity.type === 'force_mobile' ||
    bridgeAdaptivity.type === 'force_mobile_compact'
  ) {
    viewWidth = ViewWidth.MOBILE;
    sizeX = SizeType.COMPACT;

    if (bridgeAdaptivity.type === 'force_mobile_compact') {
      sizeY = SizeType.COMPACT;
    } else {
      sizeY = SizeType.REGULAR;
    }
  }

  return { viewWidth, viewHeight, sizeX, sizeY };
};
```

### [PullToRefresh](#/PullToRefresh)

До этого `runTapticImpactOccurred()` вызывался внутри компонента после вызова обработчика `onRefresh`.
Сам `runTapticImpactOccurred()` через `vkBridge.send` вызывает событие `VKWebAppTapticImpactOccurred`.
В виду отказа от [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), мы удалили вызов
`runTapticImpactOccurred()` на стороне **VKUI**.

```tsx
import * as React from 'react';
import { runTapticImpactOccurred } from '@vkontakte/vk-bridge-react';

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setFetching(true);
    // Вызываем если это необходимо
    runTapticImpactOccurred('light');
  }, []);

  return (
    <View activePanel="users">
      <Panel id="users">
        <PanelHeader>Пользователи</PanelHeader>

        <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
          <Group>
            <List>
              {users.map(({ id, name, photo_100 }, i) => {
                return (
                  <Cell key={i} before={<Avatar src={photo_100} />}>
                    {name}
                  </Cell>
                );
              })}
            </List>
          </Group>
        </PullToRefresh>
      </Panel>
    </View>
  );
};
```

<br/><br/>

## [ConfigProvider](#/ConfigProvider)

- `webviewType` заменён на `hasCustomPanelHeaderAfter`
  - `webviewType={WebviewType.INTERNAL}` -> `hasCustomPanelHeaderAfter={false}`.
  - `webviewType={WebviewType.VKAPPS}` -> `hasCustomPanelHeaderAfter={true}`. При необходимости передайте `customPanelHeaderAfterMinWidth={<value>}` (по умолчанию `90`).
