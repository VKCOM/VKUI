Компонент для отрисовки "длинного" содержимого, которое можно скроллить по горизонтали.

```jsx
  const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 94,
    display: 'flex',
    flexDirection:
    'column',
    alignItems: 'center',
    fontSize: 12
  };

  <View activePanel="horizontal">
    <Panel id="horizontal">
      <PanelHeader>HorizontalScroll</PanelHeader>
      <Group style={{ paddingBottom: 8 }}>
        <Header level="2">Недавние</Header>
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Элджей
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Ольга
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Сергей
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Илья
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Алексей
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Костя
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Миша
            </div>
            <div style={{ ...itemStyle, paddingRight: 4 }}>
              <Avatar size={64} style={{ marginBottom: 8 }}><Icon24User /></Avatar>
              Вадим
            </div>
          </div>
        </HorizontalScroll>
      </Group>
    </Panel>
  </View>
```
