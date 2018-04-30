Информационный блок. Используется для отрисовки некликабельных блоков с неизменяемым контентом (то есть без инпутов, слайдеров и т.п.)
Если таких блоков несколько и они объединены по смыслу, то рекомендуется оборачивать список в `<Group />` с указанием `title`.

```
  <View activePanel="info-row" header>
    <Panel header={{ title: 'InfoRow' }} id="info-row">
      <Group>
        <Pane>
          <InfoRow title="Общий бюджет">
            3000 р.
          </InfoRow>
        </Pane>
      </Group>
      <Group title="Информация о пользователе">
        <List>
          <ListItem>
            <InfoRow title="Дата рождения">
              30 января 1993
            </InfoRow>
          </ListItem>
          <ListItem>
            <InfoRow title="Родной город">
              Ереван
            </InfoRow>
          </ListItem>
          <ListItem>
            <InfoRow title="Место работы">
              Команда ВКонтакте
            </InfoRow>
          </ListItem>
        </List>
      </Group>  
    </Panel>
  </View>
```
