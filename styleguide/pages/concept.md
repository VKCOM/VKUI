Каждое VKUI-приложение – это набор экранов. Есть два типа переходов между экранами:

### Переход между панелями

Panel – это компонент, в который передается children, видимый пользователю. Компонент View – это набор таких панелей. Пример:

```jsx static
import { View, Panel } from '@vkontakte/vkui';

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

В компонент View передается коллекция Panel. Свойство activePanel отвечает за то, какая Panel должна быть показана. [Демо](https://vkcom.github.io/vkui-styleguide/#!/View).

### Переход между модальными окнами

В каждом приложении есть какой-то основной пользовательский сценарий. И есть ответвления: check user action, поиск пользователя и т.д.
Чтобы как-то отделить ветки от основого сценария, существуют модальные окна. Пример:

```jsx static
import { Root, View } from '@vkontakte/vkui';

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
activeView отвечает за то, какая View должна быть показана. [Демо](https://vkcom.github.io/vkui-styleguide/#!/Root).

### Еще раз :)
Структура любого VKUI-приложения должна выглядить так:

```jsx static
import { Root, View, Panel } from '@vkontakte/vkui';

<Root activeView="view">
  <View id="view" activePanel="panel">
    <Panel id="panel" />
  </View>
</Root>
```

**Важно:** эта структура должна быть постоянной. То есть нельзя на лету добавлять и удалять Panel или View. Нельзя так же
менять id у Panel или View. Структура – это *декларация* приложения. Единственный способ для перехода между Panel
в пределах View и View в пределах Root – это обновление свойств activePanel и activeView соответственно.
