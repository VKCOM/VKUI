Используется для разделения какого-либо контента.

Свойство `wide` по дефолту позволяет контролировать отступы слева/справа, для `mode=vertical` отступы сверху/снизу.

> Обратите внимание, если вы используете `Spacing` с вложенным компонентом `Separator` в режиме `vertical`,
> то родительский элемент должен быть `flex`-контейнером.

```jsx
<View activePanel="separator">
  <Panel id="separator">
    <PanelHeader>Separator</PanelHeader>

    <Group header={<Header mode="secondary">Сепаратор</Header>}>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Spacing size={24}>
        <Separator />
      </Spacing>

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
    </Group>
    <Group header={<Header mode="secondary">Вертикальный сепаратор</Header>}>
      <Div style={{ display: 'flex' }}>
        <Link>Новости</Link>
        <Spacing size={16} mode="vertical">
          <Separator mode="vertical" wide />
        </Spacing>
        <Link>Звонки</Link>
        <Spacing size={16} mode="vertical">
          <Separator mode="vertical" wide />
        </Spacing>
        <Link>Друзья</Link>
      </Div>
    </Group>
  </Panel>
</View>
```
