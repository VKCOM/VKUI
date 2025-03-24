Группирует компоненты [CellButton](#!/CellButton).

## Что следует знать?

- `CellButtonGroup` не отвечает за параметры вложенных [CellButton](#!/CellButton).
- в качестве разделителя используйте подкомпонент `CellButtonGroup.Separator`, он принимет все свойства, что и [Separator](#!/Separator), кроме предустановленных `direction` и `padding`.

```jsx
<View activePanel="CellButtonGroup">
  <Panel id="CellButtonGroup">
    <PanelHeader>CellButtonGroup</PanelHeader>
    <Group header={<Header size="s">Базовый пример</Header>}>
      <CellButtonGroup>
        <CellButton onClick={() => {}} appearance="negative" centered>
          Пожаловаться
        </CellButton>
        <CellButtonGroup.Separator />
        <CellButton onClick={() => {}} centered>
          Отмена
        </CellButton>
      </CellButtonGroup>
    </Group>
  </Panel>
</View>
```
