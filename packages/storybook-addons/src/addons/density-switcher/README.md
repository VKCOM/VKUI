# Density Switcher

Аддон для Storybook, добавляющий переключатель плотности (regular/compact/auto) в тулбар.

## Установка

### Вариант 1: Через пресет (авторегистрация)

Добавьте пресет в `.storybook/main.ts`:

```ts
addons: [
  '@vkontakte/storybook-addons/density-switcher',
];
```

Аддон зарегистрируется автоматически с параметром по умолчанию `density`.

### Вариант 2: Программная регистрация

Зарегистрируйте аддон в `.storybook/manager.ts` с кастомной конфигурацией:

```ts
import { registerDensitySwitcherAddon } from '@vkontakte/storybook-addons';

registerDensitySwitcherAddon({
  parameterName: 'myDensity',
});
```

### Вариант 3: Комбинированный (пресет + кастомизация)

Добавьте пресет в `.storybook/main.ts` для авторегистрации, а конфигурацию задайте в `.storybook/manager.ts`:

**.storybook/main.ts:**
```ts
addons: [
  '@vkontakte/storybook-addons/density-switcher',
];
```

**.storybook/manager.ts:**
```ts
import { setDensitySwitcherConfig } from '@vkontakte/storybook-addons';

setDensitySwitcherConfig({
  parameterName: 'myDensity',
});
```

## Конфигурация

```ts
interface DensitySwitcherConfig {
  /** Имя параметра для чтения/записи плотности в globals. По умолчанию: 'density' */
  parameterName: string;
}
```

## Использование

### Глобальное значение

Density задаётся через globals в `.storybook/preview.ts`:

```ts
export const initialGlobals = {
  density: 'auto',
};
```

Доступные значения: `regular`, `compact`, `auto`. По умолчанию лучше использовать значение 'auto'.

## Экспорты

```ts
import {
  registerDensitySwitcherAddon,
  setDensitySwitcherConfig,
  densitySwitcherAddonId,
  type DensitySwitcherConfig,
} from '@vkontakte/storybook-addons';
```
