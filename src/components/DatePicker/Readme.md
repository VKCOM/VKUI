```jsx
  <View activePanel="datePicker">
    <Panel id="datePicker">
      <PanelHeader>
        DatePicker
      </PanelHeader>
        <DatePicker
          isMobile
          top="Дата рождения"
          defaultValue="04.02.1991"
          onDateChange={() => null}
        />
        <Div style={{ margin: '12px 0' }} />
        <DatePicker
          top="Дата рождения"
          defaultValue="04.02.1991"
          onDateChange={() => null}
        />
    </Panel>
  </View>
```
