Принимает те же свойства, что и обычный слайдер, за исключением `value` и `defaultValue`.
Они должны переданы в виде массива `[startValue, endValue]`. `onChange` так же возвращает подобный массив.

```jsx
  class Example extends React.Component {

    render() {
      return (
        <View activePanel="slider">
          <Panel id="slider" theme="white">
            <PanelHeader>RangerSlider</PanelHeader>
            <FormLayout>
              <RangeSlider
                top="Uncontrolled"
                min={10}
                max={20}
                step={1}
                defaultValue={[12, 16]}
              />
            </FormLayout>
          </Panel>
        </View>
      );
    }
  }

  <Example />
```
