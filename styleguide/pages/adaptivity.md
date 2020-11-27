В v4 появилось важное обновление. Теперь на VKUI можно реализовывать интерфейсы для всех экранов и устройств ввода.
Мы постарались предоставить максимально простой API для работы с адаптивностью. Ниже представлен пример адаптации с пояснениями.

Допустим, наше приложение выглядит так:

```jsx static
const App = () => {
  return (
    <View activePanel="profile">
      <Panel id="profile">Profile</Panel>
    </View>
  )
}

export default App;
```

Для начала, нам нужно обеспечить приложение нужными данными об устройстве пользователя.
`AdaptivityProvider` — компонент, инкапсулирующий измерение габаритов экрана и прокидывающий их через React context API.

```jsx static
ReactDOM.render(
  <AdaptivityProvider>
    <App />
  </AdaptivityProvider>, document.getElementById('root')
);
```

Основное нововведение адаптивности — это возможность создавать многоколоночный интерфейс. `SplitLayout` — компонент-обертка 
для отрисовки макета с одной или несколькими колонками. `SplitCol` — компонент для отрисовки колонки.

```jsx static
const App = () => {
  return (
    <SplitLayout>
      <SplitCol width="280px">
        <Panel id="nav">Navigation</Panel>
      </SplitCol>
      <SplitCol>
        <View activePanel="profile">
          <Panel id="profile">Profile</Panel>
        </View>
      </SplitCol>
    </SplitLayout> 
  )
}

export default App;
```

Почти готово. Теперь нам нужно как-то сообщить приложению, что левая колонка нужна только на больших экранах. Для доступа
к рассчитанным в `AdaptivityProvider` свойствам, достаточно обернуть приложение в HOC `withAdaptivity`.

```jsx static
const App = ({ viewWidth }) => {
  return (
    <SplitLayout header={viewWidth >= ViewWidth.SMALL_TABLET && <PanelHeader separator={false} />}>
      {viewWidth === ViewWidth.DESKTOP &&
        <SplitCol width="280px">
          <Panel id="nav">Navigation</Panel>
        </SplitCol>
      }
      <SplitCol spaced={viewWidth >= ViewWidth.SMALL_TABLET} animate={viewWidth <= ViewWidth.MOBILE}>
        <View activePanel="profile">
          <Panel id="profile">Profile</Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
}

export default withAdaptivity(App, { viewWidth: true });
```


Адаптивность базируется на трёх свойствах: `viewWidth`, `viewHeight`, `sizeX`, `sizeY`. Эти свойства вычисляются в `AdaptivityProvider`, 
доступ к ним можно полоучить через HOC `withAdaptivty` (либо через hook `useAdaptivity`).
* `sizeX` и `sizeY` принимают значения `SizeType.REGULAR | SizeType.COMPACT`
* `viewWidth` — `ViewWidth.SMALL_MOBILE | ViewWidth.MOBILE | ViewWidth.SMALL_TABLET | ViewWidth.TABLET | ViewWidth.DESKTOP`
* `viewHeight` — `ViewHeight.SMALL | ViewHeight.MEDIUM`

Нюансы:

* Свойство `SplitLayout.header` нужно в том случае, когда интерфейс состоит из нескольких колонок
* На десктопных и планшетных анимация перехода между панелями должна быть отключена (`SplitCol.animate`)
* Если интерфейс состоит из нескольких колонок, то между ними должны быть отступы (`SplitCol.spaced`)
