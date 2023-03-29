```jsx { "props": { "layout": false, "adaptivity": true } }
const Example = () => {
  const [contextOpened, setContextOpened] = React.useState(true);
  const [mode, setMode] = React.useState('all');
  const platform = usePlatform();

  const toggleContext = () => {
    setContextOpened((prev) => !prev);
  };
  const select = (e) => {
    const mode = e.currentTarget.dataset.mode;
    setMode(mode);
    requestAnimationFrame(toggleContext);
  };

  const hasHeader = platform !== Platform.VKCOM;

  return (
    <SplitLayout
      style={{ justifyContent: 'center' }}
      header={hasHeader && <PanelHeader separator={false} />}
    >
      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <View activePanel="context2">
          <Panel id="context2">
            <PanelHeader
              before={<PanelHeaderBack />}
              after={
                <PanelHeaderButton>
                  <Icon28AddOutline />
                </PanelHeaderButton>
              }
            >
              <PanelHeaderContent
                aside={
                  <Icon16Dropdown
                    style={{
                      transform: `rotate(${contextOpened ? '180deg' : '0'})`,
                    }}
                  />
                }
                onClick={toggleContext}
              >
                Communities
              </PanelHeaderContent>
            </PanelHeader>
            <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
              <SimpleCell
                before={<Icon28UsersOutline />}
                after={mode === 'all' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null}
                onClick={select}
                data-mode="all"
              >
                Communities
              </SimpleCell>
              <SimpleCell
                before={<Icon28SettingsOutline />}
                after={
                  mode === 'managed' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null
                }
                onClick={select}
                data-mode="managed"
              >
                Managed Communities
              </SimpleCell>
            </PanelHeaderContext>
            <Group>
              <div style={{ height: 300 }} />
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

<Example />;
```
