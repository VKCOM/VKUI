Компонент для отрисовки кнопок в шапке панели. Внутрь компонента передается либо [иконка](https://vkcom.github.io/icons/),
либо текст. Текстовые кнопки чаще всего используются в iOS, но есть исключения для Android. Обратите внимание, что для `compact`-режима необходимо использовать кнопки размера `24`, а для `regular` размера `28` (возможно, будет полезен [AdaptiveIconRenderer](#!/AdaptiveIconRenderer)).

Кнопки могут быть переданы в `before` или `after` компонента `PanelHeader`:

```jsx static
<PanelHeader
  before={
    <PanelHeaderButton>
      <Icon28Notifications />
    </PanelHeaderButton>
  }
  after={
    <PanelHeaderButton>
      <Icon28SettingsOutline />
    </PanelHeaderButton>
  }
/>
```

Если нужно несколько кнопок справа или слева, то используем `React.Fragment`:

```jsx static
<PanelHeader
  after={
    <React.Fragment>
      <PanelHeaderButton>
        <Icon28SettingsOutline />
      </PanelHeaderButton>
      <PanelHeaderButton>
        <Icon28Notifications />
      </PanelHeaderButton>
    </React.Fragment>
  }
/>
```

## Пресеты

### PanelHeaderBack

Этот компонент используется для показа кнопки назад в панелях в рамках одного `View`. Внутри инкапсулирована логика показа нужной иконки для платформы.

```jsx static
<PanelHeader before={<PanelHeaderBack onClick={this.props.onBackClick} />}>
  Заголовок панели
</PanelHeader>
```

### PanelHeaderClose

Этот компонент используется для показа кнопки "Отмена" в модальных окнах для закрытия текущего `View` в рамках `Root`. На iOS будет показан текст, передаваемый как `children`, на Android - `<Icon28CancelOutline />` или `<Icon24CancelOutline />`:

```jsx static
<PanelHeader before={<PanelHeaderClose onClick={this.props.onCloseClick} />}>
  Заголовок модального окна
</PanelHeader>
```

### PanelHeaderEdit

Компонент для отрисовки кнопки **Редактировать** в шапке. Принимает свойство `isActive`, которое определяет состояние кнопки (включен ли режим редактирования).

```jsx static
<PanelHeader after={<PanelHeaderEdit onClick={this.props.onEdit}>Готово</PanelHeaderSubmit>}>
  Заголовок модального окна
</PanelHeader>;
```

### PanelHeaderSubmit

Этот компонент используется для показа кнопки "Готово" в модальных окнах для закрытия текущего `View` в рамках `Root` и сохранения какого-либо результата. На iOS будет показан текст, передаваемый как `children`, на Android - `<Icon28DoneOutline />` или `<Icon24DoneOutline />`:

```jsx static
<PanelHeader after={<PanelHeaderSubmit onClick={this.props.onSubmit}>Готово</PanelHeaderSubmit>}>
  Заголовок модального окна
</PanelHeader>
```
