ActionSheet – имитация [нативного компонента](https://developer.apple.com/ios/human-interface-guidelines/views/action-sheets/).
Удобно использовать, когда нужно дать пользователю выбрать одно из множества действий. В качестве `children` принимает
коллекцию `ActionSheetItem`.
На больших экранах прокрутка не отключается.

Передаётся в качестве значения свойства `popout` компонента [`SplitLayout`](https://vkcom.github.io/VKUI/#/SplitLayout).

> **Важно**
>
> - Нужно обязательно передать `onClose` для обработки закрытия `ActionSheet` изнутри.
> - Согласно гайдлайнам Apple, в `ActionSheet` должен быть элемент для закрытия, для этого предусмотрен атрибут `iosCloseItem`.
>   В коде примера ниже можно посмотреть, как добавить такой элемент.
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
    <ActionSheet
      onClose={onClose}
      iosCloseItem={<ActionSheetDefaultIosCloseItem />}
      toggleRef={baseTargetRef}
    >
      <ActionSheetItem autoClose>Сохранить в закладках</ActionSheetItem>
      <ActionSheetItem autoClose>Закрепить запись</ActionSheetItem>
      <ActionSheetItem autoClose>Выключить комментирование</ActionSheetItem>
      <ActionSheetItem autoClose>Закрепить запись</ActionSheetItem>
      <ActionSheetItem autoClose mode="destructive">
        Удалить запись
      </ActionSheetItem>
    </ActionSheet>,
  );

const openIcons = () =>
  setPopout(
    <ActionSheet
      onClose={onClose}
      iosCloseItem={<ActionSheetDefaultIosCloseItem />}
      toggleRef={iconsTargetRef}
    >
      <ActionSheetItem
        autoClose
        before={
          <AdaptiveIconRenderer IconCompact={Icon20WriteOutline} IconRegular={Icon28EditOutline} />
        }
      >
        Редактировать профиль
      </ActionSheetItem>
      <ActionSheetItem
        autoClose
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
        autoClose
        before={
          <AdaptiveIconRenderer IconCompact={Icon20ShareOutline} IconRegular={Icon28ShareOutline} />
        }
      >
        Поделиться
      </ActionSheetItem>
      <ActionSheetItem
        autoClose
        before={
          <AdaptiveIconRenderer IconCompact={Icon20CopyOutline} IconRegular={Icon28CopyOutline} />
        }
      >
        Скопировать ссылку
      </ActionSheetItem>
      <ActionSheetItem
        autoClose
        before={
          <AdaptiveIconRenderer
            IconCompact={
              platform === Platform.IOS ? Icon20DeleteOutline : Icon20DeleteOutlineAndroid
            }
            IconRegular={
              platform === Platform.IOS ? Icon28DeleteOutline : Icon28DeleteOutlineAndroid
            }
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
    <ActionSheet
      onClose={onClose}
      iosCloseItem={<ActionSheetDefaultIosCloseItem />}
      toggleRef={subtitleTargetRef}
    >
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer
            IconCompact={Icon20GearOutline}
            IconRegular={Icon28SettingsOutline}
          />
        }
        autoClose
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
        autoClose
        subtitle="Отсутствуют"
        disabled
      >
        Субтитры
      </ActionSheetItem>
      <ActionSheetItem
        before={
          <AdaptiveIconRenderer IconCompact={Icon20Play} IconRegular={Icon28PlaySpeedOutline} />
        }
        autoClose
        subtitle="Обычная"
      >
        Скорость воспроизведения
      </ActionSheetItem>
    </ActionSheet>,
  );

const openSelectable = () =>
  setPopout(
    <ActionSheet
      onClose={onClose}
      iosCloseItem={<ActionSheetDefaultIosCloseItem />}
      toggleRef={selectableTargetRef}
    >
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'best'}
        name="filter"
        value="best"
        autoClose
        selectable
      >
        Лучшие друзья
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'relatives'}
        name="filter"
        value="relatives"
        autoClose
        selectable
      >
        Родственники
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'collegues'}
        name="filter"
        value="collegues"
        autoClose
        selectable
      >
        Коллеги
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'school'}
        name="filter"
        value="school"
        autoClose
        selectable
      >
        Друзья по школе
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === 'university'}
        name="filter"
        value="university"
        autoClose
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
      iosCloseItem={<ActionSheetDefaultIosCloseItem />}
      header="Вы действительно хотите удалить это видео из Ваших видео?"
      toggleRef={titleTargetRef}
    >
      <ActionSheetItem autoClose mode="destructive">
        Удалить видео
      </ActionSheetItem>
    </ActionSheet>,
  );

const openBaseTop = () =>
  setPopout(
    <ActionSheet
      onClose={onClose}
      iosCloseItem={<ActionSheetDefaultIosCloseItem />}
      toggleRef={baseTopTargetRef}
    >
      <ActionSheetItem autoClose>Сохранить в закладках</ActionSheetItem>
      <ActionSheetItem autoClose>Закрепить запись</ActionSheetItem>
      <ActionSheetItem autoClose>Выключить комментирование</ActionSheetItem>
      <ActionSheetItem autoClose>Закрепить запись</ActionSheetItem>
      <ActionSheetItem autoClose mode="destructive">
        Удалить запись
      </ActionSheetItem>
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
