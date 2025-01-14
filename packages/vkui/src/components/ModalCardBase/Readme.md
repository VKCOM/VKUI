Низкоуровневый компонент для отрисовки карточки со сложным содержимым. Используется внутри [`ModalCard`](#/ModalCard).

> **Важно**
>
> В качестве значения свойства `icon` следует использовать:
>
> - либо контурные иконки размером `56`, например, `<Icon56NotificationOutline />`;
> - либо `<Avatar size={72} src="" />`.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ margin: 20 }}>
  <Text style={{ marginBottom: 10 }}>Десктопная и планшетная версии</Text>
  <AdaptivityProvider viewWidth={ViewWidth.TABLET}>
    <ModalCardBase
      style={{ width: 450, marginBottom: 20 }}
      title="Отправляйте деньги друзьям, используя банковскую карту"
      description="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
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
      title="Добавить игру «Загадки детства» в меню?"
      description="Игра появится под списком разделов на экране меню и будет всегда под рукой."
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
      title="Добавить игру «Загадки детства» в меню?"
      description="Игра появится под списком разделов на экране меню и будет всегда под рукой."
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
      <UsersStack photos={[getAvatarUrl('user_lihachyov')]} avatarsPosition="block-start">
        Понравилось Муртолу Левзачеву
      </UsersStack>
    </ModalCardBase>
  </AdaptivityProvider>
</div>
```

## Кнопка для закрытия

Через свойство `dismissButtonMode=inside|outside|none` можно задать вид кнопки закрытия.
Согласно нашим дизайн-гайдам, `dismissButtonMode=outside` отображается только для `compact`-режима (десктопная и планшетные версии).
Для `iOS` всегда будет применяться `dismissButtonMode=inside` в `regular`-режиме (мобильная версия).

> **Важно**
>
> Обратите внимание, что свойство `dismissButtonMode=none`, которое позволяет скрыть крестик, или свойство `preventClose`,
> отключающее возможность закрыть модалку стандартными способами,
> негативно влияет на пользовательский опыт, используйте эти свойства только если точно знаете, что делаете.

## Отступы между контентом и кнопками действий (`actions`)

По умолчанию верхний отступ от кнопок действий `actions` равняется `16px`. Согласно дизайн-системе отступ может быть больше в зависимости от того какие данные отображаются внутри `ModalCardBase`.
Если необходимо увеличить отступ, то передавайте в `actions` компонент [Spacing](#/Spacing).

```jsx static
<ModalCardBase
  dismissButtonMode="inside"
  dismissLabel="Закрыть"
  style={{ width: 450, marginBottom: 20 }}
  title="Десктопная и планшетная версии с крестиком внутри"
  description="Сверху будет безопасный отступ до иконки"
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

- Если`ModalCardBase` является модальным окном, то ему надо добавить аттрибут `aria-role=dialog`. Также у него обязательно должно быть имя — его краткое название. Благодаря этому пользователи вспомогательных технологий знают, что это за элемент и какое у него содержимое.

  Задать имя можно с помощью следующих способов:

  - используя свойство `title`;
  - используя свойство `aria-label`;
  - используя свойство `aria-labelledby`;

- Чтобы кнопка для закрытия была доступной для ассистивных технологий, мы передаем в нее скрытый визуально текст, который сможет прочитать скринридер. Чтобы заменить текст, передайте его в `dismissLabel`.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ margin: 20 }}>
  <AdaptivityProvider viewWidth={ViewWidth.TABLET}>
    <ModalCardBase
      dismissButtonMode="inside"
      dismissLabel="Закрыть"
      style={{ width: 450, marginBottom: 20 }}
      title="Десктопная и планшетная версии с крестиком внутри"
      description="Сверху будет безопасный отступ до иконки"
    />
    <ModalCardBase
      dismissButtonMode="inside"
      style={{ width: 450, marginBottom: 20 }}
      title="Десктопная и планшетная версии с крестиком внутри"
      description="Безопасной зоны не будет, потому что есть иконка"
      icon={<Icon56MoneyTransferOutline />}
    />
    <ModalCardBase
      dismissButtonMode="none"
      style={{ width: 450, marginBottom: 20 }}
      title="Десктопная и планшетная версии без крестика"
      description="Очень плохая модалка"
    />
  </AdaptivityProvider>
  <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
    <ModalCardBase
      style={{ width: 320, marginBottom: 20 }}
      dismissButtonMode="inside"
      title="Мобильная версия с крестиком внутри"
      description="Сверху будет безопасный отступ до иконки"
    />
    <ModalCardBase
      style={{ width: 320, marginBottom: 20 }}
      dismissButtonMode="inside"
      icon={<Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
      title="Мобильная версия с крестиком внутри"
      description="Безопасной зоны не будет, потому что есть иконка"
    />
    <ModalCardBase
      dismissButtonMode="none"
      style={{ width: 450 }}
      title="Мобильная версия без крестика"
      description="Очень плохая модалка"
    />
  </AdaptivityProvider>
</div>
```
