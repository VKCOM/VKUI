Документацию по миграции с v4 на v5 можно найти [здесь](https://github.com/VKCOM/VKUI/releases/tag/v5.0.1).

<br/><br/>

## Обновление React

- Минимальная поддерживаемая версия **React** увеличена до v18.2.0

## Удалили интеграцию с [VK Mini Apps](https://vk.com/miniapps) и [@vkontakte/vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge)

> **Note**
>
> Этот Breaking Change предназначен для разработчиков мини-приложений ВКонтакте. Если вы таким
> не являетесь, то смело пропускайте эту секцию.

Изначально, **VKUI** создавался как инструмент для создания клиентской части мини-приложений [ВКонтакте](https://vk.com).
Сейчас **VKUI** уже больше чем просто мини-приложения. Разработчики используют библиотеку, чтобы
создавать полноценные независимые приложения, которые никак не связаны с [VK Mini Apps](https://vk.com/miniapps).

В связи с этим мы отказались от завязки на мини-приложения [ВКонтакте](https://vk.com). Для этого мы
удалили интеграцию с библиотекой [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), а
также убрали упоминания о [VK Mini Apps](https://vk.com/miniapps) в документации. Это привнесло в
библиотеку ряд изменений касающихся API.

### Конфигурация VKUI

Из [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge) мы доставали несколько настроек:

1. тему (`light` или `dark`);
2. параметры адаптивности;
3. размеры безопасных зон (в CSS это `--safe-area-insets-*`);
4. открыто веб-вью или нет.

Первые три пункта перенесли в библиотеку [@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge-react).

Помимо **VK Bridge**, была завязка на мини-приложения в параметре `webviewType` за счёт свойства
`"vkapps"`. Теперь это параметр `hasCustomPanelHeaderAfter`, который по умолчанию `false`.

Бойлерплейт для **VK Mini Apps** представлен на странице [Интеграция с VK Mini Apps](https://vkcom.github.io/VKUI/#/integrations-vk-mini-apps)
под заголовком **Конфигурация VKUI**.

### [PullToRefresh](#/PullToRefresh)

До этого `runTapticImpactOccurred()` вызывался внутри компонента после вызова обработчика `onRefresh`.
Сам `runTapticImpactOccurred()` через `vkBridge.send` вызывает событие `VKWebAppTapticImpactOccurred`.
В виду отказа от [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), мы удалили вызов
`runTapticImpactOccurred()` на стороне **VKUI**.

Пример представлен на странице [Интеграция с VK Mini Apps](https://vkcom.github.io/VKUI/#/integrations-vk-mini-apps)
под заголовком **Виброотклик (Taptic Engine)**.

<br/><br/>

## [ConfigProvider](#/ConfigProvider)

- `webviewType` заменён на `hasCustomPanelHeaderAfter`
  - `webviewType={WebviewType.INTERNAL}` -> `hasCustomPanelHeaderAfter={false}`.
  - `webviewType={WebviewType.VKAPPS}` -> `hasCustomPanelHeaderAfter={true}`. При необходимости передайте `customPanelHeaderAfterMinWidth={<value>}` (по умолчанию `90`).

<br/><br/>

## [AppearanceProvider](#/AppearanceProvider)

По аналогии с остальными провайдерами свойство `appearance` заменено на `value`

```diff
- <AppearanceProvider appearance={appearance}>...</AppearanceProvider>
+ <AppearanceProvider value={appearance}>...</AppearanceProvider>
```

<br/><br/>

## ~`withInsets`~

Используйте вместо него хук `useInsets()` из [@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge-react).

<br/><br/>

## Поддержка браузеров

Библиотека по умолчанию компилируется в [ES2015 (ES6)](https://262.ecma-international.org/6.0/).
Список поддерживаемых браузеров находится в [.browserslistrc](https://github.com/VKCOM/VKUI/blob/v6.0.0/.browserslistrc)

> В VKUI есть [специальная сборка](https://vkcom.github.io/VKUI/#/CSS%20Modules)
> в ESNext, которая позволяет уменьшить размер вашего приложения

<br/><br/>

## CSS Logical для [специальной сборки](https://vkcom.github.io/VKUI/#/CSS%20Modules)

> **Note**
>
> Данное изменение не влияет на обычную сборку

Мы начинаем использовать [логические css свойства](https://www.w3.org/TR/css-logical-1/) вместо физических.
Если вам требуется [широкая браузерная поддержка](https://caniuse.com/css-logical-props),
рекомендуем воспользоваться [postcss-logical](https://www.npmjs.com/package/postcss-logical).

<br/><br/>

## Перечисления заменены на объекты

Следующие перечисления были заменены на [объекты](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums):

- `Platform`
- `Appearance`
- `SizeType`
- `ViewWidth`
- `ViewHeight`

<br/><br/>

## [`Alert`](#/Alert)

- Свойство `autoClose` удалено, теперь это поведение по-умолчанию

```diff
 <Alert
   actions={[
     {
       title: "Лишить права",
       mode: "destructive",
-      autoClose: false,
+      autoCloseDisabled: true,
     },
     {
       title: "Отмена",
-      autoClose: true,
       mode: "cancel",
     },
   ]}
   header="Подтвердите действие"
   text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
 />
```

<br/><br/>

## [`ActionSheetItem`](#/ActionSheetItem)

- Свойство `autoClose` удалено, теперь это поведение по умолчанию

```diff
 <ActionSheet>
-  <ActionSheetItem autoClose>Сохранить в закладках</ActionSheetItem>
+  <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
-  <ActionSheetItem autoClose={false}>Закрепить запись</ActionSheetItem>
+  <ActionSheetItem autoCloseDisabled>Закрепить запись</ActionSheetItem>
 </ActionSheet>
```

<br/><br/>

## [`CustomSelect`](#/CustomSelect)

- Функция `onInputChange` больше не получает вторым параметром список опций, а также никак не обрабатывает
  результат исполнения. Для фильтрации обновляйте `props.options` самостоятельно или используйте свойство `filterFn`
- Удалено свойство `option` из `CustomSelectOption`

<br/><br/>

## VisuallyHiddenInput

Устаревший компонент удален. Используйте [`VisuallyHidden`](#/VisuallyHidden)

```diff
- <VisuallyHiddenInput />
+ <VisuallyHidden Component="input" />
```

<br/><br/>

## RangeSlider

Устаревший компонент удален. Используйте [`Slider`](#/Slider)

```diff
- <RangeSlider />
+ <Slider multiple />
```

<br/><br/>

## Title

По умолчанию тэг в котором рендерится компонент теперь `span` и он больше не привязан к значению свойства `level`.

Переопределить тэг по умолчанию можно с помощью свойства `Component`.

```jsx static
<Title Component="h1" />
```

<br/><br/>

## Headline

Изменён тэг (с `h4` на `span`), в котором компонент рендерится по умолчанию.
Переопределить тэг по умолчанию можно с помощью свойства `Component`.

```jsx static
<Headline Component="h4" />
```

## Subhead

Изменён тэг (с `h5` на `span`), в котором компонент рендерится по умолчанию.
Переопределить тэг по умолчанию можно с помощью свойства `Component`.

```jsx static
<Subhead Component="h5" />
```

<br/><br/>
