Утилитарный компонент, предназначенный для отрисовки части пользовательского интерфейса в выпадающем окне.

Может открываться при следующих DOM событиях на переданном `children`:

- при нажатии;
- при наведении;
- при фокусе;

или при комбинация этих событий.

Также есть ручной режим, где компонент будет показываться только программно. Подробнее в примерах на этой странице.

## Цифровая доступность (a11y)

Старайтесь сопровождать элемент текстовым описанием для корректной работы скринридеров. Для этого
необходимо вручную передавать некоторые параметры.
<br />

- У всплывающего элемента обязательно должен быть указан [`role`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles).
  Зачастую это либо [`"tooltip"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role), либо [`"dialog"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role).
- У целевого элемента, в зависимости от `role` у всплывающего элемента, должны быть заданы атрибуты
  `aria-*`. Какие именно можно ознакомиться в документации конкретного `role`.

> **Исключение:** `aria-expanded` компонент выставляет самостоятельно в зависимости от `role`,
> поэтому об этом атрибуте можно не беспокоиться.

Примеры ниже соблюдают хорошие практики по a11y, вы можете ориентироваться на них.

````jsx { "props": { "layout": false, "iframe": true } }
const PopoverWithTriggerHover = () => {
  return (
    <Popover
      trigger="hover"
      placement="bottom"
      role="tooltip"
      aria-describedby="tooltip-1"
      content={
        <Div>
          <Text>Привет</Text>
        </Div>
      }
      restoreFocus="anchor-element"
    >
      <Button id="tooltip-1" mode="outline">
        Наведи на меня
      </Button>
    </Popover>
  );
};

const PopoverWithTriggerClick = () => {
  return (
    <Popover
      noStyling
      trigger="click"
      id="menupopup"
      role="dialog"
      aria-labelledby="menubutton"
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
            appearance="negative"
            onClick={onClose}
          >
            Удалить
          </CellButton>
        </div>
      )}
    >
      <Button id="menubutton" aria-controls="menupopup" mode="outline">
        Нажми на меня
      </Button>
    </Popover>
  );
};

const PopoverWithTriggerFocus = () => {
  return (
    <Popover
      trigger="focus"
      role="dialog"
      aria-describedby="dialog-2"
      aria-label="Форма отправки сообщения"
      content={({ onClose }) => (
        <FormLayoutGroup>
          <FormItem top="Имя">
            <Input />
          </FormItem>
          <FormItem top="Фамилия">
            <Input />
          </FormItem>
          <FormItem top="Соглашение">
            <Checkbox name="agreement">Согласен</Checkbox>
          </FormItem>
          <FormItem>
            <Button onClick={onClose}>Отправить</Button>
          </FormItem>
        </FormLayoutGroup>
      )}
    >
      <Button id="dialog-2" mode="outline">
        Сфокусируйся на меня через Tab (или клик)
      </Button>
    </Popover>
  );
};

const PopoverWithAllTriggers = () => {
  return (
    <Popover
      trigger={['click', 'hover', 'focus']}
      placement="right"
      role="tooltip"
      aria-describedby="tooltip-3"
      content={
        <Div>
          <Avatar src={getAvatarUrl('app_promokot')} alt="Cat" />
        </Div>
      }
    >
      <Button id="tooltip-3" mode="outline">
        Нажми или наведи или сфокусируйся на меня
      </Button>
    </Popover>
  );
};

const PopoverWithTriggerManual = () => {
  const [shown, setShown] = React.useState(false);

  // Если вы используете TypeScript, то можете импортировать тип функции:
  //
  // ```ts
  // import type { PopoverOnShownChange } from '@vkontakte/vkui';
  //
  // const handleShownChange: PopoverOnShownChange = React.useCallback(() => {}, []);
  // ```
  const handleShownChange = React.useCallback((value, reason) => {
    if (!value) {
      switch (reason) {
        case 'callback':
        case 'escape-key':
        case 'click-outside':
          setShown(false);
          break;
        default:
          break;
      }
    }
  }, []);

  return (
    <Popover
      trigger="manual"
      shown={shown}
      role="dialog"
      aria-describedby="dialog-3"
      content={({ onClose }) => (
        <Flex style={{ position: 'relative', width: 180, height: 100 }}>
          <div style={{ position: 'absolute', top: 0, right: 0 }}>
            <IconButton label="Закрыть" onClick={onClose}>
              <Icon16Clear />
            </IconButton>
          </div>
          <div style={{ margin: 'auto', textAlign: 'center' }}>
            The cake
            <br />
            is
            <br />a lie
          </div>
        </Flex>
      )}
      onShownChange={handleShownChange}
    >
      <Button id="dialog-3" onClick={() => setShown((prev) => !prev)}>
        Я переключаю состояние через useState
      </Button>
    </Popover>
  );
};

const Playground = () => {
  return (
    <Flex margin="auto" direction="column" align="start" gap="2xl">
      <PopoverWithTriggerHover />
      <PopoverWithTriggerClick />
      <PopoverWithTriggerFocus />
      <PopoverWithAllTriggers />
      <PopoverWithTriggerManual />
    </Flex>
  );
};

<Playground />;
````

## Использование хука usePopover

Вы можете использовать хук usePopover, который позволяет устанавливать якорных элемент для Popover, не прокидывая его в качестве children

```jsx { "props": { "layout": false, "iframe": true } }
const Example = () => {
  const { anchorRef, anchorProps, popover } = usePopover({
    'trigger': 'click',
    'role': 'dialog',
    'id': 'menupopup',
    'aria-labelledby': 'menubutton',
    'content': ({ onClose }) => (
      <Div>
        <Text>Привет</Text>
      </Div>
    ),
  });

  return (
    <View activePanel="popover">
      <Panel id="popover">
        <PanelHeader>usePopover</PanelHeader>
        <Group>
          {popover}
          <FormItem>
            <Button
              getRootRef={anchorRef}
              id="menubutton"
              aria-controls="menupopup"
              {...anchorProps}
            >
              Нажми на меня
            </Button>
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
