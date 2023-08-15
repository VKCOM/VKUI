<!-- TODO [>=6] Удалить Предисловие -->

> **Предисловие**
>
> Изначально **VKUI** разрабатывался как инструмент для быстрого создания клиентской части
> [VK Mini Apps](https://vk.com/miniapps). В связи с этим **VKUI** глубоко интегрирован с
> [@vkontakte/vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), благодаря которой
> мини-приложения [VK Mini Apps](https://vk.com/miniapps) "общаются" с официальными клиентами
> [ВКонтакте](https://vk.com).
>
> Сегодня **VKUI** — больше, чем просто мини-приложения. Разработчики используют его, чтобы
> создавать полноценные независимые приложения, которые никак не связаны с платформой
> [VK Mini Apps](https://vk.com/miniapps). Но из-за интеграции они вынуждены иметь дело с этим
> наследием.
>
> Чтобы отделить **VKUI** от [VK Mini Apps](https://vk.com/miniapps), в следующей мажорной версии
> библиотеки — **v6** — мы отказываемся от нативной интеграции с
> [@vkontakte/vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge).
>
> В рамках текущей версии (**v5**) мы добавляем советы по подготовке к этому обновлению. Они будут
> попадаться вам как на других страницах документации, так и в предупреждениях в **DevTools**.
> ☝️ Если вы не занимаетесь разработкой [VK Mini Apps](https://vk.com/miniapps), можете их просто
> игнорировать.

[VK Mini Apps](https://vk.com/miniapps) – это кроссплатформенные мини-приложения в экосистеме социальной сети [ВКонтакте](https://vk.com/).

**VKUI** изначально создавался как библиотека компонентов для таких приложений. Несмотря на то, что
сейчас **VKUI** — больше, чем мини-приложения, он до сих пор хорошо подходит для них. Ниже мы
собрали советы по интеграции с **VK Mini Apps**.

Про саму разработку **VK Mini Apps** читайте [статью "Мини-приложения" на портале VK для разработчиков](https://dev.vk.com/mini-apps/overview).

## Конфигурация VKUI

> Советуем использовать шаблон [@vkontakte/create-vk-mini-app](https://github.com/VKCOM/create-vk-mini-app).
> В нем конфигурация, описанная ниже, есть по умолчанию.

Для начала устанавливаем библиотеки:

- [@vkontakte/vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge) **>= 2.9.0**
- [@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge) **>= 1.0.0**

```sh
# для примера используется пакетный менеджер yarn
yarn add @vkontakte/vk-bridge @vkontakte/vk-bridge-react
```

Далее подписываемся на изменения из **VK Bridge**. Для этого используем готовые хуки из
[@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge).

```tsx static
import React from 'react';
import ReactDOM from 'react-dom';
import vkBridge, { parseURLSearchParamsForGetLaunchParams } from '@vkontakte/vk-bridge';
import { useAppearance, useInsets, useAdaptivity } from '@vkontakte/vk-bridge-react';
import { Platform, ConfigProvider, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import { transformVKBridgeAdaptivity } from './transformers/transformVKBridgeAdaptivity';
import { App } from './App';

// Инициализируем VK  Mini App
vkBridge.send('VKWebAppInit');

const Root = () => {
  const vkBridgeAppearance = useAppearance() || undefined; // Вместо undefined можно задать значение по умолчанию
  const vkBridgeInsets = useInsets() || undefined; // Вместо undefined можно задать значение по умолчанию
  const vkBridgeAdaptivityProps = transformVKBridgeAdaptivity(useAdaptivity()); // Конвертируем значения из VK Bridge в параметры AdaptivityProvider
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(window.location.search); // [опционально] Платформа может передаваться через URL (см. https://dev.vk.com/mini-apps/development/launch-params#vk_platform)

  return (
    <ConfigProvider
      appearance={vkBridgeAppearance}
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={true} // Резервируем правую часть PanelHeader под кнопки управления VK Mini Apps. Через параметр customPanelHeaderAfterMinWidth можно регулировать ширину этой области (по умолчанию, используется 90)
    >
      <AdaptivityProvider {...vkBridgeAdaptivityProps}>
        {/* Для VK Mini Apps рекомендуем использовать mode="full" (выставлен по умолчанию, для примера указан явно) */}
        <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
```

Файл `./transformers/transformVKBridgeAdaptivity.ts`

```ts static
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
export const transformVKBridgeAdaptivity = ({
  type,
  viewportWidth,
  viewportHeight,
}: UseAdaptivity): AdaptivityProps => {
  switch (type) {
    case 'adaptive':
      return {
        viewWidth: getViewWidthByViewportWidth(viewportWidth),
        viewHeight: getViewHeightByViewportHeight(viewportHeight),
      };
    case 'force_mobile':
    case 'force_mobile_compact':
      return {
        viewWidth: ViewWidth.MOBILE,
        sizeX: SizeType.COMPACT,
        sizeY: type === 'force_mobile_compact' ? SizeType.COMPACT : SizeType.REGULAR,
      };
    default:
      return {};
  }
};
```

## Навигация

### [PanelHeader](https://vkcom.github.io/VKUI/#/PanelHeader)

Мини-приложению доступна почти вся площадь экрана, поэтому для корректной работы навигации
необходимо использовать компонент [PanelHeader](https://vkcom.github.io/VKUI/#/PanelHeader) на каждом
экране приложения. Он должен содержать название приложения и значок **Назад** (см.
[PanelHeaderBack](https://vkcom.github.io/VKUI/#/PanelHeaderBack)) на тех экранах, где тот
требуется.

> _Правый верхний угол_ [PanelHeader](https://vkcom.github.io/VKUI/#/PanelHeader) зарезервирован для
> нативного бара с кнопками управления мини-приложением, поэтому не рекомендуем использовать
> параметр `after`.
>
> Чтобы автоматически скрывать `after` у [PanelHeader](https://vkcom.github.io/VKUI/#/PanelHeader),
> в [ConfigProvider](https://vkcom.github.io/VKUI/#/ConfigProvider) есть параметр
> `hasCustomPanelHeaderAfter`.

### [View](https://vkcom.github.io/VKUI/#/View)

На стартовой странице мини-приложения вы должны включить свайпбек нативного клиента, чтобы
пользователь смог выйти из мини-приложения. Для этого нужно вызывать определенные методы
**VK Bridge** в зависимости от типа мини-приложения:

- Если вы делаете _стандартное_ мини-приложение ВКонтакте, то при переходах отправляйте
  [VKWebAppSetSwipeSettings](https://dev.vk.com/bridge/VKWebAppSetSwipeSettings) с `history: true`
  на первой панели и `history: false` на других.
- Если вы делаете _внутреннее_ мини-приложения ВКонтакте, то отправляйте событие
  [VKWebAppEnableSwipeBack](https://dev.vk.com/bridge/VKWebAppEnableSwipeBack) при переходе на
  первую панель и событие [VKWebAppDisableSwipeBack](https://dev.vk.com/bridge/VKWebAppDisableSwipeBack)
  при переходе на любую другую.

```tsx static
import vkBridge from '@vkontakte/vk-bridge';

const SomeViews = () => {
  const [history, setHistory] = useState(['main']);
  const activePanel = history[history.length - 1];
  const isFirst = history.length === 1;

  const go = React.useCallback((panel) => setHistory((prevHistory) => [...prevHistory, panel]), []);
  const goBack = React.useCallback(() => setHistory((prevHistory) => prevHistory.slice(0, -1)), []);
  const handleProfileClick = () => go('profile');
  const handleMainClick = () => go('main');

  React.useEffect(() => {
    // Для стандартных мини-приложений делайте так:
    vkBridge.send('VKWebAppSetSwipeSettings', { history: isFirst });
    // Для внутренних мини-приложений делайте так:
    vkBridge.send(isFirst ? 'VKWebAppEnableSwipeBack' : 'VKWebAppDisableSwipeBack');
  }, [isFirst]);

  return (
    <View history={history} activePanel={activePanel} onSwipeBack={goBack}>
      <Panel id="main">
        <div onClick={handleProfileClick}>Main</div>
      </Panel>
      <Panel id="profile">
        <div onClick={handleMainClick}>Profile</div>
      </Panel>
    </View>
  );
};
```

> На устройствах с Android нажатие кнопки **Назад** вызывает в WebView событие [history.back](https://developer.mozilla.org/ru/docs/Web/API/Window/history).
> По нажатию этой кнопки официальное приложение сделает возврат на предыдущую страницу вашего
> приложения или закроет его, если вернуться невозможно. Поэтому для корректной навигации вы должны
> обрабатывать нажатие аппаратной клавиши в мини-приложении и реализовывать роутинг. Сделать это
> можно, например, при помощи библиотеки `react-router`.

## Виброотклик (Taptic Engine)

Для улучшения пользовательского опыта при взаимодействии с вашим мини-приложением в **VK Bridge**
существуют события вызова вибрации на устройстве, которое их поддерживает.

[@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge) предоставляет
функцию `runTapticImpactOccurred`, которая отправляет событие [VKWebAppTapticImpactOccurred](https://dev.vk.com/bridge/VKWebAppTapticImpactOccurred),
как раз заранее проверяя, что возможность вызова вибрации доступна на устройстве.

Виброотликом можно воспользоваться, например, при использовании компонента [PullToRefresh](https://vkcom.github.io/VKUI/#/PullToRefresh)
на `onRefresh`.

<!--TODO [>=6] Удалить в коде ниже возврат выполнения функции и комментарий про VKUI v5 -->

```tsx static
import * as React from 'react';
import { runTapticImpactOccurred } from '@vkontakte/vk-bridge-react';

const Users = () => {
  const [users, setUsers] = React.useState([
    { id: 1, name: 'Placeholder', avatarUrl: 'https://placehold.co/100' },
  ]);
  const [fetching, setFetching] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setFetching(true);
    // Вызываем виброотклик
    // > Note: в VKUI v5 необходимо возвращать результат выполнения, чтобы
    // > чтобы избежать двойного вызова runTapticImpactOccurred()
    return runTapticImpactOccurred('light');
  }, []);

  return (
    <View activePanel="users">
      <Panel id="users">
        <PanelHeader>Пользователи</PanelHeader>

        <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
          <Group>
            <List>
              {users.map(({ id, name, avatarUrl }, i) => {
                return (
                  <Cell key={i} before={<Avatar src={avatarUrl} />}>
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
