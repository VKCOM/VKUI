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

const WithFloatElements = () => {
  const [showContextMenu, setShowContextMenu] = useState(true);
  const [contextMenuOpened, setContextMenuOpened] = useState(false);
  const [contextMenuVisibility, setContextMenuVisibility] = useState('on-hover');

  return (
    <Group header={<Header mode="secondary">C позиционированными компонентами</Header>}>
      <FormLayoutGroup mode="horizontal">
        <FormItem top="Контекстное меню">
          <Checkbox
            checked={showContextMenu}
            onChange={(e) => setShowContextMenu(e.target.checked)}
          >
            Показать контекстное меню
          </Checkbox>
        </FormItem>
        <FormItem top="Контекстное меню">
          <Select
            options={[
              { label: 'Всегда', value: 'always' },
              { label: 'При наведении на картинку', value: 'on-hover' },
            ]}
            value={contextMenuVisibility}
            disabled={!showContextMenu}
            onChange={(e) => setContextMenuVisibility(e.target.value)}
          />
        </FormItem>
      </FormLayoutGroup>
      <Flex margin="auto" gap={'m'}>
        <Image size={96} src={getAvatarUrl('app_shorm_online')} alt="Приложение шторм онлайн">
          {showContextMenu && (
            <Image.FloatElement
              position="top-end"
              inlineIndent="l"
              blockIndent="l"
              visibility={contextMenuOpened ? 'always' : contextMenuVisibility}
            >
              <ContextMenu onShownChange={setContextMenuOpened} />
            </Image.FloatElement>
          )}
        </Image>
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

        <WithFloatElements />
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
          onChange={(_, newValue) => setBorderRadius(newValue)}
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
            onChange={(_, newValue) => setBadgeBackground(newValue)}
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
            onChange={(_, newValue) => setOverlayTheme(newValue)}
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
            onChange={(_, newValue) => setOverlayVisibility(newValue)}
          />
        </FormItem>
      </FormLayoutGroup>
    </React.Fragment>
  );
};

const ContextMenu = ({ onShownChange }) => {
  return (
    <Popover
      noStyling
      trigger="click"
      role="dialog"
      onShownChange={onShownChange}
      content={({ onClose }) => (
        <div
          style={{
            backgroundColor: 'var(--vkui--color_background_modal_inverse)',
            borderRadius: 8,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <CellButton role="menuitem" before={<Icon28AddOutline />} onClick={onClose}>
            Добавить
          </CellButton>
          <CellButton
            role="menuitem"
            before={<Icon28DeleteOutline />}
            mode="danger"
            onClick={onClose}
          >
            Удалить
          </CellButton>
        </div>
      )}
    >
      <Button mode="primary" after={<Icon16MoreHorizontal />}></Button>
    </Popover>
  );
};

<Example />;
```
