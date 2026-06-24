# Storybook Theme

Аддон для Storybook, добавляющий переключатель темы интерфейса Storybook (light/dark) в тулбар. Позволяет кастомизировать внешний вид самого Storybook с помощью собственных тем.

## Установка

### Вариант 1: Через пресет (авторегистрация)

Добавьте пресет в `.storybook/main.ts`:

```ts
addons: [
  '@vkontakte/storybook-addons/storybook-theme',
];
```

Аддон зарегистрируется автоматически со стандартными темами Storybook.

### Вариант 2: Программная регистрация (рекомендуется для кастомизации)

Зарегистрируйте аддон в `.storybook/manager.ts` с кастомными темами:

```ts
import { registerStorybookThemeAddon } from '@vkontakte/storybook-addons';
import { vkuiDarkTheme, vkuiLightTheme } from './vkuiThemes';

registerStorybookThemeAddon({
  lightTheme: vkuiLightTheme,
  darkTheme: vkuiDarkTheme,
});
```

## Конфигурация

```ts
interface StorybookThemeConfig {
  /** Светлая тема Storybook (объект ThemeVars от storybook/theming) */
  lightTheme: ThemeVars;
  /** Тёмная тема Storybook (объект ThemeVars от storybook/theming) */
  darkTheme: ThemeVars;
  /** Имя параметра. По умолчанию: 'storybookTheme' */
  parameterName: string;
  /** Значение при первом запуске. По умолчанию: 'system' */
  defaultValue?: 'light' | 'dark' | 'system'
}
```

## Создание кастомных тем

Темы создаются с помощью `create` из `storybook/theming`:

```ts
import { create } from 'storybook/theming';
import darkLogo from './logo-dark.svg';
import lightLogo from './logo-light.svg';

export const myLightTheme = create({
  base: 'light',
  brandTitle: 'My Project Storybook',
  brandUrl: 'https://example.com/',
  brandTarget: '_blank',
  brandImage: darkLogo,
});

export const myDarkTheme = create({
  base: 'dark',
  brandTitle: 'My Project Storybook',
  brandUrl: 'https://example.com/',
  brandTarget: '_blank',
  brandImage: lightLogo,
  appPreviewBg: '#000',
});
```

## Экспорты

```ts
import {
  registerStorybookThemeAddon,
  storybookThemeAddonId,
  SET_STORYBOOK_THEME,
  type StorybookThemeConfig,
} from '@vkontakte/storybook-addons';
```
