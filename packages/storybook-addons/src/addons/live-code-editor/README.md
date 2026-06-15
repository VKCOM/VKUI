# Live Code Editor

Аддон для Storybook, добавляющий панель с живым редактором кода на базе Monaco Editor. Позволяет редактировать исходный код сторисов в реальном времени и сразу видеть результат.

## Установка

### 1. Подключение пресета

Добавьте пресет аддона в `.storybook/main.ts`:

```ts
import { dirname, join, resolve } from 'node:path';

const addons = [
  // Другие аддоны...
  join(dirname(import.meta.url), '../node_modules/@vkontakte/storybook-addons/live-code-editor'),
];
```

Или если пакет доступен через алиас:

```ts
addons: [
  getLocalAddonPath('@vkontakte/storybook-addons/live-code-editor'),
];
```

### 2. Настройка статических файлов

Monaco Editor и типы React нужно раздавать как статику. Добавьте в `.storybook/main.ts`:

```ts
staticDirs: [
  { from: path.resolve(__dirname, '../../../node_modules/monaco-editor/esm'), to: 'monaco-editor/esm' },
  { from: path.resolve(__dirname, '../../../node_modules/@types/react'), to: '@types/react' },
];
```

### 3. Подключение декоратора

Добавьте `withLiveCodeEditor` в глобальные декораторы в `.storybook/preview.ts`:

```ts
import { withLiveCodeEditor } from '@<company>/storybook-addons';

export const decorators = [
  withLiveCodeEditor,
  // Другие декораторы...
];
```

> Важно, чтобы декоратор `withLiveCodeEditor` был первым в списке

### 4. Настройка глобальных параметров

Определите `getGlobals` в глобальных параметрах, чтобы указать, какие модули будут доступны в редакторе по умолчанию для всех сторисов:

```ts
export const parameters = {
  liveCodeEditor: {
    getGlobals: () => [
      import('react'),
      import('../src/index'),          // Компоненты VKUI
      import('../src/testing/mock'),    // Моки для тестирования
    ],
  },
};
```

Эти модули будут доступны в редакторе без явного импорта.

## Параметры

Параметры задаются через `parameters.liveCodeEditor` на уровне сториса или компонента:

```ts
interface LiveCodeEditorParameters {
  /** Кастомный исходный код для редактора. Если не указан — берётся из docs.source.originalSource */
  code?: string;
  /** Функция, возвращающая массив импортов (или Promise<imports>), доступных в редакторе */
  getGlobals?: () => Array<NamedImports | Promise<NamedImports>>;
  /** Переменные, которые будут доступны в области видимости редактора */
  scope?: NamedImports;
  /** Дополнительные TypeScript-определения для автодополнения в Monaco Editor */
  extraLibs?: ExtraLibs;
  /** Отключить живое редактирование для конкретного сториса */
  disabled?: boolean;
}
```

### Типы

```ts
type NamedImports = Record<string, unknown>;
type ExtraLibs = Record<string, string | (() => Promise<string>)>;
```

## Поддерживаемый формат сторисов

Редактор поддерживает сторисы, исходный код которых имеет один из следующих форматов:

### Стрелочная функция (наиболее частый формат)

```tsx
(props: ComponentProps) => <Button {...props} />
```

Аддон автоматически добавит `export const StoryName = ...`.

### Объявление функции

```tsx
function Story(props: ComponentProps) {
  return <Button {...props} />;
}
```

Аддон автоматически добавит `export`.

### Важно

- Код сториса **должен** экспортировать компонент с именем, совпадающим с названием сториса (после нормализации — удаления спецсимволов).
- Props-аргументы инлайнятся автоматически: `{...props}` будет заменено на инлайн-атрибуты (`appearance="accent" size="m"`) на основе текущих args сториса.
- Исходный код берётся из `docs.source.originalSource` (автоматически генерируется Storybook), либо можно указать вручную через параметр `code`.

## Использование

### Передача scope

Если сторис использует переменные, которые не являются глобальными импортами, передайте их через `scope`:

```tsx
export const Playground: StoryFn = {
  args: { /* ... */ },
  parameters: {
    liveCodeEditor: {
      scope: {
        commonStyles,
        customHelper,
      },
    },
  },
};
```

Теперь `commonStyles` и `customHelper` будут доступны в редакторе без импорта.

### Передача extraLibs

Для добавления TypeScript-определений в автодополнение Monaco Editor:

```tsx
parameters: {
  liveCodeEditor: {
    extraLibs: {
      'my-lib': 'declare module "my-lib" { export function hello(): void; }',
      'async-types': async () => {
        const res = await fetch('/types/my-component.d.ts');
        return res.text();
      },
    },
  },
},
```

### Отключение для конкретного сториса

```tsx
export const ComplexStory: StoryFn = {
  parameters: {
    liveCodeEditor: {
      disabled: true,
    },
  },
};
```

### Кастомный исходный код

```tsx
export const CustomCode: StoryFn = {
  parameters: {
    liveCodeEditor: {
      code: '(props) => <Button {...props} appearance="accent" />',
    },
  },
};
```

## Возможности редактора

- **Monaco Editor** — полноценный редактор кода с подсветкой синтаксиса TypeScript/JSX
- **Автодополнение** — типы React подгружаются автоматически; дополнительные типы можно добавить через `extraLibs`
- **Форматирование** — код автоматически форматируется через Prettier при загрузке; также доступно ручное форматирование через контекстное меню
- **Живой предпросмотр** — изменения в редакторе компилируются на лету через Babel и отображаются в области превью
- **Экспорт по ссылке** — можно скопировать ссылку с закодированным кодом (через контекстное меню → «Export By Link» или URL-параметр `live_code_editor`)
- **Сброс изменений** — через контекстное меню → «Reset all changes»
- **Адаптивная тема** — редактор следует теме Storybook (тёмная/светлая)
