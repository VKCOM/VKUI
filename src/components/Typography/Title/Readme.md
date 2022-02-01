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
  <Title level="3" weight="regular" style={{ marginBottom: 16 }}>
    Title 3 Regular
  </Title>
  <Title level="3" weight="medium" style={{ marginBottom: 16 }}>
    Title 3 Medium
  </Title>
  <Title level="3" weight="semibold">
    Title 3 Bold
  </Title>
</div>
```
