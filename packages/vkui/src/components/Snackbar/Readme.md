`Snackbar` – компонент для показа кратких сообщений в нижней части экрана. Его можно использовать, чтобы информировать пользователя о каких-то процессах в приложении, например, "Статья добавлена в закладки".

Плашка с уведомлением автоматически исчезает после какого-то времени (свойств `duration` в миллисекундах), либо же её можно скрыть смахиванием вправо.

Не нужно показывать это уведомление, если в приложении каким-то другим образом видно, что действие совершено. Например, когда заменяется текст в кнопке, или в список на странице добавился элемент.

После закрытия компонент вызывает обязательное свойство `onClose`, и вам необходимо убрать `Snackbar` со страницы.

```jsx
const SnackBarExample = () => {
  const [text, setText] = React.useState('');
  const [snackbar, setSnackbar] = React.useState(null);

  const openBaseWithAction = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        action="Поделиться"
        onActionClick={() => setText('Добавляем метку.')}
        before={
          <Avatar size={24} style={{ background: 'var(--vkui--color_background_accent)' }}>
            <Icon16Done fill="#fff" width={14} height={14} />
          </Avatar>
        }
      >
        Ссылка скопирована
      </Snackbar>,
    );
  };

  const openVertical = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        layout="vertical"
        onClose={() => setSnackbar(null)}
        action="Перейти в раздел «Понравилось»"
        onActionClick={() => setText('Открыта подробная информация.')}
        before={
          <Avatar size={24} style={{ background: 'var(--vkui--color_background_accent)' }}>
            <Icon16Done fill="#fff" width={14} height={14} />
          </Avatar>
        }
      >
        Ссылка сохранена в закладки
      </Snackbar>,
    );
  };

  const openWithAvatar = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        onActionClick={() => setText('Сообщение Ивану было отменено.')}
        before={<Avatar src={getAvatarUrl('user_wayshev')} size={32} />}
      >
        Отправлено Ивану Барышеву
      </Snackbar>,
    );
  };

  const openWithSibtitle = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        subtitle="Вы можете порекомендовать сервис в дополнительном меню"
        before={<Icon24ThumbsUpOutline fill="var(--vkui--color_icon_accent)" />}
      >
        Этот сервис рекомендует один друг
      </Snackbar>,
    );
  };

  const openDark = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        mode="dark"
        onClose={() => setSnackbar(null)}
        action="Поделиться"
        onActionClick={() => setText('Добавляем метку.')}
        before={
          <Avatar size={24} style={{ background: 'var(--vkui--color_background_accent)' }}>
            <Icon16Done fill="#fff" width={14} height={14} />
          </Avatar>
        }
      >
        Ссылка скопирована
      </Snackbar>,
    );
  };

  const openSuccess = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        before={<Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />}
      >
        Аватар успешно изменен
      </Snackbar>,
    );
  };

  const openError = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        before={<Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />}
      >
        Не удалось применить изменения
      </Snackbar>,
    );
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

        {snackbar}
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
