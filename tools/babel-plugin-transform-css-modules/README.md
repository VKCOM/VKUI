# babel-plugin-transform-css-modules

Плагин находит импорты CSS Modules по типу `import <styleImportName> from "./<componentName>.module.css"` и заменяет
обращения к объекту `<styleImportName>.*` на строковые литералы, если это возможно. Иначе создаётся объект с
сопоставлением.

Пример почти со всеми кейсами использования CSS Modules:

**input.jsx**

```jsx
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import styles from './Component.module.css';

const headerLevelClassName = {
  1: styles['Component__header--level-1'],
  2: styles['Component__header--level-2'],
};

const Component = ({ mode, level = 1, disabled, children }) => {
  const headerClassName = classNames(styles.Component__header, headerLevelClassName[level]);
  return (
    <div
      className={classNames(
        styles.Component,
        disabled && styles['Component--disabled'],
        mode && styles[`Component--mode-${mode}`],
      )}
    >
      <h2 className={headerClassName}>{children}</h2>
    </div>
  );
};
```

**output.js**

```js
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import './Component.module.css';

var headerLevelClassName = {
  1: '_Component__header--level-1_526t4_19',
  2: '_Component__header--level-2_526t4_21',
};

var Component = ({ mode, level = 1, disabled, children }) => {
  const headerClassName = classNames('_Component__header_526t4_17', headerLevelClassName[level]);
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classNames(
        '_Component_526t4_1',
        disabled && '_Component--disabled_526t4_3',
        mode && styles[`Component--mode-${mode}`],
      ),
    },
    /*#__PURE__*/ React.createElement(
      'h2',
      {
        className: headerClassName,
      },
      children,
    ),
  );
};

var styles = {
  'Component--mode-secondary': '_Component--mode-secondary_526t4_5',
  'Component--mode-tertiary': '_Component--mode-tertiary_526t4_7',
};
```

## Особенности плагина заточенные под VKUI

см. [README_ABOUT_UNSAFE.md](README_ABOUT_UNSAFE.md).

## Альтернативы

Существуют аналогичные плагины, но, к сожалению, у них свои требования и недостатки.

- [babel-plugin-css-modules-transform](https://github.com/michalkvasnicak/babel-plugin-css-modules-transform)
  - Создаёт JS объект со всеми селекторами из CSS, что приводит к раздуванию бандла. Пример:
    ```diff
    -import styles from './Component.css';
    -<div className={styles.Component} />
    +const styles = {
    +  Component: '_Component-xaWd_',
    +  Component__item: '_Component__item-a21x_',
    +  AnotherComponent: '_AnotherComponent__item-a21x_', // имеется ввиду зависимость `.AnotherComponent > .Component { color: tomato }`
    +};
    +<div className={styles.Component} />
    ```
- [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)
  - Требует обращаться к свойствам внутри атрибутов, указанных в параметре `attributeNames`.
    ```jsx
    // ❌ вот так не сработает
    import styles from './Component.css';
    const className = styles.Component;
    <div styleName={className} />;
    ```
  - Использование условий и функций, принуждает плагин создавать runtime обёртку. Ниже ссылки на примеры:
    - 👍 [Named `styleName` resolution](https://github.com/gajus/babel-plugin-react-css-modules#named-stylename-resolution) –
      нам хотелось бы, чтобы было именно так.
    - 👎 [Runtime `styleName` resolution](https://github.com/gajus/babel-plugin-react-css-modules#runtime-stylename-resolution) –
      зачастую будет создаваться именно такая обёртка, так как `classNames()` и условия используются постоянно. А это
      говорит о том, что раздуется бандл.
  - Передача в `attributeNames` нескольких свойств работает некорректно.
    ```json
    {
      "attributeNames": {
        "className": "className",
        "hoverMode": "hoverMode",
        "activeMode": "activeMode",
        "focusVisible": "focusVisible"
      }
    }
    ```
    Исходя из порядка объявления атрибутов в JSX, плагин обрабатывает первые две.
