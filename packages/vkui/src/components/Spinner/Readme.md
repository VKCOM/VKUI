Используется для визуализации выполнения асинхронного процесса (например, ajax-запроса). Если вы хотите заблокировать интерфейс на момент загрузки, используйте [`ScreenSpinner`](#/ScreenSpinner).

## Цифровая доступность (a11y)

Чтобы уведомить о выполнении асинхронного процесса пользователей скринридеров, проставьте на контейнер, в котором выполняется процесс, метки [`aria-busy`](https://doka.guide/a11y/aria-busy/) и [`aria-live`](https://doka.guide/a11y/aria-live/).

Чтобы заменить текст, который прочитает скринридер, передайте его в `children`. Он будет скрыт визуально, но останется доступным для ассистивных технологий.

```jsx { "props": { "layout": false, "iframe": false } }
<Flex aria-busy={true} aria-live="polite" direction="column" gap={32} margin="auto">
  <Spinner size="xl" />
  <Spinner size="l" />
  <Spinner size="m" />
  <Spinner size="s">Кастомный текст вместо "Загружается...", который озвучит скринридер</Spinner>
</Flex>
```

<br>

## unstable_ExpressiveSpinner

Нестабильный компонент индикации загрузки в стиле
[M3 Expressive](https://m3.material.io/components/loading-indicator/overview).
Принимает все свойства, которые принимает компонент `Spinner`.
Для платформы `ios` используется обычный `Spinner`.

```jsx { "props": { "layout": false, "iframe": false } }
<Flex
  aria-busy={true}
  aria-live="polite"
  direction="column"
  justify="center"
  style={{ minHeight: 300 }}
>
  <ExpressiveSpinner size="xl" />
</Flex>
```
