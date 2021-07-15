<h1 align="center">
  <a href="https://vkcom.github.io/VKUI/"><img src="styleguide/assets/static/vkui_logo.png?raw=true" width="300" alt="VKUI logo"></a>
</h1>
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@vkontakte/vkui?maxAge=3600" alt="license mit"></a>
  <a href="https://npmjs.com/package/@vkontakte/vkui"><img src="https://img.shields.io/npm/v/@vkontakte/vkui/latest.svg?maxAge=3600" alt="open latest version"></a>
</p>
<p align="center">
VKUI — это библиотека адаптивных React-компонентов, <br> для создания веб-приложений и <a href="https://vk.com/dev/vk_apps_docs">VK Mini Apps</a> в экосистеме ВКонтакте.<br>
Библиотека основана на <a href="https://www.figma.com/@vk">дизайн-системе ВКонтакте</a> и реализует её интерфейсы для различных платформ.<br>
Релизы: <a href="https://github.com/VKCOM/VKUI/releases">https://github.com/VKCOM/VKUI/releases</a>.<br>
Гайд по миграции на версию 4: <a href="https://github.com/VKCOM/VKUI/releases/tag/v4.0.0">https://github.com/VKCOM/VKUI/releases/tag/v4.0.0</a>.
</p>


## Установка
`npm i @vkontakte/vkui` или `yarn add @vkontakte/vkui`

**Важно:** Нужно установить вручную [`peerDependencies`](package.json#L104-L112), либо использовать npm7+ который делает это автоматически.

## Hello World
```jsx static
import React from "react";
import ReactDOM from "react-dom";
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

const Example = () => {
  const { viewWidth } = useAdaptivity();
  
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth > ViewWidth.MOBILE}>
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
  document.getElementById("root")
);
```

## Браузеры
На данный момент мы поддерживаем WebView следующих операционных систем:
* Android >= 4.4
* iOS >= 9

Иными словами, мы поддерживаем браузеры следующих версий:
* Safari для iOS >= 9
* Android Browser >= 4.4 (Chrome 30)
* Chrome для Android, начиная с Android 5.0 (Chrome 36)

## Тестирование

Мы работаем над качеством библиотеки и подвозим тесты. `yarn test` запускает юниты, проверяет типы и линтит. `yarn test:unit` запускает только юниты и поддерживает интерактивный режим с флагом `--watch`. Также мы поддерживаем скриншотные тесты — смотрите наш [гайд по тестированию](./TESTING.md).

## Документация
В [документации](https://vkcom.github.io/VKUI/) вы сможете найти информацию об использовании компонентов и утилит.

## Сообщить о проблеме
Напишите нам [issue](https://github.com/VKCOM/VKUI/issues/new/choose), если нашли баг или у вас есть предложения по улучшению библиотеки.

## Contributing
Мы очень радуемся, когда пользователи библиотеки работают над её улучшением. Для того, чтобы оставить след в
истории, сделайте форк проекта, внесите изменения и отправьте нам [pull request](https://github.com/VKCOM/VKUI/pulls).
