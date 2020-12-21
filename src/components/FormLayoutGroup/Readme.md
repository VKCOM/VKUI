Компонент помогает сгруппировать несколько `FormItem` по какому-то признаку, расположив их по-вертикали или
по-горизонтали.

```jsx
<View activePanel="FormLayoutGroup">
  <Panel id="FormLayoutGroup">
    <PanelHeader>FormLayoutGroup</PanelHeader>
    <Group>
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
    </Group>
  </Panel>
</View>
```
