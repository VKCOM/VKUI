Обёртка для иконки, если требуется сделать её интерактивной.

```jsx { "props": { "layout": false, "adaptivity": true } }
const Example = () => {
  return (
    <div style={rowStyles}>
      <div>
        <IconButton>
          <Icon16Delete />
        </IconButton>
        <Footnote style={captionStyles}>16</Footnote>
      </div>

      <div>
        <IconButton>
          <Icon16MoreVertical />
        </IconButton>
        <Footnote style={captionStyles}>8x16</Footnote>
      </div>

      <div>
        <IconButton>
          <Icon24Delete />
        </IconButton>
        <Footnote style={captionStyles}>24</Footnote>
      </div>

      <div>
        <IconButton>
          <Icon28Delete />
        </IconButton>
        <Footnote style={captionStyles}>28</Footnote>
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
