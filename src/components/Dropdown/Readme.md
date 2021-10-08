Может открываться при клики или наведении мыши на `children`. Создан на базе [HoverPopper](#/HoverPopper) и [ClickPopper](#/ClickPopper).

```jsx { "props": { "layout": false, "iframe": false } }
const [shown, setShown] = React.useState(true);

return (
  <div>
    <Dropdown action="hover" placement="right" content={<Div><Text>Привет</Text></Div>}>
      <Button style={{ margin: 50 }}>Наведи</Button>
    </Dropdown>

    <Dropdown
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
      <Button style={{ margin: 50 }}>
        Кликни
      </Button>
    </Dropdown>
  </div>
)
```
