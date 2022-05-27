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

  const selectTypes = [
    {
      label: "SelectType.default",
      value: "default",
    },
    {
      label: "SelectType.plain",
      value: "plain",
    },
    {
      label: "SelectType.accent",
      value: "accent",
    },
  ];

  const [selectType, setSelectType] = React.useState(undefined);
  const [value, setValue] = React.useState("0");
  const [query, setQuery] = React.useState("");
  const [newUsers, setNewUsers] = React.useState([...getUsers()]);

  const [searchable, setSearchable] = React.useState(false);
  const [remoteQuery, setRemoteQuery] = React.useState("");
  const [fetching, setFetching] = React.useState(false);
  const [remoteUsers, setRemoteUsers] = React.useState([]);

  let timeout;

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
    <Div>
      <Header>Базовые примеры использования</Header>

      <FormLayoutGroup mode="horizontal">
        <FormItem style={{ flexGrow: 1, flexShrink: 1 }} top="Администратор">
          <CustomSelect
            placeholder="Не выбран"
            options={users}
            selectType={selectType}
          />
        </FormItem>

        <FormItem top="Вид селекта" style={{ flexBasis: "200px", flexGrow: 0 }}>
          <CustomSelect
            value={selectType}
            placeholder="Не задан"
            options={selectTypes}
            onChange={(e) => setSelectType(e.target.value)}
            renderOption={({ option, ...restProps }) => (
              <CustomSelectOption
                {...restProps}
                description={`"${option.value}"`}
              />
            )}
          />
        </FormItem>
      </FormLayoutGroup>

      <FormItem top="Администратор" bottom="Кастомный дизайн элементов списка">
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

      <Header>Асинхронная загрузка списка</Header>
      <FormLayoutGroup mode="horizontal">
        <FormItem style={{ flexGrow: 1, flexShrink: 1 }}>
          <CustomSelect
            searchable={searchable}
            placeholder={searchable ? "Введите имя пользователя" : "Не выбран"}
            disabled={searchable && fetching}
            onInputChange={
              searchable
                ? (e) => {
                    const _remoteQuery = e.target.value;
                    clearTimeout(timeout);
                    setRemoteQuery(_remoteQuery);
                    if (_remoteQuery.length < 3) {
                      setRemoteUsers([]);
                      setFetching(false);
                    } else {
                      setFetching(true);
                      timeout = setTimeout(() => {
                        setRemoteUsers([...getUsers()]);
                        setFetching(false);
                      }, 1500);
                    }
                  }
                : undefined
            }
            onOpen={
              !searchable
                ? () => {
                    if (remoteUsers.length === 0) {
                      setFetching(true);
                      timeout = setTimeout(() => {
                        setRemoteUsers([...getUsers()]);
                        setFetching(false);
                        clearTimeout(timeout);
                      }, 1500);
                    }
                  }
                : undefined
            }
            onClose={() => {
              clearTimeout(timeout);
              setRemoteUsers([]);
              setRemoteQuery("");
            }}
            fetching={fetching}
            options={remoteUsers}
            renderDropdown={
              searchable &&
              !fetching &&
              (({ defaultDropdownContent }) => {
                if (remoteQuery.length < 3) {
                  return (
                    <Text
                      style={{ padding: 12, color: "var(--text_secondary)" }}
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

        <FormItem style={{ flexBasis: "200px", flexGrow: 0 }}>
          <Checkbox onChange={(e) => setSearchable(e.target.checked)}>
            Использовать поиск
          </Checkbox>
        </FormItem>
      </FormLayoutGroup>
    </Div>
  );
};

<Example />;
```
