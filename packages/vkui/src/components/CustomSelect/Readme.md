Кастомизируемое поле выбора значения из раскрывающегося списка. Используется внутри [Select](#!/Select).

> Важно: для отображения невыбранного состояния нужно использовать `value=null` вместо `undefined`.
>
> `undefined` ипользуется только для неконтролируемого компонента.

## Цифровая доступность (a11y)

Основные рекомендации можно посмотреть в разделе "Цифровая доступность" компонента [Select](#!/Select).

### Проблема определения выбранной опции

В текущей реализации (`v7`) компонент `CustomSelect` имеет проблему с доступностью в некоторых скринридерах (например, `NVDA`): пользователь не может узнать, какой вариант выбран.
Это происходит из-за сброса значения в `input` при потере фокуса.

Такое поведение было добавлено для ускорения ввода новых значений, но оно негативно влияет на доступность.

#### Решение
Мы изменили логику работы компонента. Чтобы включить исправленное поведение, используйте флаг `accessible`. Он введён для сохранения обратной совместимости в минорных обновлениях.

#### Рекомендация
Настоятельно рекомендуем включить этот флаг, так как в `v8` он будет включён по умолчанию (`accessible: true`).

## Тестирование (e2e)

Для поиска компонента и его элементов на странице существует ряд вспомогательных свойств:

- по умолчанию все `data-\*` атрибуты попадают на `<input>` компонента. А значит при передаче `data-testid` или `data-test-id` идентификатор попадёт `<input>`.<br />
  Доступ к полю ввода может быть полезен для:
  - получения текста, введённого пользователем при поиске опций, в режиме `searchable`;
  - получения информации о наличии фокуса на компоненте;
  - симуляции работы с компонентом с клавиатуры.
- используйте `labelTextTestId`:
  - для симуляции работы с компонентом с помощью мыши, тач-устройства;
  - для получения текста выбранной в данный момент опции.
- для взаимодействия с кнопкой очистки состояния компонента, которая появляется, если `CustomSelect` имеет свойство `searchable` и пользователь выбрал опцию, используйте свойство `clearButtonTestId`.
- `CustomSelect` внутри себя хранит невидимый `<select>`, для того, чтобы `CustomSelect` можно было использовать внутри формы. Для получения доступа к `<select>` используйте свойство `nativeSelectTestId`. Полезно для доступа к значению `value`, выбранной в данный момент опции.

Все перечисленные выше свойства устанавливают аттрибут `data-testid` у соответствующих элементов. Учитывайте это при построении селекторов.

```jsx { "props": { "layout": false, "iframe": false } }
const getUsers = (usersArray) =>
  usersArray.map((user) => ({
    label: user.name,
    value: `${user.id}`,
    avatar: user.photo_100,
    description: user.screen_name,
  }));

const users = [...getUsers(getRandomUsers(10))];

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

  const [selectType, setSelectType] = React.useState(null);

  return (
    <Div>
      <Header>Базовые примеры использования</Header>

      <FormLayoutGroup mode="horizontal">
        <FormItem
          top="Администратор"
          htmlFor="administrator-select-id"
          style={{ flexGrow: 1, flexShrink: 1 }}
        >
          <CustomSelect
            id="administrator-select-id"
            placeholder="Не выбран"
            options={users}
            selectType={selectType || 'default'}
            allowClearButton
          />
        </FormItem>

        <FormItem
          top="Вид выпадающего списка"
          htmlFor="select-type-select-id"
          style={{ flexBasis: '200px', flexGrow: 0 }}
        >
          <CustomSelect
            id="select-type-select-id"
            value={selectType}
            placeholder="Не задан"
            options={selectTypes}
            allowClearButton
            onChange={(_, newType) => setSelectType(newType)}
            renderOption={({ option, ...restProps }) => (
              <CustomSelectOption {...restProps} description={`"${option.value}"`} />
            )}
          />
        </FormItem>
      </FormLayoutGroup>

      <FormItem
        top="Администратор"
        bottom="Кастомный дизайн элементов списка"
        htmlFor="administrator-select-id-2"
      >
        <CustomSelect
          id="administrator-select-id-2"
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

      <FormItem
        top="Администратор"
        htmlFor="administrator-select-id-3"
        bottom="Ползунок скроллбара по умолчанию скрыт"
      >
        <CustomSelect
          id="administrator-select-id-3"
          placeholder="Не выбран"
          options={users}
          selectType={selectType || 'default'}
        />
      </FormItem>

      <Header>Поиск</Header>
      <FormItem
        top="Администратор"
        htmlFor="administrator-select-searchable-id-3"
        bottom="Поиск по списку"
      >
        <CustomSelect
          before={<Icon24User />}
          placeholder="Введите имя пользователя"
          searchable
          id="administrator-select-searchable-id-3"
          options={users}
          allowClearButton
        />
      </FormItem>

      <FormItem
        top="Администратор"
        bottom="Кастомное поведение при поиске"
        htmlFor="custom-search-logic-select-id"
      >
        <CustomSearchLogicSelect id="custom-search-logic-select-id" />
      </FormItem>

      <FormItem
        top="Город"
        bottom="Кастомный алгоритм поиска"
        htmlFor="custom-search-algo-select-id"
      >
        <CustomSearchAlgoSelect id="custom-search-algo-select-id" />
      </FormItem>

      <Header>Асинхронная загрузка списка</Header>
      <AsyncCustomSelect />
    </Div>
  );
};

// **
// * Кастомное поведение при поиске
// **
const CustomSearchLogicSelect = ({ id }) => {
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

  const onCustomSearchChange = (_, newValue) => {
    if (newValue === '0') {
      setNewUsers([...newUsers, { label: query, value: query }]);
      setValue(query);
    } else {
      setValue(newValue);
    }
    setQuery('');
  };

  const onCustomSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <CustomSelect
      id={id}
      value={value}
      placeholder="Введите имя пользователя"
      searchable
      options={customSearchOptions()}
      onInputChange={onCustomSearchInputChange}
      renderOption={({ option, ...restProps }) => (
        <CustomSelectOption
          style={option.value === '0' ? { color: 'var(--vkui--color_text_accent)' } : {}}
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
const CustomSearchAlgoSelect = ({ id }) => {
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
      id="custom-search-algo-select-id"
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
          aria-label="Пользователь"
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
