Используется для визуализации выполнения асинхронного процесса (например, ajax-запроса). Если вы хотите заблокировать интерфейс на момент загрузки, используйте [ScreenSpinner](https://vkcom.github.io/VKUI/#/ScreenSpinner).

### Цифровая доступность (a11y)

Чтобы уведомить о выполнении асинхронного процесса пользователей скринридеров, проставьте на контейнер, в котором выполняется процесс, метки [`aria-busy`](https://doka.guide/a11y/aria-busy/) и [`aria-live`](https://doka.guide/a11y/aria-live/).

Чтобы заменить текст, который прочитает скринридер, передайте его в `children`. Он будет скрыт визуально, но останется доступным для ассистивных технологий.

```jsx { "props": { "layout": false, "iframe": false } }
<div
  aria-busy={true}
  aria-live="polite"
  style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
>
  <Spinner size="large" style={{ margin: '20px 0' }} />
  <Spinner size="medium" style={{ margin: '20px 0' }} />
  <Spinner size="regular" style={{ margin: '20px 0' }} />
  <Spinner size="small" style={{ margin: '20px 0' }}>
    Кастомный текст вместо "Загружается...", который озвучит скринридер
  </Spinner>
</div>
```
