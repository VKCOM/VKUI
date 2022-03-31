Отрисовывает [CustomSelect](#!/CustomSelect), если есть мышка, либо [NativeSelect](#!/NativeSelect)

```jsx
<View activePanel="select">
  <Panel id="select">
    <PanelHeader>Select</PanelHeader>
    <Group>
      <FormItem top="Администратор">
        <Select
          placeholder="Не выбран"
          options={getRandomUsers(10).map((user) => ({
            label: user.name,
            value: user.id,
            avatar: user.photo_100,
          }))}
          renderOption={({ option, ...restProps }) => (
            <CustomSelectOption
              {...restProps}
              before={<Avatar size={24} src={option.avatar} />}
            />
          )}
          renderTrigger={(option) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                style={{ marginRight: "8px" }}
                size={20}
                src={option.avatar}
              />
              {option.label}
            </div>
          )}
        />
      </FormItem>
    </Group>
  </Panel>
</View>
```
