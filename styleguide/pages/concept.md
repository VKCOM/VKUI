VKUI – библиотека React компонентов, с помощью которой можно создавать web-приложения, дизайн которых будет повторять
дизайн мобильны клиентов (iOS, Android).

Каждое vkui-приложение – это набор экранов. Есть два типа переходов между экранами:

### Переход между панелями

Панель ScrollView – это комопонент, в который передается children, видимый пользователю. Компонент View – это набор таких панелей. Пример:

```jsx static
  <View activePanel="greetings">
    <ScrollView id="greetings">
      {* panel content *}
    </ScrollView>
    <ScrollView id="form">
      {* panel content *}
    </ScrollView>
    <ScrollView id="finish">
      {* panel content *}  
    </ScrollView>
  </View>
```

В компонент View передается коллекция ScrollView. Свойство
activePanel отвечает за то, какая ScrollView должна быть показана. [Демо](#view).

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

В компонент Root передается коллекция View, в каждой из которых содержится набор ScrollView. Свойство
activeView отвечает за то, какая View должна быть показана. [Демо](#root).
