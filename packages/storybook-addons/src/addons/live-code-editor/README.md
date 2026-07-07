# Live Code Editor

Аддон для Storybook, добавляющий панель с живым редактором кода на базе Monaco Editor. Позволяет редактировать исходный код сторисов в реальном времени и сразу видеть результат.

## Установка

### Вариант 1: Через пресет (авторегистрация)

Добавьте пресет аддона в `.storybook/main.ts`:

```ts
import { fileURLToPath } from 'node:url';

const addons = [
  // Другие аддоны...
  fileURLToPath(import.meta.resolve('@vkontakte/storybook-addons/live-code-editor')),
];
```

Аддон зарегистрируется автоматически с форматированием по умолчанию (встроенный форматтер Monaco).

### Вариант 2: Программная регистрация

Зарегистрируйте аддон в `.storybook/manager.ts` с кастомной конфигурацией:

```ts
import { registerLiveCodeEditorAddon } from '@vkontakte/storybook-addons';

registerLiveCodeEditorAddon({
  format: async (code) => {
    const prettier = await import('prettier/standalone');
    const prettierPluginTS = await import('prettier/plugins/typescript');
    const prettierPluginEstree = await import('prettier/plugins/estree');
    return prettier.format(code, {
      parser: 'typescript',
      plugins: [prettierPluginTS, prettierPluginEstree],
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 110,
      bracketSpacing: true,
      semi: true,
    });
  },
});
```

### Вариант 3: Комбинированный (пресет + кастомизация)

Добавьте пресет в `.storybook/main.ts` для авторегистрации, а конфигурацию задайте в `.storybook/manager.ts`:

**.storybook/main.ts:**
```ts
const addons = [
  '@vkontakte/storybook-addons/live-code-editor',
];
```

**.storybook/manager.ts:**
```ts
import { setLiveCodeEditorConfig } from '@vkontakte/storybook-addons';

setLiveCodeEditorConfig({
  format: async (code) => {
    const prettier = await import('prettier/standalone');
    const prettierPluginTS = await import('prettier/plugins/typescript');
    const prettierPluginEstree = await import('prettier/plugins/estree');
    return prettier.format(code, {
      parser: 'typescript',
      plugins: [prettierPluginTS, prettierPluginEstree],
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 110,
      bracketSpacing: true,
      semi: true,
    });
  },
});
```

## Конфигурация

```ts
interface LiveCodeEditorConfig {
  /** Кастомная функция форматирования кода. Если не указана — используется встроенный форматтер Monaco */
  format?: (code: string) => Promise<string>;
}
```

## Настройка статических файлов

Monaco Editor и типы React нужно раздавать как статику. Добавьте в `.storybook/main.ts`:

```ts
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

staticDirs: [
  { from: path.resolve(__dirname, '../../../node_modules/monaco-editor/esm'), to: 'monaco-editor/esm' },
  { from: path.resolve(__dirname, '../../../node_modules/@types/react'), to: '@types/react' },
];
```

## Подключение декоратора

Добавьте `withLiveCodeEditor` в глобальные декораторы в `.storybook/preview.ts`:

```ts
import { withLiveCodeEditor } from '@vkontakte/storybook-addons';

export const decorators = [
  withLiveCodeEditor,
  // Другие декораторы...
];
```

> Важно, чтобы декоратор `withLiveCodeEditor` был первым в списке

## Настройка глобальных параметров

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
- **Форматирование** — код автоматически форматируется при загрузке и смене стори; по умолчанию используется встроенный форматтер Monaco, кастомную функцию (например, Prettier) можно задать через `registerLiveCodeEditorAddon({ format })`; ручное форматирование доступно через контекстное меню
- **Живой предпросмотр** — изменения в редакторе компилируются на лету через Babel и отображаются в области превью
- **Экспорт по ссылке** — можно скопировать ссылку с закодированным кодом (через контекстное меню → «Export By Link» или URL-параметр `live_code_editor`)
- **Сброс изменений** — через контекстное меню → «Reset all changes»
- **Адаптивная тема** — редактор следует теме Storybook (тёмная/светлая)

## Экспорты

```ts
import {
  registerLiveCodeEditorAddon,
  setLiveCodeEditorConfig,
  withLiveCodeEditor,
} from '@vkontakte/storybook-addons';

import type {
  LiveCodeEditorConfig,
  LiveCodeEditorParameters,
  ExtraLibs,
  NamedImports,
} from '@vkontakte/storybook-addons';
```
