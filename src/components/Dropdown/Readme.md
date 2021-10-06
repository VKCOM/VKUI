>**Важно**
>
>Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](#/Unstable).

Низкоуровневый компонент для отрисовки дропдауна. Единственная его задача — корректно позициионироваться
рядом с целевым элементом. На основе этого компонента сделаны [ClickDropdown](#/ClickDropdown) и [HoverDropdown](#/HoverDropdown),
реализующие логику скрытия и показа по клику и по ховеру соответственно.

```jsx { "props": { "layout": false, "iframe": false } }
const [shown, setShown] = React.useState(false);
const buttonRef = React.useRef();

return (
  <React.Fragment>
    <Button getRootRef={buttonRef} onClick={() => setShown(!shown)} style={{ margin: 50 }}>{shown ? 'Закрыть' : 'Открыть'}</Button>
    {shown &&
      <Dropdown offsetDistance={8} mode="card" style={{ padding: '9px 12px' }} targetRef={buttonRef}>
        Привет
      </Dropdown> 
    }
  </React.Fragment>
)
```
