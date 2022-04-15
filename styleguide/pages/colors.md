Все цвета, используемые в библиотеке, занесены в [css-custom-properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
Чтобы использовать цвета в своем коде, достаточно посмотреть на список доступных цветов и применить их, используя
синтаксис css-custom-properties:

```css static
.MyBlock {
  background: var(--background_content);
  color: var(--text_primary);
}
```

Доступные цвета находятся [тут](https://github.com/VKCOM/VKUI/blob/master/src/styles/bright_light.css)
