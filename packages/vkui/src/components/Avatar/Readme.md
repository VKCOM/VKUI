> Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

## Инициалы и градиенты

- Для лучшего отображения, используйте длину текста <b>не более 2 символов</b>.
- Для динамического определения градиента под пользователя используйте функцию
  [`calcInitialsAvatarColor`](#/Utils). Генерирует по формуле `user_id % 6 + 1`. Например,
  у пользователя с `user_id` 106 будет 5-й (`l-blue`) цвет градиента.

```jsx
const Default = () => {
  return (
    <Group header={<Header size="s">По умолчанию</Header>}>
      <SimpleCell before={<Avatar src={getAvatarUrl('user_id34')} />}>Татьяна Плуталова</SimpleCell>
    </Group>
  );
};

const Fallbacks = () => {
  return (
    <Group
      header={<Header size="s">Фолбеки</Header>}
      description="На случаи если аватарка не загрузилась или она отсутсвует"
    >
      <SimpleCell
        before={<Avatar size={48} fallbackIcon={<Icon28Users />} src="#" />}
        subtitle="Только от друзей друзей"
      >
        Заявки в друзья
      </SimpleCell>
      <SimpleCell
        before={<Avatar size={48} src="#" initials="ИБ" gradientColor="blue" />}
        subtitle="Только от друзей друзей"
      >
        Заявки в друзья
      </SimpleCell>
    </Group>
  );
};

/**
 * Какие значения принимают параметры смотрите в разделе "Свойства и методы".
 */
const OthersFeatures = () => {
  const [useInitials, setUseInisitals] = React.useState();
  const [gradientColor, setGradientColorChange] = React.useState();
  const [badge, setBadge] = React.useState();
  const [overlay, setOverlay] = React.useState();

  return (
    <Group header={<Header size="s">Другие возможности</Header>}>
      <AvatarPropsForm
        onUseInisitals={setUseInisitals}
        onGradientColorChange={setGradientColorChange}
        onBadgeChange={setBadge}
        onOverlayChange={setOverlay}
      />
      <Flex margin="auto" gap="m">
        {[16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96].map((size) => (
          <Avatar
            key={`${size}-${useInitials}`}
            size={size}
            src={useInitials ? undefined : getAvatarUrl('user_id34')}
            gradientColor={gradientColor}
            initials={useInitials ? 'ТП' : null}
          >
            {size >= 24 && (badge === 'online' || badge === 'online-mobile') ? (
              <Avatar.BadgeWithPreset preset={badge} />
            ) : (
              size >= 24 &&
              badge && (
                <Avatar.Badge background={badge.background}>
                  <IconExampleForBadgeBasedOnImageBaseSize />
                </Avatar.Badge>
              )
            )}
            {overlay && (
              <Avatar.Overlay aria-label="Кнопка для изображения" {...overlay}>
                <IconExampleForOverlayBasedOnImageBaseSize />
              </Avatar.Overlay>
            )}
          </Avatar>
        ))}
      </Flex>
    </Group>
  );
};

const Example = () => {
  return (
    <View activePanel="avatar">
      <Panel id="avatar">
        <PanelHeader>Avatar</PanelHeader>

        <Default />

        <Fallbacks />

        <OthersFeatures />
      </Panel>
    </View>
  );
};

const AvatarPropsForm = ({
  onUseInisitals,
  onGradientColorChange,
  onBadgeChange,
  onOverlayChange,
}) => {
  const DEFAULT_VALUE = 'Не задано';

  const [initials, setInitials] = React.useState(false);

  const [gradientColor, setGradientColor] = React.useState(DEFAULT_VALUE);

  const [badge, setBadge] = React.useState(DEFAULT_VALUE);
  const [badgeBackground, setBadgeBackground] = React.useState(DEFAULT_VALUE);

  const [overlay, setOverlay] = React.useState(false);
  const [overlayTheme, setOverlayTheme] = React.useState(DEFAULT_VALUE);
  const [overlayVisibility, setOverlayVisibility] = React.useState(DEFAULT_VALUE);

  React.useEffect(() => onUseInisitals(initials), [initials]);

  React.useEffect(
    () => onGradientColorChange(gradientColor === DEFAULT_VALUE ? undefined : gradientColor),
    [gradientColor],
  );

  React.useEffect(() => {
    if (badge === DEFAULT_VALUE) {
      onBadgeChange();
    } else if (badge === 'children') {
      onBadgeChange({
        background: badgeBackground === DEFAULT_VALUE ? undefined : badgeBackground,
      });
    } else {
      onBadgeChange(badge);
    }
  }, [badge, badgeBackground, onBadgeChange]);

  React.useEffect(() => {
    if (!overlay) {
      onOverlayChange();
    } else if (overlay) {
      onOverlayChange({
        theme: overlayTheme === DEFAULT_VALUE ? undefined : overlayTheme,
        visibility: overlayVisibility === DEFAULT_VALUE ? undefined : overlayVisibility,
      });
    }
  }, [overlay, overlayTheme, overlayVisibility, onOverlayChange]);

  return (
    <React.Fragment>
      <Checkbox checked={initials} onChange={(e) => setInitials(e.target.checked)}>
        Использовать инициалы вместо изображения
      </Checkbox>

      <FormItem
        top="gradientColor"
        bottom="Используйте инициалы вместо изображения, чтобы увидеть градиент"
      >
        <Select
          options={[
            { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
            { label: '1. red', value: 'red' },
            { label: '2. orange', value: 'orange' },
            { label: '3. yellow', value: 'yellow' },
            { label: '4. green', value: 'green' },
            { label: '5. l-blue', value: 'l-blue' },
            { label: '6. violet', value: 'violet' },
            { label: 'blue', value: 'blue' },
          ]}
          value={gradientColor}
          onChange={(_, newValue) => setGradientColor(newValue)}
        />
      </FormItem>

      <FormLayoutGroup mode="horizontal">
        <FormItem top="Avatar.Badge or Avatar.BadgeWithPreset">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: '📝 Avatar.Badge', value: 'header-1', disabled: true },
              {
                label: 'children={<Icon20GiftCircleFillRed />}',
                value: 'children',
              },
              {
                label: '📝 Avatar.BadgeWithPreset',
                value: 'header-2',
                disabled: true,
              },
              { label: 'preset="online"', value: 'online', hierarchy: 1 },
              { label: 'preset="online-mobile"', value: 'online-mobile' },
            ]}
            value={badge}
            onChange={(_, newValue) => setBadge(newValue)}
          />
        </FormItem>
        <FormItem top="Avatar.Badge[background]">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: 'stroke', value: 'stroke' },
              { label: 'shadow', value: 'shadow' },
            ]}
            value={badgeBackground}
            disabled={badge !== 'children'}
            onChange={(_, newValue) => setBadgeBackground(newValue)}
          />
        </FormItem>
      </FormLayoutGroup>

      <FormLayoutGroup mode="horizontal">
        <FormItem top="Avatar.Overlay">
          <Checkbox checked={overlay} onChange={(e) => setOverlay(e.target.checked)}>
            overlay (example, Icon24AddOutline, Icon28AddOutline)
          </Checkbox>
        </FormItem>
      </FormLayoutGroup>

      <FormLayoutGroup mode="horizontal">
        <FormItem top="Avatar.Overlay[theme]">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: 'light', value: 'light' },
              { label: 'dark', value: 'dark' },
            ]}
            value={overlayTheme}
            disabled={!overlay}
            onChange={(_, newValue) => setOverlayTheme(newValue)}
          />
        </FormItem>
        <FormItem top="Avatar.Overlay[visibility]">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: 'on-hover', value: 'on-hover' },
              { label: 'always', value: 'always' },
            ]}
            value={overlayVisibility}
            disabled={!overlay}
            onChange={(_, newValue) => setOverlayVisibility(newValue)}
          />
        </FormItem>
      </FormLayoutGroup>
    </React.Fragment>
  );
};

<Example />;
```
