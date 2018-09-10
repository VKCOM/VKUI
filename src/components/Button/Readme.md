 ```jsx
<View activePanel="button" header={false}>
  <Panel id="button">
    <Group title="Типы кнопок">
      <Div>
        <Button>Primary</Button>
      </Div>
      <Div>
        <Button level="secondary">Secondary</Button>
      </Div>
      <Div>
        <Button level="tertiary">Tertiary</Button>
      </Div>
      <Div>
        <Button level="outline">Outline</Button>
      </Div>
      <Div>
        <Button level="commerce">Commerce</Button>
      </Div>
    </Group>
    <Group title="Допустимые размеры">
      <Div>
        <Button>Medium</Button>
      </Div>
      <Div>
        <Button size="l">Large</Button>
      </Div>
      <Div>
        <Button size="xl" level="secondary">Extra large</Button>
      </Div>
    </Group>
    <Group title="Растягивание по ширине">
      <Div>
        <Button size="l">No stretch</Button>
      </Div>
      <Div style={{display: 'flex'}}>
        <Button size="l" stretched style={{ marginRight: 8 }}>Stretched</Button>
        <Button size="l" stretched level="secondary">Stretched</Button>
      </Div>
    </Group>
    <Group title="Кнопки с иконками">
      <Div>
        <Button before={<Icon16Add/>}>Add item</Button>
      </Div>
      <Div>
        <Button before={<Icon24Camera/>} size="l">Take a photo</Button>
      </Div>
      <Div>
        <Button level="secondary" before={<Icon24Shuffle/>} size="l">Shuffle</Button>
      </Div>
    </Group>
    <Group title="Ссылки в виде кнопок">
      <Div>
        <Button component="a" href="#">I am link</Button>
      </Div>
    </Group>
  </Panel>
</View>
```
