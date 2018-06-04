Компонент для создания форм. Принимает в качестве children один или несколько элементов форм. Input, Textarea, Select


```
  <View activePanel="new-user">
    <Panel id="new-user" theme="white">
      <PanelHeader>Регистрация</PanelHeader>
      <FormLayout allowSubmit={false}>
        <Input type="email" top="E-mail" />
        <Input type="password" top="Пароль" placeholder="Введите пароль" />
        <Input type="password" placeholder="Повторите пароль" />
        <Input top="Имя" />
        <Input top="Фамилия" />
        <Select top="Пол" placeholder="Выберите пол">
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </Select>
        <Checkbox>Согласен со всем, что вы <Link>там</Link> написали</Checkbox>
        <div top="Тип лица">
          <Radio name="type">Юрлицо</Radio>
          <Radio name="type">Физлицо</Radio>
        </div>
        <Textarea top="О себе" />
        <Button type="cell">Зарегистрироваться</Button>
      </FormLayout>
    </Panel>
  </View>
```
