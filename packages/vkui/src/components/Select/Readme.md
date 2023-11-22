Отрисовывает [CustomSelect](#!/CustomSelect), если есть мышка, либо [NativeSelect](#!/NativeSelect)

## Цифровая доступность (a11y)

Для корректной работы скринридеров необходимо вручную передавать некоторые параметры:
<br />

- При использовании вместе с элементом `label` передавайте `id` селекта в свойство `for`(`htmlFor`) элемента `label`.
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

## Тестирование (e2e)

Если `Select` отрисовывает [NativeSelect](#!/NativeSelect), то достаточно передать testId через `data-*` аттрибут, для поиска элемента на странице.
Если `Select` отрисовывает [CustomSelect](#!/CustomSelect), то следуйте рекомендациям из раздела "Тестирование (e2e)" компонента [CustomSelect](#!/CustomSelect).

```jsx
<View activePanel="select">
  <Panel id="select">
    <PanelHeader>Select</PanelHeader>
    <Group>
      <FormItem
        top="Администратор"
        htmlFor="select-id"
        bottom="Пример селекта для выбора администратора из списка"
      >
        <Select
          id="select-id"
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
