Содержимое `Root` – это коллекция `View`. У каждой `View` должен быть `id`.
Свойство `activeView` определяет, какая `View` сейчас активна.

При смене значения свойства `activeView` происходит плавный переход от одной `View` к другой.
Как только он заканчивается, вызывается свойство-функция `onTransition`.

```jsx
import {
  useNavTransition,
  useViewNavTransition,
  usePanelNavTransition,
} from '../NavTransitionContext/NavTransitionContext';
import { usePrevious } from '../../hooks/usePrevious';

const Page2 = ({ index }) => {
  const { transitionDirection, entering } = useViewNavTransition();

  React.useEffect(() => {
    if (transitionDirection === 'initial') {
      console.log(`Page ${index}: view transition: ${transitionDirection} | initial`);
    } else if (transitionDirection === 'forward') {
      console.log(`Page ${index}: view transition: "${transitionDirection}" | forward | fetch`);
    } else if (transitionDirection === 'backward') {
      console.log(
        `Page ${index}: view transition: "${transitionDirection}" | returned back, restore data`,
      );
    }
  }, [transitionDirection, index]);

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
  return (
    <Root activeView={activeView}>
      <View activePanel="panel1.1" id="view1">
        <Panel id="panel1.1">
          <PanelHeader>View 1</PanelHeader>
          <Group>
            <div style={{ height: 200 }} />
            <Page2 index={1} />
            <CellButton onClick={onActiveView2}>Open View 2</CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
      </View>
      <View activePanel="panel2.1" id="view2">
        <Panel id="panel2.1">
          <PanelHeader>View 2</PanelHeader>
          <Group>
            <div style={{ height: 200 }} />
            <Page2 index={2} />
            <CellButton onClick={onActiveView1}>Back to View 1</CellButton>
            <div style={{ height: 600 }} />
          </Group>
        </Panel>
      </View>
    </Root>
  );
};

<Example />;
```
