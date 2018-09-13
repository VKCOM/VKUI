Компонент для создания форм. Принимает в качестве `children` один или несколько элементов форм.

Для отрисовки лейблов снизу и сверху у каждой строчки, используются свойства `top` и `bottom`, которые нужно навесить
на `children` элементы.

```
<View activePanel="new-user">
  <Panel id="new-user" theme="white">
    <PanelHeader>Регистрация</PanelHeader>
    <FormLayout>
      <Input type="email" top="E-mail" />
      <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
        <Input type="password"  placeholder="Введите пароль" />
        <Input type="password" placeholder="Повторите пароль" />
      </FormLayoutGroup>
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
      <FormLayoutGroup>
        <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
        <div>
          <Button type="cell">Зарегистрироваться</Button>
        </div>
      </FormLayoutGroup>
    </FormLayout>
  </Panel>
</View>
```
