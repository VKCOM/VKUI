Обертка-кнопка для интерактивной иконки.

## Цифровая доступность (a11y)

Чтобы `IconButton` была доступной для ассистивных технологий, у нее должен быть текст, который сможет прочитать скринридер. Лучше всего передать этот текст в кастомное свойство `label`.

Как еще можно это сделать:

- Передать в `children` одновременно с иконкой текст, обернутый в компонент [VisuallyHidden](#!/VisuallyHidden).
- Передать `aria-label` или `title`.
- Создать отдельный элемент с текстом и передать его `id` в `aria-labelledby` кнопки.

```jsx { "props": { "layout": false, "adaptivity": true } }
const Example = () => {
  return (
    <div style={rowStyles}>
      <div>
        <IconButton label="Удалить" onClick={noop}>
          <Icon16Delete />
        </IconButton>
        <Footnote style={captionStyles}>16</Footnote>
      </div>

      <div>
        <IconButton onClick={noop}>
          <VisuallyHidden>Меню</VisuallyHidden>
          <Icon16MoreVertical />
        </IconButton>
        <Footnote style={captionStyles}>8x16</Footnote>
      </div>

      <div>
        <IconButton aria-label="Удалить 24" onClick={noop}>
          <Icon24Delete />
        </IconButton>
        <Footnote style={captionStyles}>24</Footnote>
      </div>

      <div>
        <IconButton aria-labelledby="icon-28-label" onClick={noop}>
          <Icon28Delete />
        </IconButton>
        <Footnote id="icon-28-label" style={captionStyles}>
          <VisuallyHidden>Удалить</VisuallyHidden>
          28
        </Footnote>
      </div>

      <div>
        <IconButton title="Удалить 36" onClick={noop}>
          <Icon36Delete />
        </IconButton>
        <Footnote style={captionStyles}>36</Footnote>
      </div>
    </div>
  );
};

const rowStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: 16,
  padding: 16,
};

const captionStyles = {
  marginTop: 8,
  textAlign: 'center',
};

<Example />;
```
