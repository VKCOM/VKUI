# VKUI — шаблон приложения на Next.js + TypeScript

[![Открыть в StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/VKCOM/VKUI/tree/master/examples/vkui-nextjs-ts)
[![Открыть в CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/sandbox/github/VKCOM/VKUI/tree/master/examples/vkui-nextjs-ts)

Готовый шаблон для быстрого старта проектов с VKUI, Next.js и TypeScript с использованием App Router.

## Как использовать

### 1. Скачать шаблон

Через curl:

```bash
curl https://codeload.github.com/VKCOM/VKUI/tar.gz/master | tar -xz --strip=2 VKUI-master/examples/vkui-nextjs-ts
cd vkui-nextjs-ts
```

Или клонировать репозиторий:

```bash
git clone https://github.com/VKCOM/VKUI.git
cd VKUI/examples/vkui-nextjs-ts
```

### 2. Установить зависимости

```bash
yarn install
```

### 3. Запустить проект

В режиме разработки:

```bash
yarn dev
```

Сборка для production:

```bash
yarn build
```

## О шаблоне

Этот пример демонстрирует:
- Интеграцию VKUI с Next.js App Router 
- Готовую конфигурацию TypeScript 
- Настройку темизации через `ConfigProvider`
- Примеры использования основных компонентов VKUI

## Особенности Next.js

- Использование `App Router` для маршрутизации
- Серверные компоненты для оптимизации производительности
- Автоматическая обработка статических ресурсов
- Встроенная поддержка `TypeScript`

## Что дальше?

1. Изучите [документацию VKUI](https://vkcom.github.io/VKUI) для работы с компонентами
2. Ознакомьтесь с [официальной документацией Next.js](https://nextjs.org/docs)
3. Посмотрите [другие примеры](https://github.com/VKCOM/VKUI/tree/master/examples) интеграций
