Компонент для отрисовки "длинного" содержимого, которое можно скроллить по горизонтали.

```jsx
const buttonWrapperStyles = {
  display: "flex",
  gap: 8,
  justifyContent: "center",
};

const HorizontalScrollExample = () => {
  const [recentFriends] = React.useState(getRandomUsers(20));
  const [commonFriends, setCommonFriends] = React.useState([]);

  React.useEffect(() => {
    // Эмуляция загрузки
    window.setTimeout(() => {
      setCommonFriends(getRandomUsers(20));
    }, 700);
  }, []);

  return (
    <View activePanel="horizontal">
      <Panel id="horizontal">
        <PanelHeader>HorizontalScroll</PanelHeader>
        <Group header={<Header mode="secondary">Стандартный пример</Header>}>
          <HorizontalScroll
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            <div style={{ display: "flex" }}>
              {recentFriends.map((item) => (
                <HorizontalCell key={item.id} header={item.first_name}>
                  <Avatar size={56} src={item.photo_200} />
                </HorizontalCell>
              ))}
            </div>
          </HorizontalScroll>
        </Group>

        <Group header={<Header mode="secondary">Пример посложнее</Header>}>
          <div style={buttonWrapperStyles}>
            <button style={{ position: "relative", zIndex: 2 }}>
              Клибально
            </button>
            <button>Не клибально</button>
          </div>
          <Spacing size={8} />
          <HorizontalScroll
            showArrows="always"
            arrowSize="m"
            overflowVisible // ⚠️ см. описание параметра в "Свойства и методы"
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            <div
              style={{
                display: "flex",
                gap: 16,
              }}
            >
              {commonFriends.length === 0 && <PanelSpinner />}
              {commonFriends.length > 0 && (
                <React.Fragment>
                  <div style={{ width: 1, flexShrink: 0 }} />
                  {commonFriends.map((item) => (
                    <Avatar
                      key={item.id}
                      size={56}
                      src={item.photo_200}
                      style={{
                        boxShadow: "var(--vkui--elevation4)",
                      }}
                    />
                  ))}
                  <div style={{ width: 1, flexShrink: 0 }} />
                </React.Fragment>
              )}
            </div>
          </HorizontalScroll>
          <Spacing size={8} />
          <div style={buttonWrapperStyles}>
            <button style={{ position: "relative" }}>Клибально</button>
            <button>Не клибально</button>
          </div>
        </Group>
      </Panel>
    </View>
  );
};

<HorizontalScrollExample />;
```
