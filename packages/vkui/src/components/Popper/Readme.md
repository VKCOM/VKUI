> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](https://vkcom.github.io/VKUI/#/Unstable).

Низкоуровневый компонент для отрисовки выпадающего блока. Единственная его задача — корректно позиционироваться
рядом с целевым элементом. Например, на основе этого компонента сделан [Popover](https://vkcom.github.io/VKUI/#/Popover).

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
        offsetDistance={8}
        style={{ padding: '9px 12px' }}
        targetRef={buttonRef}
      >
        Привет
      </Popper>
    )}
  </React.Fragment>
);
```
