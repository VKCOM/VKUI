Компонент для создания форм. Принимает в качестве `children` один или несколько элементов форм.

Для отрисовки лейблов снизу и сверху у каждой строчки, используются свойства `top` и `bottom`, которые нужно навесить
на `children` элементы.

Можно использовать вложенный массив `children`. Это будет полезно, если часть или все поля формы создаются динамически через `Array.map()`.

```

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.addressItems = [
      { label: 'Почтовый индекс', name: 'zip' },
      { label: 'Страна', name: 'country' },
      { label: 'Город', name: 'city' }
    ];
  }

  render() {
    return (
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
            <FormLayoutGroup top="Тип документа">
              <Radio name="type">Паспорт</Radio>
              <Radio name="type">Загран</Radio>
            </FormLayoutGroup>

            {this.addressItems.map(({ label, name }) => (
              <Input type="text" name={name} key={name} top={label} />
            ))}

            <Textarea top="О себе" />
            <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
            <Button size="xl">Зарегистрироваться</Button>
          </FormLayout>
        </Panel>
      </View>
    );
  }
}

<Example />
```
