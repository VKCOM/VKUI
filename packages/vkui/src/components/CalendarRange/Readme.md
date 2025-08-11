Компонент выбора диапазона дат.

- Если нужно поле ввода с выпадающим календарем, используйте [DateRangeInput](#!/DateRangeInput).
- Если нужен выбор одной даты, используйте [Calendar](#!/Calendar).

```jsx { "props": { "layout": false, "iframe": false } }
import { addDays } from 'date-fns';

const formatter = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

const Example = () => {
  const [value, setValue] = useState([new Date(), addDays(new Date(), 10)]);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [locale, setLocale] = useState('ru');

  return (
    <FormLayoutGroup mode="vertical">
      <FormItem top="Выбранная дата">
        {formatter.format(value[0])} - {formatter.format(value[1])}
      </FormItem>
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
      <FormItem top="Отключить селекты выбора месяца/года">
        <Checkbox checked={disablePickers} onChange={(e) => setDisablePickers(e.target.checked)}>
          Включено
        </Checkbox>
      </FormItem>
      <FormItem top="Локаль">
        <Select
          style={{ width: 100 }}
          value={locale}
          onChange={(_, newValue) => setLocale(newValue)}
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
        <LocaleProvider value={locale}>
          <CalendarRange
            value={value}
            onChange={setValue}
            disablePast={disablePast}
            disableFuture={disableFuture}
            disablePickers={disablePickers}
          />
        </LocaleProvider>
      </FormItem>
    </FormLayoutGroup>
  );
};

<Example />;
```
