# Color Scheme

Аддон для Storybook, добавляющий переключатель цветовой схемы (light/dark) в тулбар.

## Установка

### Вариант 1: Через пресет (авторегистрация)

Добавьте пресет в `.storybook/main.ts`:

```ts
addons: [
  '@vkontakte/storybook-addons/color-scheme',
];
```

Аддон зарегистрируется автоматически с параметром по умолчанию `colorScheme`.

### Вариант 2: Программная регистрация

Зарегистрируйте аддон в `.storybook/manager.ts` с кастомной конфигурацией:

```ts
import { registerColorSchemeAddon } from '@vkontakte/storybook-addons';

registerColorSchemeAddon({
  parameterName: 'myColorScheme',
});
```

## Конфигурация

```ts
interface ColorSchemeConfig {
  /** Имя параметра для чтения/записи цветовой схемы в globals. По умолчанию: 'colorScheme' */
  parameterName: string;
}
```

## Использование

### Глобальное значение

Цветовая схема задаётся через globals в `.storybook/preview.ts`:

```ts
export const initialGlobals = {
  colorScheme: 'light',
};
```

### Локальное значение для конкретного сториса

Можно зафиксировать цветовую схему на уровне сториса через параметр — тогда переключатель будет отключён:

```tsx
export const DarkOnly: StoryFn = {
  parameters: {
    colorScheme: 'dark',
  },
};
```

## Экспорты

```ts
import {
  registerColorSchemeAddon,
  colorSchemeAddonId,
} from '@vkontakte/storybook-addons';
```
