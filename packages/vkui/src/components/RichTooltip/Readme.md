> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](https://vkcom.github.io/VKUI/#/Unstable).

Тултип, открывающийся при наведении мыши на `children`. В отличие от [TextTooltip](https://vkcom.github.io/VKUI/#/TextTooltip), имеет меньше ограничений
по содержимому. Компонент всё ещё предназначен для информирования пользователей, но внутри допускаются кнопки, ссылки, картинки.

```jsx { "props": { "layout": false, "iframe": true } }
<Checkbox style={{userSelect: 'none'}}>
  Специальные возможности
  <RichTooltip style={{maxWidth: 320}} content={
    <Subhead style={{padding: '8px 12px', color: 'var(--vkui--color_text_primary)'}}>
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
      color: 'var(--vkui--color_icon_secondary)'
    }}/>
  </RichTooltip>
</Checkbox>

<RichTooltip style={{maxWidth: 320}} content={
  <RichCell
    disabled
    after={
      <RichCell.Icon aria-hidden>
        <TextTooltip text="Добавить">
          <Icon28UserAddOutline />
        </TextTooltip>
      </RichCell.Icon>
    }
    before={<Avatar size={48} src={getAvatarUrl('user_ilyagrshn')}/>}
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
      <ButtonGroup mode="horizontal" gap="s" stretched>
        <Button>Добавить</Button>
        <Button mode="secondary">Скрыть</Button>
      </ButtonGroup>
    }
  >
    Илья Гришин
  </RichCell>
}>
  <Link style={{display: 'inline-block', margin: 20, userSelect: 'none'}}>Илья Гришин</Link>
</RichTooltip>
```

## Кастомная стрелка – `ArrowIcon`

> ⚠️ Для начала, следует ознакомиться с описанием параметра `ArrowIcon`.

```jsx { "props": { "layout": false, "adaptivity": true } }
const ARROW_HEIGHT = 11;

/**
 * @param {React.SVGAttributes<SVGSVGElement>} props
 */
const CustomIcon = (props) => {
  return (
    <svg
      width="80"
      height={ARROW_HEIGHT}
      viewBox={`0 0 80 ${ARROW_HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M40 0C33 5.5 20 10 0 10v1h80v-1C60 10 47 5.5 40 0Z" fill="currentColor" />
    </svg>
  );
};

const App = () => {
  return (
    <RichTooltip
      content={
        <Subhead style={{ padding: '8px 12px', color: 'var(--vkui--color_text_primary)' }}>
          У этого тултипа кастомная стрелка
        </Subhead>
      }
      arrowHeight={ARROW_HEIGHT}
      arrowPadding={6}
      ArrowIcon={CustomIcon}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Якорь
      </div>
    </RichTooltip>
  );
};

<App />;
```
