Компонент для разделения контента.

```jsx static
<Spacing /> // отступ высотой 8px ("m")

<Spacing size="2xl" />  // отступ высотой 16px

// сепаратор с отступами 8px сверху и снизу
<Spacing ize="2xl" >
  <Separator />
</Spacing>
```

Для более гибкой настройки положения линии и отступов можно комбинировать два отступа вместе.

Например, нужен сепаратор с отступом сверху `12px` и снизу `20px`:

```jsx static
<Spacing size="xl" />
<Separator />
<Spacing size="3xl" />
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

      <Spacing size="2xl" />

      <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
      <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
    </Group>

    <Group header={<Header mode="secondary">Spacing with centered separator 16px</Header>}>
      <SimpleCell before={<Icon28Notifications />}>Уведомления</SimpleCell>
      <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>

      <Spacing size="2xl">
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

      <Spacing size="xl" />
      <Separator />
      <Spacing size="3xl" />

      <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>
      <SimpleCell before={<Icon28SlidersOutline />}>Основные</SimpleCell>
    </Group>
  </Panel>
</View>
```
