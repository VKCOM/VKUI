# Гайд по переводу компонента на vkui-tokens

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

`--button_primary_background` — токен из [Appearance](https://github.com/VKCOM/Appearance).

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

Если создаётся новый компонент, то там Appearance можно уже не использовать:

```css
/* Button.css */

.Button {
  background-color: var(--vkui--color_background_accent);
  border-radius: var(--vkui--size_border_radius--regular);
}
```

#### Чеклист перевода компонента на vkui-tokens

- В стилях компонента не осталось платформенных селекторов типа `.Button--ios`, `.Button--vkcom`, `.Button--android`
- Если в стилях встречаются токены из Appearance, то их нужно не удалять, а дополнять фоллбэком на соответствующий токен из vkui-tokens
- В tsx компонента не осталось логики, которая зависит от платформы
- Компонент добавлен в `src/tokenized/index.ts` (в `src/index.ts` он так же должен быть)
- Имя компонента добавлено в массив из `styleguide/tokenized.js`

### После отказа от Appearance

В следующей мажорной версии мы откажемся от Appearance. После отказа останутся только токены из vkui-tokens:

```css
/* Button.css */

.Button {
  background-color: var(--vkui--color_background_accent);
  border-radius: var(--vkui--size_border_radius--regular);
}
```
