 ```jsx
<View activePanel="button" header={false}>
  <Panel id="button" separator={false}>
    <Group header={<Header level="secondary">Типы кнопок</Header>}>
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
      <Div>
        <Button level="destructive">Destructive</Button>
      </Div>
      <Div style={{ background: '#232323' }}>
        <Button level="overlay_primary">Overlay Primary</Button>
      </Div>
      <Div style={{ background: '#232323' }}>
        <Button level="overlay_secondary">Overlay Secondary</Button>
      </Div>
      <Div style={{ background: '#232323' }}>
        <Button level="overlay_outline">Overlay Outline</Button>
      </Div>
    </Group>
    <Separator />
    <Group header={<Header level="secondary">Допустимые размеры</Header>}>
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
    <Separator />
    <Group header={<Header level="secondary">Растягивание по ширине</Header>}>
      <Div>
        <Button size="l">No stretch</Button>
      </Div>
      <Div style={{display: 'flex'}}>
        <Button size="l" stretched style={{ marginRight: 8 }}>Stretched</Button>
        <Button size="l" stretched level="secondary">Stretched</Button>
      </Div>
    </Group>
    <Separator />
    <Group header={<Header level="secondary">Кнопки с иконками</Header>}>
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
    <Separator />
    <Group header={<Header level="secondary">Ссылки в виде кнопок</Header>}>
      <Div>
        <Button component="a" href="#">I am link</Button>
      </Div>
    </Group>
  </Panel>
</View>
```
