Отрисовывает [CustomSelect](#!/CustomSelect), если есть мышка, либо [NativeSelect](#!/NativeSelect)

## Цифровая доступность (a11y)

Старайтесь сопровождать элемент текстовым описанием, для корректной работы скринридеров.
Для этого необходимо вручную передавать некоторые параметры:
<br />

- При задании текстового описания с помощью элемента `label` передавайте `id` компонента в свойство `htmlFor` элемента `label`. Это позволит фокусироваться на компоненте кликом по лэйблу и автоматически добавит имя компоненту для скринридеров.
- Если по какой-то причине текстовое описание компонента не получается обернуть в тэг `label`, то можно попробовать связать текстовое описание с компонентом через [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Для этого передайте `id` текстового элемента компоненту в свойство [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).
- При отсутствии по дизайну у выподающего списка текстового описания старайтесь всё же его добавлять, но прятать с помощью элемента [VisuallyHidden](#!/VisuallyHidden), чтобы оно оставалось доступно для пользователей ассистивных технологий. В крайнем случае используйте [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) аттрибут.
- При использовании вместе с [FormItem](#!/FormItem) следуйте рекомендациям раздела "Цифровая доступность" компонента [FormItem](#!/FormItem).

Старайтесь сопровождать элемент плейсхолдером.

Пример рекомендуемого использования компонента `Select` с текстовым описанием:

- вместе с `label`

```jsx static
<label htmlFor="select-id">Администратор</label>
<CustomSelect
  id="select-id"
  placeholder="Не выбран"
  options={users}
/>
```

- вместе с [FormItem](#!/FormItem)

```jsx static
<FormItem top="Администратор" htmlFor="select-id">
  <CustomSelect id="select-id" placeholder="Не выбран" options={users} />
</FormItem>
```

- вместе с [VisuallyHidden](#!/VisuallyHidden) (используя `label` и `htmlFor`)

```jsx static
<VisuallyHidden Component="label" htmlFor="select-id">Администратор</VisuallyHidden>
<CustomSelect
  id="select-id"
  placeholder="Не выбран"
  options={users}
/>
```

- вместе с [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

```jsx static
<span id="select-label-id">Администратор</span>
<CustomSelect
  aria-labelledby="select-label-id"
  placeholder="Не выбран"
  options={users}
/>
```

- вместе с [VisuallyHidden](#!/VisuallyHidden) (используя [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby))

```jsx static
<VisuallyHidden Component="span" id="select-label-id">Администратор</VisuallyHidden>
<CustomSelect
  aria-labelledby="select-label-id"
  placeholder="Не выбран"
  options={users}
/>
```

- вместе с [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)

```jsx static
<CustomSelect aria-label="Администратор" placeholder="Не выбран" options={users} />
```

## Тестирование (e2e)

Если `Select` отрисовывает [NativeSelect](#!/NativeSelect), то достаточно передать `testId` через `data-*` аттрибут для поиска элемента на странице.
Если `Select` отрисовывает [CustomSelect](#!/CustomSelect), то следуйте рекомендациям из раздела "Тестирование (e2e)" компонента [CustomSelect](#!/CustomSelect).

```jsx
<View activePanel="select">
  <Panel id="select">
    <PanelHeader>Select</PanelHeader>
    <Group>
      <FormItem
        top="Администратор"
        htmlFor="select-id"
        bottom="Пример использования Select для выбора администратора из списка"
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
