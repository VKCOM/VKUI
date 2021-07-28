Делает из [SelectMimicry](#!/SelectMimicry) селект с выпадающим списком. Используется внутри [Select](#!/Select).

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.users = getRandomUsers(10).map(user => ({ label: user.name, value: user.id, avatar: user.photo_100 }));
    this.cities = [{
      label: 'Санкт-Петербург',
      description: 'Россия',
      value: 0
    }, {
      label: 'Москва',
      description: 'Россия',
      value: 1
    }, {
      label: 'Новосибирск',
      description: 'Россия',
      value: 2
    }, {
      label: 'Нью-Йорк',
      description: 'США',
      value: 3
    }, {
      label: 'Чикаго',
      description: 'США',
      value: 4
    }]  

    this.state = {
      query: '',
      newUsers: [],
    } 
  }
  
  get customSearchOptions() {
    const options = [...this.state.newUsers, ...this.users]
    if (this.state.query.length > 0) {
      options.unshift({ label: `Добавить пользователя ${this.state.query}`, value: 0 });
    }
    return options;
  }

  render() {
    return (
    <View activePanel="select">
      <Panel id="select">
        <PanelHeader>
          CustomSelect
        </PanelHeader>
        <Group>
          <FormItem top="Администратор" bottom="Базовый пример использования">
            <CustomSelect
              placeholder="Не выбран"
              options={this.users}
            />
          </FormItem>
          <FormItem top="Администратор" bottom="Кастомный дизайн элементов списка">
            <CustomSelect
              placeholder="Не выбран"
              options={this.users}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
              )}
            />
          </FormItem>
          <FormItem top="Администратор" bottom="Поиск по списку">
            <CustomSelect
              placeholder="Введите имя пользователя"
              searchable
              options={this.users}
            />
          </FormItem>
          <FormItem top="Город" bottom="Кастомный алгоритм поиска">
            <CustomSelect
              placeholder="Введите название города или страны"
              searchable
              filterFn={(value, option) => option.label.toLowerCase().includes(value.toLowerCase()) || option.description.toLowerCase().includes(value.toLowerCase())}
              options={this.cities}
            />
          </FormItem>
          <FormItem top="Администратор" bottom="Кастомное поведение при поиске">
            <CustomSelect
              popupDirection="top"
              placeholder="Введите имя пользователя"
              searchable
              onInputChange={(e) => { this.setState({ query: e.target.value }) }}
              options={this.customSearchOptions}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps}>
                  {option.value === 0 ? <span style={{ color: 'var(--accent)' }}>{option.label}</span> : option.label}
                </CustomSelectOption>
              )}
              onChange={(e) => {
                if (e.target.value === '0') {
                  const query = this.state.query;
                  this.setState({
                    newUsers: [...this.state.newUsers, { label: query, value: query }],
                    query: ''
                  }, () => {
                    this.setState({ value: query })
                  })
                } else {
                  this.setState({
                    query: '',
                    value: e.target.value,
                  })
                } 
              }}
              value={this.state.value}
            />
          </FormItem>
        </Group>
      </Panel>
    </View>
    );
  }
}

<Example />
```
