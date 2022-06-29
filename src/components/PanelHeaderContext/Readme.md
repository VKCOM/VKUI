```jsx
const Example = () => {
  const [contextOpened, setContextOpened] = useState(true);
  const [mode, setMode] = useState("all");
  const platform = usePlatform();

  const toggleContext = () => {
    setContextOpened(!contextOpened);
  };
  const select = (e) => {
    const mode = e.currentTarget.dataset.mode;
    setMode(mode);
    requestAnimationFrame(toggleContext);
  };

  const isVKCOM = platform !== VKCOM;

  return (
    <SplitLayout
      style={{ justifyContent: "center" }}
      header={isVKCOM && <PanelHeader separator={false} />}
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
                      transform: `rotate(${contextOpened ? "180deg" : "0"})`,
                    }}
                  />
                }
                onClick={toggleContext}
              >
                Communities
              </PanelHeaderContent>
            </PanelHeader>
            <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
              <List>
                <Cell
                  before={<Icon28UsersOutline />}
                  after={
                    mode === "all" ? <Icon24Done fill="var(--accent)" /> : null
                  }
                  onClick={select}
                  data-mode="all"
                >
                  Communities
                </Cell>
                <Cell
                  before={<Icon28SettingsOutline />}
                  after={
                    mode === "managed" ? (
                      <Icon24Done fill="var(--accent)" />
                    ) : null
                  }
                  onClick={select}
                  data-mode="managed"
                >
                  Managed Communities
                </Cell>
              </List>
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
