Низкоуровневый компонент для отрисовки карточки со сложным содержимым. Используется внутри [`ModalCard`](#/ModalCard).

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ margin: 20 }}>
  <Text style={{ marginBottom: 10 }}>Десктопная и планшетная версии</Text>
  <AdaptivityProvider viewWidth={ViewWidth.TABLET}>
    <ModalCardBase
      style={{ width: 450, marginBottom: 20 }}
      header="Отправляйте деньги друзьям, используя банковскую карту"
      subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
      actions={
        <React.Fragment>
          <Spacing size={16} />
          <Button size="l" mode="primary" stretched>
            Попробовать
          </Button>
        </React.Fragment>
      }
      icon={<Icon56MoneyTransferOutline />}
    />
  </AdaptivityProvider>
  <Text>Мобильная версия</Text>
  <Spacing size={10} />
  <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
    <ModalCardBase
      style={{ width: 320 }}
      icon={<Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
      header="Добавить игру «Загадки детства» в меню?"
      subheader="Игра появится под списком разделов на экране меню и будет всегда под рукой."
      actions={
        <React.Fragment>
          <Spacing size={16} />
          <ButtonGroup mode="horizontal" gap="s" stretched>
            <Button size="l" mode="primary" stretched>
              Да
            </Button>
            <Button size="l" mode="secondary" stretched>
              Позже
            </Button>
          </ButtonGroup>
        </React.Fragment>
      }
    />
  </AdaptivityProvider>
  <Spacing size={30} />
  <Text>С UserStack в качестве children (имеет особенный отступ c actions)</Text>
  <Spacing size={10} />
  <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
    <ModalCardBase
      style={{ width: 320 }}
      icon={<Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
      header="Добавить игру «Загадки детства» в меню?"
      subheader="Игра появится под списком разделов на экране меню и будет всегда под рукой."
      actions={
        <React.Fragment>
          <Spacing size={8} />
          <ButtonGroup mode="horizontal" gap="s" stretched>
            <Button size="l" mode="primary" stretched>
              Да
            </Button>
            <Button size="l" mode="secondary" stretched>
              Позже
            </Button>
          </ButtonGroup>
        </React.Fragment>
      }
    >
      <Spacing size={20} />
      <UsersStack photos={[getAvatarUrl('user_lihachyov')]} direction="column">
        Понравилось Муртолу Левзачеву
      </UsersStack>
    </ModalCardBase>
  </AdaptivityProvider>
</div>
```

## Кнопка для закрытия

Через свойство `dismissButtonMode=inside|outside` можно задать вид кнопки закрытия.
Согласно нашим дизайн-гайдам, `dismissButtonMode=outside` отображается только для `compact`-режима (десктопная и планшетные версии).
Для `iOS` всегда будет применяться `dismissButtonMode=inside` в `regular`-режиме (мобильная версия).

## Отступы между контентом и кнопками действий (`actions`)

По умолчанию верхний отступ от кнопок действий `actions` равняется `16px`. Согласно дизайн-системе отступ может быть больше в зависимости от того какие данные отображаются внутри `ModalCardBase`.
Если необходимо увеличить отступ, то передавайте в `actions` компонент [Spacing](#/Spacing).

```jsx static
<ModalCardBase
  dismissButtonMode="inside"
  dismissLabel="Закрыть"
  style={{ width: 450, marginBottom: 20 }}
  header="Десктопная и планшетная версии с крестиком внутри"
  subheader="Сверху будет безопасный отступ до иконки"
  actions={
    <React.Fragment>
      <Spacing size={16} />
      <Button size="l" mode="primary" stretched>
        Некая кнопка
      </Button>
    </React.Fragment>
  }
/>
```

## Цифровая доступность (a11y)

Чтобы кнопка для закрытия была доступной для ассистивных технологий, мы передаем в нее скрытый визуально текст, который сможет прочитать скринридер. Чтобы заменить текст, передайте его в `dismissLabel`.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ margin: 20 }}>
  <AdaptivityProvider viewWidth={ViewWidth.TABLET}>
    <ModalCardBase
      dismissButtonMode="inside"
      dismissLabel="Закрыть"
      style={{ width: 450, marginBottom: 20 }}
      header="Десктопная и планшетная версии с крестиком внутри"
      subheader="Сверху будет безопасный отступ до иконки"
    />
    <ModalCardBase
      dismissButtonMode="inside"
      style={{ width: 450, marginBottom: 20 }}
      header="Десктопная и планшетная версии с крестиком внутри"
      subheader="Безопасной зоны не будет, потому что есть иконка"
      icon={<Icon56MoneyTransferOutline />}
    />
  </AdaptivityProvider>
  <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
    <ModalCardBase
      style={{ width: 320, marginBottom: 20 }}
      dismissButtonMode="inside"
      header="Мобильная версия с крестиком внутри"
      subheader="Сверху будет безопасный отступ до иконки"
    />
    <ModalCardBase
      style={{ width: 320 }}
      dismissButtonMode="inside"
      icon={<Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
      header="Мобильная версия с крестиком внутри"
      subheader="Безопасной зоны не будет, потому что есть иконка"
    />
  </AdaptivityProvider>
</div>
```
