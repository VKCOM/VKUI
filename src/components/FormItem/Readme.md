Базовый компонент формы. В него нужно оборачивать все поля, из которых конструируется форма. Исключения составляют
поля-ячейки (`Radio`, `Checkbox`, etc.), если в дизайне для них не предусмотрены `top` и `bottom`. Такие поля можно
располагать в форме без оборачивания в `FormItem`.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      purpose: ''
    }

    this.addressItems = [
      { label: 'Почтовый индекс', name: 'zip' },
      { label: 'Страна', name: 'country' },
      { label: 'Город', name: 'city' }
    ];

    this.onChange = this.onChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onChange(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  onSelectChange({ name, value }) {
    this.setState({ [name]: value });
  }


  render() {
    const { email, purpose } = this.state;

    return (
      <View activePanel="new-user">
        <Panel id="new-user">
          <PanelHeader>Регистрация</PanelHeader>
          <FormLayout>
            <FormItem
              top="E-mail" 
              status={email ? 'valid' : 'error'}
              bottom={email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}
            >
              <Input
                type="email"
                name="email"
                value={email}
                onChange={this.onChange}
              />
            </FormItem>

            <FormItem top="Пароль">
              <Input type="password"  placeholder="Введите пароль" />
            </FormItem>
            <FormItem bottom="Пароль может содержать только латинские буквы и цифры.">
              <Input type="password" placeholder="Повторите пароль" />
            </FormItem>
            <FormLayoutGroup mode="horizontal">
              <FormItem top="Имя">            
                <Input />
              </FormItem>
              <FormItem top="Фамилия">            
                <Input />
              </FormItem>
            </FormLayoutGroup>
            <FormItem top="Пол">
              <Select placeholder="Выберите пол">
                <option value="m">Мужской</option>
                <option value="f">Женский</option>
              </Select>
            </FormItem>

            <FormItem top="Тип документа">
              <Radio name="type">Паспорт</Radio>
              <Radio name="type">Загран</Radio>
            </FormItem>

            {this.addressItems.map(({ label, name }) => (
              <FormItem top={label} key={name}>
                <Input name={name} />
              </FormItem>
            ))}
            <FormItem top="Цель поездки" bottom={purpose ? '' : 'Пожалуйста, укажите цель поездки'} status={purpose ? 'valid' : 'error'}>
              <Select
                placeholder="Выберите цель поездки"
                onChange={this.onSelectChange}
                value={purpose}
                name="purpose"
              >
                <option value="0">Бизнес или работа</option>
                <option value="1">Индивидуальный туризм</option>
                <option value="2">Посещение близких родственников</option>
              </Select>
            </FormItem>
            <FormItem top="О себе">
              <Textarea />
            </FormItem>
            <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
            <FormItem>
              <Button size="l" stretched>Зарегистрироваться</Button>
            </FormItem>
          </FormLayout>
        </Panel>
      </View>
    );
  }
}

<Example />
```
