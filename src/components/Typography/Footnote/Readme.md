```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <Footnote>Footnote</Footnote>
</div>
```

## Кастомизация

Есть возможность переопределить жирность.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <Footnote weight="1" style={{ display: "block", marginBottom: 16 }}>
    Footnote weight 1
  </Footnote>
  <Footnote weight="2" style={{ display: "block", marginBottom: 16 }}>
    Footnote weight 2
  </Footnote>
  <Footnote weight="3" style={{ display: "block" }}>
    Footnote weight 3
  </Footnote>
</div>
```
