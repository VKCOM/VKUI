Базовый компонент формы. В него нужно оборачивать все поля, из которых конструируется форма. Исключения составляют
поля-ячейки (`Radio`, `Checkbox`, etc.), если в дизайне для них не предусмотрены `top` и `bottom`. Такие поля можно
располагать в форме без оборачивания в `FormItem`.

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
          <FormLayout>
            <FormItem
              top="E-mail"
              status={email ? 'valid' : 'error'}
              bottom={
                email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'
              }
            >
              <Input type="email" name="email" value={email} onChange={onChange} />
            </FormItem>

            <FormItem top="Пароль" htmlFor="pass">
              <Input id="pass" type="password" placeholder="Введите пароль" />
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

            {!showPatronymic ? (
              <CellButton onClick={onShowPatronymic}>Указать отчество</CellButton>
            ) : (
              <FormItem
                removable
                onRemove={onRemove}
                top="Отчество"
                bottom="Если у вас нет отчества — удалите этот пункт."
              >
                <Input />
              </FormItem>
            )}

            <FormItem top="Пол">
              <Select
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
              <FormItem top={label} key={name}>
                <Input name={name} />
              </FormItem>
            ))}
            <FormItem
              top="Цель поездки"
              bottom={purpose ? '' : 'Пожалуйста, укажите цель поездки'}
              status={purpose ? 'valid' : 'error'}
            >
              <Select
                placeholder="Выберите цель поездки"
                onChange={onChange}
                value={purpose}
                name="purpose"
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
            <FormItem top="О себе">
              <Textarea />
            </FormItem>
            <Checkbox>
              Согласен со всем <Link>этим</Link>
            </Checkbox>
            <FormItem>
              <Button size="l" stretched>
                Зарегистрироваться
              </Button>
            </FormItem>
          </FormLayout>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
