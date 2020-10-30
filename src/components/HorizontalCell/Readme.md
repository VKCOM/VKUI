Рекомендуется для использования в HorizontalScroll, автоматически ставит отступы по бокам в зависимости от платформы.

* При `size='small'` рекомендуется `<Avatar size={56}/>` или же любой компонент шириной 56 пикс.
* При `size='medium'` рекомендуется `<Avatar size={96} mode='app'/>` или же любой компонент шириной 96 пикс.
* При `size='large'` рекомендуется `<Avatar size={144} mode='image/>` или же любой компонент.

```jsx
const largeImageStyles = {
  width: 220,
  height: 124,
  borderRadius: 8,
  border: '1px solid var(--placeholder_icon_background)',
  objectFit: 'cover'
};

<View activePanel="header">
  <Panel id="header">
    <PanelHeader>
      HorizontalCell
    </PanelHeader>
    <Group>
      <Header>Возможные друзья</Header>
      <HorizontalScroll>
        <div style={{display: 'flex'}}>
          <HorizontalCell size='small' 
                          image={<Avatar size={56} src={getAvatarUrl('user_wayshev')}/>}
                          title='Иван'
          />
          <HorizontalCell size='small'
                          image={<Avatar size={56} src={getAvatarUrl('user_va')}/>}
                          title='Влад'
          />
          <HorizontalCell size='small'
                          image={<Avatar size={56} src={getAvatarUrl('user_ilyagrshn')}/>}
                          title='Илья'
          />
          <HorizontalCell size='small'
                          image={<Avatar size={56} src={getAvatarUrl('user_ti')}/>}
                          title='Тарас'
          />
          <HorizontalCell size='small'
                          image={<Avatar size={56} src={getAvatarUrl('user_mp')}/>}
                          title='Макс'
          />
        </div>
      </HorizontalScroll>
    </Group>
    <Group>
      <Header aside={<Link>Показать</Link>}>Мини-приложения</Header>
      <HorizontalScroll>
        <div style={{display: 'flex'}}>
          <HorizontalCell size='small'
                          image={<Avatar size={56} mode='app' src='https://sun9-54.userapi.com/c850536/v850536134/15096d/6806J7q6YwM.jpg'/>}
                          title='Промокот'
          />
          <HorizontalCell size='small'
                          image={<Avatar size={56} mode='app' src='https://sun9-20.userapi.com/c857416/v857416681/fc6d0/06XQvs4SyiE.jpg'/>}
                          title='Разделите счёт'
          />
          <HorizontalCell size='small'
                          image={<Avatar size={56} mode='app' src='https://sun9-50.userapi.com/c850536/v850536397/129313/qdVJ7A7xd70.jpg'/>}
                          title='Рассылки'
          />
          <HorizontalCell size='small'
                          image={<Avatar size={56} mode='app' src='https://sun9-41.userapi.com/Zf2HluZJZDYjTbxhnSfeYnHtttBYsYbdjJ3QJQ/aDcJQrVVnbQ.jpg'/>}
                          title='Тексты песен'
          />
        </div>
      </HorizontalScroll>
    </Group>
    <Group>
      <Header aside={<Link>Показать</Link>}>Игры</Header>
      <HorizontalScroll>
        <div style={{display: 'flex'}}>
          <HorizontalCell size='medium'
                          image={<Avatar size={96} mode='app' src='https://sun9-24.userapi.com/c639120/v639120173/3fe6f/tgPr7lecAY4.jpg'/>}
                          title='Контра Сити'
          />
          <HorizontalCell size='medium'
                          image={<Avatar size={96} mode='app' src='https://sun9-71.userapi.com/c849220/v849220453/147ade/0MtQXKEVsiQ.jpg'/>}
                          title='Golden Valley'
          />
          <HorizontalCell size='medium'
                          image={<Avatar size={96} mode='app' src='https://sun9-45.userapi.com/c846418/v846418215/5cf20/Gd9mQ6dVXTw.jpg'/>}
                          title='Warmageddon'
          />
        </div>
      </HorizontalScroll>
    </Group>
    <Group>
      <Header aside={<Link>Показать</Link>}>Плейлисты</Header>
      <HorizontalScroll>
        <div style={{display: 'flex'}}>
          <HorizontalCell size='large'
                          image={<Avatar size={144} mode='image' src='https://sun9-53.userapi.com/c637816/v637816450/4a6d9/lvCvft600Zc.jpg'/>}
                          title='Awesome Mix Vol.2'
                          subtitle='New Tribute Kings'
          />
          <HorizontalCell size='large'
                          image={<Avatar size={144} mode='image' src='https://sun9-4.userapi.com/22uxwvZiO4JhrkSz6j6FEzoJDfZzBjEBVY4ABA/wHAweL65dNI.jpg'/>}
                          title='Сегодня в плеере'
                          subtitle='Музыка ВКонтакте'
          />
          <HorizontalCell size='large'
                          image={<Avatar size={144} mode='image' src='https://sun9-51.userapi.com/c857024/v857024436/f927/rG9fac2cuac.jpg'/>}
                          title='Hakuna Matata'
                          subtitle='Музыка ВКонтакте'
                          secondSubtitle='2019'
          />
        </div>
      </HorizontalScroll>
    </Group>
    <Group>
      <Header aside={<Link>Показать</Link>}>Альбомы</Header>
      <HorizontalScroll>
        <div style={{display: 'flex'}}>
          <HorizontalCell size='large'
                          image={<img style={largeImageStyles} src='https://sun9-33.userapi.com/ODk8khvW97c6aSx_MxHXhok5byDCsHEoU-3BwA/sO-lGf_NjN4.jpg'/>}
                          title='Команда <3'
                          subtitle='4 фотографии'
          />
          <HorizontalCell size='large'
                          image={<img style={largeImageStyles} src='https://sun9-60.userapi.com/bjwt581hETPAp4oY92bDcRvMymyfCaEsnojaUA/_KWQfS-MAd4.jpg'/>}
                          title='Зингер'
                          subtitle='12 фотографий'
          />
          <HorizontalCell size='large'
                          image={<img style={largeImageStyles} src='https://sun9-26.userapi.com/YZ5-1A6cVgL7g1opJGQIWg1Bl5ynfPi8p41SkQ/IYIUDqGkkBE.jpg'/>}
                          title='Медиагалерея ВКонтакте'
                          subtitle='67 фотографий'
          />
        </div>
      </HorizontalScroll>
    </Group>
  </Panel>
</View>
```
