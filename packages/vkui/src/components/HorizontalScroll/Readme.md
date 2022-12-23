Компонент для отрисовки "длинного" содержимого, которое можно скроллить по горизонтали.

```jsx
import { useEffect, useState, Fragment } from 'react';

const HorizontalScrollExample = () => {
  const [recentFriends] = useState(getRandomUsers(20));
  const [commonFriends, setCommonFriends] = useState([]);

  useEffect(() => {
    // Эмуляция загрузки
    setTimeout(() => {
      setCommonFriends(getRandomUsers(20));
    }, 500);
  }, []);

  return (
    <View activePanel="horizontal">
      <Panel id="horizontal">
        <PanelHeader>HorizontalScroll</PanelHeader>
        <Group header={<Header mode="secondary">Недавние</Header>}>
          <HorizontalScroll
            showArrows
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            <div style={{ display: 'flex' }}>
              {recentFriends.map((item) => {
                return (
                  <HorizontalCell key={item.id} header={item.first_name}>
                    <Avatar size={56} src={item.photo_200} />
                  </HorizontalCell>
                );
              })}
            </div>
          </HorizontalScroll>
        </Group>

        <Group header={<Header mode="secondary">Общие друзья</Header>}>
          <HorizontalScroll
            showArrows
            arrowSize="m"
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            <div style={{ display: 'flex' }}>
              {commonFriends.length === 0 && <PanelSpinner />}
              {commonFriends.length > 0 && (
                <Fragment>
                  {commonFriends.map((item) => {
                    return (
                      <HorizontalCell key={item.id} header={item.first_name}>
                        <Avatar size={56} src={item.photo_200} />
                      </HorizontalCell>
                    );
                  })}
                </Fragment>
              )}
            </div>
          </HorizontalScroll>
        </Group>
      </Panel>
    </View>
  );
};

<HorizontalScrollExample />;
```
