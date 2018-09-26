Используется для визуализации выполнения асинхронного процесса (например ajax запроса). Если нужно на момент загрузки
заблокировать интерфейс, то можно использовать надстройку над `Spinner` – [ScreenSpinner](https://vkcom.github.io/vkui-styleguide/#!/ScreenSpinner).

```
<View activePanel="spinner">
  <Panel id="spinner">
    <PanelHeader>Spinner</PanelHeader>
    <div style={{ height: 100 }}>
      <Spinner />
    </div>
  </Panel>
</View>
```
