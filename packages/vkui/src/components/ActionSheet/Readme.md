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

```jsx { "props": { "layout": false, "adaptivity": true } }
const [popout, setPopout] = useState(null);
const onClose = () => setPopout(null);
const [filter, setFilter] = useState('best');
const onChange = (e) => setFilter(e.target.value);
const baseTargetRef = React.useRef();
const iconsTargetRef = React.useRef();
const subtitleTargetRef = React.useRef();
const selectableTargetRef = React.useRef();
const titleTargetRef = React.useRef();
const baseTopTargetRef = React.useRef();

const openBase = () =>
  setPopout(
    <ActionSheet onClose={onClose} toggleRef={baseTargetRef}>
      <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
      <ActionSheetItem>Закрепить запись</ActionSheetItem>
      <ActionSheetItem>Выключить комментирование</ActionSheetItem>
      <ActionSheetItem>Закрепить запись</ActionSheetItem>
      <ActionSheetItem mode="destructive">Удалить запись</ActionSheetItem>
    </ActionSheet>,
  );

const openIcons = () =>
  setPopout(
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
  setPopout(
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

const openSelectable = () =>
  setPopout(
    <ActionSheet onClose={onClose} toggleRef={selectableTargetRef}>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'best'}
        name="filter"
        value="best"
        selectable
      >
        Лучшие друзья
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'relatives'}
        name="filter"
        value="relatives"
        selectable
      >
        Родственники
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'collegues'}
        name="filter"
        value="collegues"
        selectable
      >
        Коллеги
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'school'}
        name="filter"
        value="school"
        selectable
      >
        Друзья по школе
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'university'}
        name="filter"
        value="university"
        selectable
      >
        Друзья по вузу
      </ActionSheetItem>
    </ActionSheet>,
  );

const openTitle = () =>
  setPopout(
    <ActionSheet
      onClose={onClose}
      header="Вы действительно хотите удалить это видео из Ваших видео?"
      toggleRef={titleTargetRef}
    >
      <ActionSheetItem mode="destructive">Удалить видео</ActionSheetItem>
    </ActionSheet>,
  );

const openBaseTop = () =>
  setPopout(
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
          <CellButton getRootRef={baseTargetRef} onClick={openBase}>
            Базовый список
          </CellButton>
          <CellButton getRootRef={iconsTargetRef} onClick={openIcons}>
            Список с иконками
          </CellButton>
          <CellButton getRootRef={subtitleTargetRef} onClick={openSubtitle}>
            С подзаголовком
          </CellButton>
          <CellButton getRootRef={selectableTargetRef} onClick={openSelectable}>
            Выделяемые
          </CellButton>
          <CellButton getRootRef={titleTargetRef} onClick={openTitle}>
            C заголовком
          </CellButton>
          <CellButton getRootRef={baseTopTargetRef} onClick={openBaseTop}>
            Базовый список, открывается наверх на десктопах
          </CellButton>
        </Group>
      </Panel>
    </View>
  </SplitCol>
</SplitLayout>;
```
