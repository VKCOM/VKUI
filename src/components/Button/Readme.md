 ```jsx
<View activePanel="button" header={false}>
  <Panel id="button">
    <Group title="Levels">

      <Div>
        <Button onClick={() => {}}>level="1" (default)</Button>
      </Div>
      <Div>
        <Button onClick={() => {}} level="2">level="2"</Button>
      </Div>
      <Div>
        <Button onClick={() => {}} level="3">level="3"</Button>
      </Div>
      <Div>
        <Button onClick={() => {}} level="buy">level="buy"</Button>
      </Div>
      <Div>
        <Button onClick={() => {}} level="sell">level="sell"</Button>
      </Div>
    </Group>
    <Group title="Sizes">
      <Div>
        <Button onClick={() => {}}>size="m" (default)</Button>
      </Div>
      <Div>
        <Button onClick={() => {}} size="l">size="l"</Button>
      </Div>
      <Div>
        <Button onClick={() => {}} size="xl" level="2">size="xl"</Button>
      </Div>
    </Group>
    <Group title="Stretched">
      <Div>
        <Button onClick={() => {}} size="l">No stretch</Button>
      </Div>
      <Div style={{display: 'flex'}}>
        <Button onClick={() => {}} size="l" stretched style={{ marginRight: 8 }}>Stretched</Button>
        <Button onClick={() => {}} size="l" stretched level="2">Stretched</Button>
      </Div>
    </Group>
    <Group title="Icons">
      <Div>
        <Button
          onClick={() => {}}
          before={<Icon16Add/>}
        >Add item</Button>
      </Div>
      <Div>
        <Button
          onClick={() => {}}
          before={<Icon24Camera/>}
          size="l"
        >Take a photo</Button>
      </Div>
      <Div>
        <Button
          onClick={() => {}}
          level="2"
          before={<Icon24Shuffle fill={colors.mutedBlue}/>}
          size="l"
        >Shuffle</Button>
      </Div>
    </Group>
    <Group title="Cell">
      <Button onClick={() => {}} type="cell">Cell Button</Button>
      <Button onClick={() => {}} type="cell" level="danger">Danger Button</Button>
    </Group>
  </Panel>
</View>
```
