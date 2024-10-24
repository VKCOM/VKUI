## Разработка

В проекте используется `yarn workspaces`.

Ознакомиться можно по ссылке [Workspaces | Yarn](https://yarnpkg.com/features/workspaces).

### Быстрый старт

1. Склонировать репозиторий и перейти в созданную директорию.
2. Включить [corepack](https://nodejs.org/api/corepack.html): `corepack enable`
3. Установить зависимости: `yarn install`.
4. Поднять локально документацию с лайврелоадом: `yarn docs:styleguide`. Свойства и методы компонента в режиме разработки по умолчанию не генерируются; если они вам нужны, используйте команду `yarn docs:styleguide:props`.

Документация будет доступна на `http://localhost:6060`. В ней ведётся вся разработка. Для удобства можно сразу перейти на страницу разрабатываемого компонента (`http://localhost:6060/#/UsersStack`)

### Дополнительные настройки по желанию

Добавить файл `.git-blame-ignore-revs` в свой git-конфиг:

```sh
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

Это поможет игнорировать коммиты, связанные с изменениями стиля кода. `git blame` будет чище.

## Чеклист для компонента

### Организационные моменты

- Один PR — одна фича/багфикс (рефакторинги выносим в отдельный PR)
- Дизайн компонента описан в [Figma](https://www.figma.com/@vk)
- Компонент находится в своей папке в `src/components` и не делит её с другими публичными компонентами (один файл — один компонент)
- У компонента есть понятная документация, описанная в директории компонента в файле `Readme.md`. Файл подключается в `styleguide/config.js`
- Вся документация и предупреждения в коде компонента (`warnOnce`) написаны на русском языке

### Требования к разработке

- В проекте используется [CSS Modules](https://github.com/css-modules/css-modules) (примеры можно увидить ниже).

  > ⚠️ [Composition](https://github.com/css-modules/css-modules/blob/master/docs/composition.md)
  >
  > Не используем композицию, т.к. в ней нет необходимости,
  > а также в будущем она может усложнить переход на другое решение.

- CSS-классы должны быть в формате camelCase: `elementNameModification`. [Гайд по написанию стилей](https://github.com/VKCOM/VKUI/blob/master/docs/CSS_GUIDE.md)
- Свойства `className` и `style` навешиваются на корневой элемент компонента
- Свойства, не используемые в коде компонента, навешиваются на **главный** элемент компонента. По умолчанию главным является корневой элемент:

  ```jsx
  const Component = (props) => <div {...props} className={styles.Component} />;
  ```

  Бывают случаи, например, поле ввода, когда главным является именно `input`, а не обёртка:

  ```jsx
  import styles from './Input.module.css';

  const Input = ({ mode, style, className, ...restProps }) => {
    return (
      <div
        className={classNames(className, styles.host, mode === 'default' && styles.modeDefault)}
        style={style}
      >
        <input {...restProps} />
      </div>
    );
  };
  ```

- Компонент корректно отрисовывается, если не передавать никаких свойств. Вместо `defaultProps`, [deprecated для функциональных компонентов](https://github.com/facebook/react/pull/16210), используем спред:

  ```jsx
  import styles from './Component.module.css';

  const Component = ({ mode = 'default', className, ...restProps }) => (
    <div
      className={classNames(className, styles.host, mode === 'default' && styles.modeDefault)}
      {...restProps}
    />
  );
  ```

- Для цветов, скруглений, размеров, отступов и теней используются css-переменные из [vkui-tokens](https://github.com/VKCOM/vkui-tokens)
- Для типографии используются компоненты [Typography](https://vkcom.github.io/VKUI/#!/Typography) там, где это возможно
- Добавлен `export` компонента и его свойств в `packages/vkui/src/index.ts`
- Компонент покрыт юнит- и скриншотными тестами. [Гайд по тестированию](https://github.com/VKCOM/VKUI/blob/master/docs/TESTING.md)
- Компонент корректно отображается на всех платформах, размерах и цветовых схемах. В styleguide для всех этих параметров есть переключатели
- Код корректно работает на [поддерживаемых нами браузерах](https://github.com/VKCOM/VKUI#%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D1%8B)
- Для поддержки адаптивности следует придерживаться [гайда по написанию адаптивных компонентов](https://github.com/VKCOM/VKUI/blob/master/docs/ADAPTIVITY_GUIDE.md)
- `a11y` (см. пример хорошего PR с внедрением доступности, на который можно равняться [#3337](https://github.com/VKCOM/VKUI/issues/3337)):

  - Компонент соответствует требованиям `a11y`
  - Написаны юнит-тесты на кейсы связанные с `a11y`
  - В документации компонента есть раздел про `a11y` (если необходимо)
  - Анимации, которые могут вызвать утомляемость у людей с нарушением вестибулярного аппарата,
    учитывают запрос `@media (prefers-reduced-motion: reduce)`. Зачастую это анимации появления/исчезновения.
    В них передвижения, по типу `transform: translate()`, и/или изменения размера, по типу `transform: scale()`,
    должны быть приведены к анимации через прозрачность, например, как сделано в `Alert`. Есть
    исключение, когда пользователь сам изменяет объект, например, swipe-back в компоненте `View`,
    или анимация совсем незначительная, например, как в `Switch` или в `<Cell mode="removable" />` (в **iOS**).

    В PR [#6979](https://github.com/VKCOM/VKUI/pull/6979) можно посмотреть больше примеров таких упрощений.
