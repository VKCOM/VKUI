Компонент выбора даты.

```jsx { "props": { "layout": false, "iframe": false } }
import * as locales from "date-fns/locale";
import { format, addDays } from "date-fns";

const Example = () => {
  const [value, setValue] = useState([new Date(), addDays(new Date(), 10)]);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [locale, setLocale] = useState("ru");

  return (
    <View activePanel="DateRangeInput">
      <Panel id="DateRangeInput">
        <PanelHeader>DateRangeInput</PanelHeader>
        <Group>
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
              <FormItem top="Локаль">
                <Select
                  value={locale}
                  onChange={(e) => setLocale(e.target.value)}
                  options={[
                    {
                      label: "ru",
                      value: "ru",
                    },
                    {
                      label: "en-US",
                      value: "enUS",
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
                  <DateRangeInput
                    value={value}
                    onChange={setValue}
                    disablePast={disablePast}
                    disableFuture={disableFuture}
                    locale={locales[locale]}
                  />
                </div>
              </FormItem>
            </FormLayoutGroup>
          </FormLayout>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
