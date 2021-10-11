Может открываться при клике или наведении мыши на `children`. Ограничений по содержимому нет. Предназначен для 
отрисовки части интерфейса в выпадающем окне.

```jsx { "props": { "layout": false, "iframe": false } }
const [shown, setShown] = React.useState(true);

return (
  <React.Fragment>
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
  </React.Fragment>
)
```
