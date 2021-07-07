Используется для визуализации выполнения асинхронного процесса (например ajax запроса). Если нужно на момент загрузки
заблокировать интерфейс, то можно использовать надстройку над `Spinner` – [ScreenSpinner](#!/ScreenSpinner).

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
  <Spinner size="large" style={{ margin: '20px 0' }} />
  <Spinner size="medium" style={{ margin: '20px 0' }} />
  <Spinner size="regular" style={{ margin: '20px 0' }} />
  <Spinner size="small" style={{ margin: '20px 0' }} />
</div>
```
