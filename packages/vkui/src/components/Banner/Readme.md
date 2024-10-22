```jsx
const musicGradient =
  'linear-gradient(135deg, #ADE6FF 0%, #ABE3FF 1%, #A7DCFF 3%, #A0CFFF 7%, #97BCFF 12%, #8DA4FF 19%, #8285FF 26%, #8B76FF 34%, #9C6AFF 43%, #B05FFF 52%, #C655FF 62%, #DB4CFF 71%, #EE45FF 81%, #FA41FF 91%, #FF3FFF 100%)';
const warningGradient = 'linear-gradient(90deg, #ffb73d 0%, #ffa000 100%)';

<View activePanel="banner">
  <Panel id="banner">
    <PanelHeader>Banner</PanelHeader>
    <Group header={<Header>Content: tint, size: regular</Header>}>
      <Div>
        <Banner
          before={
            <Image
              size={96}
              src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
            />
          }
          title="Баста в Ледовом"
          subtitle="Большой концерт"
          after="dismiss"
          onDismiss={noop}
          actions={<Button>Подробнее</Button>}
        />
      </Div>

      <Div>
        <Banner
          before={
            <Image
              size={96}
              src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
            />
          }
          title="Для Вас"
          subtitle="Обновлено сегодня"
          actions={<Button before={<Icon24Play />}>Слушать</Button>}
        />
      </Div>

      <Div>
        <Banner
          before={
            <Image style={{ backgroundImage: musicGradient }}>
              <Icon28MusicOutline fill="#fff" />
            </Image>
          }
          title="Подписка за рубль!"
          subtitle="Предложение действует только до конца февраля"
          after="dismiss"
          onDismiss={noop}
          actions={
            <ButtonGroup mode="vertical" gap="m">
              <Button mode="primary">Попробовать сейчас</Button>
              <Button mode="link">Напомнить позже</Button>
            </ButtonGroup>
          }
        />
      </Div>

      <Div>
        <Banner
          before={<Avatar size={48} src={getAvatarUrl('user_lihachyov')} />}
          title="Сегодня день рождения Михаила Лихачёва"
          subtitle="Подарите подарок"
          after="dismiss"
          onDismiss={noop}
          actions={<Button mode="primary">Подарить</Button>}
        />
      </Div>

      <Div>
        <Banner
          before={
            <Avatar size={28} style={{ backgroundImage: warningGradient }}>
              <span style={{ color: '#fff' }}>!</span>
            </Avatar>
          }
          title="Телефон ожидает подтверждения"
          subtitle={
            <React.Fragment>
              Новый номер +7 ••• ••• •• 96 будет сохранён через семь дней.
              <br />
              <Link>Ускорьте процесс</Link>, если у Вас есть
              <br />
              доступ к старому номеру.
            </React.Fragment>
          }
          actions={<Button mode="link">Отменить заявку</Button>}
        />
      </Div>

      <Div>
        <Banner
          before={
            <Avatar src="https://sun9-7.userapi.com/q9qBUh4kGND1pTUytY4LwljtRLWoCXaIzN7C2A/52lM85R5kus.jpg" />
          }
          extraSubtitle="Хотите, чтобы вам меньше мешали? Включите режим «невидимка»!"
          actions={
            <ButtonGroup mode="horizontal" gap="m">
              <Button>Включить</Button>
              <Button mode="link">Подробнее</Button>
            </ButtonGroup>
          }
        />
      </Div>

      <Div>
        <Banner
          title="Больше интересных подкастов в каталоге"
          subtitle="Найдите интересующие именно Вас подкасты!"
          after="expand"
          onClick={() => console.log('[Podcast banner] onClick')}
        />
      </Div>
    </Group>

    <Group title={<Header>Mode: image, size: regular</Header>}>
      <Div>
        <Banner
          mode="image"
          title="Мои достижения"
          subtitle="Разблокировано 9 из 36"
          background={
            <div
              style={{
                backgroundColor: '#65c063',
                backgroundImage:
                  'url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)',
                backgroundPosition: 'right bottom',
                backgroundSize: 320,
                backgroundRepeat: 'no-repeat',
              }}
            />
          }
          actions={<Button appearance="overlay">Подробнее</Button>}
        />
      </Div>
    </Group>
    <Group title={<Header>Content: tint, size: medium</Header>}>
      <Div>
        <Banner
          size="m"
          title="Реклама сообщества"
          subtitle={
            <span>
              Привлекайте больше людей
              <br />в Ваше сообщество
            </span>
          }
          after="dismiss"
          onDismiss={noop}
          actions={
            <Button mode="primary" size="m">
              Подробнее
            </Button>
          }
        />
      </Div>
    </Group>

    <Group header={<Header>Content: image, size: medium</Header>}>
      <Div>
        <Banner
          mode="image"
          size="m"
          title="Реклама в сообществе"
          subtitle={
            <span>
              Привлекайте больше людей
              <br />в Ваше сообщество
            </span>
          }
          background={
            <div
              style={{
                backgroundColor: '#5b9be6',
                backgroundImage:
                  'url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg)',
                backgroundPosition: 'right bottom',
                backgroundSize: '102%',
                backgroundRepeat: 'no-repeat',
              }}
            />
          }
          after="dismiss"
          onDismiss={noop}
          actions={
            <Button appearance="overlay" size="m">
              Подробнее
            </Button>
          }
        />
      </Div>

      <Div>
        <Banner
          mode="image"
          size="m"
          title={
            <span>
              Баста в Ледовом,
              <br />
              большой концерт
            </span>
          }
          subtitle="Москва · 12 декабря"
          background={
            <div
              style={{
                backgroundColor: '#000',
                backgroundImage:
                  'url(https://sun9-53.userapi.com/m-ygfKiLKLkEMAQVTToO2l9LyC6GgqWoGXpw8A/-zm6_XLECTU.jpg)',
                backgroundPosition: 'right bottom',
                backgroundSize: 340,
                backgroundRepeat: 'no-repeat',
              }}
            />
          }
          after="dismiss"
          onDismiss={noop}
          actions={
            <Button appearance="overlay" size="m">
              Подробнее
            </Button>
          }
        />
      </Div>
    </Group>
  </Panel>
</View>;
```
