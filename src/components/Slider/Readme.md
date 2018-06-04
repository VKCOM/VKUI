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
        <View activePanel="slider" header={false}>
          <Panel id="slider">
            <Group title="Simple [10, 30]">
              <Div>
                <Slider min={10} max={30} value={Number(this.state.value1)} onChange={value1 => this.setState({value1})}/>
              </Div>
              <Div>
                <Input value={String(this.state.value1)} onChange={e => this.setState({ value1: e.target.value })} />
              </Div>
            </Group>

            <Group title="Step [0, 1]">
              <Div>
                <Slider step={0.2} min={0} max={1} value={Number(this.state.value2)} onChange={value2 => this.setState({value2})}/>
              </Div>
              <Div>
                <Select onChange={e => this.setState({ value2: e.target.value })} value={String(this.state.value2)}>
                  {this.options()}
                </Select>
              </Div>
            </Group>

            <Group title="Uncontrolled">
              <Div>
                <Slider onChange={value3 => this.setState({value3})} defaultValue={this.state.value3}/>
              </Div>
              <Div>{this.state.value3}</Div>
            </Group>

            <Group title="Range [10, 40]">
              <Div>
                <RangeSlider min={10} max={40} value={this.state.value4} onChange={value4 => this.setState({value4})}/>
              </Div>
              <Div>{this.state.value4[0]}, {this.state.value4[1]}</Div>
            </Group>
          </Panel>
        </View>
      );
    }
  }

  <Example />
```
