Информационный блок. Используется для отрисовки некликабельных блоков с неизменяемым контентом (то есть без инпутов, слайдеров и т.п.)
Если таких блоков несколько и они объединены по смыслу, то рекомендуется оборачивать список в `Group` с указанием `header`.

```jsx
<View activePanel="info-row">
  <Panel id="info-row">
    <PanelHeader>InfoRow</PanelHeader>
    <Group>
      <SimpleCell>
        <InfoRow header="Общий бюджет">3000 р.</InfoRow>
      </SimpleCell>
    </Group>
    <Group header={<Header mode="secondary">Информация о пользователе</Header>}>
      <SimpleCell multiline>
        <InfoRow header="Дата рождения">30 января 1993</InfoRow>
      </SimpleCell>
      <SimpleCell>
        <InfoRow header="Родной город">Ереван</InfoRow>
      </SimpleCell>
      <SimpleCell>
        <InfoRow header="Место работы">Команда ВКонтакте</InfoRow>
      </SimpleCell>
    </Group>
  </Panel>
</View>
```
