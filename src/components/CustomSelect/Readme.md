Делает из [SelectMimicry](#!/SelectMimicry) селект с выпадающим списком. Используется внутри [Select](#!/Select).

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.data = getRandomUsers(10);

    this.state = {
      query: '',
      newUsers: [],
    } 
  }
  
  get customSearchOptions() {
    const options = [...this.state.newUsers, ...this.data]
                        .map(user => ({ label: user.name, value: user.id, avatar: user.photo_100 }))
                        .filter(({ label }) => label.toLowerCase().includes(this.state.query.toLowerCase()));
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
          <FormItem top="Базовое использование">
            <CustomSelect
              placeholder="Не выбран"
              options={this.data.map(user => ({ label: user.name, value: user.id, avatar: user.photo_100 }))}
            />
          </FormItem>
          <FormItem top="Кастомные элементы списка">
            <CustomSelect
              placeholder="Не выбран"
              options={this.data.map(user => ({ label: user.name, value: user.id, avatar: user.photo_100 }))}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
              )}
            />
          </FormItem>
          <FormItem top="Поиск">
            <CustomSelect
              placeholder="Не выбран"
              searchable
              options={this.data.map(user => ({ label: user.name, value: user.id, avatar: user.photo_100 }))}
            />
          </FormItem>
          <FormItem top="Кастомный поиск">
            <CustomSelect
              placeholder="Не выбран"
              searchable
              onSearchChange={(e) => { this.setState({ query: e.target.value }) }}
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
                    newUsers: [...this.state.newUsers, { name: query, id: query }],
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
