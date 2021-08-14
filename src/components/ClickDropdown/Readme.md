>**Важно**
>
>Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](#/Unstable).

Надстройка над [Dropdown](#/Dropdown) для открытия по клику.

## Поведение компонента по умолчанию
При клике по `children` дропдаун будет менять своё состояние на противоположное: если он был открыт, то клик по children 
его закроет и наоборот. Так же, если клик был по любому месту в документе, кроме контента дропдауна, он будет закрыт.

## Controlled
Если нужна более сложная логика, то можно передать в компонент свойства `shown` и `onShownChange`. Принцип их действия
этих схож с `value` и `onChange` у инпутов: состояние дропдауна теперь контролируется свойством `shown`, 
а `onShownChange` вызывается дропдауном в тех случаях, когда должна произойти смена состояния.

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [shown, setShown] = React.useState(true);

  return (
    <div>
      <ClickDropdown style={{ padding: 10 }} content={<Text>Привет</Text>}>
        <Button style={{ margin: 150 }}>Default</Button>
      </ClickDropdown>

      <ClickDropdown
        shown={shown}
        portal
        onShownChange={setShown}
        content={
          <FormLayout>
            <FormItem top="Имя">
              <Input />
            </FormItem>
            <FormItem top="Фамилия">
              <Input />
            </FormItem>
            <FormItem top="Пол">
               <Radio sizeX="compact" name="gender">Мужской</Radio>
               <Radio sizeX="compact" name="gender">Женский</Radio>
            </FormItem>
            <FormItem>
              <Button onClick={() => setShown(false)}>Отправить</Button>
            </FormItem>
          </FormLayout>
        }
      >
        <Button style={{ margin: 150 }}>
          Controlled
        </Button>
      </ClickDropdown>
    </div>
  )
}
<Example />
```
