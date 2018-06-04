 ```jsx
<View activePanel="button" header={false}>
  <Panel id="button">
    <Group title="Levels">
      <Div>
        <div style={{margin: '10px 0'}}>
          <Button onClick={() => {}}>level={1} (default)</Button>
        </div>
        <div style={{margin: '10px 0'}}>
          <Button onClick={() => {}} level={2}>level={2}</Button>
        </div>
        <div style={{margin: '10px 0'}}>
          <Button onClick={() => {}} level={3}>level={3}</Button>
        </div>
        <div style={{margin: '10px 0'}}>
          <Button onClick={() => {}} level="buy">level="buy"</Button>
        </div>
        <div style={{margin: '10px 0'}}>
          <Button onClick={() => {}} level="sell">level="sell"</Button>
        </div>  
      </Div>    
    </Group>
    <Group title="Sizes">
      <Div>
        <div style={{margin: '10px 0'}}>
          <Button onClick={() => {}}>size="m" (default)</Button>
        </div>
        <div style={{margin: '10px 0'}}>
          <Button onClick={() => {}} size="l">size="l"</Button>
        </div>
        <div style={{margin: '10px 0'}}>
          <Button onClick={() => {}} size="xl" level="2">size="xl"</Button>
        </div>  
      </Div>
    </Group>
    <Group title="Stretched">
      <Div>
        <div style={{margin: '10px 0'}}>
          <Button onClick={() => {}} size="l">No stretch</Button>
        </div>
        <div style={{display: 'flex', margin: '10px 0'}}>
          <Button onClick={() => {}} size="l" stretched style={{ marginRight: 8 }}>Stretched</Button>
          <Button onClick={() => {}} size="l" stretched level="2">Stretched</Button>
        </div>  
      </Div>
    </Group>
    <Group title="Icons">
      <Div>
        <div style={{margin: '10px 0'}}>
          <Button 
            onClick={() => {}}
            before={<Icon16Add/>}
          >Add item</Button>
        </div>
        <div style={{margin: '10px 0'}}>
          <Button 
            onClick={() => {}}
            before={<Icon24Camera/>}
            size="l"
          >Take a photo</Button>
        </div>
        <div style={{margin: '10px 0'}}>
          <Button 
            onClick={() => {}}
            level="2"
            before={<Icon24Shuffle fill={colors.mutedBlue}/>}
            size="l"
          >Shuffle</Button>
        </div>  
      </Div>
    </Group>
    <Group title="Cell">
      <Button onClick={() => {}} type="cell">Cell Button</Button>
      <Button onClick={() => {}} type="cell" level="danger">Danger Button</Button>
    </Group>
  </Panel>
</View>
```
