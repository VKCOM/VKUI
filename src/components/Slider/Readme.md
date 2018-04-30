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
            <Group title="Simple [10, 30]">
              <Pane>
                <Slider min={10} max={30} value={Number(this.state.value1)} onChange={value1 => this.setState({value1})}/>
              </Pane>
              <FormLayout>
                <Input value={String(this.state.value1)} onChange={e => this.setState({ value1: e.target.value })} />
              </FormLayout>
            </Group>
            <Group>
  
            </Group>
  
            <Group title="Step [0, 1]">
              <Pane>
                <Slider step={0.2} min={0} max={1} value={Number(this.state.value2)} onChange={value2 => this.setState({value2})}/>
              </Pane>
              <FormLayout>
                <Select onChange={e => this.setState({ value2: e.target.value })} value={String(this.state.value2)}>
                  {this.options()}
                </Select>
              </FormLayout>
            </Group>
  
            <Group title="Uncontrolled">
              <Pane>
                <Slider onChange={value3 => this.setState({value3})} defaultValue={this.state.value3}/>
              </Pane>
              <Pane>{this.state.value3}</Pane>
            </Group>
  
            <Group title="Range [10, 40]">
              <Pane>
                <RangeSlider min={10} max={40} value={this.state.value4} onChange={value4 => this.setState({value4})}/>
              </Pane>
              <Pane>{this.state.value4[0]}, {this.state.value4[1]}</Pane>
            </Group>
          </Panel>
        </View>
      );
    }
  }
  
  <Example />
```
