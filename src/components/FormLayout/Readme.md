Компонент для создания форм. Принимает в качестве children один или несколько элементов форм. Input, Textarea, Select, Button, Checkbox, Radio.

Для отрисовки лейблов снизу и сверху у каждой строчки, используются свойства top и bottom, которые нужно навесить на children элементы:

```jsx static
<FormLayout>
  <Input top="Имя" />
</FormLayout>
```


```
  <View activePanel="new-user">
    <Panel id="new-user" theme="white">
      <PanelHeader>Регистрация</PanelHeader>
      <FormLayout>
        <Input type="email" top="E-mail" />
        <Input type="password" top="Пароль" placeholder="Введите пароль" />
        <Input type="password" placeholder="Повторите пароль" />
        <Input top="Имя" />
        <Input top="Фамилия" />
        <Select top="Пол" placeholder="Выберите пол">
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </Select>
        <div top="Тип документа">
          <Radio name="type">Паспорт</Radio>
          <Radio name="type">Загран</Radio>
        </div>
        <Textarea top="О себе" />
        <Checkbox>Согласен со всем, что <Link>этим</Link></Checkbox>
        <Button size="xl">Зарегистрироваться</Button>
      </FormLayout>
    </Panel>
  </View>
```
