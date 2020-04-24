 ```jsx
<View activePanel="button">
  <Panel id="button">
    <Group header={<Header mode="secondary">Типы кнопок</Header>}>
      <Div>
        <Button>Primary</Button>
      </Div>
      <Div>
        <Button mode="secondary">Secondary</Button>
      </Div>
      <Div>
        <Button mode="tertiary">Tertiary</Button>
      </Div>
      <Div>
        <Button mode="outline">Outline</Button>
      </Div>
      <Div>
        <Button mode="commerce">Commerce</Button>
      </Div>
      <Div>
        <Button mode="destructive">Destructive</Button>
      </Div>
      <Div style={{ background: '#232323' }}>
        <Button mode="overlay_primary">Overlay Primary</Button>
      </Div>
      <Div style={{ background: '#232323' }}>
        <Button mode="overlay_secondary">Overlay Secondary</Button>
      </Div>
      <Div style={{ background: '#232323' }}>
        <Button mode="overlay_outline">Overlay Outline</Button>
      </Div>
    </Group>
    <Group header={<Header mode="secondary">Допустимые размеры</Header>}>
      <Div>
        <Button>Medium</Button>
      </Div>
      <Div>
        <Button size="l">Large</Button>
      </Div>
      <Div>
        <Button size="xl" mode="secondary">Extra large</Button>
      </Div>
    </Group>
    <Group header={<Header mode="secondary">Растягивание по ширине</Header>}>
      <Div>
        <Button size="l">No stretch</Button>
      </Div>
      <Div style={{display: 'flex'}}>
        <Button size="l" stretched style={{ marginRight: 8 }}>Stretched</Button>
        <Button size="l" stretched mode="secondary">Stretched</Button>
      </Div>
    </Group>
    <Group header={<Header mode="secondary">Кнопки с иконками</Header>}>
      <Div>
        <Button before={<Icon16Add/>}>Add item</Button>
      </Div>
      <Div>
        <Button before={<Icon24Camera/>} size="l">Take a photo</Button>
      </Div>
      <Div>
        <Button mode="secondary" before={<Icon24Shuffle/>} size="l">Shuffle</Button>
      </Div>
    </Group>
    <Group header={<Header mode="secondary">Ссылки в виде кнопок</Header>}>
      <Div>
        <Button href="#">I am link</Button>
      </Div>
    </Group>
  </Panel>
</View>
```
