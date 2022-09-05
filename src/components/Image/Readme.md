> Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
const Default = () => {
  return (
    <Group>
      <Header mode="secondary">По умолчанию</Header>
      <SimpleCell
        before={<Image src={getAvatarUrl("app_shorm_online")} />}
        description="Ролевая"
      >
        Шторм онлайн
      </SimpleCell>
    </Group>
  );
};

/**
 * Какие значения принимают параметры смотрите в разделе "Свойства и методы".
 */
const OthersFeatures = () => {
  const [borderRadius, setBorderRadius] = React.useState();
  const [badge, setBadge] = React.useState();
  const [overlay, setOverlay] = React.useState();

  return (
    <Group>
      <Header mode="secondary">Другие возможности</Header>
      <ImagePropsForm
        onBorderRadiusChange={setBorderRadius}
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
            <Image
              key={size}
              size={size}
              src={getAvatarUrl("app_shorm_online")}
              badge={badge}
              borderRadius={borderRadius}
              overlay={overlay}
            />
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
        <PanelHeader>Image</PanelHeader>

        <Default />

        <OthersFeatures />
      </Panel>
    </View>
  );
};

const ImagePropsForm = ({
  onBorderRadiusChange,
  onBadgeChange,
  onOverlayChange,
}) => {
  const DEFAULT_VALUE = "Не задано";

  const [borderRadius, setBorderRadius] = React.useState(DEFAULT_VALUE);

  const [badge, setBadge] = React.useState(false);
  const [badgeBackground, setBadgeBackground] = React.useState(DEFAULT_VALUE);

  const [overlay, setOverlay] = React.useState(DEFAULT_VALUE);
  const [overlayVisibility, setOverlayVisibility] =
    React.useState(DEFAULT_VALUE);

  React.useEffect(
    () =>
      onBorderRadiusChange(
        borderRadius === DEFAULT_VALUE ? undefined : borderRadius
      ),
    [borderRadius]
  );

  React.useEffect(() => onBadgeChange(badge), [badge]);

  React.useEffect(() => {
    if (!badge) {
      onBadgeChange();
    } else if (badge) {
      onBadgeChange({
        background:
          badgeBackground === DEFAULT_VALUE ? undefined : badgeBackground,
        Icon: Icon20GiftCircleFillRed,
      });
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
      <FormItem top="borderRadius">
        <Select
          options={[
            { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
            { label: "s", value: "s" },
            { label: "m", value: "m" },
            { label: "l", value: "l" },
          ]}
          value={borderRadius}
          onChange={(e) => setBorderRadius(e.target.value)}
        />
      </FormItem>

      <FormLayoutGroup mode="horizontal">
        <FormItem top="badge">
          <Checkbox
            checked={badge}
            onChange={(e) => setBadge(e.target.checked)}
          >
            badge (example, Icon20GiftCircleFillRed)
          </Checkbox>
        </FormItem>
        <FormItem top="badge[background]">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: "stroke", value: "stroke" },
              { label: "shadow", value: "shadow" },
            ]}
            value={badgeBackground}
            disabled={!badge}
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
