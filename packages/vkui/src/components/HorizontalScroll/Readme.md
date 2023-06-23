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

Пример использования со встроенным компонентом ShowMore.

```jsx
const gamesItems = [
  {
    id: 1,
    title: 'Контра Сити',
    icon_139: 'https://sun9-24.userapi.com/c639120/v639120173/3fe6f/tgPr7lecAY4.jpg',
  },
  {
    id: 2,
    title: 'Golden Valley',
    icon_139: 'https://sun9-71.userapi.com/c849220/v849220453/147ade/0MtQXKEVsiQ.jpg',
  },
  {
    id: 3,
    title: 'Warma-geddon',
    icon_139: 'https://sun9-45.userapi.com/c846418/v846418215/5cf20/Gd9mQ6dVXTw.jpg',
  },
];

const GamesItems = () => {
  return gamesItems.map(({ id, title, icon_139 }) => (
    <HorizontalCell key={id} size="m" header={title}>
      <Image size={88} borderRadius="l" src={icon_139} />
    </HorizontalCell>
  ));
};

const Example = () => {
  return (
    <View activePanel="horizontalCell">
      <Panel id="horizontalCell">
        <PanelHeader>HorizontalCell with ShowMore</PanelHeader>
        <Group header={<Header aside={<Link>Показать все</Link>}>Игры</Header>}>
          <HorizontalScroll renderShowMore={(ShowMore) => <ShowMore />}>
            <div style={{ display: 'flex' }}>
              <GamesItems />
            </div>
          </HorizontalScroll>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
