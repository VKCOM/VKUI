Унивирсальный комппонент option для кастомных селектов.  
Используется внутри [CustomSelect](https://vkcom.github.io/vkui-styleguide/#!/CustomSelect), [ChipsSelect](https://vkcom.github.io/vkui-styleguide/#!/ChipsSelect).

```jsx
<View activePanel="сustomSelect">
  <Panel id="сustomSelect">
    <PanelHeader>
      CustomSelectOption
    </PanelHeader>
      <FormLayout>
        <CustomSelectOption
          label="Йо-хо-хо!"
        />
        <CustomSelectOption
          before={<Avatar size={20} src={getAvatarUrl('app_zagadki')} />}
          label="И бутылка рома!"
        />
      </FormLayout>
  </Panel>
</View>
```
