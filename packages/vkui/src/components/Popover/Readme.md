> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](https://vkcom.github.io/VKUI/#/Unstable).

Может открываться при клике или наведении мыши на `children`. Ограничений по содержимому нет. Предназначен для
отрисовки части интерфейса в выпадающем окне.

```jsx { "props": { "layout": false, "iframe": true } }
const [shown, setShown] = React.useState(true);

return (
  <React.Fragment>
    <Popover
      action="hover"
      placement="right"
      content={
        <Div>
          <Text>Привет</Text>
        </Div>
      }
    >
      <Button style={{ margin: 20 }}>Наведи</Button>
    </Popover>

    <Popover
      action="click"
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
          <FormItem top="Соглашение">
            <Checkbox name="agreement">Согласен</Checkbox>
          </FormItem>
          <FormItem>
            <Button onClick={() => setShown(false)}>Отправить</Button>
          </FormItem>
        </FormLayout>
      }
    >
      <Button style={{ margin: '20px 0 0 0' }}>Кликни</Button>
    </Popover>
  </React.Fragment>
);
```
