>**Важно**
>
>Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](#/Unstable).

Надстройка над [Dropdown](#/Dropdown) для открытия по ховеру.

## Поведение компонента по умолчанию
Дропдаун будет открыт при наведении на `children`. Скрытие происходит при уводе курсора с `children`. Если пользователь
успеет перевести мышь на содержимое дропдауна до его скрытия, то он останется видимым.

## Controlled
Если нужна более сложная логика, то можно передать в компонент свойства `shown` и `onShownChange`. Принцип их действия
схож с `value` и `onChange` у инпутов: состояние дропдауна теперь контролируется свойством `shown`, 
а `onShownChange` вызывается дропдауном в тех случаях, когда должна произойти смена состояния.

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [shown, setShown] = React.useState(false);

  return (
    <div>
      <HoverDropdown content={<Text>Привет</Text>}>
        <Button style={{ margin: 150 }}>Наведи</Button>
      </HoverDropdown>

      <HoverDropdown
        shown={shown}
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
          Наведи
        </Button>
      </HoverDropdown>
    </div>
  )
}
<Example />
```
