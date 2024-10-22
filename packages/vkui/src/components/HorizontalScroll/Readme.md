Компонент для отрисовки "длинного" содержимого, которое можно скроллить по горизонтали.

```jsx
const HorizontalScrollExample = () => {
  const [recentFriends] = React.useState(getRandomUsers(20));
  const [commonFriends, setCommonFriends] = React.useState([]);
  const [activePanel, setActivePanel] = React.useState('basic-case');

  React.useEffect(() => {
    // Эмуляция загрузки
    setTimeout(() => {
      setCommonFriends(getRandomUsers(20));
    }, 500);
  }, []);

  return (
    <View activePanel={activePanel}>
      <Panel id="basic-case">
        <PanelHeader>HorizontalScroll</PanelHeader>
        <Group header={<Header mode="secondary">Недавние</Header>}>
          <HorizontalScroll
            showArrows
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            {recentFriends.map((item) => {
              return (
                <HorizontalCell onClick={() => {}} key={item.id} title={item.first_name}>
                  <Avatar size={56} src={item.photo_200} />
                </HorizontalCell>
              );
            })}
          </HorizontalScroll>
        </Group>

        <Group header={<Header mode="secondary">Общие друзья</Header>}>
          <HorizontalScroll
            showArrows
            arrowSize="m"
            getScrollToLeft={(i) => i - 120}
            getScrollToRight={(i) => i + 120}
          >
            {commonFriends.length === 0 && <Spinner size="m" style={{ height: 88 }} />}
            {commonFriends.length > 0 && (
              <React.Fragment>
                {commonFriends.map((item) => {
                  return (
                    <HorizontalCell onClick={() => {}} key={item.id} title={item.first_name}>
                      <Avatar size={56} src={item.photo_200} />
                    </HorizontalCell>
                  );
                })}
              </React.Fragment>
            )}
          </HorizontalScroll>
        </Group>

        <Group header={<Header mode="secondary">С кнопкой "Показать всё"</Header>}>
          <CellButton
            before={<Icon16MoreHorizontal aria-hidden />}
            onClick={() => setActivePanel('show-more-case')}
          >
            Перейти к примерам
          </CellButton>
          <Footer>Подробности про API смотрите ниже</Footer>
        </Group>
      </Panel>

      <Panel id="show-more-case">
        <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('basic-case')} />}>
          HorizontalCellShowMore
        </PanelHeader>
        <Group header={<Header>Альбомы</Header>}>
          <HorizontalScroll>
            <AlbumItems />
            <HorizontalCellShowMore onClick={() => {}} size="l" height={124} />
          </HorizontalScroll>
        </Group>
        <Group header={<Header>Возможные друзья</Header>}>
          <HorizontalScroll>
            <RandomUsers />
            <HorizontalCellShowMore onClick={() => {}} size="s" height={56} />
          </HorizontalScroll>
        </Group>
        <Group header={<Header>Игры</Header>}>
          <HorizontalScroll>
            <HorizontalCell onClick={() => {}} size="m" title="Warma-geddon">
              <Image
                size={88}
                borderRadius="l"
                src={'https://sun9-45.userapi.com/c846418/v846418215/5cf20/Gd9mQ6dVXTw.jpg'}
              />
            </HorizontalCell>
            <HorizontalCell onClick={() => {}} size="m" title="Golden Valley">
              <Image
                size={88}
                borderRadius="l"
                src={'https://sun9-71.userapi.com/c849220/v849220453/147ade/0MtQXKEVsiQ.jpg'}
              />
            </HorizontalCell>
            <HorizontalCellShowMore onClick={() => {}} size="l" height={88} />
          </HorizontalScroll>
        </Group>
      </Panel>
    </View>
  );
};

function getAlbumItems() {
  return [
    {
      id: 1,
      title: 'Команда <3',
      size: 4,
      thumb_src:
        'https://sun9-33.userapi.com/ODk8khvW97c6aSx_MxHXhok5byDCsHEoU-3BwA/sO-lGf_NjN4.jpg',
    },
    {
      id: 3,
      title: 'Медиагалерея ВКонтакте',
      size: 64,
      thumb_src:
        'https://sun9-26.userapi.com/YZ5-1A6cVgL7g1opJGQIWg1Bl5ynfPi8p41SkQ/IYIUDqGkkBE.jpg',
    },
  ];
}

const largeImageStyles = {
  width: 220,
  height: 124,
  borderRadius: 4,
  boxSizing: 'border-box',
  border: 'var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha)',
  objectFit: 'cover',
};

const AlbumItems = () => {
  return getAlbumItems().map(({ id, title, size, thumb_src }) => (
    <HorizontalCell
      onClick={() => {}}
      key={id}
      size="xl"
      title={title}
      subtitle={`${size} фотографии`}
    >
      <img style={largeImageStyles} src={thumb_src} />
    </HorizontalCell>
  ));
};

const usersList = getRandomUsers(3);

const RandomUsers = () => {
  return usersList.map((user) => (
    <HorizontalCell onClick={() => {}} key={user.id} size="s" title={user.first_name}>
      <Avatar size={56} src={user.photo_100} />
    </HorizontalCell>
  ));
};

<HorizontalScrollExample />;
```

# Кнопка "Показать всё"

Специально для этого под `HorizontalScroll` создан компонент [`HorizontalCellShowMore`](#/HorizontalCellShowMore).

Его можно вкладывать напрямую в того же родителя, в котором лежат остальные `HorizontalCell` внутри `HorizontalScroll`.

```tsx static
<HorizontalScroll>
  <HorizontalCell>1</HorizontalCell>
  <HorizontalCell>2</HorizontalCell>
  <HorizontalCell>3</HorizontalCell>
  <HorizontalCellShowMore />
</HorizontalScroll>
```
