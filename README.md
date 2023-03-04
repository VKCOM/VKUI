<h1 align="center">
  <a href="https://vkcom.github.io/VKUI/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="docs/assets/vkui-logo-light.svg">
      <img src="docs/assets/vkui-logo-dark.svg" width="150" alt="VKUI logo" />
    </picture>
  </a>
</h1>
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@vkontakte/vkui?maxAge=3600" alt="license mit"></a>
  <a href="https://npmjs.com/package/@vkontakte/vkui"><img src="https://img.shields.io/npm/v/@vkontakte/vkui/latest.svg?maxAge=3600" alt="open latest version"></a>
</p>
<p align="center">
VKUI — это библиотека адаптивных React-компонентов, <br> для создания веб-приложений и <a href="https://vk.com/dev/vk_apps_docs">VK Mini Apps</a> в экосистеме ВКонтакте.<br>
Библиотека основана на <a href="https://www.figma.com/@vk">дизайн-системе ВКонтакте</a> и реализует её интерфейсы для различных платформ.<br>
Релизы: <a href="https://github.com/VKCOM/VKUI/releases">https://github.com/VKCOM/VKUI/releases</a>.<br>
Гайд по миграции <a href="https://vkcom.github.io/VKUI/#/Migration">на версию 5</a>.
</p>

## Установка

**npm:**

```sh
npm i @vkontakte/vkui @vkontakte/icons @vkontakte/vk-bridge
```

**yarn:**

```sh
yarn add @vkontakte/vkui @vkontakte/icons @vkontakte/vk-bridge
```

**pnpm:**

```sh
pnpm add @vkontakte/vkui @vkontakte/icons @vkontakte/vk-bridge
```

> _Обратите внимание_: мы поддерживаем [react](https://www.npmjs.com/package/react) и [react-dom](https://www.npmjs.com/package/react-dom) `^17.0.0` и `^18.1.0`

## Hello World

```jsx static
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const Example = () => {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VKUI</PanelHeader>
              <Group header={<Header mode="secondary">Items</Header>}>
                <SimpleCell>Hello</SimpleCell>
                <SimpleCell>World</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <Example />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById('root'),
);
```

## Браузеры

На данный момент мы поддерживаем WebView следующих операционных систем:

- Android >= 5
- iOS >= 9

Иными словами, мы поддерживаем браузеры следующих версий:

- Safari для iOS >= 9
- Android Browser >= 5 (Chrome 36)
- Chrome для Android, начиная с Android 5.0 (Chrome 36)

## Тестирование

Мы работаем над качеством библиотеки и подвозим тесты. `yarn test` запускает юниты, проверяет типы и линтит. Также мы поддерживаем скриншотные тесты (e2e) и тесты доступности (a11y) — смотрите наш [гайд по тестированию](https://github.com/VKCOM/VKUI/blob/master/docs/TESTING.md).

## Документация

В [документации](https://vkcom.github.io/VKUI/) вы сможете найти информацию об использовании компонентов и утилит.

## Сообщить о проблеме

Напишите нам [issue](https://github.com/VKCOM/VKUI/issues/new/choose), если нашли баг или у вас есть предложения по улучшению библиотеки. Если вы хотите задать вопрос или обсудить библиотеку, воспользуйтесь [дискуссиями](https://github.com/VKCOM/VKUI/discussions/categories/q-a).

## Contributing

Мы очень радуемся, когда пользователи библиотеки работают над её улучшением. Для того, чтобы оставить след в истории:

1. Для начала ознакомьтесь с нашим [манифестом](https://github.com/VKCOM/VKUI/blob/master/docs/MANIFESTO.md) 📝
2. Затем посмотрите [требования к разработке](https://github.com/VKCOM/VKUI/blob/master/docs/CONTRIBUTING.md) 🔧
3. А теперь смело вносите изменения и создавайте [pull request](https://github.com/VKCOM/VKUI/pulls) ❤️
