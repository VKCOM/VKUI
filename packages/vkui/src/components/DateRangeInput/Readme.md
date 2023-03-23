Компонент выбора даты.

- Если нужен календарь без поля ввода, используйте [CalendarRange](#!/CalendarRange).
- Если нужен выбор одной даты, используйте [DateInput](#!/DateInput).

> ⚠️ Данный компонент предназначен для использования на desktop. При использовании на ios/android работа компонента не гарантируется

```jsx { "props": { "layout": false, "iframe": false } }
import { format, addDays } from '../../lib/date';

const Example = () => {
  const [value, setValue] = useState([new Date(), addDays(new Date(), 10)]);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [closeOnChange, setCloseOnChange] = useState(true);
  const [disableCalendar, setDisableCalendar] = useState(false);
  const [locale, setLocale] = useState('ru');

  const onSubmit = () => {
    console.log('Выбранная дата сохранена!');
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormLayoutGroup mode="vertical">
        <FormItem top="Запрет выбора прошлых дат">
          <Checkbox checked={disablePast} onChange={(e) => setDisablePast(e.target.checked)}>
            Включено
          </Checkbox>
        </FormItem>
        <FormItem top="Запрет выбора будущих дат">
          <Checkbox checked={disableFuture} onChange={(e) => setDisableFuture(e.target.checked)}>
            Включено
          </Checkbox>
        </FormItem>
        <FormItem top="Закрывать календарь послы выбора даты">
          <Checkbox checked={closeOnChange} onChange={(e) => setCloseOnChange(e.target.checked)}>
            Включено
          </Checkbox>
        </FormItem>
        <FormItem top="Отключить селекты выбора месяца/года">
          <Checkbox checked={disablePickers} onChange={(e) => setDisablePickers(e.target.checked)}>
            Включено
          </Checkbox>
        </FormItem>
        <FormItem top="Отключить отображение выпадающего календаря">
          <Checkbox
            checked={disableCalendar}
            onChange={(e) => setDisableCalendar(e.target.checked)}
          >
            Включено
          </Checkbox>
        </FormItem>
        <FormItem top="Локаль">
          <Select
            style={{ width: 100 }}
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            options={[
              {
                label: 'ru',
                value: 'ru',
              },
              {
                label: 'en',
                value: 'en',
              },
              {
                label: 'ar',
                value: 'ar',
              },
              {
                label: 'fr',
                value: 'fr',
              },
            ]}
          />
        </FormItem>
        <FormItem>
          <div style={{ display: 'flex' }}>
            <LocaleProvider value={locale}>
              <DateRangeInput
                value={value}
                onChange={setValue}
                disablePast={disablePast}
                disableFuture={disableFuture}
                closeOnChange={closeOnChange}
                disablePickers={disablePickers}
                disableCalendar={disableCalendar}
              />
            </LocaleProvider>
          </div>
        </FormItem>
      </FormLayoutGroup>
      <FormItem>
        <Button type="submit">Сохранить</Button>
      </FormItem>
    </Form>
  );
};

<Example />;
```
