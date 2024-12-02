Компонент реализующий модальную карточку. Позволяет показать небольшой дополнительный контент удерживая пользователя в текущем
контексте страницы/приложения.

- <a href="{{anchor}}">Область применения</a>
- <a href="{{anchor}}">Спецификация</a>
  - <a href="{{anchor}}">Анатомия</a>
  - <a href="{{anchor}}">Поведение</a>
- <a href="{{anchor}}">FAQ</a>
  - <a href="{{anchor}}">Как правильно применять параметр `autoFocus`?</a>

# Область применения

- показ уведомления (например, о новом функционале);
- отображение формы ввода (например, ввод СМС-кода).

```jsx { "props": { "layout": false, "adaptivity": true, "showCustomPanelHeaderAfterProps": true } }
const Example = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Div>
        <Button onClick={() => setOpen(true)}>Открыть</Button>
      </Div>
      <ModalCard open={open} onClose={() => setOpen(false)}>
        <div style={{ width: '100%', height: 100 }} />
      </ModalCard>
    </>
  );
};

<Example />;
```

# Спецификация

## Анатомия

Вёрстку и параметры `ModalCard` наследует от [ModalCardBase](#/ModalCardBase). Также используется компоновка из следующих внутренних
компонентов:

- `ModalOutlet` – портал, куда рендерится `ModalCard`;
- `ModalOverlay` – интерактивный задний фон;
- `ModalCardInternal` – инкапсулирует в себе всю логику поведения.

## Поведение

Параметр `open` задает состояние показа/скрытия `ModalCard`. По умолчанию компонент скрыт.

При состоянии `open={false}` компонент размонтируется из DOM. Чтобы отключить это поведение, необходимо задать параметр
`keepMounted`.

Смена состояния сопровождается анимацией содержимого `ModalCard`, а также `ModalOverlay`. За сменой состояния можно следить
через события:

- `onOpen`
- `onOpened`
- `onClose` – передаёт в аргумент причину закрытия (см. описание в таблице с API)
- `onClosed`

Отличие `onOpened`/`onClosed` от `onOpen`/`onClose` в том, что они вызываются после завершения анимации.

Далее поведение зависит от разрешения экрана.

### 🖥️ Десктопный режим

При разрешении `>= 768px` компонент `ModalCard` имеет вид **диалогового окна**.

При `open={true}`:

- навигация через `Tab` и `Shift` + `Tab` будет зациклена на содержимом `ModalCard`.

По умолчанию, пользователь может закрыть **диалоговое окно** с помощью:

- нажатия на кнопку закрытия, что вызовет событие `onClose` с аргументом `click-close-button`;
- нажатия на `ModalOverlay`, что вызовет событие `onClose` с аргументом `click-overlay`;
- нажатия на `Esc`, что вызовет событие `onClose` с аргументом `escape-key`.

### 📱 Мобильный режим

При разрешении `<= 767px` компонент `ModalCard` имеет вид панели, выдвигающаяся снизу вверх (далее **bottom card**).

При `open={true}` навигация через `Tab` и `Shift` + `Tab` будет зациклена на содержимом `ModalCard` (допустимо, т.к. к устройству
может быть подключена клавиатура).

По умолчанию, пользователь может закрыть **bottom card** с помощью:

- нажатия на `ModalOverlay`, что вызовет событие `onClose` с аргументом `click-overlay`;
- нажатия на `Esc`, что вызовет событие `onClose` с аргументом `escape-key` (допустимо, т.к. к устройству может быть подключена
  клавиатура);
- определенное взаимодействие через тач или указатель мыши, что вызовет событие `onClose` с аргументом `swipe-down`
  (см. **Взаимодействие через тач или указатель мыши**)

#### Взаимодействие через тач или указатель мыши

> ⚠️ `<ConfigProvider platform="vkcom" />`
>
> При `platform === 'vkcom` описанный в этом разделе функционал полностью игнорируется, т.к. по историческим причинам
> `platform="vkcom"` форсирует условие, что сейчас используется десктопный режим. Высота **bottom card** будет определяться за счёт
> контента.

Перетаскивание **bottom card** изменяет прозрачность `ModalOverlay` – при перетаскивание вниз фон становится светлее.

Пользователь через перетаскивание может вызвать закрытие **bottom card** по следующим условиям:

- `onClose('swipe-down')` вызовется сразу же если **bottom card** достиг высоты `0`, независимо закончил ли пользователь
  взаимодействие с ним или нет;
- `onClose('swipe-down')` вызовется если после окончания взаимодействия с **bottom card** его высота будет меньше половины контента
- `onClose('swipe-down')` вызовется при сильном смахивании вниз;

При следующих условиях возможность перетаскивания замораживается, чтобы не блокировать пользователя:

- есть взаимодействие с горизонтальным скроллом;
- есть взаимодействие с текстовым полем;
- есть взаимодействие с выделенным текстом;
- есть взаимодействие элементом вызвавшим `event.stopPropagation()` на `onTouchStart` или `onMouseDown`.
- есть взаимодействие элемент с **data**-атрибутом `data-vkui-block-sheet-behavior`;

# FAQ

## Как правильно применять параметр `autoFocus`?

К сожалению, из-за особенностей **React**, `autoFocus` ломает CSS анимацию.

Чтобы исправить проблему, следует отказаться от `autoFocus` и выставлять фокус вручную при событии `onOpened`.

```jsx { "props": { "layout": false, "adaptivity": true } }
const App = () => {
  const [open, setOpen] = React.useState(false);

  const inputRef = React.useRef(null);

  const handleOpen = React.useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <Div>
        <Button onClick={() => setOpen(true)}>Открыть</Button>
      </Div>
      <ModalCard
        id="modal-with-auto-focus"
        title="Введите ПИН-код"
        open={open}
        onOpened={handleOpen}
        onClose={() => setOpen(false)}
      >
        <Spacing size="xl" />
        <Flex direction="row" gap={24} noWrap>
          <Input type="number" min={0} max={9} pattern="[0-9]{2}" getRootRef={inputRef} />
          <Input type="number" min={0} max={9} pattern="[0-9]{2}" />
          <Input type="number" min={0} max={9} pattern="[0-9]{2}" />
          <Input type="number" min={0} max={9} pattern="[0-9]{2}" />
        </Flex>
      </ModalCard>
    </>
  );
};

<App />;
```
