```jsx
<View activePanel="progress">
  <Panel id="progress">
    <PanelHeader>Progress</PanelHeader>
    <Group>
      <FormItem id="progresslabel" top="Прогресс">
        <Progress aria-labelledby="progresslabel" value={40} />
      </FormItem>

      <FormItem id="progresslabelNegative" top="Ошибка">
        <Progress appearance="negative" aria-labelledby="progresslabelNegative" value={75} />
      </FormItem>

      <FormItem id="progresslabelPositive" top="Завершено">
        <Progress appearance="negative" aria-labelledby="progresslabelPositive" value={100} />
      </FormItem>
    </Group>
  </Panel>
</View>
```
