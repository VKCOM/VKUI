```jsx
  <View activePanel="button" header>
    <ScrollView id="button" header={{ title: 'Button' }}>
      <Group title="Appearance">
        <Button appearance="default" onClick={() => {}}>Default button</Button>
        <Button appearance="primary" onClick={() => {}}>Primary button</Button>
        <Button appearance="danger" onClick={() => {}}>Danger button</Button>
        <Button disabled onClick={() => {}}>Disabled button</Button>
      </Group>

      <Group title="Alignment">
        <Button alignment="left" onClick={() => {}}>Button</Button>
        <Button alignment="center" onClick={() => {}}>Button</Button>
        <Button alignment="right" onClick={() => {}}>Button</Button>
      </Group>

      <Group title="VK wide button">
        <div style={{ marginBottom: '6px' }}>
          <Button appearance="vk-wide-primary" onClick={() => {}}>VK wide primary button</Button>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Button appearance="vk-wide-primary" onClick={() => {}} disabled>VK wide primary disabled button</Button>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Button appearance="vk-wide" onClick={() => {}}>VK wide button</Button>
        </div>
        <div style={{ marginBottom: '6px' }}>
          <Button appearance="vk-wide" onClick={() => {}} disabled>VK wide disabled button</Button>
        </div>
      </Group>

      <Group title="VK rich button">
        <Div>
          <Button appearance="vk-rich" onClick={() => {}}>VK rich button</Button>
        </Div>
        <Div>
          <Button appearance="vk-rich" onClick={() => {}} disabled>VK rich disabled button</Button>
        </Div>
      </Group>

      <Group title="VK buttons">
        <Div>
          <Button appearance="vk-primary" onClick={() => {}}>VK primary button</Button>
        </Div>
        <Div>
          <Button appearance="vk-primary" onClick={() => {}} disabled>VK primary disabled button</Button>
        </Div>
        <Div>
          <Button appearance="vk-secondary" onClick={() => {}}>VK secondary button</Button>
        </Div>
        <Div>
          <Button appearance="vk-secondary" onClick={() => {}} disabled>VK secondary disabled button</Button>
        </Div>
        <Div>
          <Button appearance="vk-tertiary" onClick={() => {}}>VK tertiary button</Button>
        </Div>
        <Div>
          <Button appearance="vk-tertiary" onClick={() => {}} disabled>VK tertiary disabled button</Button>
        </Div>
      </Group>

      <Group title="Inline buttons">
        <Div>
          <Flex>
            <Button appearance="vk-primary" wide={false} onClick={() => {}}>Apply</Button>
            <Button appearance="vk-secondary" wide={false} onClick={() => {}}>Cancel</Button>
          </Flex>
        </Div>
      </Group>
    </ScrollView>
  </View>
```
