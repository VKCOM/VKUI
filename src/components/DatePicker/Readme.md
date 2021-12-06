Компонент выбора даты. Для десктопа - это три [CustomSelect-a](#!/CustomSelect). Для мобильного вида - input c `type="date"`

Принимает значения `min` (минимальная доступная дата), `max` (максимальная), `defaultValue` в формате {day: 1, month: 1, year: 1901},

`onDateChange` - используется для получения значения Datepicker-а.

Для десктопного вида можно передать массив с названиями месяцев,
иначе будут использоваться дефолтные русские в родительном падеже

```jsx
<View activePanel="datePicker">
  <Panel id="datePicker">
    <PanelHeader>DatePicker</PanelHeader>
    <Group>
      <FormItem top="Дата рождения">
        <DatePicker
          min={{ day: 1, month: 1, year: 1901 }}
          max={{ day: 1, month: 1, year: 2006 }}
          onDateChange={(value) => {
            console.log(value);
          }}
          dayPlaceholder="ДД"
          monthPlaceholder="ММММ"
          yearPlaceholder="ГГГГ"
        />
      </FormItem>
      <FormItem top="Дата рождения">
        <DatePicker
          min={{ day: 1, month: 1, year: 1901 }}
          max={{ day: 1, month: 1, year: 2006 }}
          defaultValue={{ day: 2, month: 4, year: 1994 }}
          onDateChange={(value) => {
            console.log(value);
          }}
        />
      </FormItem>
    </Group>
  </Panel>
</View>
```
