# VKUI

VKUI — библиотека адаптивных React-компонентов для веб-приложений.

## Installation

Установи `@vkontakte/vkui` через пакетный менеджер проекта. Сверь версии React и других зависимостей с `peerDependencies` установленного пакета. Подробности есть в [руководстве по установке](./overview/install/).

## Configuration

Подключи `@vkontakte/vkui/dist/vkui.css` в точке входа приложения и оберни интерфейс в `ConfigProvider` и `AppRoot`. Платформу и цветовую схему можно задать в `ConfigProvider`. См. [руководство по использованию](./overview/usage/).

## Usage

Выбирай компоненты и проверяй их свойства по документации установленной версии `@vkontakte/vkui`. Сначала открой `node_modules/@vkontakte/vkui/docs/llms.txt`. Если локального индекса нет, используй `https://vkui.io/<версия>/llms.txt`.

```tsx
import { AppRoot, Button, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export function App() {
  return (
    <ConfigProvider>
      <AppRoot>
        <Button>Продолжить</Button>
      </AppRoot>
    </ConfigProvider>
  );
}
```

- [Индекс Markdown-документации](./llms.txt)
- [Карта документации](./sitemap.md)
- [Навыки для агентов](./.well-known/agent-skills/index.json)
