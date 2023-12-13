> Скорей всего вам будет достаточно передать свой компонент в свойство `popout` компонента [`SplitLayout`](#/SplitLayout),
> который уже оборачивает в `PopoutWrapper`.
>
> Компоненты [`Alert`](#/Alert), [`ActionSheet`](#/ActionSheet)
> и [`ScreenSpinner`](#/ScreenSpinner) также уже используют этот компонент.
>
> Если всё же есть потребность использовать компонент отдельно, то ориентируетесь на пример ниже.

Компонент-обертка для отрисовки всплывающих окон с затемнением фона.

```jsx static
import { PopoutWrapper, useScrollLock } from '@vkontakte/vkui';

const App = () => {
  const [opened, setOpened] = React.useState(false);
  const popout = opened ? <PopoutWrapper>Some content</PopoutWrapper> : null;

  // Для улучшения UX, при открытии модального окна, стоит блокировать скролл страницы.
  // Иначе у пользователя может быть два скролла: один на модальном окне, второй за ним.
  useScrollLock(opened);

  return (
    <div>
      <h1>My Awesome App</h1>
      <label htmlFor="toggle">Toggle popout</label>
      <input id="toggle" checked={opened} onChange={(event) => setOpened(event.checked)} />
      {popout}
    </div>
  );
};
```
