Низкоуровневый компонент для отрисовки карточки со сложным содержимым. Используется внутри [ModalCard](https://vkcom.github.io/VKUI/#/ModalCard).

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ margin: 20 }}>
  <Text style={{ marginBottom: 10 }}>Десктопная и планшетная версии</Text>
  <AdaptivityProvider viewWidth={ViewWidth.TABLET}>
    <ModalCardBase
      style={{ width: 450, marginBottom: 20 }}
      header="Отправляйте деньги друзьям, используя банковскую карту"
      subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
      actions={
        <Button size="l" mode="primary" stretched>
          Попробовать
        </Button>
      }
      icon={<Icon56MoneyTransferOutline />}
    >
      <Spacing size={16} />
    </ModalCardBase>
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
        <ButtonGroup mode="horizontal" gap="s" stretched>
          <Button size="l" mode="primary" stretched>
            Да
          </Button>
          <Button size="l" mode="secondary" stretched>
            Позже
          </Button>
        </ButtonGroup>
      }
    >
      <Spacing size={16} />
    </ModalCardBase>
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
        <ButtonGroup mode="horizontal" gap="s" stretched>
          <Spacing size={20} />
          <Button size="l" mode="primary" stretched>
            Да
          </Button>
          <Button size="l" mode="secondary" stretched>
            Позже
          </Button>
        </ButtonGroup>
      }
    >
      <React.Fragment>
        <Spacing size={20} />
        <UsersStack photos={[getAvatarUrl('user_lihachyov')]}>
          Понравилось Муртолу Левзачеву
        </UsersStack>
        <Spacing size={8} />
      </React.Fragment>
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
Если необходимо увеличить отступ, то передавайте в `children` компонент [Spacing](#/Spacing).

```jsx static
<ModalCardBase
  dismissButtonMode="inside"
  dismissLabel="Закрыть"
  style={{ width: 450, marginBottom: 20 }}
  header="Десктопная и планшетная версии с крестиком внутри"
  subheader="Сверху будет безопасный отступ до иконки"
>
  <Spacing size={16} />
</ModalCardBase>
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
    >
      <Spacing size={16} />
    </ModalCardBase>
    <ModalCardBase
      dismissButtonMode="inside"
      style={{ width: 450, marginBottom: 20 }}
      header="Десктопная и планшетная версии с крестиком внутри"
      subheader="Безопасной зоны не будет, потому что есть иконка"
      icon={<Icon56MoneyTransferOutline />}
    >
      <Spacing size={16} />
    </ModalCardBase>
  </AdaptivityProvider>
  <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
    <ModalCardBase
      style={{ width: 320, marginBottom: 20 }}
      dismissButtonMode="inside"
      header="Мобильная версия с крестиком внутри"
      subheader="Сверху будет безопасный отступ до иконки"
    >
      <Spacing size={16} />
    </ModalCardBase>
    <ModalCardBase
      style={{ width: 320 }}
      dismissButtonMode="inside"
      icon={<Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
      header="Мобильная версия с крестиком внутри"
      subheader="Безопасной зоны не будет, потому что есть иконка"
    >
      <Spacing size={16} />
    </ModalCardBase>
  </AdaptivityProvider>
</div>
```
