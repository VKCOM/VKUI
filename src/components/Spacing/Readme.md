Компонент для разделения контента

Для большинства случаев будет достаточно дефолтного поведения компонента
```jsx static
<Spacing /> // - пустой отступ высотой 8px

<Spacing size={16} />  // - пустой отступ высотой 16px

<Spacing separator size={16} /> // - сепаратор с отступами 8px сверху и снизу
```

Для более гибкой настройки положения линии и отступов, можно комбинировать два отступа вместе

Например - нужен сепаратор с отступом сверху 12px и снизу 20px:
```jsx static
<Spacing separator="bottom" size={12} />
<Spacing size={20} />
```



```jsx
<View activePanel="separator">
  <Panel id="separator">
    <PanelHeader>
      Spacing
    </PanelHeader>

    <Group header={<Header mode="secondary">Default Spacing (empty, 8px)</Header>}>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Spacing />

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
      <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
    </Group>

    <Group header={<Header mode="secondary">Spacing 16px</Header>}>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Spacing size={16} />

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
      <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
    </Group>

    <Group header={<Header mode="secondary">Spacing with centered separator 16px</Header>}>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Spacing separator size={16} />

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
      <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
    </Group>

    <Group header={<Header mode="secondary">Combined Spacings with bottom separator</Header>}>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Spacing separator="bottom" />
      <Spacing />

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
      <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
    </Group>

    <Group header={<Header mode="secondary">Combined Spacings with bottom separator and custom size</Header>}>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Spacing separator="bottom" size={12} />
      <Spacing size={20} />

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
      <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
    </Group>
  </Panel>
</View>
```