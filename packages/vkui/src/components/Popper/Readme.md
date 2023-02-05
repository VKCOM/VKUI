> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](https://vkcom.github.io/VKUI/#/Unstable).

Низкоуровневый компонент для отрисовки выпадающего блока. Единственная его задача — корректно позиционироваться
рядом с целевым элементом. На основе этого компонента сделаны [ClickPopper](https://vkcom.github.io/VKUI/#/ClickPopper) и [HoverPopper](https://vkcom.github.io/VKUI/#/HoverPopper),
реализующие логику скрытия и показа по клику и по ховеру соответственно.

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
