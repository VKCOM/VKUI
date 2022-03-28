Компонент выбора диапазона дат.

```jsx { "props": { "layout": false, "iframe": false } }
import { addDays, format } from "date-fns";

const Example = () => {
  const [value, setValue] = useState([new Date(), addDays(new Date(), 10)]);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [locale, setLocale] = useState("ru");

  return (
    <FormLayout>
      <FormLayoutGroup mode="vertical">
        <FormItem top="Выбранная дата">
          {format(value[0], "yyyy-MM-dd")} - {format(value[1], "yyyy-MM-dd")}
        </FormItem>
        <FormItem top="Запрет выбора прошлых дат">
          <Checkbox
            checked={disablePast}
            onChange={(e) => setDisablePast(e.target.checked)}
          >
            Включено
          </Checkbox>
        </FormItem>
        <FormItem top="Запрет выбора будущих дат">
          <Checkbox
            checked={disableFuture}
            onChange={(e) => setDisableFuture(e.target.checked)}
          >
            Включено
          </Checkbox>
        </FormItem>
        <FormItem top="Отключить селекты выбора месяца/года">
          <Checkbox
            checked={disablePickers}
            onChange={(e) => setDisablePickers(e.target.checked)}
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
                label: "ru",
                value: "ru",
              },
              {
                label: "en",
                value: "en",
              },
              {
                label: "ar",
                value: "ar",
              },
              {
                label: "fr",
                value: "fr",
              },
            ]}
          />
        </FormItem>
        <FormItem>
          <LocaleProviderContext.Provider value={locale}>
            <CalendarRange
              value={value}
              onChange={setValue}
              disablePast={disablePast}
              disableFuture={disableFuture}
              disablePickers={disablePickers}
            />
          </LocaleProviderContext.Provider>
        </FormItem>
      </FormLayoutGroup>
    </FormLayout>
  );
};

<Example />;
```
