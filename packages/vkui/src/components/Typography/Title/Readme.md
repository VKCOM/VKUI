Семейство заголовков.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <Title level="1" style={{ marginBottom: 16 }}>
    Title 1
  </Title>
  <Title level="2" style={{ marginBottom: 16 }}>
    Title 2
  </Title>
  <Title level="3">Title 3</Title>
</div>
```

## Кастомизация

Есть возможность переопределить жирность.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <Title level="3" weight="1" style={{ marginBottom: 16 }}>
    Title 3 weight 1
  </Title>
  <Title level="3" weight="2" style={{ marginBottom: 16 }}>
    Title 3 weight 2
  </Title>
  <Title level="3" weight="3">
    Title 3 weight 3
  </Title>
</div>
```
