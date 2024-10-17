ActionSheet – имитация [нативного компонента](https://developer.apple.com/design/human-interface-guidelines/action-sheets/).
Удобно использовать, когда нужно дать пользователю выбрать одно из множества действий. В качестве `children` принимает
коллекцию `ActionSheetItem`.
На больших экранах прокрутка не отключается.

Передаётся в качестве значения свойства `popout` компонента [`SplitLayout`](#/SplitLayout).

> **Важно**
>
> - Нужно обязательно передать `onClose` для обработки закрытия `ActionSheet` изнутри.
> - Согласно гайдлайнам Apple, в `ActionSheet` должен быть элемент для закрытия, для этого предусмотрен атрибут `iosCloseItem`. По умолчанию будет использоваться `ActionSheetDefaultIosCloseItem`.
>   Для Android версии он не нужен.

## Цифровая доступность (a11y)

Старайтесь сопровождать элемент текстовым описанием для корректной работы скринридеров. Для этого
необходимо вручную передавать некоторые параметры, такие как `aria-label`.

- У всплывающего элемента уже заданы атрибуты `role="dialog"` и `aria-modal="true"`, потому что по умолчанию он как раз появляется как диалог и, пока он не закроется, нельзя взаимодействовать с другими элементами на странице. Эти аттрибуты можно перебить явно передавая их компоненту.
- У целевого элемента обязательно должен быть выставлен атрибут `aria-expanded`.

```jsx { "props": { "layout": false, "adaptivity": true } }
const [popout, setPopout] = useState(null);
const [openedPopoutName, setOpenedPopoutName] = useState(null);

const openActionSheet = (name, popout) => {
  setPopout(popout);
  setOpenedPopoutName(name);
};
const onClose = () => {
  setPopout(null);
  setOpenedPopoutName(null);
};

const baseTargetRef = React.useRef(null);
const iconsTargetRef = React.useRef(null);
const subtitleTargetRef = React.useRef(null);
const selectableTargetRef = React.useRef(null);
const titleTargetRef = React.useRef(null);
const baseTopTargetRef = React.useRef(null);

const openBase = () =>
  openActionSheet(
    'base',
    <ActionSheet onClose={onClose} toggleRef={baseTargetRef}>
      <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
      <ActionSheetItem>Закрепить запись</ActionSheetItem>
      <ActionSheetItem>Выключить комментирование</ActionSheetItem>
      <ActionSheetItem>Закрепить запись</ActionSheetItem>
      <ActionSheetItem mode="destructive">Удалить запись</ActionSheetItem>
    </ActionSheet>,
  );

const openIcons = () =>
  openActionSheet(
    'icons',
    <ActionSheet onClose={onClose} toggleRef={iconsTargetRef}>
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer IconCompact={Icon20WriteOutline} IconRegular={Icon28EditOutline} />
        }
      >
        Редактировать профиль
      </ActionSheetItem>
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer
            IconCompact={Icon20ListPlayOutline}
            IconRegular={Icon28ListPlayOutline}
          />
        }
      >
        Слушать далее
      </ActionSheetItem>
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer IconCompact={Icon20ShareOutline} IconRegular={Icon28ShareOutline} />
        }
      >
        Поделиться
      </ActionSheetItem>
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer IconCompact={Icon20CopyOutline} IconRegular={Icon28CopyOutline} />
        }
      >
        Скопировать ссылку
      </ActionSheetItem>
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer
            IconCompact={platform === 'ios' ? Icon20DeleteOutline : Icon20DeleteOutlineAndroid}
            IconRegular={platform === 'ios' ? Icon28DeleteOutline : Icon28DeleteOutlineAndroid}
          />
        }
        mode="destructive"
      >
        Удалить плейлист
      </ActionSheetItem>
    </ActionSheet>,
  );

const openSubtitle = () =>
  openActionSheet(
    'subtitle',
    <ActionSheet onClose={onClose} toggleRef={subtitleTargetRef}>
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer
            IconCompact={Icon20GearOutline}
            IconRegular={Icon28SettingsOutline}
          />
        }
        subtitle="Авто"
      >
        Качество
      </ActionSheetItem>
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer
            IconCompact={Icon20TextCenterOutline}
            IconRegular={Icon28SubtitlesOutline}
          />
        }
        subtitle="Отсутствуют"
        disabled
      >
        Субтитры
      </ActionSheetItem>
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer IconCompact={Icon20Play} IconRegular={Icon28PlaySpeedOutline} />
        }
        subtitle="Обычная"
      >
        Скорость воспроизведения
      </ActionSheetItem>
    </ActionSheet>,
  );

const SelectableActionSheet = () => {
  const [filter, setFilter] = useState('Нормальная');
  const onChange = (e) => {
    setFilter(e.target.value);
  };

  const speeds = ['0.25x', '0.5x', '0.75x', 'Нормальная', '1.25x', '1.5x', '2x', '3x'];

  return (
    <ActionSheet title="Изменить скорость видео" onClose={onClose} toggleRef={selectableTargetRef}>
      {speeds.map((speed) => (
        <ActionSheetItem
          onChange={onChange}
          checked={filter === speed}
          name="filter"
          value={speed}
          selectable
        >
          {speed}
        </ActionSheetItem>
      ))}
    </ActionSheet>
  );
};

const openSelectable = () => openActionSheet('selectable', <SelectableActionSheet />);

const openTitle = () =>
  openActionSheet(
    'title',
    <ActionSheet
      onClose={onClose}
      title="Вы действительно хотите удалить это видео из Ваших видео?"
      toggleRef={titleTargetRef}
    >
      <ActionSheetItem mode="destructive">Удалить видео</ActionSheetItem>
    </ActionSheet>,
  );

const openBaseTop = () =>
  openActionSheet(
    'baseTop',
    <ActionSheet onClose={onClose} toggleRef={baseTopTargetRef} placement="top-end">
      <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
      <ActionSheetItem>Закрепить запись</ActionSheetItem>
      <ActionSheetItem>Выключить комментирование</ActionSheetItem>
      <ActionSheetItem>Закрепить запись</ActionSheetItem>
      <ActionSheetItem mode="destructive">Удалить запись</ActionSheetItem>
    </ActionSheet>,
  );

React.useEffect(openBase, []);

<SplitLayout popout={popout}>
  <SplitCol>
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>ActionSheet</PanelHeader>
        <Group>
          <CellButton
            getRootRef={baseTargetRef}
            onClick={openBase}
            aria-expanded={'base' === openedPopoutName}
          >
            Базовый список
          </CellButton>
          <CellButton
            getRootRef={iconsTargetRef}
            onClick={openIcons}
            aria-expanded={'icons' === openedPopoutName}
          >
            Список с иконками
          </CellButton>
          <CellButton
            getRootRef={subtitleTargetRef}
            onClick={openSubtitle}
            aria-expanded={'subtitle' === openedPopoutName}
          >
            С подзаголовком
          </CellButton>
          <CellButton
            getRootRef={selectableTargetRef}
            onClick={openSelectable}
            aria-expanded={'selectable' === openedPopoutName}
          >
            Выделяемые
          </CellButton>
          <CellButton
            getRootRef={titleTargetRef}
            onClick={openTitle}
            aria-expanded={'title' === openedPopoutName}
          >
            C заголовком
          </CellButton>
          <CellButton
            getRootRef={baseTopTargetRef}
            onClick={openBaseTop}
            aria-expanded={'baseTop' === openedPopoutName}
          >
            Базовый список, открывается наверх на десктопах
          </CellButton>
        </Group>
      </Panel>
    </View>
  </SplitCol>
</SplitLayout>;
```
