Документацию по миграции с v4 на v5 можно найти [здесь](https://github.com/VKCOM/VKUI/releases/tag/v5.0.1).

<br/><br/>

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
