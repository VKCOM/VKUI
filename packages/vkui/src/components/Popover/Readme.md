> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](https://vkcom.github.io/VKUI/#/Unstable).

Может открываться при клике или наведении мыши на `children`. Ограничений по содержимому нет. Предназначен для
отрисовки части интерфейса в выпадающем окне.

```jsx { "props": { "layout": false, "iframe": true } }
const [shown, setShown] = React.useState(true);

const onSubmit = () => {
  console.log('Значение Popover сохранено!');
  setShown(false);
};

return (
  <Div>
    <Popover
      action="hover"
      placement="right"
      content={
        <Div>
          <Text>Привет</Text>
        </Div>
      }
    >
      <Button>Наведи, чтобы увидеть приветствие</Button>
    </Popover>

    <Spacing size={20} />

    <Popover
      action="click"
      shown={shown}
      onShownChange={setShown}
      content={
        <Form onSubmit={onSubmit}>
          <FormItem top="Имя">
            <Input />
          </FormItem>
          <FormItem top="Фамилия">
            <Input />
          </FormItem>
          <FormItem top="Соглашение">
            <Checkbox name="agreement">Соглашаюсь</Checkbox>
          </FormItem>
          <FormItem>
            <Button type="submit">Отправить</Button>
          </FormItem>
        </Form>
      }
    >
      <Button>Кликни, чтобы открыть форму</Button>
    </Popover>
  </Div>
);
```
