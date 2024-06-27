```jsx { "props": { "layout": false, "adaptivity": true } }
const AdaptiveSpacingRenderer = () => {
  const { sizeX } = useAdaptivityConditionalRender();

  return (
    <React.Fragment>
      {sizeX.compact && <Separator className={sizeX.compact.className} />}
      {sizeX.regular && <Spacing size={16} className={sizeX.regular.className} />}
    </React.Fragment>
  );
};

<Scaffold
  topBar={
    <PanelHeader fixed={false} separator={false}>
      Scaffold Screen
    </PanelHeader>
  }
  bottomBar={
    <Tabbar style={{ position: 'static' }}>
      <TabbarItem aria-label="Новости">
        <Icon28NewsfeedOutline />
      </TabbarItem>
      <TabbarItem aria-label="Профиль">
        <Icon28UserCircleOutline />
      </TabbarItem>
    </Tabbar>
  }
>
  <AdaptiveSpacingRenderer />
  <Group>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
    <SimpleCell>content</SimpleCell>
  </Group>
</Scaffold>;
```
