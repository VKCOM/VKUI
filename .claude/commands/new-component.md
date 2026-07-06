---
description: Создание нового компонента VKUI по конвенциям проекта
---

# /new-component

Создаёт болванку нового компонента VKUI по всем конвенциям проекта.

## Аргументы

Пользователь передаёт **название компонента** (PascalCase) и опционально:
- **категорию** для Storybook (например, "Отображение данных", "Контролы", "Навигация")
- **список свойств** с типами и значениями по умолчанию

## Что нужно создать

Создай в `packages/vkui/src/components/<ComponentName>/` следующие файлы:

### 1. `<ComponentName>.tsx`

```tsx
'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasRootRef, HasChildren } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './<ComponentName>.module.css';

export interface <ComponentName>Props extends HasRootRef<HTMLDivElement>, HasChildren {}

/**
 * @see https://vkui.io/components/<component-name>
 */
export const <ComponentName> = ({ children, ...restProps }: <ComponentName>Props) => {
  return (
    <RootComponent
      {...restProps}
      baseClassName={styles.host}
    >
      {children}
    </RootComponent>
  );
};
```

Правила:
- `'use client'` в начале
- `import * as React from 'react'`
- Свойства деструктурированы, значения по умолчанию через `= 'default'`, НЕ `defaultProps`
- `className` и `style` навешиваются на корневой элемент
- `...restProps` на корневой элемент
- CSS-классы через `classNames()` из `@vkontakte/vkjs`
- JSDoc с `@see` ссылкой на документацию
- Русский язык в комментариях и JSDoc

### 2. `<ComponentName>.module.css`

```css
.host {
  /* Базовые стили компонента */
}
```

Правила:
- Классы в camelCase: `elementNameModification`
- Основной класс — `.host`
- Использовать CSS custom properties из vkui-tokens для цветов, размеров, отступов
- Использовать логические CSS-свойства (`margin-inline-start`, `padding-block`, `inset-block-start` и т.д.)
- НЕ использовать CSS Modules composition (`composes`)

### 3. `<ComponentName>.test.tsx`

```tsx
import { baselineComponent } from '../../testing/utils';
import { <ComponentName> } from './<ComponentName>';

describe('<ComponentName>', () => {
  baselineComponent(<ComponentName>);
});
```

`baselineComponent` автоматически проверяет: mount/unmount, a11y, передачу className/style/data-testid, getRootRef.

Если компонент использует свойства-переключатели (mode, size, appearance) — добавь дополнительные describe блоки для проверки каждой опции.

### 4. `<ComponentName>.stories.tsx`

```tsx
import { withCartesian } from '@project-tools/storybook-addon-cartesian';
import type { Meta, StoryFn } from '@storybook/react';
import { CanvasFullLayout } from '../../storybook/constants';
import { createStoryParameters } from '../../testing/storybook/createStoryParameters';
import { <ComponentName>, type <ComponentName>Props } from './<ComponentName>';

const story: Meta<<ComponentName>Props> = {
  title: '<Категория>/<ComponentName>',
  component: <ComponentName>,
  parameters: createStoryParameters('<ComponentName>', CanvasFullLayout),
  tags: ['<Категория на русском>'],
};

export default story;

type Story = StoryFn<<ComponentName>Props>;

export const Playground: Story = (props: <ComponentName>Props) => <<ComponentName> {...props} />;
```

Обязательно нужно стори `Playground`.

### 5. `<ComponentName>.e2e.tsx`

```tsx
import { test } from '@vkui-e2e/test';
import { <ComponentName>Playground } from './<ComponentName>.e2e-playground';

test('<ComponentName>', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<<ComponentName>Playground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
```

### 6. `<ComponentName>.e2e-playground.tsx`

```tsx
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { <ComponentName>, type <ComponentName>Props } from './<ComponentName>';

export const <ComponentName>Playground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          $adaptivity: 'y',
        },
      ]}
    >
      {(props: <ComponentName>Props) => <<ComponentName> {...props} />}
    </ComponentPlayground>
  );
};
```

### 7. `<component-name>.mdx` — страница документации

Создай файл `website/content/components/<component-name>.mdx`:

```mdx
---
description: Описание компонента в одном предложении.
---

<Overview group="<группа>">

# <ComponentName> [tag:component]

Описание компонента: для чего нужен, когда использовать.

</Overview>

{/* @example-description: Базовое использование `<ComponentName>`. */}
<Playground>
  ```jsx
  <<ComponentName> />
  ```
</Playground>

## Свойства и методы [#api]

<PropsTable name="<ComponentName>" />
```

Правила:
- `description` в frontmatter — краткое описание на русском
- `<Overview group="...">` — группа из `_meta.tsx` (layout, forms, buttons, navigation, feedback, modals, data, typography, config, utils)
- `[tag:component]` в заголовке — обязателен
- Русский язык во всех описаниях
- Каждый пример оборачивается в `<Playground>` с комментарием `{/* @example-description: ... */}`
- В конце — секция `## Свойства и методы [#api]` с `<PropsTable name="<ComponentName>" />`

### 8. Добавить страницу в навигацию `website/content/components/_meta.tsx`

Найти правильную секцию-разделитель и добавить в неё по алфавиту:

```ts
'<component-name>': '<ComponentName>',
```

Секции в `_meta.tsx`:
- `Раскладка` → `'##'`
- `Формы и поля ввода` → `'#####'`
- `Работа с датами` → `'######'`
- `Кнопки` → `'#######'`
- `Навигация` → `'####'`
- `Обратная связь` → `'###'`
- `Модальные окна` → `'##########'`
- `Отображение данных` → `'########'`
- `Типографика` → `'#########'`
- `Конфигурация` → `'#'`
- `Утилиты` → `'###########'`

### 9. Добавить экспорт в `packages/vkui/src/index.ts`

Найти правильное место по алфавиту и добавить:

```ts
export { <ComponentName> } from './components/<ComponentName>/<ComponentName>';
export type { <ComponentName>Props } from './components/<ComponentName>/<ComponentName>';
```

### 10. Добавить компонент в `website/components/mdx/Playground/scope.ts`

В импорте из `@vkontakte/vkui` добавить `<ComponentName>` по алфавиту.

В объекте `vkuiScope` добавить `<ComponentName>: <ComponentName>,` по алфавиту.

### 11. Добавить компонент в `packages/vkui/docs/components-overview/config.tsx`

Этот файл содержит конфигурацию для страницы "Components Overview". Нужно добавить 3 вещи:

1. **Импорт компонента** — в блоке `import { ... } from '../../src'` добавить `<ComponentName>` по алфавиту.

2. **Импорт Playground из stories** — после остальных импортов stories добавить по алфавиту:

```tsx
import { Playground as <ComponentName>Playground } from '../../src/components/<ComponentName>/<ComponentName>.stories';
```

3. **Запись в `COMPONENTS_DATA`** — добавить по алфавиту:

```tsx
<ComponentName>: {
  component: <ComponentName>,
  playgroundRender: <ComponentName>Playground.render,
  args: <ComponentName>Playground.args,
},
```

4. **Добавить компонент в секцию `CONFIG`** — найти нужную секцию по категории и добавить `'<ComponentName>'` в массив `components`. Секции: Layout, Forms, Dates, Buttons, Navigation, Feedback, Modals, Data Display, Typography, Utils.

## После создания

Сообщи пользователю что компонент создан и все файлы обновлены.
