Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
<View activePanel="switch">
  <Panel id="switch">
    <PanelHeader>Switch</PanelHeader>
    <Group>
      <Cell
        role={null}
        disabled
        after={<Switch aria-label="Комментарии к записям" />}
      >
        Комментарии к записям
      </Cell>
      <Cell
        role={null}
        disabled
        after={<Switch defaultChecked aria-label="Ссылки" />}
      >
        Ссылки
      </Cell>
      <Cell
        role={null}
        disabled
        after={<Switch disabled aria-label="Фотоальбомы" />}
      >
        Фотоальбомы
      </Cell>
    </Group>
    <Group header={<Header mode="secondary">Компактный вид</Header>}>
      <AdaptivityProvider sizeY="compact">
        <Cell
          role={null}
          disabled
          after={<Switch aria-label="Комментарии к записям" />}
        >
          Комментарии к записям
        </Cell>
        <Cell
          role={null}
          disabled
          after={<Switch defaultChecked aria-label="Ссылки" />}
        >
          Ссылки
        </Cell>
        <Cell
          role={null}
          disabled
          after={<Switch disabled aria-label="Фотоальбомы" />}
        >
          Фотоальбомы
        </Cell>
      </AdaptivityProvider>
    </Group>
  </Panel>
</View>
```
