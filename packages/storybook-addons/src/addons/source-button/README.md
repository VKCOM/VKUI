# Source Button

Аддон для Storybook, добавляющий кнопку в тулбар со ссылкой на исходный код текущего сториса. По умолчанию используется иконка GitHub.

## Установка

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
