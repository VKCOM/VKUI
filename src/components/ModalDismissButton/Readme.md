Кнопка для закрытия модальных окон на широком экране.
Для правильной отрисовки нужно расположить в контейнере с `position: "relative"` и отображать при достаточной ширине экрана (от `ViewWidth.SMALL_TABLET`)

```jsx

const CustomPoput = withAdaptivity(({ onClose, viewWidth }) => {
  return (
    <PopoutWrapper>
      <div style={{
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        position: "relative"
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
  const [popout, setPoput] = React.useState(null);
  
  const onClick = () => setPoput(
    <CustomPoput onClose={() => setPoput(null)} />
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