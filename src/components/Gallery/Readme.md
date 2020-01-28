```jsx
  class Example extends React.Component {

    constructor (props) {

      super(props);

      this.state = {
        slideIndex: 0
      }
    }

    render () {
      return (
        <View activePanel="gallery">
          <Panel id="gallery">
            <PanelHeader>Gallery</PanelHeader>
            <Group header={<Header mode="secondary">Sticks right</Header>}>
              <Gallery
                slideWidth="90%"
                style={{ height: 150 }}
                bullets="dark"
              >
                <div style={{ backgroundColor: 'var(--destructive)' }} />
                <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                <div style={{ backgroundColor: 'var(--accent)' }} />
              </Gallery>
            </Group>
            <Group header={<Header mode="secondary">Sticks left</Header>}>
              <Gallery
                slideWidth="90%"
                align="right"
                style={{ height: 150 }}
              >
                <div style={{ backgroundColor: 'var(--destructive)' }} />
                <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                <div style={{ backgroundColor: 'var(--accent)' }} />
              </Gallery>
            </Group>
            <Group header={<Header mode="secondary">Centered</Header>}>
              <Gallery
                slideWidth="90%"
                align="center"
                style={{ height: 150 }}
              >
                <div style={{ backgroundColor: 'var(--destructive)' }} />
                <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                <div style={{ backgroundColor: 'var(--accent)' }} />
              </Gallery>
            </Group>
            <Group header={<Header mode="secondary">Custom width</Header>}>
              <Gallery
                slideWidth="custom"
                style={{ height: 150 }}
              >
                <div style={{ width: 200, backgroundColor: 'var(--destructive)' }} />
                <div style={{ width: 120, backgroundColor: 'var(--button_commerce_background)' }} />
                <div style={{ width: 70, backgroundColor: 'var(--accent)' }} />
                <div style={{ width: 220, backgroundColor: 'var(--icon_secondary)' }} />
              </Gallery>
            </Group>
            <Group header={<Header mode="secondary">Controled</Header>}>
              <Gallery
                slideWidth="90%"
                align="center"
                style={{ height: 150 }}
                slideIndex={this.state.slideIndex}
                onChange={slideIndex => this.setState({slideIndex})}
              >
                <div style={{ backgroundColor: 'var(--destructive)' }} />
                <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                <div style={{ backgroundColor: 'var(--accent)' }} />
              </Gallery>
              <Div>
                <Button onClick={() => this.setState({slideIndex: this.state.slideIndex === 2 ? 0 : this.state.slideIndex + 1 })}>Next slide</Button>
              </Div>
            </Group>
          </Panel>
        </View>
      )
    }
  }

  <Example />
```
