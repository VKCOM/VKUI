Touch – это компонент для удобной работы с pointer событиями, такими как клик, тап, перетаскивание и т.д.
Он инкапсулирует в себе логику обработки вышеперечисленных событий, дает возможность отдельно реагировать на движение
пальца (или мышки) по осям X и Y, а так же предоставляет данные о геометрии жеста.

Компонент используется во многих других компонентах библиотеки (Cell, Slider, Gallery, Tappable).

```jsx
const circleStyle = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'var(--vkui--color_background_accent)',
  position: 'absolute',
  left: '50%',
  top: '50%',
  marginLeft: -20,
  marginTop: -20,
};

const containerStyle = {
  height: 200,
  border: '8px solid var(--vkui--color_icon_secondary)',
  position: 'relative',
};

const Example = () => {
  const [shiftX, setShiftX] = React.useState(0);
  const [shiftY, setShiftY] = React.useState(0);
  const [limitX, setLimitX] = React.useState(0);
  const [limitY, setLimitY] = React.useState(0);

  const circleRef = React.useRef();
  const startX = React.useRef(0);
  const startY = React.useRef(0);

  React.useLayoutEffect(() => {
    setLimitX(circleRef.current.offsetLeft);
    setLimitY(circleRef.current.offsetTop);
  });

  const onMove = (e) => {
    const shiftX = startX.current + e.shiftX;
    const shiftY = startY.current + e.shiftY;

    setShiftX(shiftX > limitX ? limitX : shiftX < -limitX ? -limitX : shiftX);
    setShiftY(shiftY > limitY ? limitY : shiftY < -limitY ? -limitY : shiftY);
  };

  const onEnd = (e) => {
    startX.current += e.shiftX;
    startY.current += e.shiftY;
  };

  const limitExceeded = Math.abs(shiftX) >= limitX || Math.abs(shiftY) >= limitY;

  return (
    <View activePanel="gallery">
      <Panel id="gallery">
        <PanelHeader>Touch</PanelHeader>
        <Group header={<Header mode="secondary">Перетащите кружок</Header>}>
          <div
            style={{
              ...containerStyle,
              borderColor: limitExceeded
                ? 'var(--vkui--color_icon_negative)'
                : 'var(--vkui--color_icon_secondary)',
            }}
          >
            <Touch
              getRootRef={circleRef}
              onMove={onMove}
              onEnd={onEnd}
              style={{
                ...circleStyle,
                transform: `translate(${shiftX}px, ${shiftY}px)`,
              }}
            />
          </div>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
