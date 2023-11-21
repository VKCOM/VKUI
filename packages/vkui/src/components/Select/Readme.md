Отрисовывает [CustomSelect](#!/CustomSelect), если есть мышка, либо [NativeSelect](#!/NativeSelect)

## Цифровая доступность (a11y)

Для корректной работы скринридеров необходимо вручную передавать некоторые параметры:
<br />

- При использовании вместе с элементом `label` следует `id` селекта передать в свойство `for`(`htmlFor`) лэйбла.
- При отсутствии лэйбла по дизайну старайтесь всё же его оставлять, но прятать с помощью элемента [VisuallyHidden](#!/VisuallyHidden), чтобы он оставался доступен для пользователей ассистивных технологий. В крайнем случае используйте [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) аттрибут.
- При использовании вместе с [FormItem](#!/FormItem) следуйте рекомендациям раздела "Цифровая доступность" компонента [FormItem](#!/FormItem).

Пример рекомендуемого использования:

- вместе с `label`

```js static
<label htmlFor="select-id">Администратор</label>
<CustomSelect
  id="select-id"
  placeholder="Не выбран"
  options={users}
/>
```

- вместе с [FormItem](#!/FormItem)

```js static
<FormItem top="Администратор" htmlFor="select-id">
  <CustomSelect id="select-id" placeholder="Не выбран" options={users} />
</FormItem>
```

- вместе с [VisuallyHidden](#!/VisuallyHidden)

```js static
<VisuallyHidden Component="label" htmlFor="select-id">Администратор</VisuallyHidden>
<CustomSelect
  id="select-id"
  placeholder="Не выбран"
  options={users}
/>
```

- вместе с [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)

```js static
<CustomSelect aria-label="Администратор" placeholder="Не выбран" options={users} />
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
