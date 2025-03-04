`Snackbar` – компонент для показа кратких сообщений в нижней части экрана. Его можно использовать, чтобы информировать пользователя о каких-то процессах в приложении, например, "Статья добавлена в закладки".

Плашка с уведомлением автоматически исчезает после какого-то времени (свойств `duration` в миллисекундах), либо же её можно скрыть смахнув в сторону.

Не нужно показывать это уведомление, если в приложении каким-то другим образом видно, что действие совершено. Например, когда заменяется текст в кнопке, или в список на странице добавился элемент.

После закрытия компонент вызывает обязательное свойство `onClose`, и вам необходимо убрать `Snackbar` со страницы.

```jsx
const SnackBarExample = () => {
  const [text, setText] = React.useState('');
  const [api, snackbarHolder] = useSnackbar()

  const openBaseWithAction = () => {
    api.open({
      action: 'Поделиться',
      onActionClick: () => setText('Добавляем метку.'),
      before: (
        <Avatar size={24} style={{background: 'var(--vkui--color_background_accent)'}}>
          <Icon16Done fill="#fff" width={14} height={14}/>
        </Avatar>
      ),
      children: 'Ссылка скопирована',
    })
  };

  const openVertical = () => {
    api.open({
      layout: "vertical",
      action: "Перейти в раздел «Понравилось»",
      onActionClick: () => setText('Открыта подробная информация.'),
      before: (
        <Avatar size={24} style={{background: 'var(--vkui--color_background_accent)'}}>
          <Icon16Done fill="#fff" width={14} height={14}/>
        </Avatar>
      ),
      children: 'Ссылка сохранена в закладки',
    });
  };

  const openWithAvatar = () => {
    api.open({
      onActionClick: () => setText('Сообщение Ивану было отменено.'),
      before: <Avatar src={getAvatarUrl('user_wayshev')} size={32}/>,
      children: 'Отправлено Ивану Барышеву',
    });
  };

  const openWithSibtitle = () => {
    api.open({
      subtitle: "Вы можете порекомендовать сервис в дополнительном меню",
      before: <Icon24ThumbsUpOutline fill="var(--vkui--color_icon_accent)"/>,
      children: 'Этот сервис рекомендует один друг',
    });
  };

  const openDark = () => {
    api.open({
      mode: "dark",
      action: "Поделиться",
      onActionClick: () => setText('Добавляем метку.'),
      before: (
        <Avatar size={24} style={{background: 'var(--vkui--color_background_accent)'}}>
          <Icon16Done fill="#fff" width={14} height={14}/>
        </Avatar>
      ),
      children: 'Ссылка скопирована',
    });
  };

  const openSuccess = () => {
    api.open({
      before: <Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)"/>,
      children: 'Аватар успешно изменен',
    });
  };

  const openError = () => {
    api.open({
      before: <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)"/>,
      children: 'Не удалось применить изменения',
    });
  };

  React.useEffect(() => {
    openBaseWithAction();
  }, []);

  return (
    <View activePanel="example">
      <Panel id="example">
        <PanelHeader>Snackbar</PanelHeader>
        <Group>
          <CellButton onClick={openBaseWithAction}>Уведомление с иконкой и кнопкой</CellButton>
          <CellButton onClick={openVertical}>Вертикальное расположение</CellButton>
          <CellButton onClick={openWithAvatar}>Уведомление с аватаркой</CellButton>
          <CellButton onClick={openWithSibtitle}>Уведомление с дополнительным текстом</CellButton>
          <CellButton onClick={openDark}>Уведомление с темной темой</CellButton>
          <CellButton onClick={openSuccess}>Успешное уведомление</CellButton>
          <CellButton onClick={openError}>Уведомление с ошибкой</CellButton>
        </Group>

        {text && (
          <Group>
            <Div>{text}</Div>
          </Group>
        )}

        {snackbarHolder}
      </Panel>
    </View>
  );
};

<SnackBarExample />;
```

## Snackbar.Basic

Компонент без позиционирования и логики.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ display: 'grid', padding: 32, gap: 32 }}>
  <Snackbar.Basic
    before={<Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />}
    after={
      <Button mode="link" appearance="accent" size="s">
        Поделиться
      </Button>
    }
  >
    Ссылка скопирована
  </Snackbar.Basic>
</div>
```
