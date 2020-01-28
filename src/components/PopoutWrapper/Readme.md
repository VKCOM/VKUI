Компонент-обертка для отрисовки всплывающих окон с затемнением фона. Используется внутри `Alert`, `ActionSheet`
и `ScreenSpinner`. Свойства `alignY` и `alignX` служат для удобного позиционирования контента. Пример:

```jsx static
import { PopoutWrapper } from '@vkontakte/vkui';

<PopoutWrapper alignY="center" alignX="center">
  Some content
</PopoutWrapper>
```

Все всплывающие окна передаются в свойство `popout` компонентов `View` или `Root`.
