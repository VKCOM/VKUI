HorizontalCell автоматически ставит отступы по бокам в зависимости от платформы, поэтому его лучше использовать в [HorizontalScroll](#!/HorizontalScroll).

- При `size='s'` рекомендуется `<Avatar size={56}/>` или же любой компонент шириной до 56 пикс.
- При `size='m'` рекомендуется `<Avatar size={88} mode='app'/>` или же любой компонент шириной до 96 пикс.
- При `size='l'` рекомендуется `<Avatar size={128} mode='image'/>` или же любой компонент произвольной ширины.

```jsx
const largeImageStyles = {
  width: 220,
  height: 124,
  borderRadius: 4,
  boxSizing: 'border-box',
  border: 'var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha)',
  objectFit: 'cover',
};

const UserItems = () => {
  return getRandomUsers(15).map((user) => (
    <HorizontalCell onClick={() => {}} key={user.id} size="s" header={user.first_name}>
      <Avatar size={56} src={user.photo_100} />
    </HorizontalCell>
  ));
};

const storyItems = [
  {
    id: 1,
    name: 'ВКонтакте API',
    photo_50:
      'https://sun9-17.userapi.com/s/v1/if1/04SDm6iX9Lb6SbdbdrfonC3AYNYcmeITh7qA2hWfqZHsm8Vzg1eAgFgEXj5r9hnX4tJGjxxh.jpg?size=50x50&quality=96&crop=20,20,560,560&ava=1',
  },
  {
    id: 2,
    name: 'VK Mini Apps',
    photo_50:
      'https://sun9-5.userapi.com/s/v1/ig2/vDdDb2ZS0TW01OOlVpWC3jI8JQHIGTHNa-TF0uDktL0pP7iovf4wX0OzYVz9J75s5rk3W316nFt7vg3GvEpa4ldy.jpg?size=50x50&quality=95&crop=0,0,854,854&ava=1',
  },
  {
    id: 3,
    name: 'VK Team',
    photo_50:
      'https://sun9-9.userapi.com/s/v1/ig2/csFJEZoS4D8YqM8P0g5MMZOgJytNLiiLZvsEWcD2YvfUxEMuEjsSatqYLM6KKdmImNwcQCm_tpN0udKpEVKC4daN.jpg?size=50x50&quality=95&crop=0,0,1000,1000&ava=1',
  },
  {
    id: 4,
    name: 'VK Testers',
    photo_50:
      'https://sun9-25.userapi.com/s/v1/ig2/U2T4qsx4hMOzJEVmBBxSsmY7itrIkZUz0jDLXUq22kc7KCAnXQ-1qLiZ5EDy0YJV8621UKRA1SZoE9AcrTCfqiT8.jpg?size=50x50&quality=95&crop=0,0,1080,1080&ava=1',
  },
];

const storyItemStyles = {
  padding: 2,
  border: '3px solid var(--vkui--color_text_link)',
  borderRadius: 56,
};
const iconCircleStyles = {
  border: '3px solid var(--vkui--color_field_background)',
  borderRadius: 56,
  width: 16,
  height: 16,
};

const AddStoryUserItem = () => {
  return (
    <HorizontalCell onClick={() => {}} size="s" header="История">
      <div style={{ padding: 2 }}>
        <GridAvatar size={56} src={[getAvatarUrl('user_ji')]}>
          <GridAvatar.Badge>
            <Icon20AddCircleFillBlue style={iconCircleStyles} />
          </GridAvatar.Badge>
        </GridAvatar>
      </div>
    </HorizontalCell>
  );
};

const StoryItems = () => {
  return storyItems.map((item) => (
    <HorizontalCell
      onelineTitle={true}
      onClick={() => {}}
      key={item.id}
      size="s"
      header={item.name}
    >
      <div style={storyItemStyles}>
        <Avatar size={50} src={item.photo_50} />
      </div>
    </HorizontalCell>
  ));
};

const miniApps = [
  {
    id: 1,
    title: 'Промокот',
    icon_139: 'https://sun9-54.userapi.com/c850536/v850536134/15096d/6806J7q6YwM.jpg',
  },
  {
    id: 2,
    title: 'Разделите счёт',
    icon_139: 'https://sun9-20.userapi.com/c857416/v857416681/fc6d0/06XQvs4SyiE.jpg',
  },
  {
    id: 3,
    title: 'Рассылки',
    icon_139: 'https://sun9-50.userapi.com/c850536/v850536397/129313/qdVJ7A7xd70.jpg',
  },
  {
    id: 4,
    title: 'Тексты песен',
    icon_139: 'https://sun9-41.userapi.com/Zf2HluZJZDYjTbxhnSfeYnHtttBYsYbdjJ3QJQ/aDcJQrVVnbQ.jpg',
  },
];

const MiniAppItems = () => {
  return miniApps.map(({ id, title, icon_139 }) => (
    <HorizontalCell onClick={() => {}} key={id} size="s" header={title}>
      <Image size={56} borderRadius="m" src={icon_139} />
    </HorizontalCell>
  ));
};

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
    <HorizontalCell onClick={() => {}} key={id} size="m" header={title}>
      <Image size={88} borderRadius="l" src={icon_139} />
    </HorizontalCell>
  ));
};

const playlistItems = [
  {
    id: 1,
    title: 'Awesome Mix Vol.2',
    description: 'New Tribute Kings',
    photo_300: 'https://sun9-53.userapi.com/c637816/v637816450/4a6d9/lvCvft600Zc.jpg',
  },
  {
    id: 2,
    title: 'Сегодня в плеере',
    description: 'Музыка ВКонтакте',
    photo_300: 'https://sun9-4.userapi.com/22uxwvZiO4JhrkSz6j6FEzoJDfZzBjEBVY4ABA/wHAweL65dNI.jpg',
  },
  {
    id: 3,
    title: 'Hakuna Matata',
    description: 'Музыка ВКонтакте\n2019',
    photo_300: 'https://sun9-51.userapi.com/c857024/v857024436/f927/rG9fac2cuac.jpg',
  },
];

const PlaylistItems = () => {
  return playlistItems.map(({ id, title, description, photo_300 }) => (
    <HorizontalCell onClick={() => {}} key={id} size="l" header={title} subtitle={description}>
      <Image size={128} src={photo_300} />
    </HorizontalCell>
  ));
};

const albumItems = [
  {
    id: 1,
    title: 'Команда <3',
    size: 4,
    thumb_src: 'https://sun9-33.userapi.com/ODk8khvW97c6aSx_MxHXhok5byDCsHEoU-3BwA/sO-lGf_NjN4.jpg',
  },
  {
    id: 2,
    title: 'Зингер',
    size: 22,
    thumb_src: 'https://sun9-60.userapi.com/bjwt581hETPAp4oY92bDcRvMymyfCaEsnojaUA/_KWQfS-MAd4.jpg',
  },
  {
    id: 3,
    title: 'Медиагалерея ВКонтакте',
    size: 64,
    thumb_src: 'https://sun9-26.userapi.com/YZ5-1A6cVgL7g1opJGQIWg1Bl5ynfPi8p41SkQ/IYIUDqGkkBE.jpg',
  },
];

const AlbumItems = () => {
  return albumItems.map(({ id, title, size, thumb_src }) => (
    <HorizontalCell
      onClick={() => {}}
      key={id}
      size="l"
      header={title}
      subtitle={`${size} фотографии`}
    >
      <img style={largeImageStyles} src={thumb_src} />
    </HorizontalCell>
  ));
};

const Example = () => {
  return (
    <View activePanel="horizontalCell">
      <Panel id="horizontalCell">
        <PanelHeader>HorizontalCell</PanelHeader>
        <Group header={<Header>Истории</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <AddStoryUserItem />
              <StoryItems />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header>Возможные друзья</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <UserItems />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header aside={<Link>Показать все</Link>}>Мини-приложения</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <MiniAppItems />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header aside={<Link>Показать все</Link>}>Игры</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <GamesItems />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header aside={<Link>Показать все</Link>}>Плейлисты</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <PlaylistItems />
            </div>
          </HorizontalScroll>
        </Group>
        <Group header={<Header aside={<Link>Показать все</Link>}>Альбомы</Header>}>
          <HorizontalScroll>
            <div style={{ display: 'flex' }}>
              <AlbumItems />
            </div>
          </HorizontalScroll>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
