> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](#/Unstable).

Тултип, открывающийся при наведении мыши на `children`. В отличие от [TextTooltip](#/TextTooltip), имеет меньше ограничений
по содержимому. Компонент всё ещё предназначен для информирования пользователей, но внутри допускаются кнопки, ссылки, картинки.

```jsx { "props": { "layout": false, "iframe": true } }
<Checkbox>
  Специальные возможности
  <RichTooltip style={{maxWidth: 320}} content={
    <Subhead weight="regular" style={{padding: '8px 12px', color: 'var(--text_primary)'}}>
      Если включить эту настройку, элементы управления на сайте будут определены и озвучены синтезатором речи.
      <br/><br/>
      Настройка повышает доступность сайта и подходит для пользователей с ограниченными возможностями.
    </Subhead>
  }>
    <Icon16HelpOutline style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      position: 'relative',
      top: -1,
      color: 'var(--icon_secondary)'
    }}/>
  </RichTooltip>
</Checkbox>

<RichTooltip style={{maxWidth: 320}} content={
  <RichCell
    disabled
    after={
      <TextTooltip text="Добавить">
        <Icon28UserAddOutline/>
      </TextTooltip>
    }
    before={<Avatar size={72} src={getAvatarUrl('user_ilyagrshn')}/>}
    caption="Команда ВКонтакте, Санкт-Петербург"
    bottom={
      <UsersStack
        photos={[
          getAvatarUrl('user_ox'),
          getAvatarUrl('user_vitalyavolyn'),
          getAvatarUrl('user_eee'),
        ]}
      >73 общих друга</UsersStack>
    }
    actions={
      <React.Fragment>
        <Button>Добавить</Button>
        <Button mode="secondary">Скрыть</Button>
      </React.Fragment>
    }
  >
    Илья Гришин
  </RichCell>
}>
  <Link style={{display: 'inline-block', margin: 20}}>Илья Гришин</Link>
</RichTooltip>
```
