```jsx { "props": { "layout": false, "adaptivity": true } }
import PasswordModal from './PasswordModal';

const CustomPopout = withAdaptivity(
  ({onClose, viewWidth}) => {
    return (
      <PasswordModal onClose={onClose}/>
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
