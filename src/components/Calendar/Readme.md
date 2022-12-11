Компонент выбора даты.

- Если нужно поле ввода с выпадающим календарем, используйте [DateInput](#!/DateInput).
- Если нужен выбор диапазона дат, используйте [CalendarRange](#!/CalendarRange).

```jsx { "props": { "layout": false, "iframe": false } }
import { format } from '../../lib/date';

const Example = () => {
  const [value, setValue] = useState(() => new Date());
  const [enableTime, setEnableTime] = useState(false);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
  const [locale, setLocale] = useState('ru');
  const [size, setSize] = useState('m');
  const [listenDayChangesForUpdate, setListenDayChangesForUpdate] = useState(false);

  return (
    <FormLayout>
      <FormLayoutGroup mode="vertical">
        <FormItem top="Выбранная дата">{format(value, 'YYYY-MM-DD HH:mm:ss')}</FormItem>
        <FormItem top="Выбор времени">
          <Checkbox checked={enableTime} onChange={(e) => setEnableTime(e.target.checked)}>
            Включено
          </Checkbox>
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
        <FormItem top="Отображать даты с прошлого и следующего месяца">
          <Checkbox
            checked={showNeighboringMonth}
            onChange={(e) => setShowNeighboringMonth(e.target.checked)}
          >
            Включено
          </Checkbox>
        </FormItem>
        <FormItem top="Переключать сегодняшний день в 00:00">
          <Checkbox
            checked={listenDayChangesForUpdate}
            onChange={(e) => setListenDayChangesForUpdate(e.target.checked)}
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
        <FormItem top="Размер">
          <Select
            style={{ width: 100 }}
            value={size}
            onChange={(e) => setSize(e.target.value)}
            options={[
              {
                label: 's',
                value: 's',
              },
              {
                label: 'm',
                value: 'm',
              },
            ]}
          />
        </FormItem>
        <FormItem>
          <LocaleProvider value={locale}>
            <Calendar
              value={value}
              onChange={setValue}
              enableTime={enableTime}
              disablePast={disablePast}
              disableFuture={disableFuture}
              disablePickers={disablePickers}
              showNeighboringMonth={showNeighboringMonth}
              size={size}
              listenDayChangesForUpdate={listenDayChangesForUpdate}
            />
          </LocaleProvider>
        </FormItem>
      </FormLayoutGroup>
    </FormLayout>
  );
};

<Example />;
```
