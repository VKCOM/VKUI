Содержимое `Root` – это коллекция `View`. У каждой `View` должен быть `id`.
Свойство `activeView` определяет, какая `View` сейчас активна.

При смене значения свойства `activeView` происходит плавный переход от одной `View` к другой.
Как только он заканчивается, вызывается свойство-функция `onTransition`.

```jsx
import {
  useNavTransition,
  useViewNavTransition,
  usePanelNavTransition,
  useNavTransitionDirection,
} from '../NavTransitionContext/NavTransitionContext';
import { usePrevious } from '../../hooks/usePrevious';

const Page = ({ index, view = 'view2' }) => {
  const { transitionDirection, entering, isBack: viewIsBack } = useViewNavTransition();

  React.useEffect(() => {
    if (transitionDirection === 'initial') {
      // console.log(`View ${view}: view transition: ${transitionDirection} | initial`);
    } else if (transitionDirection === 'forward') {
      // console.log(`View ${view}: view transition: "${transitionDirection}" | forward | fetch`);
    } else if (transitionDirection === 'backward') {
      // console.log(
      //   `View ${view}: view transition: "${transitionDirection}" | returned back, restore data`,
      // );
    }
  }, [transitionDirection, index]);

  const transitionData = usePanelNavTransition();
  const { transitionDirection: panelTransitionDirection, isBack: panelIsBack } = transitionData;
  const direction = useNavTransitionDirection();

  const [isMount, setIsMount] = React.useState(false);
  React.useEffect(() => {
    setIsMount(true);
  }, []);

  React.useEffect(() => {
    if (isMount) {
      return;
    }

    const isBack = panelIsBack !== undefined ? panelIsBack : viewIsBack;
    const transition = isBack === undefined ? 'initial' : Boolean(isBack) ? 'backward' : 'forward';
    console.log(
      `View ${view}, panel ${index}: ${direction}, panelIsBack: ${panelIsBack} | viewIsBack: ${viewIsBack}`,
    );
  }, [isMount, panelIsBack, viewIsBack, view, index, direction]);

  React.useEffect(() => {
    if (panelTransitionDirection === 'initial') {
      // console.log(`Page ${index}: view transition: ${panelTransitionDirection} | initial`);
    } else if (panelTransitionDirection === 'forward') {
      // console.log(
      //   `Page ${index}: view transition: "${panelTransitionDirection}" | forward | fetch`,
      // );
    } else if (panelTransitionDirection === 'backward') {
      //console.log(
      //  `Page ${index}: view transition: "${panelTransitionDirection}" | returned back, restore data`,
      //);
    }
  }, [panelTransitionDirection, index]);

  return <div>Page {index}</div>;
};

const Example = () => {
  const [activeView, setActiveView] = useState('view1');
  const onActiveView1 = React.useCallback(() => {
    setActiveView('view1');
  }, [setActiveView]);
  const onActiveView2 = React.useCallback(() => {
    setActiveView('view2');
  }, [setActiveView]);

  const [activePanelOfFirstView, setActivePanelOfFirstView] = useState('panel1.1');
  const [activePanelOfSecondView, setActivePanelOfSecondView] = useState('panel2.1');

  return (
    <Root activeView={activeView}>
      <View activePanel={activePanelOfFirstView} id="view1">
        <Panel id="panel1.1">
          <PanelHeader>Panel 1.1</PanelHeader>
          <Page index={1.1} view="view1" />
          <Group>
            <div style={{ height: 200 }} />
            <CellButton onClick={onActiveView2}>Back to View 1</CellButton>
            <CellButton onClick={() => setActivePanelOfFirstView('panel1.3')}>
              Back to panel 1.3
            </CellButton>
            <CellButton onClick={() => setActivePanelOfFirstView('panel1.2')}>
              Go to panel 1.2
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
        <Panel id="panel1.2">
          <PanelHeader>Panel 1.2</PanelHeader>
          <Page index={1.2} view="view1" />
          <Group>
            <div style={{ height: 200 }} />
            <CellButton onClick={onActiveView2}>Back to View 1</CellButton>
            <CellButton onClick={() => setActivePanelOfFirstView('panel1.1')}>
              Back to panel 1.1
            </CellButton>
            <CellButton onClick={() => setActivePanelOfFirstView('panel1.3')}>
              Go to panel 1.3
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
        <Panel id="panel1.3">
          <PanelHeader>Panel 1.3</PanelHeader>
          <Page index={1.3} view={'view1'} />
          <Group>
            <div style={{ height: 200 }} />
            <CellButton onClick={onActiveView2}>Back to View 2</CellButton>
            <CellButton onClick={() => setActivePanelOfFirstView('panel1.2')}>
              Back to panel 1.2
            </CellButton>
            <CellButton onClick={() => setActivePanelOfFirstView('panel1.1')}>
              Go to panel 1.1
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
      </View>
      <View activePanel={activePanelOfSecondView} id="view2">
        <Panel id="panel2.1">
          <PanelHeader>Panel 2.1</PanelHeader>
          <Page index={2.1} />
          <Group>
            <div style={{ height: 200 }} />
            <CellButton onClick={onActiveView1}>Back to View 1</CellButton>
            <CellButton onClick={() => setActivePanelOfSecondView('panel2.3')}>
              Back to panel 2.3
            </CellButton>
            <CellButton onClick={() => setActivePanelOfSecondView('panel2.2')}>
              Go to panel 2.2
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
        <Panel id="panel2.2">
          <PanelHeader>Panel 2.2</PanelHeader>
          <Page index={2.2} />
          <Group>
            <div style={{ height: 200 }} />
            <CellButton onClick={onActiveView1}>Back to View 1</CellButton>
            <CellButton onClick={() => setActivePanelOfSecondView('panel2.1')}>
              Back to panel 2.1
            </CellButton>
            <CellButton onClick={() => setActivePanelOfSecondView('panel2.3')}>
              Go to panel 2.3
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
        <Panel id="panel2.3">
          <PanelHeader>Panel 2.3</PanelHeader>
          <Page index={2.3} />
          <Group>
            <div style={{ height: 200 }} />
            <CellButton onClick={onActiveView1}>Back to View 1</CellButton>
            <CellButton onClick={() => setActivePanelOfSecondView('panel2.2')}>
              Back to panel 2.2
            </CellButton>
            <CellButton onClick={() => setActivePanelOfSecondView('panel2.1')}>
              Go to panel 2.1
            </CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
      </View>
    </Root>
  );
};

<Example />;
```
