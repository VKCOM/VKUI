```jsx
  class Example extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        value1: 24.4234,
        value2: 0.2,
        value3: 20,
        value4: 15
      };
    }

    options () {
      let options = [];
      for (let i = 0; i <= 10; i += 2) {
        options.push({ value: `${i / 10}`, label: `${i / 10}` });
      }
      return options;
    }

    render() {
      return (
        <View activePanel="slider">
          <Panel id="slider">
            <PanelHeader>Slider</PanelHeader>
            <Group>
              <FormItem top="Simple [10, 30]">
                <Slider
                  min={10}
                  max={30}
                  value={Number(this.state.value1)}
                  onChange={value1 => this.setState({value1})}
                />
              </FormItem>
              <FormItem>
                <Input value={String(this.state.value1)} onChange={e => this.setState({ value1: e.target.value })} type="number"/>
              </FormItem>
              <FormItem top="Step [0, 1]">
                <Slider
                  step={0.2}
                  min={0}
                  max={1}
                  value={Number(this.state.value2)}
                  onChange={value2 => this.setState({value2})}
                />
              </FormItem>
              <FormItem>
                <Select
                  onChange={e => this.setState({ value2: e.target.value })} 
                  value={String(this.state.value2)}
                  options={this.options()} 
                />
              </FormItem>
              <FormItem top="Uncontrolled">
                <Slider
                  onChange={value3 => this.setState({value3})}
                  defaultValue={this.state.value3}
                  bottom={`${this.state.value3}`}
                />
              </FormItem>
              <FormItem top="Disabled">
                <Slider
                  min={10}
                  max={30}
                  defaultValue={this.state.value4}
                  onChange={value4 => this.setState({value4})}
                  disabled
                />
              </FormItem>
            </Group>
          </Panel>
        </View>
      );
    }
  }

  <Example />
```
