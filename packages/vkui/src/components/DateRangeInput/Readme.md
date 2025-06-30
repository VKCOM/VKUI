Компонент выбора даты.

- Если нужен календарь без поля ввода, используйте [CalendarRange](#!/CalendarRange).
- Если нужен выбор одной даты, используйте [DateInput](#!/DateInput).

> ⚠️ Данный компонент предназначен для использования на desktop. При использовании на ios/android работа компонента не гарантируется

## Цифровая доступность (a11y)

> ⚠️ Настоятельно рекомендуем включить режим `accessible`, чтобы сделать `DateRangeInput` доступным уже сейчас. В v8 режим `accessible` будет включен по умолчанию

По умолчанию (в v7) `DateRangeInput` сложно использовать пользователям ассистивных технологий.
Мы доработали компонент так, чтобы сделать его доступным. К сожалению, это потребовало изменений в визуальном поведении компонента. Мы можем включить это поведение по умолчанию только в мажорном релизе VKUI (v8), так как это влияет в том числе и на текущих пользователей VKUI v7.
Тем не менее новое, доступное поведение можно включить с помощью нового свойства `accessible` уже сейчас. Настоятельно рекомендуем это сделать.
Вот список изменений которые отличают поведение со свойством `accessible` от поведения `DateRangeInput` по умолчанию:

- иконка календаря видна постоянно. Раньше она была видна только если в `DateRangeInput` нет значения;
- календарь открывается:
  - по клику по иконке календаря;
  - по клику на инпут;
  - по нажатию `<Space>`, если `DateRangeInput` в фокусе.

Раньше он открывался сразу при фокусе на `DateRangeInput`;

- при открытии календарь получает фокус. При закрытии календаря фокус возвращается на `DateRangeInput`.
  Если нужно отключить это поведение, используйте свойство `disableFocusTrap`. Если нужно
  больше контроля на тем куда возвращать фокус, используйте свойство `restoreFocus`.

К сожалению, из-за особенности реализации `DateRangeInput`, если вкладывать его внутрь `label`, или связывать `label` и `DateRangeInput` через `htmlFor`, то по клику на `label` фокус будет попадать на `DateRangeInput`, но текст `label` скринридером зачитываться в момент фокуса не будет.
Рекомендуем дублировать текст `label` в `DateRangeInput`, передавая в `DateRangeInput` текст через свойство `aria-label`.

```jsx static
<label>
  Период проживания
  <DateRangeInput aria-label="Период проживания" />
</label>

<label htmlFor="date">Срок действия договора</label>
<DateRangeInput
  id="date"
  aria-label="Срок действия договора"
/>

<FormItem top="Период бронирования" htmlFor="date">
  <DateRangeInput
    id="date"
    aria-label="Период бронирования"
  />
</FormItem>
```

## Переводы (i18n)

Формат дат и их перевод задаётся с помощью средств браузера [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). Тем не менее компонент, в том числе и календарь, имеют большое количество внутренних интерактивных элементов, которые должны иметь описание.
Особенно важно для доступности (a11y), так как большинство подписей зрячему пользователю не видны, но критически важны пользователям скринридеров.

Ниже приведён список свойств, которые стоит использовать, если требуется перевести компонент на другой язык. Полный список ищите в таблице свойств компонента ниже.

Свойства календаря:

- `changeDayLabel`;
- `changeMonthLabel`;
- `changeYearLabel`;
- `changeStartDayLabel`;
- `changeStartMonthLabel`;
- `changeStartYearLabel`;
- `changeEndDayLabel`;
- `changeEndMonthLabel`;
- `changeEndYearLabel`;
- `prevMonthLabel`;
- `nextMonthLabel`;
- `clearFieldLabel`;
- `showCalendarLabel`;
- `calendarLabel`.

```jsx { "props": { "layout": false, "iframe": false } }
import { addDays } from 'date-fns';

const Example = () => {
  const [value, setValue] = useState([new Date(), addDays(new Date(), 10)]);
  const [disablePast, setDisablePast] = useState(false);
  const [disableFuture, setDisableFuture] = useState(false);
  const [disablePickers, setDisablePickers] = useState(false);
  const [closeOnChange, setCloseOnChange] = useState(true);
  const [disableCalendar, setDisableCalendar] = useState(false);
  const [accessible, setAccessible] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [locale, setLocale] = useState('ru');

  return (
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
        <Checkbox checked={disableCalendar} onChange={(e) => setDisableCalendar(e.target.checked)}>
          Включено
        </Checkbox>
      </FormItem>
      <FormItem top="Включить режим, в котором DateRangeInput доступен для ассистивных технологий">
        <Checkbox checked={accessible} onChange={(e) => setAccessible(e.target.checked)}>
          Включено
        </Checkbox>
      </FormItem>
      <FormItem top="Readonly режим">
        <Checkbox checked={readOnly} onChange={(e) => setReadOnly(e.target.checked)}>
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
      <FormItem top="Результат" htmlFor="date-range">
        <Flex>
          <LocaleProvider value={locale}>
            <DateRangeInput
              id="date-range"
              aria-label="Результат"
              value={value}
              onChange={setValue}
              disablePast={disablePast}
              disableFuture={disableFuture}
              closeOnChange={closeOnChange}
              disablePickers={disablePickers}
              disableCalendar={disableCalendar}
              accessible={accessible}
              readOnly={readOnly}
            />
          </LocaleProvider>
        </Flex>
      </FormItem>
    </FormLayoutGroup>
  );
};

<Example />;
```
