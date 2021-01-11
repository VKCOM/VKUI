Делает из [SelectMimicry](#!/SelectMimicry) селект с выпадающим списком

```jsx
<View activePanel="select">
  <Panel id="select">
    <PanelHeader>
      CustomSelect
    </PanelHeader>
    <Group>
      <FormItem top="Администратор">
        <Select
          placeholder="Не выбран" 
          options={getRandomUsers(10).map(user => ({ label: user.name, value: user.id, avatar: user.photo_100 }))}
          renderOption={({ option, ...restProps }) => (
            <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
          )}
        />
      </FormItem>
    </Group>
  </Panel>
</View>
```
