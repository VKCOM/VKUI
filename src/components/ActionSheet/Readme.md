ActionSheet – имитация [нативного компонента](https://developer.apple.com/ios/human-interface-guidelines/views/action-sheets/).
Удобно использовать, когда нужно дать пользователю выбрать одно из множества действий. В качестве `children` принимает
коллекцию `ActionSheetItem`.

Передаётся в качестве значения свойства `popout` компонента [`SplitLayout`](#/SplitLayout).

> **Важно**
>
> - Нужно обязательно передать `onClose` для обработки закрытия `ActionSheet` изнутри.
> - Согласно гайдлайнам Apple, в `ActionSheet` должен быть элемент для закрытия, для этого предусмотрен атрибут `iosCloseItem`.
>   В коде примера ниже можно посмотреть, как добавить такой элемент.
>   Для Android версии он не нужен.

```jsx { "props": { "layout": false, "adaptivity": true } }
const [popout, setPopout] = useState(null);
const onClose = () => setPopout(null);
const [filter, setFilter] = useState("best");
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
      iosCloseItem={
        <ActionSheetItem autoclose mode="cancel">
          Отменить
        </ActionSheetItem>
      }
      toggleRef={baseTargetRef}
    >
      <ActionSheetItem autoclose>Сохранить в закладках</ActionSheetItem>
      <ActionSheetItem autoclose>Закрепить запись</ActionSheetItem>
      <ActionSheetItem autoclose>Выключить комментирование</ActionSheetItem>
      <ActionSheetItem autoclose>Закрепить запись</ActionSheetItem>
      <ActionSheetItem autoclose mode="destructive">
        Удалить запись
      </ActionSheetItem>
    </ActionSheet>
  );

const openIcons = () =>
  setPopout(
    <ActionSheet
      onClose={onClose}
      iosCloseItem={
        <ActionSheetItem autoclose mode="cancel">
          Отменить
        </ActionSheetItem>
      }
      toggleRef={iconsTargetRef}
    >
      <ActionSheetItem autoclose before={<Icon28EditOutline />}>
        Редактировать профиль
      </ActionSheetItem>
      <ActionSheetItem autoclose before={<Icon28ListPlayOutline />}>
        Слушать далее
      </ActionSheetItem>
      <ActionSheetItem autoclose before={<Icon28ShareOutline />}>
        Поделиться
      </ActionSheetItem>
      <ActionSheetItem autoclose before={<Icon28CopyOutline />}>
        Скопировать ссылку
      </ActionSheetItem>
      <ActionSheetItem
        autoclose
        before={
          platform === IOS ? (
            <Icon28DeleteOutline />
          ) : (
            <Icon28DeleteOutlineAndroid />
          )
        }
        mode="destructive"
      >
        Удалить плейлист
      </ActionSheetItem>
    </ActionSheet>
  );

const openSubtitle = () =>
  setPopout(
    <ActionSheet
      onClose={onClose}
      iosCloseItem={
        <ActionSheetItem autoclose mode="cancel">
          Отменить
        </ActionSheetItem>
      }
      toggleRef={subtitleTargetRef}
    >
      <ActionSheetItem
        before={<Icon28SettingsOutline />}
        autoclose
        subtitle="Авто"
      >
        Качество
      </ActionSheetItem>
      <ActionSheetItem
        before={<Icon28SubtitlesOutline />}
        autoclose
        subtitle="Отсутствуют"
        disabled
      >
        Субтитры
      </ActionSheetItem>
      <ActionSheetItem
        before={<Icon28PlaySpeedOutline />}
        autoclose
        subtitle="Обычная"
      >
        Скорость воспроизведения
      </ActionSheetItem>
    </ActionSheet>
  );

const openSelectable = () =>
  setPopout(
    <ActionSheet
      onClose={onClose}
      iosCloseItem={
        <ActionSheetItem autoclose mode="cancel">
          Отменить
        </ActionSheetItem>
      }
      toggleRef={selectableTargetRef}
    >
      <ActionSheetItem
        onChange={onChange}
        checked={filter === "best"}
        name="filter"
        value="best"
        autoclose
        selectable
      >
        Лучшие друзья
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === "relatives"}
        name="filter"
        value="relatives"
        autoclose
        selectable
      >
        Родственники
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === "collegues"}
        name="filter"
        value="collegues"
        autoclose
        selectable
      >
        Коллеги
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === "school"}
        name="filter"
        value="school"
        autoclose
        selectable
      >
        Друзья по школе
      </ActionSheetItem>
      <ActionSheetItem
        onChange={onChange}
        checked={filter === "university"}
        name="filter"
        value="university"
        autoclose
        selectable
      >
        Друзья по вузу
      </ActionSheetItem>
    </ActionSheet>
  );

const openTitle = () =>
  setPopout(
    <ActionSheet
      onClose={onClose}
      iosCloseItem={
        <ActionSheetItem autoclose mode="cancel">
          Отменить
        </ActionSheetItem>
      }
      header="Вы действительно хотите удалить это видео из Ваших видео?"
      toggleRef={titleTargetRef}
    >
      <ActionSheetItem autoclose mode="destructive">
        Удалить видео
      </ActionSheetItem>
    </ActionSheet>
  );

const openBaseTop = () =>
  setPopout(
    <ActionSheet
      onClose={onClose}
      iosCloseItem={
        <ActionSheetItem autoclose mode="cancel">
          Отменить
        </ActionSheetItem>
      }
      toggleRef={baseTopTargetRef}
    >
      <ActionSheetItem autoclose>Сохранить в закладках</ActionSheetItem>
      <ActionSheetItem autoclose>Закрепить запись</ActionSheetItem>
      <ActionSheetItem autoclose>Выключить комментирование</ActionSheetItem>
      <ActionSheetItem autoclose>Закрепить запись</ActionSheetItem>
      <ActionSheetItem autoclose mode="destructive">
        Удалить запись
      </ActionSheetItem>
    </ActionSheet>
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
