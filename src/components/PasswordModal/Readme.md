```jsx { "props": { "layout": false, "adaptivity": true } }
const CustomPopout = withAdaptivity(
  ({onClose, viewWidth}) => {
    return (
      <PopoutWrapper onClick={onClose}>
        <div
          style={{
            backgroundColor: "var(--background_content)",
            borderRadius: 8,
            position: "relative",
            padding: "12px",
          }}
        >
          <h4>Кастомное модальное окно</h4>
          {viewWidth >= ViewWidth.SMALL_TABLET && (
            <ModalDismissButton onClick={onClose}/>
          )}
        </div>
      </PopoutWrapper>
    );
  },
  {
    viewWidth: true,
  }
);

const Example = () => {
  const [popout, setPopout] = React.useState(null);

  const onClick = () =>
    setPopout(<CustomPopout onClose={() => setPopout(null)}/>);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel="popout">
          <Panel id="popout">
            <PanelHeader>PasswordModal</PanelHeader>
            <Group>
              <CellButton onClick={onClick}>Открыть модальное окно</CellButton>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

<Example/>;
```
