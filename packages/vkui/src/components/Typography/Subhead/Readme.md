```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <Subhead>Subhead</Subhead>
</div>
```

## Кастомизация

Есть возможность переопределить жирность.

```jsx static
<Subhead weight="1">Subhead weight 1</Subhead>
```

Тег элемента, в котором будет рендериться контент, можно переопределить с помощью свойства `Component`.

```jsx static
<Subhead Component="h2" weight="1">
  Subhead in h2
</Subhead>
```

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ padding: 20 }}>
  <Subhead weight="1" style={{ marginBottom: 16 }}>
    Subhead weight 1
  </Subhead>
  <Subhead weight="2" style={{ marginBottom: 16 }}>
    Subhead weight 2
  </Subhead>
  <Subhead Component="h5" weight="3">
    Subhead weight 3
  </Subhead>
</div>
```
