Все цвета, используемые в библиотеке, занесены в [css-custom-properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
Чтобы использовать цвета в своем коде, достаточно посмотреть на список доступных цветов и применить их, используя
синтаксис css-custom-properties:

```css static
.MyBlock {
  background: var(--vkui--color_background_content);
  color: var(--vkui--color_text_primary);
}
```

Доступные цвета находятся [тут](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkBase/cssVars/declarations/onlyVariables.css)
