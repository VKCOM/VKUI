Представляет собой маленький кусочек информации.  
С помощью пропсов `removable` и `onRemove` можно управлять удалением.  
Используется внутри [ChipsInput](https://vkcom.github.io/vkui-styleguide/#!/ChipsInput).

```jsx
const Example = () => {
  const [hidden, setHidden] = React.useState(false);
  const chipStyle = { marginLeft: 10 };

  return <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>
        Chip
      </PanelHeader>
      <FormLayout>
        <FormLayoutGroup top="Цвет">
          <Card size="l">
            <div style={{display: 'flex', alignItems: 'center', height: 44, }}>
                <Chip value="1" style={chipStyle} removable={false} before={<Avatar size={20} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="}/>}>Синий</Chip>
                {hidden ? null : <Chip value="2" style={chipStyle} removable={true} onRemove={() => setHidden(true)} before={<Avatar size={20}src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="}/>}>Серый</Chip>}
            </div>
          </Card>
        </FormLayoutGroup>
      </FormLayout>
    </Panel>
  </View>
}

return <Example />
```
