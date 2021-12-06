Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

Компонент является упрощенной версией обычного чекбокса `Checkbox` и предназначен для использования внутри других блоков таких как таблицы

> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильный компоненты](#/Unstable).

```jsx { "props": { "layout": false, "iframe": false } }
<div
  style={{
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: "24px 16px",
    background: "white",
  }}
>
  <SimpleCheckbox defaultChecked style={{ margin: "0 10px" }} />
  <SimpleCheckbox style={{ margin: "0 10px" }} />
  <SimpleCheckbox defaultChecked style={{ margin: "0 10px" }} />
  <SimpleCheckbox indeterminate style={{ margin: "0 10px" }} />
  <SimpleCheckbox defaultIndeterminate style={{ margin: "0 10px" }} />
</div>
```
