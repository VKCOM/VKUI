Компонент для отрисовки "длинного" содержимого, которое можно скроллить по вертикали.

```jsx
const VerticalScrollExample = () => {
  const [commonFriends, setCommonFriends] = React.useState([]);

  React.useEffect(() => {
    // Эмуляция загрузки
    setTimeout(() => {
      setCommonFriends(getRandomUsers(20));
    }, 500);
  }, []);

  return (
    <View activePanel="Vertical">
      <Panel id="Vertical">
        <PanelHeader>VerticalScroll</PanelHeader>
        <Div
          style={{
            display: "flex",
            width: 100,
            height: 300,
            backgroundColor: "white",
          }}
        >
          <VerticalScroll
            showArrows
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            {commonFriends.length === 0 && <Spinner />}
            {commonFriends.length > 0 && (
              <React.Fragment>
                {commonFriends.map((item) => (
                  <img src={item.photo_100} />
                ))}
              </React.Fragment>
            )}
          </VerticalScroll>
        </Div>
      </Panel>
    </View>
  );
};

<VerticalScrollExample />;
```
