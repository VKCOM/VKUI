# Source Button

Аддон для Storybook, добавляющий кнопку в тулбар со ссылкой на исходный код текущего сториса. По умолчанию используется иконка GitHub.

## Установка

### Вариант 1: Через пресет (авторегистрация)

Добавьте пресет в `.storybook/main.ts`:

```ts
addons: [
  '@vkontakte/storybook-addons/source-button',
];
```

Аддон зарегистрируется автоматически со стандартными значениями. Кнопка не отображается, пока не задан `baseUrl`.

### Вариант 2: Программная регистрация

Зарегистрируйте аддон в `.storybook/manager.ts` с конфигурацией:

```ts
import { registerSourceButtonAddon } from '@vkontakte/storybook-addons';
import { GithubIcon } from '@storybook/icons';

registerSourceButtonAddon({
  baseUrl: 'https://github.com/VKCOM/VKUI',
  getUrl: (baseUrl, importPath) => `${baseUrl}/blob/master/${importPath}`,
  label: 'Исходный код',
  title: 'Открыть исходный код на GitHub',
  icon: GithubIcon,
});
```

### Вариант 3: Комбинированный (пресет + кастомизация)

Добавьте пресет в `.storybook/main.ts` для авторегистрации, а конфигурацию задайте в `.storybook/manager.ts`:

**.storybook/main.ts:**
```ts
addons: [
  '@vkontakte/storybook-addons/source-button',
];
```

**.storybook/manager.ts:**
```ts
import { setSourceButtonConfig } from '@vkontakte/storybook-addons';

setSourceButtonConfig({
  baseUrl: 'https://github.com/VKCOM/VKUI',
  label: 'Исходный код',
  title: 'Открыть исходный код на GitHub',
});
```

## Конфигурация

```ts
interface SourceButtonConfig {
  /** Функция, формирующая URL из baseUrl и importPath сториса */
  getUrl: (baseUrl: string, importPath: string) => string;
  /** Базовый URL репозитория */
  baseUrl: string;
  /** Кастомная иконка (React-компонент). По умолчанию — GithubIcon */
  icon?: ComponentType;
  /** Текст кнопки (aria-label) */
  label: string;
  /** Текст всплывающей подсказки (title) */
  title: string;
}
```

## Экспорты

```ts
import {
  registerSourceButtonAddon,
  sourceButtonAddonId,
  type SourceButtonConfig,
} from '@vkontakte/storybook-addons';
```
