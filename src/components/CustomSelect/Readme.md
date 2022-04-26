Делает из [SelectMimicry](#!/SelectMimicry) селект с выпадающим списком. Используется внутри [Select](#!/Select).

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const getUsers = () =>
    getRandomUsers(10).map((user) => ({
      label: user.name,
      value: user.id,
      avatar: user.photo_100,
      description: user.screen_name,
    }));

  const cities = [
    {
      label: "Санкт-Петербург",
      description: "Россия",
      value: 0,
    },
    {
      label: "Москва",
      description: "Россия",
      value: 1,
    },
    {
      label: "Новосибирск",
      description: "Россия",
      disabled: true,
      value: 2,
    },
    {
      label: "Нью-Йорк",
      description: "США",
      value: 3,
    },
    {
      label: "Чикаго",
      description: "США",
      value: 4,
    },
  ];

  const [value, setValue] = React.useState("0");
  const [query, setQuery] = React.useState("");
  const [fetching, setFetching] = React.useState(false);
  const [newUsers, setNewUsers] = React.useState([...getUsers()]);

  const [remoteQuery, setRemoteQuery] = React.useState("");
  const [fetchingSearch, setFetchingSearch] = React.useState(false);
  const [remoteUsers, setRemoteUsers] = React.useState([]);
  const [remoteUsersSearch, setRemoteUsersSearch] = React.useState([]);

  let timeout;
  let timeoutSearch;

  const users = [...getUsers()];

  const customSearchOptions = () => {
    const options = [...newUsers];
    if (query.length > 0) {
      options.unshift({
        label: `Добавить пользователя ${query}`,
        value: "0",
      });
    }
    return options;
  };

  return (
    <View activePanel="profile" id="profile">
      <Panel id="profile">
        <Group separator="hide">
          <FormItem top="Администратор" bottom="Базовый пример использования">
            <CustomSelect placeholder="Не выбран" options={users} />
          </FormItem>
          <FormItem
            top="Администратор"
            bottom="Кастомный дизайн элементов списка"
          >
            <CustomSelect
              placeholder="Не выбран"
              options={users}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption
                  {...restProps}
                  before={<Avatar size={24} src={option.avatar} />}
                  description={option.description}
                />
              )}
            />
          </FormItem>
          <Header>Поиск</Header>
          <FormItem top="Администратор" bottom="Поиск по списку">
            <CustomSelect
              placeholder="Введите имя пользователя"
              searchable
              options={users}
            />
          </FormItem>
          <FormItem top="Город" bottom="Кастомный алгоритм поиска">
            <CustomSelect
              placeholder="Введите название города или страны"
              searchable
              filterFn={(value, option) =>
                option.label.toLowerCase().includes(value.toLowerCase()) ||
                option.description.toLowerCase().includes(value.toLowerCase())
              }
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption
                  {...restProps}
                  description={option.description}
                />
              )}
              options={cities}
            />
          </FormItem>
          <FormItem top="Администратор" bottom="Кастомное поведение при поиске">
            <CustomSelect
              placeholder="Введите имя пользователя"
              searchable
              options={customSearchOptions()}
              onInputChange={(e) => {
                setQuery(e.target.value);
              }}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption
                  style={option.value === "0" ? { color: "var(--accent)" } : {}}
                  {...restProps}
                >
                  {option.label}
                </CustomSelectOption>
              )}
              onChange={(e) => {
                if (e.target.value === "0") {
                  setNewUsers([...newUsers, { label: query, value: query }]);
                  setQuery("");
                } else {
                  setValue(e.target.value);
                }
                setQuery("");
              }}
            />
          </FormItem>
          <Header>Асинхронная загрузка списка</Header>
          <FormItem top="Администратор">
            <CustomSelect
              placeholder="Не выбран"
              onOpen={() => {
                if (remoteUsers.length === 0) {
                  setFetching(true);
                  timeout = setTimeout(() => {
                    setRemoteUsers([...getUsers()]);
                    setFetching(false);
                    clearTimeout(timeout);
                  }, 1500);
                }
              }}
              onClose={() => {
                clearTimeout(timeout);
                setRemoteUsers([]);
              }}
              fetching={fetching}
              options={remoteUsers}
            />
          </FormItem>
          <FormItem top="Администратор" bottom="Асинхронный поиск">
            <CustomSelect
              placeholder="Введите имя пользователя"
              searchable
              disabled={fetchingSearch}
              onInputChange={(e) => {
                const _remoteQuery = e.target.value;
                clearTimeout(timeoutSearch);
                setRemoteQuery(_remoteQuery);
                if (_remoteQuery.length < 3) {
                  setRemoteUsersSearch([]);
                  setFetchingSearch(false);
                } else {
                  setFetchingSearch(true);
                  timeoutSearch = setTimeout(() => {
                    setRemoteUsersSearch([...getUsers()]);
                    setFetchingSearch(false);
                  }, 1500);
                }
              }}
              onClose={() => {
                clearTimeout(timeoutSearch);
                setRemoteUsersSearch([]);
                setRemoteQuery("");
              }}
              filterFn={false}
              options={remoteUsersSearch}
              fetching={fetchingSearch}
              renderDropdown={
                !fetchingSearch &&
                (({ defaultDropdownContent }) => {
                  if (remoteQuery.length < 3) {
                    return (
                      <Text
                        style={{
                          padding: 12,
                          color: "var(--text_secondary)",
                        }}
                        weight="regular"
                      >
                        Нужно ввести хотя бы три символа
                      </Text>
                    );
                  } else {
                    return defaultDropdownContent;
                  }
                })
              }
            />
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
