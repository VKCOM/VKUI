---
sidebar_label: Платформы и темы
---

# Платформы и темы

Как уже было сказано ранее, VKUI может мимикрировать под дизайны разных платформ. Благодаря этой особенности,
у вас есть возможность расширять функционал ВКонтакте интерфейсами, которые неотличимы от нативных разделов.

## Платформы

На данный момент поддерживаются 3 платформы — `ios`, `android` и `vkcom`. Для применения дизайна платформы, достаточно
передать её в компонент [`ConfigProvider`](https://vkcom.github.io/VKUI/#/ConfigProvider) в качестве значения свойства `platform`.

:::info[Важно]

Дефолтной считается платформа `android`. Такое название — это историческое наследие. Эту тему стоит применять не только
при встраивании в наш Android клиент, но и для [m.vk.com](https://m.vk.com). Она так же подходит для разработки
standalone-приложений (то есть приложений, которые работают как полноценный сайт и никуда не встраиваются)
:::

```jsx static
<ConfigProvider platform="ios">
  <AdaptivityProvider>
    <AppRoot>
      <SimpleCell>Эта ячейка будет выглядеть точь в точь как в iOS клиенте ВКонтакте</SimpleCell>
    </AppRoot>
  </AdaptivityProvider>
</ConfigProvider>
```

Чтобы получить значение текущей платформы можно использовать хук `usePlatform` или HOC `withPlatform`. Подробнее об
этих инструментах можно познакомиться в [утилитах](https://vkcom.github.io/VKUI/#/Utils).

:::info[Важно]

Платформа `vkcom` не предназначена для адаптивного интерфейса. Используйте её только в том случае, если
ваше приложение встроено в десктопный [vk.com](https://vk.com).
:::

### Автоматическое определение платформы

Передавать платформу в `ConfigProvider` необязательно. Этот служебный компонент умеет определять её автоматически.

### Переопределение платформы для отдельных компонентов

Если вам необходимо переопределить платформу для отдельных компонентов приложения, то это можно сделать через `PlatformProvider`.

```jsx static
<PlatformProvider value="ios">
  <Snackbar action="Поделиться">Поделиться</Snackbar>
</PlatformProvider>
```

## Темы

У каждой платформы есть две темы: светлая (`light`) и тёмная (`dark`).
Применить тему можно передав её значение в свойство `appearance` компонента [`ConfigProvider`](https://vkcom.github.io/VKUI/#/ConfigProvider).

```jsx static
<ConfigProvider appearance="dark">
  <AdaptivityProvider>
    <AppRoot>
      <SimpleCell>Вечереет...</SimpleCell>
    </AppRoot>
  </AdaptivityProvider>
</ConfigProvider>
```

### Переопределение темы для отдельных компонентов

Если вам необходимо переопределить тему для отдельных компонентов приложения, то это можно сделать через `AppearanceProvider`.

```jsx static
<AppearanceProvider value="dark">
  <Snackbar action="Поделиться">Поделиться</Snackbar>
</AppearanceProvider>
```

### Откуда взять значение темы при встраивании?

`ConfigProvider` умеет сам определять тему ориентируясь на CSS медиа выражение [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

### Использование темы в коде

У каждой темы есть поле `appearance`, которое определяет, тёмная она или светлая. В коде мы рекомендуем опираться
на значение этого свойства.

Его текущее значение можно определить с помощью хука `useAppearance`:

```jsx static
const appearance = useAppearance();
<Div>{appearance === 'light' ? 'Out of the blue' : 'And into the black'}</Div>;
```

`Appearance` может пригодиться для замены изображений на инвертированную версию в темных темах.
