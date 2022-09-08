## Разработка

1. Склонировать репозиторий и перейти в созданную директорию.
2. Установить зависимости: `yarn install`.
3. Запустить сборку: `yarn build`.
   > **PostCSS** сгенерирует файл `src/styles/customMedias.generated.css`, основанный на
   > [getCustomMedias()](https://github.com/VKCOM/VKUI/blob/master/shared.js)
   >
   > Это поможет IDE подсказать доступные `@custom-media`.
4. Поднять локально документацию с лайврелоадом: `yarn styleguide`. Свойства и методы компонента в режиме разработки по умолчанию не генерируются; если они вам нужны, используйте команду `yarn styleguide:props`.

Документация будет доступна на `http://localhost:6060`. В ней ведётся вся разработка. Для удобства можно сразу перейти на страницу разрабатываемого компонента (`http://localhost:6060/#/UsersStack`)

## Чеклист для компонента

### Организационные моменты

- Один pull request — одна фича или багфикс. Рефакторинги выносим отдельно
- Дизайн компонента описан в [Figma](https://www.figma.com/@vk)
- Компонент находится в своей папке в `src/components` и не делит её с другими публичными компонентами (один файл — один компонент)
- У компонента есть понятная документация, описанная в директории компонента в файле `Readme.md`. Файл подключается в `styleguide/config.js`
- Вся документация и предупреждения в коде компонента (`warnOnce`) написаны на русском языке
- Вся стилизация — в соответствующем `.css` файле. Файл подключается в `src/styles/components.css`

### Требования к разработке

- В проекте используется [CSS Modules](https://github.com/css-modules/css-modules) (примеры можно увидить ниже).

  > ⚠️ [Composition](https://github.com/css-modules/css-modules#composition)
  >
  > Не используем композицию, т.к. в ней нет необходимости,
  > а также в будущем она может усложнить переход на другое решение.

  > ⚠️ `/* Пустой класс для CSS Modules (см. CONTRIBUTING.md) */`
  >
  > Если мы хотим повесить на элемент класс без стилей, то нам в любом случае надо его указать в CSS, иначе
  > он не подхватиться после сборки проекта, а также `typescript-plugin-css-modules` будет ругаться, что нет такого класса.
  >
  > ```css
  > .Tappable {
  >   cursor: pointer;
  > }
  >
  > .Tappable--active {
  >   /* Пустой класс для CSS Modules (см. CONTRIBUTING.md) */
  > }
  > ```
  >
  > ```tsx
  > import styles from "./Tappable.module.css";
  >
  > const Tappable = ({ active }) => (
  >   <div
  >     className={classNameString(
  >       styles.Tappable,
  >       active && styles["Tappable--active"]
  >     )}
  >   />
  > );
  > ```
  >
  > Если в CSS не указать, то `styles["Tappable--active"]` вернёт `undefined`.

- CSS-классы названы по БЭМ: `.Component__element-name--modificator`. [Гайд по написанию стилей](https://github.com/VKCOM/VKUI/blob/master/docs/CSS_GUIDE.md)
- Свойства `className` и `style` навешиваются на корневой элемент компонента
- Свойства, не используемые в коде компонента, навешиваются на **главный** элемент компонента. По умолчанию главным является корневой элемент:

  ```jsx
  const Component = (props) => <div {...props} className={styles.Component} />;
  ```

  Бывают случаи, например, поле ввода, когда главным является именно `input`, а не обёртка:

  ```jsx
  import styles from "./Input.module.css";

  const Input = ({ mode, style, className, ...restProps }) => {
    return (
      <div
        className={classNamesString(
          className,
          styles.Input,
          styles[`Input--mode-${mode}`]
        )}
        style={style}
      >
        <input {...restProps} />
      </div>
    );
  };
  ```

- Компонент корректно отрисовывается, если не передавать никаких свойств. Вместо `defaultProps`, [deprecated для функциональных компонентов](https://github.com/facebook/react/pull/16210), используем спред:

  ```jsx
  import styles from "./Component.module.css";

  const Component = ({ mode = "default", className, ...restProps }) => (
    <div
      className={classNamesString(
        className,
        styles.Component,
        styles[`Component--mode-${mode}`]
      )}
      {...restProps}
    />
  );
  ```

- Для цветов, скруглений, размеров, отступов и теней используются css-переменные из [vkui-tokens](https://github.com/VKCOM/vkui-tokens)
- Для типографии используются компоненты [Typography](https://vkcom.github.io/VKUI/#!/Typography) там, где это возможно
- Добавлен `export` компонента и его свойств в `src/index.ts`
- Компонент покрыт юнит- и скриншотными тестами. [Гайд по тестированию](https://github.com/VKCOM/VKUI/blob/master/docs/TESTING.md)
- Компонент корректно отображается на всех платформах, размерах и цветовых схемах. В styleguide для всех этих параметров есть переключатели
- Код корректно работает на [поддерживаемых нами браузерах](https://github.com/VKCOM/VKUI#%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D1%8B)
- Для поддержки адаптивности следует следовать [гайду по написанию адаптивных компонентов](https://github.com/VKCOM/VKUI/blob/master/docs/ADAPTIVITY_GUIDE.md)
