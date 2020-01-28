```jsx
  class Example extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        value1: 24.4234,
        value2: 0.2,
        value3: 20,
        value4: [10, 20]
      };
    }

    options () {
      let options = [];
      for (let i = 0; i <= 10; i += 2) {
        options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
      }
      return options;
    }

    render() {
      return (
        <View activePanel="slider">
          <Panel id="slider">
            <PanelHeader>Slider</PanelHeader>
            <FormLayout>
              <Slider
                min={10}
                max={30}
                value={Number(this.state.value1)}
                onChange={value1 => this.setState({value1})}
                top="Simple [10, 30]"
              />
              <Input value={String(this.state.value1)} onChange={e => this.setState({ value1: e.target.value })} type="number"/>
              <Slider
                step={0.2}
                min={0}
                max={1}
                value={Number(this.state.value2)}
                onChange={value2 => this.setState({value2})}
                top="Step [0, 1]"
              />
              <Select onChange={e => this.setState({ value2: e.target.value })} value={String(this.state.value2)}>
                {this.options()}
              </Select>
              <Slider
                onChange={value3 => this.setState({value3})}
                defaultValue={this.state.value3}
                top="Uncontrolled"
                bottom={`${this.state.value3}`}
              />
            </FormLayout>
          </Panel>
        </View>
      );
    }
  }

  <Example />
```
