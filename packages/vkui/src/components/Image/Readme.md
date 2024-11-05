> Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
const Default = () => {
  return (
    <Group header={<Header size="s">По умолчанию</Header>}>
      <SimpleCell
        before={<Image src={getAvatarUrl('app_shorm_online')} alt="Приложение шторм онлайн" />}
        description="Ролевая"
      >
        Шторм онлайн
      </SimpleCell>
    </Group>
  );
};

const Responsive = () => {
  const [size, setSize] = React.useState(100);
  return (
    <Group
      header={
        <Header size="s">Изображения без фиксированных размеров с сохранением пропорций</Header>
      }
    >
      <Flex margin="auto" direction="column" gap="m">
        <Flex.Item flex="shrink">
          <Button onClick={() => setSize((prev) => (prev >= 250 ? 100 : prev + 50))}>
            Изменить размер
          </Button>
        </Flex.Item>
        <div style={{ width: size }}>
          <Image keepAspectRatio src={getAvatarUrl('app_zagadki', 200)} widthSize="100%" />
        </div>
      </Flex>
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
    <Group header={<Header size="s">Другие возможности</Header>}>
      <ImagePropsForm
        onBorderRadiusChange={setBorderRadius}
        onBadgeChange={setBadge}
        onOverlayChange={setOverlay}
      />
      <Flex margin="auto" gap={['m', '2xl']}>
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
      </Flex>
    </Group>
  );
};

const Example = () => {
  return (
    <View activePanel="avatar">
      <Panel id="avatar">
        <PanelHeader>Image</PanelHeader>
        <Default />
        <Responsive />
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
          onChange={setBorderRadius}
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
            onChange={setBadgeBackground}
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
            onChange={setOverlayTheme}
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
            onChange={setOverlayVisibility}
          />
        </FormItem>
      </FormLayoutGroup>
    </React.Fragment>
  );
};

<Example />;
```
