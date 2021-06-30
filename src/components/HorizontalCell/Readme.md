HorizontalCell автоматически ставит отступы по бокам в зависимости от платформы, поэтому его лучше использовать в [HorizontalScroll](#!/HorizontalScroll).
* При `size='s'` **для iOS** рекомендуется `<Avatar size={64}/>`, а для остальных платформ `<Avatar size={56}/>` или же любой компонент шириной до 64 пикс.
* При `size='m'` рекомендуется `<Avatar size={88} mode='app'/>` или же любой компонент шириной до 96 пикс.
* При `size='l'` рекомендуется `<Avatar size={128} mode='image/>` или же любой компонент произвольной ширины.

```jsx
const HorizontalCellExample = withPlatform(class HorizontalCellExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userItems: [],
      miniAppItems: [],
      gamesItems: [],
      playlistsItems: [],
      albumItems: [],
    }
  }

  componentDidMount() {
    const { platform } = this.props;
    
    const largeImageStyles = {
      width: 220,
      height: 124,
      borderRadius: 8,
      border: '1px solid var(--placeholder_icon_background)',
      objectFit: 'cover'
    };
    
    let users = getRandomUsers(15);
    let generatedUserItems = [];
    users.forEach((user) => {
      generatedUserItems.push(
        <HorizontalCell size='s' header={user.first_name}>
          <Avatar size={platform === 'ios' ? 64 : 56} src={user.photo_100}/>
        </HorizontalCell>
      )
    })
    this.setState({userItems: generatedUserItems});
    
    let exampleMiniApps = [
      <HorizontalCell size='s' header='Промокот'>
        <Avatar size={platform === 'ios' ? 64 : 56} mode='app'
                src='https://sun9-54.userapi.com/c850536/v850536134/15096d/6806J7q6YwM.jpg'/>
      </HorizontalCell>,
      <HorizontalCell size='s' header='Разделите счёт'>
        <Avatar size={platform === 'ios' ? 64 : 56} mode='app'
                src='https://sun9-20.userapi.com/c857416/v857416681/fc6d0/06XQvs4SyiE.jpg'/>
      </HorizontalCell>,
      <HorizontalCell size='s' header='Рассылки'>
        <Avatar size={platform === 'ios' ? 64 : 56} mode='app'
                src='https://sun9-50.userapi.com/c850536/v850536397/129313/qdVJ7A7xd70.jpg'/>
      </HorizontalCell>,
      <HorizontalCell size='s' header='Тексты песен'>
        <Avatar size={platform === 'ios' ? 64 : 56} mode='app'
                src='https://sun9-41.userapi.com/Zf2HluZJZDYjTbxhnSfeYnHtttBYsYbdjJ3QJQ/aDcJQrVVnbQ.jpg'/>
      </HorizontalCell>];
    let generatedMiniAppsItems = [];
    for (let i = 0; i < 3; i++) {
      generatedMiniAppsItems = generatedMiniAppsItems.concat(exampleMiniApps);
    }
    this.setState({miniAppItems: generatedMiniAppsItems})
    
    let exampleGames = [
      <HorizontalCell size='m' header='Контра Сити'>
        <Avatar size={88} mode='app'
                src='https://sun9-24.userapi.com/c639120/v639120173/3fe6f/tgPr7lecAY4.jpg'/>
      </HorizontalCell>,
      <HorizontalCell size='m' header='Golden Valley'>
        <Avatar size={88} mode='app'
                src='https://sun9-71.userapi.com/c849220/v849220453/147ade/0MtQXKEVsiQ.jpg'/>
      </HorizontalCell>,
      <HorizontalCell size='m' header='Warma-geddon'>
        <Avatar size={88} mode='app'
                src='https://sun9-45.userapi.com/c846418/v846418215/5cf20/Gd9mQ6dVXTw.jpg'/>
      </HorizontalCell>];
    let generatedGamesItems = [];
    for (let i = 0; i < 3; i++) {
      generatedGamesItems = generatedGamesItems.concat(exampleGames);
    }
    this.setState({gamesItems: generatedGamesItems})

    let examplePlaylists = [
      <HorizontalCell size='l' header='Awesome Mix Vol.2' subtitle='New Tribute Kings'>
        <Avatar size={128} mode='image'
                src='https://sun9-53.userapi.com/c637816/v637816450/4a6d9/lvCvft600Zc.jpg'/>
      </HorizontalCell>,
      <HorizontalCell size='l' header='Сегодня в плеере' subtitle='Музыка ВКонтакте'>
        <Avatar size={128} mode='image'
                src='https://sun9-4.userapi.com/22uxwvZiO4JhrkSz6j6FEzoJDfZzBjEBVY4ABA/wHAweL65dNI.jpg'/>
      </HorizontalCell>,
      <HorizontalCell size='l' header='Hakuna Matata' subtitle="Музыка ВКонтакте\n2019">
        <Avatar size={128} mode='image'
                src='https://sun9-51.userapi.com/c857024/v857024436/f927/rG9fac2cuac.jpg'/>
      </HorizontalCell>];
    let generatedPlaylists = [];
    for (let i = 0; i < 3; i++) {
      generatedPlaylists = generatedPlaylists.concat(examplePlaylists);
    }
    this.setState({playlistsItems: generatedPlaylists})
    
    let exampleAlbums = [
      <HorizontalCell size='l' header='Команда <3' subtitle='4 фотографии'>
        <img style={largeImageStyles}
             src='https://sun9-33.userapi.com/ODk8khvW97c6aSx_MxHXhok5byDCsHEoU-3BwA/sO-lGf_NjN4.jpg'/>
      </HorizontalCell>,
      <HorizontalCell size='l' header='Зингер' subtitle='12 фотографий'>
        <img style={largeImageStyles}
             src='https://sun9-60.userapi.com/bjwt581hETPAp4oY92bDcRvMymyfCaEsnojaUA/_KWQfS-MAd4.jpg'/>
      </HorizontalCell>,
      <HorizontalCell size='l' header='Медиагалерея ВКонтакте' subtitle='67 фотографий'>
        <img style={largeImageStyles}
             src='https://sun9-26.userapi.com/YZ5-1A6cVgL7g1opJGQIWg1Bl5ynfPi8p41SkQ/IYIUDqGkkBE.jpg'/>
      </HorizontalCell>];
    let generatedAlbums = [];
    for (let i = 0; i < 3; i++) {
      generatedAlbums = generatedAlbums.concat(exampleAlbums);
    }
    this.setState({albumItems: generatedAlbums})
  }

  render() { 
    return (
      <View activePanel="horizontalCell">
        <Panel id="horizontalCell">
          <PanelHeader>
            HorizontalCell
          </PanelHeader>
          <Group header={<Header>Возможные друзья</Header>}>
            <HorizontalScroll>
              <div style={{display: 'flex'}}>
                {this.state.userItems}
              </div>
            </HorizontalScroll>
          </Group>
          <Group header={<Header aside={<Link>Показать все</Link>}>Мини-приложения</Header>}>
            <HorizontalScroll>
              <div style={{display: 'flex'}}>
                {this.state.miniAppItems}
              </div>
            </HorizontalScroll>
          </Group>
          <Group header={<Header aside={<Link>Показать все</Link>}>Игры</Header>}>
            <HorizontalScroll>
              <div style={{display: 'flex'}}>
                {this.state.gamesItems}
              </div>
            </HorizontalScroll>
          </Group>
          <Group header={<Header aside={<Link>Показать все</Link>}>Плейлисты</Header>}>
            <HorizontalScroll>
              <div style={{display: 'flex'}}>
                {this.state.playlistsItems}
              </div>
            </HorizontalScroll>
          </Group>
          <Group header={<Header aside={<Link>Показать все</Link>}>Альбомы</Header>}>
            <HorizontalScroll>
              <div style={{display: 'flex'}}>
                {this.state.albumItems}
              </div>
            </HorizontalScroll>
          </Group>
        </Panel>
      </View>
    )
  }
});

<HorizontalCellExample/>
```
