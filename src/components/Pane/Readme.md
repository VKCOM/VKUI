Базовый компонент для создание блоков. Чаще всего передается как `children` в [Group](#Group).

```jsx
  <View activePanel="panel" header>
    <ScrollView id="panel" header={{ title: 'Pane' }}>
      <Group title="Simple">
        <Pane>Pane content</Pane>
      </Group>
      
      <Group title="Ожидаемый охват">
        <Pane>
          <Flex align="baseline" justify="space-between" style={{ marginBottom: 10 }}>
            <span>2 тыс. человек</span>
            <span style={{ color: colors.captionGray }}>из 160 тыс.</span>
          </Flex>
          <Progress value={40} />
        </Pane>
      </Group>
      
      <Group>
        <Pane>
          <InfoRow title="Общий бюджет">
            3000 р.
          </InfoRow>
        </Pane>
      </Group>
    </ScrollView>
  </View>
```
