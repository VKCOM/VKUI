> Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

## Инициалы и градиенты

- Для лучшего отображения, используйте длину текста <b>не более 2 символов</b>.
- Для динамического определения градиента под пользователя используйте функцию
  [`calcInitialsAvatarColor`](https://vkcom.github.io/VKUI/#/Utils). Генерирует по формуле `user_id % 6 + 1`. Например,
  у пользователя с `user_id` 106 будет 5-й (`l-blue`) цвет градиента.

```jsx
const Default = () => {
  return (
    <Group>
      <Header mode="secondary">По умолчанию</Header>
      <SimpleCell before={<Avatar src={getAvatarUrl("user_id34")} />}>
        Татьяна Плуталова
      </SimpleCell>
    </Group>
  );
};

const Fallbacks = () => {
  return (
    <Group description="На случаи если аватарка не загрузилась или она отсутсвует">
      <Header mode="secondary">Фолбеки</Header>
      <SimpleCell
        before={<Avatar size={48} src="#" />}
        subtitle="Только от друзей друзей"
      >
        Заявки в друзья
      </SimpleCell>
      <SimpleCell
        before={
          <Avatar size={48} src="#" gradientColor="blue">
            ИБ
          </Avatar>
        }
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
    <Group>
      <Header mode="secondary">Другие возможности</Header>
      <AvatarPropsForm
        onUseInisitals={setUseInisitals}
        onGradientColorChange={setGradientColorChange}
        onBadgeChange={setBadge}
        onOverlayChange={setOverlay}
      />
      <div
        style={{
          display: "flex",
          padding: 12,
          gap: 8,
          flexFlow: "row wrap",
        }}
      >
        {[16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96].map(
          (size) => (
            <Avatar
              key={size}
              size={size}
              src={useInitials ? undefined : getAvatarUrl("user_id34")}
              gradientColor={gradientColor}
              badge={badge}
              overlay={overlay}
            >
              {useInitials ? "ТП" : null}
            </Avatar>
          )
        )}
      </div>
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
  const DEFAULT_VALUE = "Не задано";

  const [initials, setInitials] = React.useState(false);

  const [gradientColor, setGradientColor] = React.useState(DEFAULT_VALUE);

  const [badge, setBadge] = React.useState(DEFAULT_VALUE);
  const [badgeBackground, setBadgeBackground] = React.useState(DEFAULT_VALUE);

  const [overlay, setOverlay] = React.useState(DEFAULT_VALUE);
  const [overlayVisibility, setOverlayVisibility] =
    React.useState(DEFAULT_VALUE);

  React.useEffect(() => onUseInisitals(initials), [initials]);

  React.useEffect(
    () =>
      onGradientColorChange(
        gradientColor === DEFAULT_VALUE ? undefined : gradientColor
      ),
    [gradientColor]
  );

  React.useEffect(() => {
    if (badge === DEFAULT_VALUE) {
      onBadgeChange();
    } else if (badge === "custom") {
      onBadgeChange({
        background:
          badgeBackground === DEFAULT_VALUE ? undefined : badgeBackground,
        Icon: Icon20GiftCircleFillRed,
      });
    } else {
      onBadgeChange(badge);
    }
  }, [badge, badgeBackground, onBadgeChange]);

  React.useEffect(() => {
    if (overlay === DEFAULT_VALUE) {
      onOverlayChange();
    } else if (overlay === "true") {
      onOverlayChange(true);
    } else {
      onOverlayChange({
        theme: overlay,
        visibility:
          overlayVisibility === DEFAULT_VALUE ? undefined : overlayVisibility,
      });
    }
  }, [overlay, overlayVisibility, onOverlayChange]);

  return (
    <React.Fragment>
      <Checkbox
        checked={initials}
        onChange={(e) => setInitials(e.target.checked)}
      >
        Использовать инициалы вместо изображения
      </Checkbox>

      <FormItem
        top="gradientColor"
        bottom="Используйте инициалы вместо изображения, чтобы увидеть градиент"
      >
        <Select
          options={[
            { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
            { label: "1. red", value: "red" },
            { label: "2. orange", value: "orange" },
            { label: "3. yellow", value: "yellow" },
            { label: "4. green", value: "green" },
            { label: "5. l-blue", value: "l-blue" },
            { label: "6. violet", value: "violet" },
            { label: "blue", value: "blue" },
          ]}
          value={gradientColor}
          onChange={(e) => setGradientColor(e.target.value)}
        />
      </FormItem>

      <FormLayoutGroup mode="horizontal">
        <FormItem top="badge">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: "online", value: "online" },
              { label: "online-mobile", value: "online-mobile" },
              {
                label: "Provide custom icon (example, Icon20GiftCircleFillRed)",
                value: "custom",
              },
            ]}
            value={badge}
            onChange={(e) => setBadge(e.target.value)}
          />
        </FormItem>
        <FormItem top="badge[background]">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: "stroke", value: "stroke" },
              { label: "shadow", value: "shadow" },
            ]}
            value={badgeBackground}
            disabled={badge !== "custom"}
            onChange={(e) => setBadgeBackground(e.target.value)}
          />
        </FormItem>
      </FormLayoutGroup>

      <FormLayoutGroup mode="horizontal">
        <FormItem top="overlay">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: "true", value: "true" },
              { label: '{ theme: "light" }', value: "light" },
              { label: '{ theme: "dark" }', value: "dark" },
            ]}
            value={overlay}
            onChange={(e) => setOverlay(e.target.value)}
          />
        </FormItem>
        <FormItem top="overlay[visibility]">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: "on-hover", value: "on-hover" },
              { label: "always", value: "always" },
            ]}
            value={overlayVisibility}
            disabled={overlay === "true" || overlay === DEFAULT_VALUE}
            onChange={(e) => setOverlayVisibility(e.target.value)}
          />
        </FormItem>
      </FormLayoutGroup>
    </React.Fragment>
  );
};

<Example />;
```
