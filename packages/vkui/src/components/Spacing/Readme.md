Компонент для разделения контента

Для большинства случаев будет достаточно дефолтного поведения компонента

```jsx static
<Spacing /> // - пустой отступ высотой 8px

<Spacing size={16} />  // - пустой отступ высотой 16px

// - сепаратор с отступами 8px сверху и снизу
<Spacing size={16} >
  <Separator />
</Spacing>
```

Для более гибкой настройки положения линии и отступов, можно комбинировать два отступа вместе

Например - нужен сепаратор с отступом сверху 12px и снизу 20px:

```jsx static
<Spacing size={12} />
<Separator />
<Spacing size={20} />
```

```jsx
<View activePanel="separator">
  <Panel id="separator">
    <PanelHeader>Spacing</PanelHeader>

    <Group header={<Header mode="secondary">Default Spacing (empty, 8px)</Header>}>
      <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
      <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>

      <Spacing />

      <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
      <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
    </Group>

    <Group header={<Header mode="secondary">Spacing 16px</Header>}>
      <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
      <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>

      <Spacing size={16} />

      <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
      <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
    </Group>

    <Group header={<Header mode="secondary">Spacing with centered separator 16px</Header>}>
      <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
      <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>

      <Spacing size={16}>
        <Separator />
      </Spacing>

      <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
      <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
    </Group>

    <Group header={<Header mode="secondary">Combined Spacings with bottom separator</Header>}>
      <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
      <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>

      <Spacing>
        <Separator />
      </Spacing>

      <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
      <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
    </Group>

    <Group
      header={
        <Header mode="secondary">Combined Spacings with bottom separator and custom size</Header>
      }
    >
      <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
      <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>

      <Spacing size={12} />
      <Separator />
      <Spacing size={20} />

      <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
      <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
    </Group>
  </Panel>
</View>
```
