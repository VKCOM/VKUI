Компонент для разделения контента.

```jsx static
<Spacing /> // отступ высотой 8px ("m")

<Spacing size="2xl" />  // отступ высотой 16px
```

> Если вам нужен разделитель с отступами фиксированной высоты,
> то рекомендуется использовать компонент `Separator` со свойством `size`.

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
  </Panel>
</View>
```
