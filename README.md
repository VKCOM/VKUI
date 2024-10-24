<h1 align="center">
  <a href="https://vkcom.github.io/VKUI/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/VKCOM/VKUI/d72dcc219bc4b441b2740b69d9343aea14d66c7f/docs/assets/vkui-logo-light.svg">
      <img src="https://raw.githubusercontent.com/VKCOM/VKUI/d72dcc219bc4b441b2740b69d9343aea14d66c7f/docs/assets/vkui-logo-dark.svg" width="150" alt="VKUI logo" />
    </picture>
  </a>
</h1>
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@vkontakte/vkui?maxAge=3600" alt="license mit"></a>
  <a href="https://npmjs.com/package/@vkontakte/vkui"><img src="https://img.shields.io/npm/v/@vkontakte/vkui/latest.svg?maxAge=3600" alt="open latest version"></a>
</p>
<p align="center">
VKUI — это библиотека адаптивных React-компонентов<br> для создания веб-приложений.<br>
Библиотека основана на <a href="https://www.figma.com/@vk">дизайн-системе VK</a> и реализует её интерфейсы для различных платформ.<br>
Релизы: <a href="https://github.com/VKCOM/VKUI/releases">https://github.com/VKCOM/VKUI/releases</a>.<br>
Гайд по миграции <a href="https://vkcom.github.io/VKUI/#/Migrations">на версию 6</a>.
</p>

## Установка

**npm:**

```sh
npm i @vkontakte/vkui
```

**yarn:**

```sh
yarn add @vkontakte/vkui
```

**pnpm:**

```sh
pnpm add @vkontakte/vkui
```

> _Обратите внимание_: мы поддерживаем [react](https://www.npmjs.com/package/react) и [react-dom](https://www.npmjs.com/package/react-dom) версии `^18.2.0`

## Hello World

```jsx static
import * as React from 'react';
import { createRoot } from 'react-dom/client';
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
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
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

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <Example />
    </AdaptivityProvider>
  </ConfigProvider>,
);
```

## Браузеры

С подробным списком можно ознакомиться в файле [.browserslistrc](.browserslistrc)

## Тестирование

Мы работаем над качеством библиотеки и подвозим тесты. `yarn test` запускает юниты, типы и линтит. Также мы поддерживаем скриншотные тесты (e2e) и проверяем базовую доступность (a11y) компонентов — смотрите наш [гайд по тестированию](docs/TESTING.md).

## Документация

В [документации](https://vkcom.github.io/VKUI/) вы сможете найти информацию об использовании компонентов и утилит.

## Сообщить о проблеме

Напишите нам [issue](https://github.com/VKCOM/VKUI/issues/new/choose), если нашли баг или у вас есть предложения по улучшению библиотеки. Если вы хотите задать вопрос или обсудить библиотеку, воспользуйтесь [дискуссиями](https://github.com/VKCOM/VKUI/discussions/categories/q-a).

## Contributing

Мы очень радуемся, когда пользователи библиотеки работают над её улучшением. Для того, чтобы оставить след в истории:

1. Для начала ознакомьтесь с нашим [манифестом](docs/MANIFESTO.md) 📝
2. Затем посмотрите [требования к разработке](docs/CONTRIBUTING.md) 🔧
3. А теперь смело вносите изменения и создавайте [pull request](https://github.com/VKCOM/VKUI/pulls) ❤️
