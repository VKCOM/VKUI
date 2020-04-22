`NavigationMenu` – контейнер для пунктов меню навигации

`header` — опциональный компонент для шапки меню

```jsx
  <NavigationMenu
    className="Main__menu"
    header={<NavHeader />}
  >
    <Cell expandable before={<Icon28PassportOutline/>} onClick={() => this.context.go(panels.PERSONAL)}>
      Личные данные
    </Cell>
    <Cell expandable before={<Icon28MoneyCircleOutline/>} onClick={() => this.context.go(panels.VKPAY)}>
      Платежи и VK Pay
    </Cell>
    <Cell expandable before={<Icon28HistoryForwardOutline/>} onClick={() => this.context.go(panels.SUBS)}>
      Подписки
    </Cell>
    <Cell expandable before={<Icon28ServicesOutline/>} onClick={() => this.context.go(panels.SERVICES)}>
      Сервисы и сайты
    </Cell>
  </NavigationMenu>
```
