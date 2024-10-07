Используется для разделения какого-либо контента. Убрать стандартные отступы можно через свойство `noPadding`.
Изменить цветовое представление компонента можно при помощи свойства `appearance`.

```jsx
<View activePanel="separator">
  <Panel id="separator">
    <PanelHeader>Separator</PanelHeader>

    <Group header={<Header mode="secondary">direction="inline"</Header>}>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Separator size="4xl" />

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
      <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
    </Group>
    <Group header={<Header mode="secondary">direction="block"</Header>}>
      <Div style={{ display: 'flex' }}>
        <Link>Новости</Link>
        <Separator direction="block" size="xl" noPadding />
        <Link>Звонки</Link>
        <Separator direction="block" size="xl" noPadding />
        <Link>Друзья</Link>
      </Div>
    </Group>
  </Panel>
</View>
```
