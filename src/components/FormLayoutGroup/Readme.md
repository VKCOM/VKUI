Компонент помогает сгруппировать несколько элементов форм по какому-то признаку, расположив их по-вертикали или
по-горизонтали.

```jsx
<View activePanel="FormLayoutGroup">
  <Panel id="FormLayoutGroup">
    <PanelHeader>FormLayoutGroup</PanelHeader>
    <FormLayout>
      <FormLayoutGroup mode="horizontal">
        <FormItem top="Имя">    
          <Input />
        </FormItem>
        <FormItem top="Фамилия">    
          <Input />
        </FormItem>
      </FormLayoutGroup>
    </FormLayout>
  </Panel>
</View>
```
