Обёртка для иконки, если требуется сделать её интерактивной.

```jsx { "props": { "layout": false, "adaptivity": true } }
const Example = () => {
  return (
    <div style={rowStyles}>
      <div>
        <IconButton>
          <Icon16Delete />
        </IconButton>
        <Caption style={captionStyles}>16</Caption>
      </div>

      <div>
        <IconButton>
          <Icon16MoreVertical />
        </IconButton>
        <Caption style={captionStyles}>8x16</Caption>
      </div>

      <div>
        <IconButton>
          <Icon24Delete />
        </IconButton>
        <Caption style={captionStyles}>24</Caption>
      </div>

      <div>
        <IconButton>
          <Icon28Delete />
        </IconButton>
        <Caption style={captionStyles}>28</Caption>
      </div>
    </div>
  );
};

const rowStyles = {
  display: "flex",
  justifyContent: "center",
  gap: 16,
  padding: 16,
};

const captionStyles = {
  marginTop: 8,
  textAlign: "center",
};

<Example />;
```
