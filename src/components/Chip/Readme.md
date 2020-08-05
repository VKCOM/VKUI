Представляет собой маленький кусочек информации.  
Используется внутри [ChipsInput](https://vkcom.github.io/vkui-styleguide/#!/ChipsInput).

```jsx
  <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>
        Chip
      </PanelHeader>
      <FormLayout>
        <FormLayoutGroup top="Цвет">
          <Card size="l">
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 44}}>
                <Chip value="1" label="Синий" before={<Avatar size={20} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="} />} />
                <Chip value="2" label="Серый" before={<Avatar size={20} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="} />} />
                <Chip value="3" label="Белый" before={<Avatar size={20} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="} />} />
            </div>
          </Card>
        </FormLayoutGroup>
      </FormLayout>
    </Panel>
  </View>
```
