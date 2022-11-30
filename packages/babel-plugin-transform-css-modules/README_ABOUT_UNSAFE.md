# UNSAFE

Для поддержки существующего кода, плагин делает вещи сверх своих задач, а также со стороны разработки приходиться
прибегать к хакам. Далее о каждом по отдельности, а в конце про то, как избавиться от этих хаков.

### Вычисляемые названия свойства

Дабы не править текущий код, сохранена возможность писать следующим образом:

```js
styles[`Component--mode-${mode}`];
```

Это достигается тем, что плагин берёт левую строковую часть вычисляемого свойства и находит в объекте `styles` все
свойства, которые начинаются этой строкой. Для примера выше это будет
`Object.keys(styles).filter(key => key.startsWith("Component--mode-"))`. Этот отфильтрованный `styles` вставляется в
конец документа.

- Надо обязательно оставлять начало вычисляемого свойства строкой:

  ```js
  // ❌
  styles[`${someOtherVariable}-Component--mode-${mode}`]; // плагин пропустит этот кейс

  // ✅
  styles[`Component--mode-${mode}`]; // будет поиск по `Component--mode-`
  ```

- Чтобы в `styles` не попадало лишнего, надо добавлять классам уникальность:

  ```js
  // ❌
  styles[`Component--${mode}`];
  styles[`Component--${appearance}-${gradientColor}`];

  // ✅
  styles[`Component--mode-${mode}`];
  styles[`Component--gradient-${appearance}-${gradientColor}`];
  ```

  Вот пример, когда в `styles` попадает лишнее:

  **input.jsx**

  ```jsx
  import * as React from "react";
  import { classNames } from "@vkontakte/vkjs";
  import styles from "./Component.module.css";

  const Component = ({ appearance, gradientColor, disabled }) => {
    return (
      <div
        className={classNames(
          styles.Component,
          disabled && styles["Component--disabled"],
          styles[`Component--${appearance}-${gradientColor}`]
        )}
      />
    );
  };
  ```

  **output.js**

  ```js
  import * as React from "react";
  import { classNames } from "@vkontakte/vkjs";
  import "./Component.module.css";

  var Component = ({ appearance, gradientColor, disabled }) => {
    return /*#__PURE__*/ React.createElement("div", {
      className: classNames(
        "_Component_526t4_1",
        disabled && "_Component--disabled_526t4_3",
        styles[`Component--${appearance}-${gradientColor}`]
      ),
    });
  };

  var styles = {
    "Component--disabled": "_Component--disabled_526t4_3", // (*) потому что искалось по `Component--`
    "Component--light-blue": "_Component--light-blue_526t4_9",
    "Component--dark-blue": "_Component--dark-blue_526t4_13",
  };
  ```

### Утилитарные функции в `/helpers`

Речь о:

- `getHoverClassName()`
- `getPointerClassName()`
- `getPlatformClassName()`
- `getSizeXClassName()`
- `getSizeYClassName()`
- `getViewHeightClassName()`
- `getViewWidthClassName()`

Опять же, чтобы не переписывать текущее решение, прошёлся по коду и сделал минимальные изменения (на примере, `getSizeYClassName()`):

```diff
-getSizeYClassName("Button", sizeY, styles)
+getSizeYClassName(styles["Button"], sizeY)
```

В конечном итоге в сборке заменится строкой, а на проде функция конкатенирует `sizeY`:

```js
getSizeYClassName("vkuiButton", sizeY); // => ex, "vkuiButton--sizeY-regular"
```

## ROADMAP

Пока вижу решение, что кейсы, описанные выше, надо переписать на мапы по типу:

```js
const sizeYClasses = {
  none: styles["Component--sizeY-none"],
  regular: styles["Component--sizeY-regular"],
  compact: styles["Component--sizeY-compact"],
};

sizeYClasses[sizeY];
```
