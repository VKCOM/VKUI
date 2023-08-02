TEST

Одно из основных преимуществ VKUI — это адаптивность. Библиотека не только реализует разные шаблоны для разных устройств:
под габариты адаптируются практически все компоненты.
От наличия мышки, высоты и ширины экрана зависит отображение кнопок, элементов форм и так далее.
В этой статье мы разберём, как сделать ваш интерфейс отзывчивым.

Для начала, нужно обернуть ваше приложение в [`AdaptivityProvider`](https://vkcom.github.io/VKUI/#/AdaptivityProvider).

> **Важно**
>
> Учтите порядок подключения компонентов для конфигурации. `ConfigProvider` -> `AdaptivityProvider` -> `AppRoot`

```jsx static
import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function App() {
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>...</AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Далее, нужно добавить [`SplitLayout`](https://vkcom.github.io/VKUI/#/SplitLayout) и хотя бы один [`SplitCol`](https://vkcom.github.io/VKUI/#/SplitCol).

- `SplitLayout` — компонент-обертка для отрисовки макета с одной или несколькими колонками.
- `SplitCol` — компонент для отрисовки колонки.

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
```

Почти готово. Теперь мы должны сообщить приложению, что левая колонка нужна только на больших экранах. Для этого нам
нужно использовать хук `useAdaptivityConditionalRender` в своих компонентах. Далее будет пример, а следом объяснение,
что делает хук.

```jsx static
function App() {
  const platform = usePlatform();
  const isVKCOM = platform === Platform.VKCOM;
  const { viewWidth } = useAdaptivityConditionalRender();

  // ...

  <SplitLayout header={!isVKCOM && <PanelHeader separator={false} />}>
    {viewWidth.tabletPlus && (
      <SplitCol width={280} className={viewWidth.tabletPlus.className}>
        <Panel id="nav">Navigation</Panel>
      </SplitCol>
    )}
    <SplitCol autoSpaced>
      <View activePanel="profile">
        <Panel id="profile">Profile</Panel>
      </View>
    </SplitCol>
  </SplitLayout>;
  // ...
}
```

`useAdaptivityConditionalRender` возвращает параметры адаптивности (см. **Технические детали**), каждый из которых имеет
дополнительную мета-информацию.

В зависимости от того, что мы передали в `AdaptivityProvider`, значение у каждого отдельного параметра адаптивности
может быть двух типов:

- `false` – мы строго задали какой-то из параметров адаптивности в
  `AdaptivityProvider`.

  > Например, при `<AdaptivityProvider viewWidth={ViewWidth.MOBILE}>` значение `viewWidth.tabletPlus` будет `false`,
  > т.к. мы говорим, что у нас всегда мобильный вид.

- `{ className: string }` – CSS селектор, который на основе CSS Media Query будет переключать видимость вашего
  элемента. В данном случае в `AdaptivityProvider` не передавали соответствующий параметр адаптивности.

  > Например, при `<AdaptivityProvider sizeX={SizeType.COMPACT}>` значение `viewWidth.tabletPlus` будет
  > `{ className: "..." }`.
  >
  > ⚠️ Видимость элемента управляется через `display: none` – отсюда можно сделать вывод, что элемент будет всегда
  > рендерится как в **Virtual DOM**, так и в **DOM**.

## Требования для адаптивности

- Свойство `SplitLayout.header` нужно для создания сквозной шапки, когда интерфейс состоит из нескольких колонок (или одной центрированной)
- Анимация перехода между панелями должна быть отключена при размерах `ViewWidth.TABLET` и более (`SplitCol.animate`)
- Если интерфейс состоит из нескольких колонок, то у центральных колонок должны быть отступы (в трёх-колоночном режиме это одна центральная колонка) (`SplitCol.autoSpaced`)

## Адаптивность через JS

Если вы:

- **не поддерживаете SSR** или
- **у вас есть компонент, который не показывается при первом рендере**,

то вы можете смело использовать хук `useAdaptivityWithJSMediaQueries()`.

Мы используем этот хук для _всплывающих окон_. Как раз из-за того, что они удовлетворяют условию показа только после
первого рендера.

Вот небольшой и наглядный пример:

```jsx static
// ❌ bad for SSR
const App = () => {
  return (
    <ModalRoot activeModal="main">
      <ModalPage id="main">Hello World!</ModalPage>
    </ModalRoot>
  );
};

// ✅ good for SSR
const App = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <ModalRoot activeModal="main">
      <ModalPage id="main">Hello World!</ModalPage>
    </ModalRoot>
  ) : null;
};
```

В нашем примере внутри `<ModalRoot />` и `<ModalPage />` используется `useAdaptivityWithJSMediaQueries()` для
переключения компонентов на мобильный или десктопный виды.

## Технические детали

Адаптивность базируется на четырёх свойствах:

- `sizeX` и `sizeY` принимают значения `SizeType.REGULAR | SizeType.COMPACT`
- `viewWidth` — `ViewWidth.SMALL_MOBILE | ViewWidth.MOBILE | ViewWidth.SMALL_TABLET | ViewWidth.TABLET | ViewWidth.DESKTOP`
- `viewHeight` — `ViewHeight.SMALL | ViewHeight.MEDIUM`

Эти свойства задаются в `AdaptivityProvider`.
