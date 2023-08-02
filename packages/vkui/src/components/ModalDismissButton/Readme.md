Кнопка для закрытия модальных окон на широком экране.
Для правильной отрисовки нужно расположить в контейнере с `position: "relative"` и отображать при достаточной ширине экрана (от `ViewWidth.SMALL_TABLET`)

```jsx { "props": { "layout": false, "adaptivity": true } }
const CustomPopout = ({ onClose }) => {
  const { sizeX } = useAdaptivityConditionalRender();
  return (
    <PopoutWrapper onClick={onClose}>
      <div
        style={{
          backgroundColor: 'var(--vkui--color_background_content)',
          borderRadius: 8,
          padding: '12px',
        }}
      >
        <h4>Кастомное модальное окно</h4>

        {sizeX.regular && (
          <ModalDismissButton className={sizeX.regular.className} onClick={onClose} />
        )}
      </div>
    </PopoutWrapper>
  );
};

const Example = () => {
  const [popout, setPopout] = React.useState(null);

  const onClick = () => setPopout(<CustomPopout onClose={() => setPopout(null)} />);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel="popout">
          <Panel id="popout">
            <PanelHeader>ModalDismissButton</PanelHeader>
            <Group>
              <CellButton onClick={onClick}>Открыть модальное окно</CellButton>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

<Example />;
```
