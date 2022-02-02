# Гайд по переводу компонента на vkui-tokens

Сейчас компоненты подстраиваются под три разных платформы: vk ios, vk android и vkcom. Эта логика зашита
в коде компонентов. Кастомизировать библиотеку под свою платформу практически невозможно.
Нужно переписать стили так, чтобы их кастомизируемая часть (размеры, цвета, шрифты)
задавалась через css-переменные. Разработчики платформ будут генерировать свой
набор css-переменных, тем самым кастомизируя библиотеку под себя.

Сейчас цвета уже задаются через css-переменные (токены). Система этих токенов
называется [Appearance](https://github.com/VKCOM/Appearance/blob/master/main.valette/scheme.json).
Изначально токены хранятся в JSON, но в библиотеку они попадают в виде набора css-переменных.

В итоговый CSS библиотеки уже вшиты три набора токенов

- Android (default) — для мобильного приложения ВКонтакте под Android. Эта же тема считается дефолтной.
- iOS — для мобильного приложения ВКонтакте под iOS.
- vkcom — для десктопной версии сайта ВКонтакте.

Некоторые разработчики генерируют собственный набор токенов, точечно переопределяя значения из вышеописанных наборов.

vkui-tokens — новый набор токенов. Он контролирует не только цвета, но и размеры, шрифты и анимации.
Наша задача — поддержать обе системы токенов, чтобы текущие пользователи библиотеки не лишились возможности
кастомизировать цвета через систему Appearance, а новые пользователи могли пользоваться кастомизацией,
которую предлагает vkui-tokens.

В следующей мажорной версии библиотеки мы откажемся от Appearance, но сейчас, плавно переводя
компоненты на новые токены, мы должны поддерживать обе эти системы.

## Текущее положение дел

Обычно стили компонента выглядят так:

```css
/* Button.css */

.Button {
  background: var(--button_primary_background); /* Кроссплатформенные стили */
}

.Button--ios {
  border-radius: 10px; /* Стили для vk ios */
}

.Button--android {
  border-radius: 8px; /* Стили для vk android */
}

.Button--vkcom {
  border-radius: 4px; /* Стили для vkcom */
}
```

`--button_primary_background` — токен из Appearance. Значения токена появляются в итоговом бандле, который выглядит примерно так:

```css
/* vkui.css */

:root,
.vkuibright_light {
  /* Светлая тема */
  --button_primary_background: #2d81e0;
}

.vkuispace_gray {
  /* Темная тема */
  --button_primary_background: #2a5885;
}

.Button {
  background: #2d81e0; /* Автоматически сгенерированный фоллбэк, который берется из светлой темы */
  background: var(--button_primary_background);
}

.Button--ios {
  border-radius: 10px; /* Стили для vk ios */
}

.Button--android {
  border-radius: 8px; /* Стили для vk android */
}

.Button--vkcom {
  border-radius: 4px; /* Стили для vkcom */
}
```

Пример использования:

```jsx
import { AppRoot, ConfigProvider, Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

ReactDOM.render(
  <ConfigProvider platform="vkcom" appearance="light">
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root
);
```

Рядом с бандлом, в который вшиты значения токенов Appearance, генерируется бандл без этих значений.

```css
/* components.css */

.Button {
  background: #2d81e0; /* Автоматически сгенерированный фоллбэк, который берется из светлой темы */
  background: var(--button_primary_background);
}

.Button--ios {
  border-radius: 10px; /* Стили для vk ios */
}

.Button--android {
  border-radius: 8px; /* Стили для vk android */
}

.Button--vkcom {
  border-radius: 4px; /* Стили для vkcom */
}
```

Такой бандл нужен для случаев, когда css-переменные с токенами уже есть на странице и нет
смысла их дублировать в бандле библиотеки.

Пример использования:

```jsx
import { AppRoot, ConfigProvider, Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/components.css";
import "path/to/my/appearance/tokens.css"; // Добавляем свои значения токенов

ReactDOM.render(
  <ConfigProvider platform="vkcom" appearance="dark" scheme="inherit">
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root
);
```

То есть Appearance позволяет кастомизировать внешний вид компонентов, но только их цветовую часть.

## Внедрение vkui-tokens

### Промежуточный вариант

Промежуточный вариант позволяет пользователям использовать либо Appearance, либо vkui-tokens.

```css
/* Button.css */

.Button {
  background-color: var(
    --button_primary_background,
    var(--vkui--color_background_accent)
  );
  border-radius: var(--vkui--size_border_radius--regular);
}
```

Если создаётся новый компонент, то там фоллбэки Appearance можно уже не использовать:

```css
/* Button.css */

.Button {
  background-color: var(--vkui--color_background_accent);
  border-radius: var(--vkui--size_border_radius--regular);
}
```

`vkui.css` получится таким:

```css
/* vkui.css */

:root,
.vkuibright_light {
  /* Светлая тема */
  --button_primary_background: #2d81e0;
}

.vkuispace_gray {
  /* Темная тема */
  --button_primary_background: #2a5885;
}

:root,
.vkui--vkBase--light {
  --vkui--size_border_radius--regular: 8px;
}

.vkui--vkBase--dark {
  --vkui--size_border_radius--regular: 8px;
}

.vkui--vkIOS--light {
  --vkui--size_border_radius--regular: 10px;
}

.vkui--vkIOS--dark {
  --vkui--size_border_radius--regular: 10px;
}

.vkui--vkCom--light {
  --vkui--size_border_radius--regular: 4px;
}
.vkui--vkCom--dark {
  --vkui--size_border_radius--regular: 4px;
}

.Button {
  background: #2d81e0; /* Автоматически сгенерированный фоллбэк, который берется из светлой темы */
  background: var(
    --button_primary_background,
    var(--vkui--color_background_accent)
  );
  border-radius: 8px; /* Автоматически сгенерированный фоллбэк, который берется из платформы android */
  border-radius: var(--vkui--size_border_radius--regular);
}
```

Заметьте, что в `vkui.css` сохранились значения токенов Appearance, а значений vkui-tokens нет, но есть
только ссылки на них в css-правилах. Это сделано для обратной совместимости.

В components.css нет ни значений Appearance токенов, ни vkui-tokens.

```css
/* components.css */
.Button {
  background: #2d81e0; /* Автоматически сгенерированный фоллбэк, который берется из светлой темы */
  background: var(
    --button_primary_background,
    var(--vkui--color_background_accent)
  );
  border-radius: 8px; /* Автоматически сгенерированный фоллбэк, который берется из платформы android */
  border-radius: var(--vkui--size_border_radius--regular);
}
```

Для тех, кто пользуется `vkui.css` пример использования остаётся прежним.

Для тех, кто пользуется `components.css` и кастомную тему, основанную на Appearance, пример меняется:

```jsx
import { AppRoot, ConfigProvider, Button } from "@vkontakte/vkui";
/*
 * Так как часть компонентов переведены на vkui-tokens, необходимо импортировать их значения.
 */
import "@vkontakte/vkui-tokens/themes/vkBase/cssVars/declarations/onlyVariables.css";
import "path/to/my/appearance/tokens.css"; // Добавляем свои значения токенов

ReactDOM.render(
  <ConfigProvider platform="vkcom" appearance="dark" scheme="inherit">
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root
);
```

Для того чтобы использовать VKUI и vkui-tokens необходимо внести следующие изменения:

```jsx
import { AppRoot, ConfigProvider, Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/components.css"; // Импортируем components.css вместо vkui.css
import "path/to/my/vkui-tokens.css"; // Добавляем сгенерированные для своей платформы и цветовой темы значения vkui-tokens

ReactDOM.render(
  // Добавляем hasNewTokens
  <ConfigProvider platform="octavius" appearance="light" hasNewTokens>
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root
);
```

#### Чеклист перевода компонента на vkui-tokens

- В стилях компонента не осталось платформенных селекторов типа `.Button--ios`, `.Button--vkcom`, `.Button--android`
- В tsx компонента не осталось логики, которая зависит от платформы
- Компонент добавлен в src/tokenized/index.ts

### После отказа от Appearance

В следующей мажорной версии мы откажемся от Appearance. После отказа останутся только токены из vkui-tokens.

```css
/* Button.css */

.Button {
  background-color: var(--vkui--color_background_accent);
  border-radius: var(--vkui--size_border_radius--regular);
}
```

Бандл `components.css` станет основным и переименуется в `vkui.css`. В основном бандле уже
не будет значений css-переменных, останутся только фоллбэки на абсолютные значения.

```css
/* vkui.css */

.Button {
  background: #2d81e0; /* Автоматически сгенерированный фоллбэк, который берется из светлой темы */
  background: var(--vkui--color_background_accent);
  border-radius: 8px; /* Автоматически сгенерированный фоллбэк, который берется из платформы android */
  border-radius: var(--vkui--size_border_radius--regular);
}
```

Пример использования:

```jsx
import { AppRoot, ConfigProvider, Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import "@vkontakte/vkui-tokens/themes/vkcomLight";

ReactDOM.render(
  <ConfigProvider platform="vkcom" appearance="light">
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root
);
```
