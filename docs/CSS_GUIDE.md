# Гайд по написанию стилей

## Соглашения

- Используем БЭМ-нотацию
- Блок начинается с заглавной буквы: `.Checkbox`
- Многословный блок разделяется через camelCase: `.ButtonGroup`
- Элемент от блока отделяется двумя подчеркиваниями: `.Checkbox__in`
- Многословные элементы разделяются через kebab-case: `.Banner__before-title`
- Модификатор отделяется двумя дефисами: `.Input--plain` (см. **Работа с модификаторами**)
- Многословные модификаторы разделяются через kebab-case или camelCase: `.Checkbox--sizeX-regular`

### Работа с модификаторами

У модификаторов может быть несколько значений. Для простоты их установки можно создавать коллекции.

```jsx
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import styles from './Component.module.css';

const animationStateClassNames = {
  enter: styles['Component--enter'],
  entering: styles['Component--enter'],
  entered: styles['Component--entered'],
  exit: styles['Component--exit'],
  exiting: styles['Component--exit'],
  exited: styles['Component--exited'],
};

const platformClassNames = {
  android: styles['Component--android'],
  vkcom: styles['Component--vkcom'],
};

const Component = ({ className, children }) => {
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController('enter');
  const platform = usePlatform();
  return (
    <div
      className={classNames(
        className,
        styles.Component,
        animationStateClassNames[animationState],
        platform !== 'ios' && platformClassNames[platform],
      )}
      {...animationHandlers}
    >
      {children}
    </div>
  );
};
```

Если модификатор является CSS-свойством, то стоит предпочесть определения CSS Custom Properties
для его передачи.

```jsx
import { classNames } from '@vkontakte/vkjs';
import styles from './Component.module.css';

const Component = ({ objectFit, children }) => {
  return (
    <div
      className={classNames(className, styles.Component)}
      style={objectFit ? { '--vkui_internal_Component_object-fit': objectFit } : undefined}
    >
      {children}
    </div>
  );
};
```

```css
.Component {
  --vkui_internal_Component_object-fit: initial;

  object-fit: var(--vkui_internal_Component_object-fit);
}
```

## Связность стилей

Если компонент состоит из других компонентов, то для их модификации используем БЭМ-миксин. Пример:

```tsx
// Button.tsx
<button className={styles.Button}>
  <Text className={styles.Button__text}>{children}</Text>
</button>
```

```css
/* Button.module.css */
.Button__text {
  padding: 8px;
}
```

## Глобальные классы

Класс, который начинается с `vkui` и `vkuiInternal`, обозначает, что он глобальный. Например,
`vkuiIcon` у иконок из `@vkontakte/icons` и `vkuiInternalFormItem` у `<FormItem />`.

В файлах `*.module.css` они должны быть обёрнуты в [`:global(.xxx)`](https://github.com/css-modules/css-modules#exceptions),
чтобы CSS Modules не трогал их.

Рассмотрим на примере.

```jsx
// Cell.tsx
<div className={classNames(styles.Cell, 'vkuiInternalCell')}>{before}</div>
```

В `before` может быть `<Avatar />` или иконка из библиотеки `@vkontakte/icons`. И нам необходимо
для них добавить отступ справа.

Модификацию `<Avatar />` мы производим непосредственно в его CSS файле, чтобы видеть в каких
контекстах он изменяется (см. **Проблемы | Обращения к элементам другого блока**):

```css
/* Avatar.module.css */
:global(.vkuiInternalCell) .Avatar {
  margin-inline-end: 8px;
}
```

а модификацию иконки вносим в CSS файл самого `<Cell />`, потому что иконки лежат в отдельном
пакете со своими CSS селекторами:

```css
/* Cell.module.css */
.Cell :global(.vkuiIcon) {
  margin-inline-end: 10px;
}
```

## Проблемы

### Конфликт стилей блока и миксина

```css
/* Text.module.css */
.Text {
  margin: 0;
}
```

```css
/* Button.module.css */
.Button__text {
  margin: 4px 0;
}
```

Вес селекторов одинаковый, поэтому применится последний по порядку. Рассчитывать на порядок сложно, так как он может
меняться, если собирать стили вебпаком.

#### Решение

Избегать правил на блоке, которые могут быть в миксине.

Список правил, которых стоит избегать:

- `display`
- `margin`
- `position`
- `inset`/`top`/`right`/`bottom`/`left`
- `transform`

### Сброс стилей

Допустим, мы делаем компонент, который по умолчанию имеет внутренние отступы.

```css
/* Placeholder.module.css */
.Placeholder {
  padding: 16px;
}
```

Но пользователю хотелось бы отключить их.

#### Решение

В таком случае необходимо снабдить компонент параметром `noPadding`, который при `true` никакие
`padding` на блок не навешивает.

### Нормализация стилей

Допустим, мы делаем компонент кнопки. Согласно дизайну, кнопка может быть ссылкой. Поэтому
Button мы тоже наделяем возможностью рендерить любой html-элемент, в том числе `a`. В силу
ряда стилей нам необходимо, что кнопка не была инлайновой. Поэтому мы пишем следующее:

```css
/* Button.module.css */

.Button {
  /* ... */
  display: inline-block;
}
```

Теперь те, кто хочет скрыть кнопку, используя миксин, столкнутся с проблемой конфликта
блока и миксина.

#### Решение

В данном случае мы можем только порекомендовать разработчикам оборачивать кнопку
в условный `div` или передавать `style={{ display: block }}`.

### Обращения к элементам другого блока

```css
/* Banner.css */
.Banner .Button__in {
  padding-top: 4px;
}
```

Мы завязываемся на реализацию другого компонента. Это плохо, так как реализация может меняться.

#### Решение

Не обращаться к элементам другого блока

Для поддержки старого кода в некоторых местах используются глобальные классы `vkuiInternal*`.
От них следует избавляться.
