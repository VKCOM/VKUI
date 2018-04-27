VKUI – библиотека React компонентов, с помощью которой можно создавать web-приложения, дизайн которых будет повторять
дизайн мобильных клиентов (iOS, Android).

Каждое vkui-приложение – это набор экранов. Есть два типа переходов между экранами:

### Переход между панелями

Panel – это компонент, в который передается children, видимый пользователю. Компонент View – это набор таких панелей. Пример:

```jsx static
  <View activePanel="greetings">
    <Panel id="greetings">
      {* panel content *}
    </Panel>
    <Panel id="form">
      {* panel content *}
    </Panel>
    <Panel id="finish">
      {* panel content *}  
    </Panel>
  </View>
```

В компонент View передается коллекция Panel. Свойство activePanel отвечает за то, какая Panel должна быть показана. [Демо](#view).

### Переход между модальными окнами

В каждом приложении есть какой-то основной пользовательский сценарий. И есть ответвления: check user action, поиск пользователя и т.д.
Чтобы как-то отделить ветки от основого сценария, существуют модальные окна. Пример:

```jsx static
  <Root activeView="main">
    <View id="main">
      {* main flow *}
    </View>
    <View id="users-search">
      {* modal window for users search *}
    </View>
    <View id="check-user-actions">
      {* modal window for check user actions *}  
    </View>
  </Root>
```

В компонент Root передается коллекция View, в каждой из которых содержится набор Panel. Свойство
activeView отвечает за то, какая View должна быть показана. [Демо](#root).
