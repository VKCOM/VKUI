Компонент выбора даты.

> ⚠️ Данный компонент предназначен для использования на desktop. При использовании на ios/android работа компонента не гарантируется

```jsx { "props": { "layout": false, "iframe": false } }
import { format, addDays } from "date-fns";

const Example = () => {
  const [value, setValue] = useState([new Date(), addDays(new Date(), 10)]);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [closeOnChange, setCloseOnChange] = useState(true);
  const [locale, setLocale] = useState("ru");

  return (
    <FormLayout>
      <FormLayoutGroup mode="vertical">
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
        <FormItem top="Закрывать календарь послы выбора даты">
          <Checkbox
            checked={closeOnChange}
            onChange={(e) => setCloseOnChange(e.target.checked)}
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
          <div style={{ display: "flex" }}>
            <LocaleProviderContext.Provider value={locale}>
              <DateRangeInput
                value={value}
                onChange={setValue}
                disablePast={disablePast}
                disableFuture={disableFuture}
                closeOnChange={closeOnChange}
                disablePickers={disablePickers}
              />
            </LocaleProviderContext.Provider>
          </div>
        </FormItem>
      </FormLayoutGroup>
    </FormLayout>
  );
};

<Example />;
```
