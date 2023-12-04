Компонент для отрисовки кнопок-иконок внутри [WriteBar](#!/WriteBar).

Надстройка над `<button />`. Компонент принимает все валидные для этого элемента свойства.

## Цифровая доступность (a11y)

Чтобы `WriteBarIcon` была доступной для ассистивных технологий, у нее должен быть текст, который сможет прочитать скринридер. Лучше всего передать этот текст в кастомное свойство `label`.

Как еще можно это сделать:

- Передать в `children` одновременно с иконкой текст, обернутый в компонент [VisuallyHidden](#!/VisuallyHidden).
- Передать `aria-label` или `title`.
- Создать отдельный элемент с текстом и передать его `id` в `aria-labelledby` кнопки.

```jsx static
<WriteBarIcon mode="attach" />

<WriteBarIcon label="Записать голосовое сообщение">
  <Icon28VoiceOutline />
</WriteBarIcon>

<WriteBarIcon>
  <VisuallyHidden>Записать голосовое сообщение</VisuallyHidden>
  <Icon28VoiceOutline />
</WriteBarIcon>

<WriteBarIcon aria-label="Записать голосовое сообщение">
  <Icon28VoiceOutline />
</WriteBarIcon>

<WriteBarIcon title="Записать голосовое сообщение">
  <Icon28VoiceOutline />
</WriteBarIcon>

<VisuallyHidden id="write_bar_icon_voice">Записать голосовое сообщение</VisuallyHidden>
<WriteBarIcon aria-labelledby="write_bar_icon_voice">
  <Icon28VoiceOutline />
</WriteBarIcon>
```
