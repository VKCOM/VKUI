> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](https://vkcom.github.io/VKUI/#/Unstable).

`HorizontalCellShowMore` - кнопка **"Показать всe"** для компонента [HorizontalScroll](#/HorizontalScroll)

Moжно вкладывать напрямую в того же родителя в котором лежат остальные `HorizontalCell` внутри `HorizontalScroll`.

```html
<HorizontalScroll>
  <ListWrapper>
    <HorizontalCell>1</HorizontalCell>
    <HorizontalCell>2</HorizontalCell>
    <HorizontalCell>3</HorizontalCell>
    <HorizontalCellShowMore />
  </ListWrapper>
</HorizontalScroll>
```

Или как последний элемент `HorizontalScroll`, но тогда надо компенсировать
отступы высталяемые `HorizontalCell` с помощью пропа `compensateLastCellIndent`.

```html
<HorizontalScroll>
  <ListWrapper>
    <HorizontalCell>1</HorizontalCell>
    <HorizontalCell>2</HorizontalCell>
    <HorizontalCell>3</HorizontalCell>
  </ListWrapper>
  <HorizontalCellShowMore compensateLastCellIndent />
</HorizontalScroll>
```

```jsx
const Example = () => {
  return (
    <View activePanel="horizontalCell">
      <Panel id="horizontalCell">
        <Group header={<Header>Альбомы</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <AlbumItems />
              <HorizontalCellShowMore size="l" height={124} />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header>Возможные друзья</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex' }}>
                <RandomUsers />
              </div>
              <HorizontalCellShowMore compensateLastCellIndent size="s" height={56} />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header>Игры</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <div style={{ display: 'flex' }}>
                <HorizontalCell size="m" header="Warma-geddon">
                  <Image
                    size={88}
                    borderRadius="l"
                    src={'https://sun9-45.userapi.com/c846418/v846418215/5cf20/Gd9mQ6dVXTw.jpg'}
                  />
                </HorizontalCell>
                <HorizontalCell size="m" header="Golden Valley">
                  <Image
                    size={88}
                    borderRadius="l"
                    src={'https://sun9-71.userapi.com/c849220/v849220453/147ade/0MtQXKEVsiQ.jpg'}
                  />
                </HorizontalCell>
              </div>
              <HorizontalCellShowMore compensateLastCellIndent size="m" height={88} />
            </div>
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
  border: 'var(--vkui_internal--thin_border) solid var(--vkui--color_image_border_alpha)',
  objectFit: 'cover',
};

const AlbumItems = () => {
  return getAlbumItems().map(({ id, title, size, thumb_src }) => (
    <HorizontalCell key={id} size="l" header={title} subtitle={`${size} фотографии`}>
      <img style={largeImageStyles} src={thumb_src} />
    </HorizontalCell>
  ));
};

const usersList = getRandomUsers(3);

const RandomUsers = () => {
  return usersList.map((user) => (
    <HorizontalCell key={user.id} size="s" header={user.first_name}>
      <Avatar size={56} src={user.photo_100} />
    </HorizontalCell>
  ));
};

<Example />;
```
