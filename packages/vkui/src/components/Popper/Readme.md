Низкоуровневый компонент для отрисовки выпадающего блока. Единственная его задача — корректно позиционироваться
рядом с целевым элементом.

```jsx { "props": { "layout": false, "iframe": false } }
const [shown, setShown] = React.useState(false);
const buttonRef = React.useRef();

return (
  <React.Fragment>
    <Button getRootRef={buttonRef} onClick={() => setShown(!shown)} style={{ margin: 50 }}>
      {shown ? 'Закрыть' : 'Открыть'}
    </Button>
    {shown && (
      <Popper
        forcePortal={false}
        style={{ padding: '9px 12px', backgroundColor: 'green', color: '#fff' }}
        targetRef={buttonRef}
      >
        Привет
      </Popper>
    )}
  </React.Fragment>
);
```

## Виртуальный элемент

Помимо ссылки на DOM элемент, `Popper` можем принимать координаты виртуального элемента.
Виртуальный элемент представляет из себя объект со свойством `getBoundingClientRect()`.

> Чтобы не задавать все свойства координат вручную, можно использовать [DOMRect.fromRect](https://developer.mozilla.org/en-US/docs/Web/API/DOMRect/fromRect_static)

```jsx { "props": { "layout": false, "iframe": true } }
const [virtualElement, setVirtualElement] = React.useState(() =>
  DOMRect.fromRect({
    x: -200,
    y: -200,
    width: 10,
    height: 10,
  }),
);

const handleClick = (event) => {
  setVirtualElement(({ width, height }) =>
    DOMRect.fromRect({
      x: event.clientX,
      y: event.clientY,
      width,
      height,
    }),
  );
};

return (
  <div style={{ position: 'relative', width: '100vw', height: '100vh' }} onClick={handleClick}>
    <Div>Нажми в любое место в этом окне</Div>
    <Popper
      arrow
      arrowProps={{ iconStyle: { color: 'green' } }}
      placement="bottom"
      forcePortal={false}
      style={{ padding: '9px 12px', backgroundColor: 'green', color: '#fff' }}
      targetRef={{
        getBoundingClientRect() {
          return virtualElement;
        },
      }}
    >
      Привет
    </Popper>
  </div>
);
```
