Компонент-оболочка для элементов форм ([Input](#/Input), [Select](#/Select), [Textarea](#/Textarea) и другие).

```jsx
const CustomInput = () => {
  const style = {
    position: 'relative',
    display: 'block',
    width: '100%',
    margin: 0,
    padding: 11,
    fontSize: 16,
    lineHeight: '19px',
    textOverflow: 'ellipsis',
    color: '#000',
    border: 'none',
    background: 'transparent',
    zIndex: 2,
  }

  return (<input type="text" style={style} placeholder="Кастомный инпут" />);
}

const Example = () => (
  <View activePanel="custom-field">
    <Panel id="custom-field">
      <PanelHeader>FormField</PanelHeader>

      <Group>
        <FormLayout>
          <FormItem>
            <FormField>
              <CustomInput />
            </FormField>
          </FormItem>
        </FormLayout>
      </Group>
    </Panel>
  </View>
);

<Example />
```
