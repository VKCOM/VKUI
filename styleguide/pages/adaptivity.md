Одно из основных преимуществ VKUI — это адаптивность. Библиотека не только реализует разные шаблоны для разных устройств:
под габариты адаптируются практически все компоненты.
От наличия мышки, высоты и ширины экрана зависит отображение кнопок, элементов форм и так далее.
В этой статье мы разберём, как сделать ваш интерфейс отзывчивым.

Для начала, нужно обернуть ваше приложение в [`AdaptivityProvider`](#/AdaptivityProvider).

> **Важно**
>
> Учтите порядок подключения компонентов для конфигурации. `ConfigProvider` -> `AdaptivityProvider` -> `AppRoot`

```jsx static
import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider, AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

function App() {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>...</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

Далее, нужно добавить [`SplitLayout`](#/SplitLayout) и хотя бы один [`SplitCol`](#/SplitCol).

`SplitLayout` — компонент-обертка для отрисовки макета с одной или несколькими колонками. `SplitCol` — компонент для отрисовки колонки.

```jsx static
// ...

function App() {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol width={280}>
              <SideCol />
            </SplitCol>
            <SplitCol>
              <MainScreens />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

const MainScreens = () => {
  return (
    <View activePanel="profile">
      <Panel id="profile">Profile</Panel>
    </View>
  );
};

const SideCol = () => {
  return <Panel id="nav">Navigation</Panel>;
};

// ...
```

Почти готово. Теперь нам необходимо сообщить приложению, что левая колонка нужна только на больших экранах. Для доступа
к рассчитанным в `AdaptivityProvider` свойствам, достаточно обернуть приложение в HOC `withAdaptivity`.

```jsx static
function App({ viewWidth }) {
  // ...
  <SplitLayout
    header={
      viewWidth >= ViewWidth.SMALL_TABLET && <PanelHeader separator={false} />
    }
  >
    {viewWidth === ViewWidth.DESKTOP && (
      <SplitCol width={280}>
        <Panel id="nav">Navigation</Panel>
      </SplitCol>
    )}
    <SplitCol
      spaced={viewWidth >= ViewWidth.SMALL_TABLET}
      animate={viewWidth <= ViewWidth.MOBILE}
    >
      <View activePanel="profile">
        <Panel id="profile">Profile</Panel>
      </View>
    </SplitCol>
  </SplitLayout>;
  // ...
}

App = withAdaptivity(App, { viewWidth: true });
```

> **Нюансы**
>
> - Свойство `SplitLayout.header` нужно для создания сквозной шапки, когда интерфейс состоит из нескольких колонок (или одной центрированной)
> - Анимация перехода между панелями должна быть отключена при размерах `ViewWidth.TABLET` и более (`SplitCol.animate`)
> - Если интерфейс состоит из нескольких колонок, то у центральных колонок должны быть отступы (в трёх-колоночном режиме это одна центральная колонка) (`SplitCol.spaced`)

### Технические детали

Адаптивность базируется на четырёх свойствах: `viewWidth`, `viewHeight`, `sizeX`, `sizeY`. Эти свойства вычисляются в `AdaptivityProvider`,
доступ к ним можно получить через HOC `withAdaptivity` (либо через hook `useAdaptivity`).

- `sizeX` и `sizeY` принимают значения `SizeType.REGULAR | SizeType.COMPACT`
- `viewWidth` — `ViewWidth.SMALL_MOBILE | ViewWidth.MOBILE | ViewWidth.SMALL_TABLET | ViewWidth.TABLET | ViewWidth.DESKTOP`
- `viewHeight` — `ViewHeight.SMALL | ViewHeight.MEDIUM`
