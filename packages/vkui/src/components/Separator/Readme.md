Используется для разделения какого-либо контента. Отступы справа и слева контролируются свойством `noPadding`.

```jsx
<View activePanel="separator">
  <Panel id="separator">
    <PanelHeader>Separator</PanelHeader>

    <Group>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Spacing size={24}>
        <Separator />
      </Spacing>

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
      <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
    </Group>
  </Panel>
</View>
```
