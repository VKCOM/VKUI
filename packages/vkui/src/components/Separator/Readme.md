Используется для разделения какого-либо контента.

Добавить стандартные отступы можно через свойство `padding`.
Изменить цветовое представление компонента можно при помощи свойства `appearance`.
Свойство `size` позволяет задать размеры контейнера, внутри которого располагается `Separator`. Управлять выравниванием внутри контейнера можно через свойство `align`.

> Обратите внимание, если вы используете компонент `Separator` с `direction="block"`,
> то родительский элемент должен быть `flex`-контейнером.

```jsx
<View activePanel="separator">
  <Panel id="separator">
    <PanelHeader>Separator</PanelHeader>

    <Group header={<Header size="s">direction="horizontal"</Header>}>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Separator size="4xl" />

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
      <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
    </Group>
    <Group header={<Header size="s">direction="vertical"</Header>}>
      <Flex margin="auto">
        <Link>Новости</Link>
        <Separator direction="vertical" size="xl" />
        <Link>Звонки</Link>
        <Separator direction="vertical" size="xl" />
        <Link>Друзья</Link>
      </Flex>
    </Group>
  </Panel>
</View>
```
