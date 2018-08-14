Информационный блок. Используется для отрисовки некликабельных блоков с неизменяемым контентом (то есть без инпутов, слайдеров и т.п.)
Если таких блоков несколько и они объединены по смыслу, то рекомендуется оборачивать список в Group с указанием title.

```
  <View activePanel="info-row">
    <Panel id="info-row">
      <PanelHeader>
        InfoRow
      </PanelHeader>
      <Group>
        <Div>
          <InfoRow title="Общий бюджет">
            3000 р.
          </InfoRow>
        </Div>
      </Group>
      <Group title="Информация о пользователе">
        <List>
          <Cell>
            <InfoRow title="Дата рождения">
              30 января 1993
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Родной город">
              Ереван
            </InfoRow>
          </Cell>
          <Cell>
            <InfoRow title="Место работы">
              Команда ВКонтакте
            </InfoRow>
          </Cell>
        </List>
      </Group>
    </Panel>
  </View>
```
