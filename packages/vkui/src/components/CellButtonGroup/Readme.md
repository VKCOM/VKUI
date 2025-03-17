Группирует компоненты [CellButton](#!/CellButton).

## Что следует знать?

- [CellButtonGroup](#!/CellButtonGroup) не отвечает за параметры вложенных [CellButton](#!/CellButton).

```jsx
<View activePanel="CellButtonGroup">
  <Panel id="CellButtonGroup">
    <PanelHeader>CellButtonGroup</PanelHeader>
    <Group header={<Header size="s">Базовый пример</Header>}>
      <CellButtonGroup>
        <CellButton onClick={() => {}} appearance="negative" centered>
          Пожаловаться
        </CellButton>
        <CellButton onClick={() => {}} centered>
          Отмена
        </CellButton>
      </CellButtonGroup>
    </Group>
  </Panel>
</View>
```
