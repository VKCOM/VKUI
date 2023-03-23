Делает из [SelectMimicry](#!/SelectMimicry) селект с выпадающим списком. Используется внутри [Select](#!/Select).

```jsx { "props": { "layout": false, "iframe": false } }
const getUsers = (usersArray) =>
  usersArray.map((user) => ({
    label: user.name,
    value: `${user.id}`,
    avatar: user.photo_100,
    description: user.screen_name,
  }));

const Example = () => {
  const selectTypes = [
    {
      label: 'default',
      value: 'default',
    },
    {
      label: 'plain',
      value: 'plain',
    },
    {
      label: 'accent',
      value: 'accent',
    },
  ];

  const [selectType, setSelectType] = React.useState(undefined);

  const users = [...getUsers(getRandomUsers(10))];

  return (
    <Div>
      <Header>Базовые примеры использования</Header>

      <FormLayoutGroup mode="horizontal">
        <FormItem style={{ flexGrow: 1, flexShrink: 1 }} top="Администратор">
          <CustomSelect
            placeholder="Не выбран"
            options={users}
            selectType={selectType}
            allowClear
          />
        </FormItem>

        <FormItem top="Вид селекта" style={{ flexBasis: '200px', flexGrow: 0 }}>
          <CustomSelect
            value={selectType}
            placeholder="Не задан"
            options={selectTypes}
            onChange={(e) => setSelectType(e.target.value)}
            renderOption={({ option, ...restProps }) => (
              <CustomSelectOption {...restProps} description={`"${option.value}"`} />
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

      <FormItem top="Администратор" bottom="Ползунок скроллбара по умолчанию скрыт">
        <CustomSelect
          placeholder="Не выбран"
          options={users}
          selectType={selectType}
          autoHideScrollbar
        />
      </FormItem>

      <Header>Поиск</Header>
      <FormItem top="Администратор" bottom="Поиск по списку">
        <CustomSelect placeholder="Введите имя пользователя" searchable options={users} />
      </FormItem>

      <FormItem top="Администратор" bottom="Кастомное поведение при поиске">
        <CustomSearchLogicSelect />
      </FormItem>

      <FormItem top="Город" bottom="Кастомный алгоритм поиска">
        <CustomSearchAlgoSelect />
      </FormItem>

      <Header>Асинхронная загрузка списка</Header>
      <AsyncCustomSelect />
    </Div>
  );
};

// **
// * Кастомное поведение при поиске
// **
const CustomSearchLogicSelect = () => {
  const [value, setValue] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [newUsers, setNewUsers] = React.useState([...getUsers(getRandomUsers(10))]);

  const customSearchOptions = () => {
    const options = [...newUsers];
    if (query.length > 0 && !options.find((user) => user.value === query || user.label === query)) {
      options.unshift({
        label: `Добавить пользователя ${query}`,
        value: '0',
      });
    }
    return options;
  };

  const onCustomSearchChange = (e) => {
    if (e.target.value === '0') {
      setNewUsers([...newUsers, { label: query, value: query }]);
      setValue(query);
    } else {
      setValue(e.target.value);
    }
    setQuery('');
  };

  const onCustomSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <CustomSelect
      value={value}
      placeholder="Введите имя пользователя"
      searchable
      options={customSearchOptions()}
      onInputChange={onCustomSearchInputChange}
      renderOption={({ option, ...restProps }) => (
        <CustomSelectOption
          style={option.value === '0' ? { color: 'var(--vkui--color_background_accent)' } : {}}
          {...restProps}
        >
          {option.label}
        </CustomSelectOption>
      )}
      onChange={onCustomSearchChange}
    />
  );
};

// **
// * Кастомный алгоритм поиска
// **
const CustomSearchAlgoSelect = () => {
  const cities = [
    {
      label: 'Санкт-Петербург',
      description: 'Россия',
      value: '0',
    },
    {
      label: 'Москва',
      description: 'Россия',
      value: '1',
    },
    {
      label: 'Новосибирск',
      description: 'Россия',
      disabled: true,
      value: '2',
    },
    {
      label: 'Нью-Йорк',
      description: 'США',
      value: '3',
    },
    {
      label: 'Чикаго',
      description: 'США',
      value: '4',
    },
  ];

  const customSearchFilter = (value, option) =>
    option.label.toLowerCase().includes(value.toLowerCase()) ||
    option.description.toLowerCase().includes(value.toLowerCase());

  return (
    <CustomSelect
      placeholder="Введите название города или страны"
      searchable
      filterFn={customSearchFilter}
      renderOption={({ option, ...restProps }) => (
        <CustomSelectOption {...restProps} description={option.description} />
      )}
      options={cities}
    />
  );
};

// **
// * Асинхронная загрузка списка
// **
const AsyncCustomSelect = () => {
  const [searchable, setSearchable] = React.useState(false);
  const [remoteQuery, setRemoteQuery] = React.useState('');
  const [fetching, setFetching] = React.useState(false);
  const [remoteUsers, setRemoteUsers] = React.useState([]);

  let timeout;

  const cleanFetchingTimeout = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  const fetchRemoteUsers = () => {
    setFetching(true);
    timeout = setTimeout(() => {
      setRemoteUsers([...getUsers(getAllUsers())]);
      setFetching(false);
      cleanFetchingTimeout();
    }, 1500);
  };

  const searchRemoteUsers = (e) => {
    const _remoteQuery = e.target.value;
    cleanFetchingTimeout();
    setRemoteQuery(_remoteQuery);

    if (_remoteQuery.length < 3) {
      setRemoteUsers([]);
      setFetching(false);
    } else {
      fetchRemoteUsers();
    }
  };

  const clearRemoteUsers = () => {
    setRemoteUsers([]);
    setRemoteQuery('');
    cleanFetchingTimeout();
  };

  const renderDropdown = ({ defaultDropdownContent }) => {
    if (remoteQuery.length < 3) {
      return (
        <Text style={{ padding: 12, color: 'var(--vkui--color_text_secondary)' }}>
          Нужно ввести хотя бы три символа
        </Text>
      );
    }
    return defaultDropdownContent;
  };

  React.useEffect(() => {
    return () => cleanFetchingTimeout();
  }, []);

  return (
    <FormLayoutGroup mode="horizontal">
      <FormItem style={{ flexGrow: 1, flexShrink: 1 }}>
        <CustomSelect
          options={remoteUsers}
          searchable={searchable}
          placeholder={searchable ? 'Введите имя пользователя' : 'Не выбран'}
          disabled={searchable && fetching}
          onInputChange={searchable ? searchRemoteUsers : undefined}
          onOpen={searchable ? undefined : remoteUsers.length === 0 && fetchRemoteUsers}
          onClose={() => {
            console.log('CLOSED [async CustomSelect]');
          }}
          fetching={fetching}
          renderDropdown={searchable && !fetching && renderDropdown}
        />
      </FormItem>

      <FormItem style={{ flexBasis: '200px', flexGrow: 0 }}>
        <Checkbox
          onChange={(e) => {
            setSearchable(e.target.checked);
            clearRemoteUsers();
          }}
        >
          Использовать поиск
        </Checkbox>
      </FormItem>
    </FormLayoutGroup>
  );
};

<Example />;
```
