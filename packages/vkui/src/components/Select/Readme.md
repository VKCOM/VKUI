Отрисовывает [CustomSelect](#!/CustomSelect), если есть мышка, либо [NativeSelect](#!/NativeSelect)

## Цифровая доступность (a11y)

Для корректной работы скринридеров необходимо вручную передавать некоторые параметры:
<br />

- При использовании вместе с элементом `label` следует `id` лэйбла передать селекту в свойство `aria-labelledby`, а `id` селекта передать в свойство `for`(`htmlFor`) лэйбла.
  Это обусловлено тем, что внутри [Select](#!/Select) может использоваться [CustomSelect](#!/CustomSelect), который
  реализован без использования нативного `select` и cледует паттерну [combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/),
  где для корректного связывания списка и инпута требуется также и установка `aria-labelledby`.

- При использовании вместе с [FormItem](#!/FormItem) следуйте рекомендациям раздела "Цифровая доступность" компонента [FormItem](#!/FormItem).

Пример рекомендуемого использования:

```js static
<label id="select-label-id" htmlFor="select-id">Администратор</label>
<CustomSelect
  id="select-id"
  aria-labelledby="select-label-id"
  placeholder="Не выбран"
  options={users}
/>

<FormItem top="Администратор" topId="select-label-id" htmlFor="select-id">
  <CustomSelect
    id="select-id"
    aria-labelledby="select-label-id"
    placeholder="Не выбран"
    options={users}
  />
</FormItem>
```

```jsx
<View activePanel="select">
  <Panel id="select">
    <PanelHeader>Select</PanelHeader>
    <Group>
      <FormItem
        top="Администратор"
        topId="label-id"
        htmlFor="select-id"
        bottom="Пример селекта для выбора администратора из списка"
        bottomId="select-description-id"
      >
        <Select
          id="select-id"
          aria-labelledby="label-id"
          aria-describedby="select-description-id"
          placeholder="Не выбран"
          options={getRandomUsers(10).map((user) => ({
            label: user.name,
            value: user.id,
            avatar: user.photo_100,
          }))}
          renderOption={({ option, ...restProps }) => (
            <CustomSelectOption
              {...restProps}
              key={option.value}
              before={<Avatar size={24} src={option.avatar} />}
            />
          )}
        />
      </FormItem>
    </Group>
  </Panel>
</View>
```
