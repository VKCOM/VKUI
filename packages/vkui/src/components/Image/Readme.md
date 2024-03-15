> Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
const Default = () => {
  return (
    <Group header={<Header mode="secondary">По умолчанию</Header>}>
      <SimpleCell
        before={<Image src={getAvatarUrl('app_shorm_online')} alt="Приложение шторм онлайн" />}
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
    <Group header={<Header mode="secondary">Другие возможности</Header>}>
      <ImagePropsForm
        onBorderRadiusChange={setBorderRadius}
        onBadgeChange={setBadge}
        onOverlayChange={setOverlay}
      />
      <div
        style={{
          display: 'flex',
          padding: 12,
          gap: 8,
          flexFlow: 'row wrap',
        }}
      >
        {[16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96].map((size) => (
          <Image
            key={size}
            size={size}
            src={getAvatarUrl('app_shorm_online')}
            alt="Приложение шторм онлайн"
            borderRadius={borderRadius}
          >
            {size >= 24 && badge && (
              <Image.Badge {...badge}>
                <IconExampleForBadgeBasedOnImageBaseSize />
              </Image.Badge>
            )}
            {overlay && (
              <Image.Overlay aria-label="Кнопка для изображения" {...overlay}>
                <IconExampleForOverlayBasedOnImageBaseSize />
              </Image.Overlay>
            )}
          </Image>
        ))}
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

const ImagePropsForm = ({ onBorderRadiusChange, onBadgeChange, onOverlayChange }) => {
  const DEFAULT_VALUE = 'Не задано';

  const [borderRadius, setBorderRadius] = React.useState(DEFAULT_VALUE);

  const [badge, setBadge] = React.useState(false);
  const [badgeBackground, setBadgeBackground] = React.useState(DEFAULT_VALUE);

  const [overlay, setOverlay] = React.useState(false);
  const [overlayTheme, setOverlayTheme] = React.useState(DEFAULT_VALUE);
  const [overlayVisibility, setOverlayVisibility] = React.useState(DEFAULT_VALUE);

  React.useEffect(
    () => onBorderRadiusChange(borderRadius === DEFAULT_VALUE ? undefined : borderRadius),
    [borderRadius],
  );

  React.useEffect(() => onBadgeChange(badge), [badge]);

  React.useEffect(() => {
    if (!badge) {
      onBadgeChange();
    } else if (badge) {
      onBadgeChange({
        background: badgeBackground === DEFAULT_VALUE ? undefined : badgeBackground,
      });
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
      <FormItem top="borderRadius">
        <Select
          options={[
            { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
            { label: 's', value: 's' },
            { label: 'm', value: 'm' },
            { label: 'l', value: 'l' },
          ]}
          value={borderRadius}
          onChange={(e) => setBorderRadius(e.target.value)}
        />
      </FormItem>

      <FormLayoutGroup mode="horizontal">
        <FormItem top="Image.Badge">
          <Checkbox checked={badge} onChange={(e) => setBadge(e.target.checked)}>
            badge (example, Icon20GiftCircleFillRed)
          </Checkbox>
        </FormItem>
        <FormItem top="Image.Badge[background]">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: 'stroke', value: 'stroke' },
              { label: 'shadow', value: 'shadow' },
            ]}
            value={badgeBackground}
            disabled={!badge}
            onChange={(e) => setBadgeBackground(e.target.value)}
          />
        </FormItem>
      </FormLayoutGroup>

      <FormLayoutGroup mode="horizontal">
        <FormItem top="Image.Overlay">
          <Checkbox checked={overlay} onChange={(e) => setOverlay(e.target.checked)}>
            overlay (example, Icon24AddOutline, Icon28AddOutline)
          </Checkbox>
        </FormItem>
      </FormLayoutGroup>

      <FormLayoutGroup mode="horizontal">
        <FormItem top="Image.Overlay[theme]">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: 'light', value: 'light' },
              { label: 'dark', value: 'dark' },
            ]}
            value={overlayTheme}
            disabled={!overlay}
            onChange={(e) => setOverlayTheme(e.target.value)}
          />
        </FormItem>
        <FormItem top="Image.Overlay[visibility]">
          <Select
            options={[
              { label: DEFAULT_VALUE, value: DEFAULT_VALUE },
              { label: 'on-hover', value: 'on-hover' },
              { label: 'always', value: 'always' },
            ]}
            value={overlayVisibility}
            disabled={!overlay}
            onChange={(e) => setOverlayVisibility(e.target.value)}
          />
        </FormItem>
      </FormLayoutGroup>
    </React.Fragment>
  );
};

<Example />;
```
