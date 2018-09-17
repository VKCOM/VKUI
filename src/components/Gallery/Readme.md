```
  class Example extends React.Component {

    constructor (props) {

      super(props);

      this.state = {
        slideIndex: 0
      }
    }

    render () {
      return (
        <View header={false} activePanel="gallery">
          <Panel id="gallery">
            <Group title="Sticks right">
              <Gallery
                slideWidth="90%"
                style={{ height: 150 }}
                bullets="dark"
              >
                <div style={{ height: 150, backgroundColor: colors.red }} />
                <div style={{ height: 150, backgroundColor: colors.green }} />
                <div style={{ height: 150, backgroundColor: colors.blue_300 }} />
              </Gallery>
            </Group>
            <Group title="Sticks left">
              <Gallery
                slideWidth="90%"
                align="right"
                style={{ height: 150 }}
              >
                <div style={{ height: 150, backgroundColor: colors.green }} />
                <div style={{ height: 150, backgroundColor: colors.blue_300 }} />
                <div style={{ height: 150, backgroundColor: colors.red }} />
              </Gallery>
            </Group>
            <Group title="Centered">
              <Gallery
                slideWidth="90%"
                align="center"
                style={{ height: 150 }}
              >
                <div style={{ height: 150, backgroundColor: colors.blue_300 }} />
                <div style={{ height: 150, backgroundColor: colors.red }} />
                <div style={{ height: 150, backgroundColor: colors.green }} />
              </Gallery>
            </Group>
            <Group title="Controled">
              <Gallery
                slideWidth="90%"
                align="center"
                style={{ height: 150 }}
                slideIndex={this.state.slideIndex}
                onChange={slideIndex => this.setState({slideIndex})}
              >
                <div style={{ height: 150, backgroundColor: colors.red }} />
                <div style={{ height: 150, backgroundColor: colors.green }} />
                <div style={{ height: 150, backgroundColor: colors.blue_300 }} />
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
