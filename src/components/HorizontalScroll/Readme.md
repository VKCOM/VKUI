Компонент для отрисовки "длинного" содержимого, которое можно скроллить по горизонтали.

```jsx
  const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 94,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 12
  };

  <View activePanel="horizontal">
    <Panel id="horizontal">
      <PanelHeader>HorizontalScroll</PanelHeader>
      <Group header={<Header mode="secondary">Недавние</Header>}>
        <HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
          <div style={{ display: 'flex' }}>
            {getRandomUsers(15).map((item) => ( 
              <HorizontalCell key={item.id} header={item.first_name}><Avatar size={56} src={item.photo_200} /></HorizontalCell>)
            )}
          </div>
        </HorizontalScroll>
      </Group>
    </Panel>
  </View>
```
