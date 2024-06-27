```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <DisplayTitle level="1" style={{ marginBottom: 16 }}>
    DisplayTitle 1
  </DisplayTitle>
  <DisplayTitle level="2" style={{ marginBottom: 16 }}>
    DisplayTitle 2
  </DisplayTitle>
  <DisplayTitle level="3" style={{ marginBottom: 16 }}>
    DisplayTitle 3
  </DisplayTitle>
  <DisplayTitle level="4">DisplayTitle 4</DisplayTitle>
</div>
```

## Кастомизация

Есть возможность переопределить жирность.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <DisplayTitle level="3" weight="1" style={{ marginBottom: 16 }}>
    DisplayTitle 3 weight 1
  </DisplayTitle>
  <DisplayTitle level="3" weight="2" style={{ marginBottom: 16 }}>
    DisplayTitle 3 weight 2
  </DisplayTitle>
  <DisplayTitle level="3" weight="3">
    DisplayTitle 3 weight 3
  </DisplayTitle>
</div>
```
