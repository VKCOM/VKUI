Кнопка для закрытия модальных окон на широком экране.
Для правильной отрисовки нужно расположить в контейнере с `position: "relative"` и отображать при достаточной ширине экрана (от `ViewWidth.SMALL_TABLET`)

```jsx

const CustomPopout = withAdaptivity(({ onClose, viewWidth }) => {
  return (
    <PopoutWrapper onClick={onClose}>
      <div style={{
        backgroundColor: "var(--background_content)",
        borderRadius: 8,
        position: "relative",
        padding: "12px"
      }}>
        <h4>Кастомное модальное окно</h4>
        {viewWidth >= ViewWidth.SMALL_TABLET && <ModalDismissButton onClick={onClose} />}
      </div>
    </PopoutWrapper>
  )
}, {
  viewWidth: true
})

const Example = () => {
  const [popout, setPopout] = React.useState(null);
  
  const onClick = () => setPopout(
    <CustomPopout onClose={() => setPopout(null)} />
  );

  return (
    <View popout={popout} activePanel="popout">
      <Panel id="popout">
        <PanelHeader>ModalDismissButton</PanelHeader>
        <Group>
          <CellButton onClick={onClick}>Открыть модальное окно</CellButton>
        </Group>
      </Panel>
    </View>
  );
}

<Example />
```
