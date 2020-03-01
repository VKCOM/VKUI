Информационный блок. Используется для отрисовки некликабельных блоков с неизменяемым контентом (то есть без инпутов, слайдеров и т.п.)
Если таких блоков несколько и они объединены по смыслу, то рекомендуется оборачивать список в Group с указанием header.

```jsx
  <View activePanel="info-row">
    <Panel id="info-row">
      <PanelHeader>
        InfoRow
      </PanelHeader>
      <Group>
        <Div>
          <InfoRow header="Общий бюджет">
            3000 р.
          </InfoRow>
        </Div>
      </Group>
      <Group header={<Header mode="secondary">Информация о пользователе</Header>}>
        <List>
          <Cell>
            <InfoRow header="Дата рождения">
              30 января 1993
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow header="Родной город">
              Ереван
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow header="Место работы">
              Команда ВКонтакте
            </InfoRow>
          </Cell>
        </List>
      </Group>
    </Panel>
  </View>
```
