## Разработка

1. Склонировать репозиторий и перейти в созданную директорию.
2. Установить зависимости: `yarn install`.
3. Поднять локально документацию с лайврелоадом: `yarn styleguide`. Свойства и методы компонента в режиме разработки по умолчанию не генерируются; если они вам нужны, используйте команду `yarn styleguide:props`.

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

- CSS-классы компонента передаем через `vkuiClass="Cmp"`
- CSS-классы названы по БЭМ: `.Component__element-name--modificator`. [Гайд по написанию стилей](https://github.com/VKCOM/VKUI/blob/master/CSS_GUIDE.md)
- Свойства `className` и `style` навешиваются на корневой элемент компонента
- Свойства, не используемые в коде компонента, навешиваются на **главный** элемент компонента. По умолчанию главным является корневой элемент:

```jsx
(props) => <div {...props} vkuiClass="Component" />;
```

Бывают случаи, например, поле ввода, когда главным является именно `input`, а не обёртка:

```jsx
const Input: React.FC<InputProps> = ({
  mode,
  style,
  className,
  ...restProps
}) => {
  return (
    <div
      vkuiClass={classNames("Input", `Input--${mode}`)}
      className={className}
      style={style}
    >
      <input {...restProps} />
    </div>
  );
};
```

- Компонент корректно отрисовывается, если не передавать никаких свойств. Вместо `defaultProps`, [deprecated для функциональных компонентов](https://github.com/facebook/react/pull/16210), используем спред:

```jsx
const Cmp: React.FC<CmpProps> = ({
  mode = "default",
  ...restProps,
}) => <div vkuiClass={classNames("Cmp", `Cmp--${mode}`)} {...restProps} />;
```

- Для цветов используются цветовые токены. Старые компоненты поддерживают [Appearance](https://github.com/VKCOM/Appearance) и [vkui-tokens](https://github.com/VKCOM/vkui-tokens), новые — только vkui-tokens. [Гайд по миграции](https://github.com/VKCOM/VKUI/blob/master/VKUI_TOKENS_MIGRATION_GUIDE.md)
- Для типографии используются компоненты [Typography](https://vkcom.github.io/VKUI/#!/Typography) там, где это возможно
- Добавлен `export` компонента и его свойств в `src/index.ts`
- Компонент покрыт юнит- и скриншотными тестами. [Гайд по тестированию](./TESTING.md)
- Компонент корректно отображается на всех платформах, размерах и цветовых схемах. В styleguide для всех этих параметров есть переключатели
- Код корректно работает на [поддерживаемых нами браузерах](https://github.com/VKCOM/VKUI#%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D1%8B)
