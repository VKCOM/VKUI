Базовый компонент формы. В него нужно оборачивать все поля, из которых конструируется форма. Исключения составляют
поля-ячейки (`Radio`, `Checkbox`, etc.), если в дизайне для них не предусмотрены `top` и `bottom`. Такие поля можно
располагать в форме без оборачивания в `FormItem`.

## Цифровая доступность (a11y)

Для корректной работы скринридеров необходимо вручную передавать некоторые параметры:
<br />

- При передаче в `FormItem` компонента, отвечающего за пользовательский ввод (например, `<input type="text" />`),
  рекомендуется передавать свойства `top` и `htmlFor`. В компонент пользовательского ввода должно быть передано свойство
  `id`, которое соответствует значению `htmlFor` в `FormItem`. <br />
- При использовании `bottom` атрибута рекомендуется также передавать в компонент пользовательского ввода (например,
  `<input type="text" />`) атрибут `aria-describedby`, а в сам `FormItem` передать `bottomId`, который соответствует значению `aria-describedby`.

Пример рекомендуемого использования:

```jsx static
<FormItem top="Имя" htmlFor="name">
  <input id="name" type="text" placeholder="Семён" />
</FormItem>

<FormItem top="Администратор" htmlFor="select-id">
  <CustomSelect
    id="select-id"
    placeholder="Не выбран"
    options={users}
  />
</FormItem>

<FormItem top="E-mail" bottom="Например, email@internet.ru" bottomId="emailExample" htmlFor="email">
  <input id="email" aria-describedby="emailExample" type="email" placeholder="email@internet.ru" />
</FormItem>
```

```jsx
const addressItems = [
  { label: 'Почтовый индекс', name: 'zip' },
  { label: 'Страна', name: 'country' },
  { label: 'Город', name: 'city' },
];

const Example = () => {
  const [email, setEmail] = React.useState('');
  const [purpose, setPurpose] = React.useState('');
  const [showPatronymic, setShowPatronymic] = React.useState(true);

  const onChange = (e) => {
    const { name, value } = e.currentTarget;

    const setStateAction = {
      email: setEmail,
      purpose: setPurpose,
    }[name];

    setStateAction && setStateAction(value);
  };

  const onShowPatronymic = () => setShowPatronymic(true);

  const onRemove = () => setShowPatronymic(false);

  return (
    <View activePanel="new-user">
      <Panel id="new-user">
        <PanelHeader>Регистрация</PanelHeader>
        <Group>
          <form onSubmit={(e) => e.preventDefault()}>
            <FormItem
              htmlFor="email"
              top="E-mail"
              status={email ? 'valid' : 'error'}
              bottom={
                email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'
              }
              bottomId="email-type"
            >
              <Input
                aria-labelledby="email-type"
                id="email"
                type="email"
                name="email"
                value={email}
                required
                onChange={onChange}
              />
            </FormItem>

            <FormItem top="Пароль" htmlFor="pass">
              <Input id="pass" type="password" placeholder="Введите пароль" />
            </FormItem>

            <FormItem
              bottom="Пароль может содержать только латинские буквы и цифры."
              bottomId="passwordDescription"
            >
              <Input
                type="password"
                placeholder="Повторите пароль"
                aria-labelledby="passwordDescription"
              />
            </FormItem>

            <FormLayoutGroup mode="horizontal">
              <FormItem htmlFor="name" top="Имя">
                <Input id="name" />
              </FormItem>
              <FormItem htmlFor="lastname" top="Фамилия">
                <Input id="lastname" />
              </FormItem>
            </FormLayoutGroup>

            {!showPatronymic ? (
              <CellButton onClick={onShowPatronymic}>Указать отчество</CellButton>
            ) : (
              <FormItem
                htmlFor="patronymic"
                removable
                onRemove={onRemove}
                top="Отчество"
                bottom="Если у вас нет отчества — удалите этот пункт."
                bottomId="patronymicDescription"
              >
                <Input id="patronymic" aria-labelledby="patronymicDescription" />
              </FormItem>
            )}

            <FormItem top="Пол" htmlFor="gender-select-id">
              <Select
                id="gender-select-id"
                placeholder="Выберите пол"
                options={[
                  {
                    value: '0',
                    label: 'Мужской',
                  },
                  {
                    value: '1',
                    label: 'Женский',
                  },
                ]}
              />
            </FormItem>

            <FormItem top="Тип документа">
              <SegmentedControl
                size="m"
                name="type"
                options={[
                  {
                    label: 'Паспорт РФ',
                    value: 'russian',
                  },
                  {
                    label: 'Заграничный',
                    value: 'international',
                  },
                ]}
              />
            </FormItem>

            {addressItems.map(({ label, name }) => (
              <FormItem htmlFor={label} top={label} key={name}>
                <Input id={label} name={name} />
              </FormItem>
            ))}
            <FormItem
              top="Цель поездки"
              htmlFor="purpose-of-the-trip-select-id"
              bottom={purpose ? '' : 'Пожалуйста, укажите цель поездки'}
              status={purpose ? 'valid' : 'error'}
            >
              <Select
                id="purpose-of-the-trip-select-id"
                placeholder="Выберите цель поездки"
                onChange={onChange}
                value={purpose}
                name="purpose"
                required
                options={[
                  {
                    value: '0',
                    label: 'Бизнес или работа',
                  },
                  {
                    value: '1',
                    label: 'Индивидуальный туризм',
                  },
                  {
                    value: '2',
                    label: 'Посещение близких родственников',
                  },
                ]}
              />
            </FormItem>
            <FormItem htmlFor="about" top="О себе">
              <Textarea id="about" />
            </FormItem>
            <Checkbox>
              Согласен со всем <Link>этим</Link>
            </Checkbox>
            <FormItem>
              <Button type="submit" size="l" stretched>
                Зарегистрироваться
              </Button>
            </FormItem>
          </form>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
