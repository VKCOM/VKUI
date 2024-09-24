# Гайд по написанию стилей

## Соглашения

### Используйте camelCase для имён классов

Для всех `.module.css` файлов активирован линтер, который проверяет, чтобы локальные классы были в camelCase . Именно эти классы затем будут импортировать в JS и именно они затем будут отображаться в инспекторе браузера, если вы решите посмотреть какой-то элемент. Такой формат выбран в том числе для удобства написания и отладки кода.

### Модификаторы

У модификаторов элемента должен быть префикс с названием этого элемента. Например,

```css
.container {
}
.containerPrimary {
}
.containerSecondary {
}

.text {
}
.textWithShadow {
}
```

### Работа с модификаторами

У модификаторов может быть несколько значений. Для простоты их установки можно создавать коллекции.

```jsx
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import styles from './Component.module.css';

const animationStateClassNames = {
  enter: styles.enter,
  entering: styles.enter,
  entered: styles.entered,
  exit: styles.exit,
  exiting: styles.exit,
  exited: styles.exited,
};

const platformClassNames = {
  android: styles.android,
  vkcom: styles.vkcom,
};

const Component = ({ className, children }) => {
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController('enter');
  const platform = usePlatform();
  return (
    <div
      className={classNames(
        className,
        styles.host,
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
      className={classNames(className, styles.host)}
      style={objectFit ? { '--vkui_internal_Component_object-fit': objectFit } : undefined}
    >
      {children}
    </div>
  );
};
```

```css
.host {
  --vkui_internal_Component_object-fit: initial;

  object-fit: var(--vkui_internal_Component_object-fit);
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
<div className={classNames(styles.host, 'vkuiInternalCell')}>{before}</div>
```

В `before` может быть `<Avatar />` или иконка из библиотеки `@vkontakte/icons`. И нам необходимо
для них добавить отступ справа.

Модификацию `<Avatar />` мы производим непосредственно в его CSS файле, чтобы видеть в каких
контекстах он изменяется (см. **Проблемы | Обращения к элементам другого блока**):

```css
/* Avatar.module.css */
:global(.vkuiInternalCell) .host {
  margin-inline-end: 8px;
}
```

а модификацию иконки вносим в CSS файл самого `<Cell />`, потому что иконки лежат в отдельном
пакете со своими CSS селекторами:

```css
/* Cell.module.css */
.host :global(.vkuiIcon) {
  margin-inline-end: 10px;
}
```

## Проблемы

### Конфликт стилей блока и миксина

```css
/* Text.module.css */
.host {
  margin: 0;
}
```

```css
/* Button.module.css */
.text {
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
.host {
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
.host {
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
/* Banner.module.css */
.host .vkuiButton__in {
  padding-top: 4px;
}
```

Мы завязываемся на реализацию другого компонента. Это плохо, так как реализация может меняться.

#### Решение

Не обращаться к элементам другого блока

Для поддержки старого кода в некоторых местах используются глобальные классы `vkuiInternal*`.
От них следует избавляться.
