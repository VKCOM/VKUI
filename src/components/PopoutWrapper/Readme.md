Компонент-обертка для отрисовки всплывающих окон с затемнением фона. Используется внутри `Alert`, `ActionSheet`
и `ScreenSpinner`. Свойства `v` и `h` служат для удобного позиционирования контента. Пример:

```jsx static
import { Popout } from '@vkontakte/vkui';

<PopoutWrapper v="center" h="center">
  Some content
</PopoutWrapper>
```

Все всплывающие окна передаются в свойство `popout` компонентов `View` или `Root`.
