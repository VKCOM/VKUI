Компонент выбора даты. Для десктопа - это три [CustomSelect-a](#!/CustomSelect). Для мобильного вида - input c `type="date"`

Принимает значения `min` (минимальная доступная дата), `max` (максимальная), `defaultValue` в формате гг-мм-дд,
 так же как и input c `type="date"`. `onDateChange` - используется для получения значения Datepicker-а.
 
 Для десктопного вида можно передать массив с названиями месяцев, 
 иначе будут использоваться дефолтные русские в родительном падеже
 
 Есть возможность задать максимальную высоту выпадающего списка с помощью `optionsHeightMax`

```jsx
  <View activePanel="datePicker">
    <Panel id="datePicker">
      <PanelHeader>
        DatePicker
      </PanelHeader>
      <FormLayout>
        <DatePicker
          isMobile
          top="Дата рождения"
          min="1901-01-01"
          max="2006-01-01"
          defaultValue="1991-04-02"
          onDateChange={(value) => {console.log(value)}}
        />
        <DatePicker
          top="Дата рождения"
          min="1901-01-01"
          max="2006-01-01"
          defaultValue="1991-04-02"
          onDateChange={(value) => {console.log(value)}}
        />
      </FormLayout>
    </Panel>
  </View>
```
