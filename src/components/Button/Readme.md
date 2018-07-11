 ```jsx
<View activePanel="button" header={false}>
  <Panel id="button">
    <Group title="Levels">

      <Div>
        <Button>level="1" (default)</Button>
      </Div>
      <Div>
        <Button level="2">level="2"</Button>
      </Div>
      <Div>
        <Button level="3">level="3"</Button>
      </Div>
      <Div>
        <Button level="buy">level="buy"</Button>
      </Div>
      <Div>
        <Button level="sell">level="sell"</Button>
      </Div>
    </Group>
    <Group title="Sizes">
      <Div>
        <Button>size="m" (default)</Button>
      </Div>
      <Div>
        <Button size="l">size="l"</Button>
      </Div>
      <Div>
        <Button size="xl" level="2">size="xl"</Button>
      </Div>
    </Group>
    <Group title="Stretched">
      <Div>
        <Button size="l">No stretch</Button>
      </Div>
      <Div style={{display: 'flex'}}>
        <Button size="l" stretched style={{ marginRight: 8 }}>Stretched</Button>
        <Button size="l" stretched level="2">Stretched</Button>
      </Div>
    </Group>
    <Group title="Icons">
      <Div>
        <Button before={<Icon16Add/>}>Add item</Button>
      </Div>
      <Div>
        <Button before={<Icon24Camera/>} size="l">Take a photo</Button>
      </Div>
      <Div>
        <Button
          level="2"
          before={<Icon24Shuffle/>}
          size="l"
        >Shuffle</Button>
      </Div>
    </Group>
    <Group title="Cell">
      <Button type="cell">Cell Button</Button>
      <Button type="cell" level="danger">Danger Button</Button>
    </Group>
    <Group title="Cell align">
      <Button type="cell">Left</Button>
      <Button type="cell" align="center">Center</Button>
      <Button type="cell" align="right">Right</Button>
    </Group>
    <Group title="Links">
      <Button type="cell" component="a" href="#">I am link</Button>
    </Group>
  </Panel>
</View>
```
