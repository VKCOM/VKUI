```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <Headline level="1" style={{ marginBottom: 16 }}>
    Headline 1
  </Headline>
  <Headline level="2">Headline 2</Headline>
</div>
```

## Кастомизация

Есть возможность переопределить жирность.

Тег элемента, в котором будет рендериться контент, можно переопределить с помощью свойства `Component`.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <Headline level="2" weight="1" style={{ marginBottom: 16 }}>
    Headline 2 weight 1
  </Headline>
  <Headline level="2" weight="2" style={{ marginBottom: 16 }}>
    Headline 2 weight 2
  </Headline>
  <Headline Component="h4" level="2" weight="3">
    Headline 2 weight 3
  </Headline>
</div>
```
