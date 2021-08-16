>**Важно**
>
>Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](#/Unstable).

Низкоуровневый компонент для отрисовки дропдауна. Единственная его задача — корректно позициионироваться
рядом с целевым элементом. На основе этого компонента сделаны [ClickDropdown](#/ClickDropdown) и [HoverDropdown](#/HoverDropdown),
реализующие логику скрытия и показа по клику и по ховеру соответственно.

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [shown, setShown] = React.useState(false);
  const [buttonRef, setButtonRef] = React.useState(null);

  return (
    <React.Fragment>
      <Button getRootRef={setButtonRef} onClick={() => setShown(!shown)} style={{ margin: 50 }}>{shown ? 'Закрыть' : 'Открыть'}</Button>
      {shown &&
        <Dropdown offsetDistance={8} mode="card" style={{ padding: '9px 12px' }} targetNode={buttonRef}>
          Привет
        </Dropdown> 
      }
    </React.Fragment>
  )
}
<Example />
```
