Touch – это компонент для удобной работы с pointer событиями, такими как клик, тап, перетаскивание и т.д.
Он инкапсулирует в себе логику обработки вышеперечисленных событий, дает возможность отдельно реагировать на движение
пальца (или мышки) по осям X и Y, а так же предоставляет данные о геометрии жеста.

Компонент используется во многих других компонентах библиотеки (Cell, Slider, Gallery, Tappable).

```jsx
  const circleStyle = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'var(--accent)',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -20,
    marginTop: -20
  }

  const containerStyle = {
    height: 200,
    border: '8px solid var(--icon_secondary)',
    position: 'relative'
  }

  class Example extends React.Component {

    constructor (props) {

      super(props);

      this.state = {
        shiftX: 0,
        shiftY: 0
      }

      this.startX = 0;
      this.startY = 0;

      this.onMove = this.onMove.bind(this);
      this.onEnd = this.onEnd.bind(this);
      this.getCircleRef = this.getCircleRef.bind(this);
    }

    componentDidMount () {
      this.limitX = this.circleRef.offsetLeft;
      this.limitY = this.circleRef.offsetTop;
    }

    onMove (e) {
      let shiftX = this.startX + e.shiftX;
      let shiftY = this.startY + e.shiftY;

      this.setState({
        shiftX: shiftX > this.limitX ? this.limitX : shiftX < -this.limitX ? -this.limitX : shiftX,
        shiftY: shiftY > this.limitY ? this.limitY : shiftY < -this.limitY ? -this.limitY : shiftY,
      });
    }

    onEnd (e) {
      this.startX += e.shiftX;
      this.startY += e.shiftY;
    }

    getCircleRef (el) { this.circleRef = el };

    get limitExceeded () {
      const { shiftX, shiftY } = this.state;
      return Math.abs(shiftX) >= this.limitX || Math.abs(shiftY) >= this.limitY
    }

    render () {
      const { shiftX, shiftY, limitExceeded } = this.state;

      return (
        <View activePanel="gallery">
          <Panel id="gallery">
            <PanelHeader>Touch</PanelHeader>
            <Group header={<Header mode="secondary">Перетащите кружок</Header>}>
              <div style={{
                ...containerStyle,
                borderColor: this.limitExceeded ? 'var(--destructive)' : 'var(--icon_secondary)' }}
              >
                <Touch
                  getRootRef={this.getCircleRef}
                  onMove={this.onMove}
                  onEnd={this.onEnd}
                  style={{ ...circleStyle, transform: `translate(${shiftX}px, ${shiftY}px)` }}
                />
              </div>
            </Group>
          </Panel>
        </View>
      )
    }
  }

  <Example />
```
