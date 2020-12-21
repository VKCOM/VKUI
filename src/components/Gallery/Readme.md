```jsx
  class Example extends React.Component {

    constructor (props) {

      super(props);

      this.state = {
        slideIndex: 0,
        isDraggable: true,
        showArrows: true,
      }
    }

    render () {
      const { isDraggable, showArrows, slideIndex } = this.state
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
            <Group header={<Header mode="secondary">Arrows</Header>}>
              <Gallery
                slideWidth="90%"
                style={{ height: 150 }}
                bullets="dark"
                showArrows
              >
                <div style={{ backgroundColor: 'var(--destructive)' }} />
                <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                <div style={{ backgroundColor: 'var(--accent)' }} />
              </Gallery>
            </Group>
            <Group header={<Header mode="secondary">Controled</Header>}>
              <Gallery
                slideWidth="90%"
                align="center"
                style={{ height: 150 }}
                slideIndex={slideIndex}
                onChange={slideIndex => this.setState({slideIndex})}
                isDraggable={isDraggable}
                showArrows={showArrows}
              >
                <div style={{ backgroundColor: 'var(--destructive)' }} />
                <div style={{ backgroundColor: 'var(--button_commerce_background)' }} />
                <div style={{ backgroundColor: 'var(--accent)' }} />
              </Gallery>

              <FormItem>
                <Checkbox checked={isDraggable} onChange={e => this.setState({ isDraggable: e.target.checked })}>
                  isDraggable
                </Checkbox>
                <Checkbox checked={showArrows} onChange={e => this.setState({ showArrows: e.target.checked })}>
                  showArrows
                </Checkbox>
              </FormItem>
              <FormItem>
                <Button size='l' stretched onClick={() => this.setState({ slideIndex: (slideIndex + 1) % 3 })}>
                  Next slide
                </Button>
              </FormItem>
            </Group>
          </Panel>
        </View>
      )
    }
  }

  <Example />
```
