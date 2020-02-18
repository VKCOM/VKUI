Этот компонент используется для показа кнопки "Отмена" в модальных окнах для закрытия текущего `View` в рамках `Root`. На iOS будет показан текст, передаваемый как `children`, на Android - `<Icon28CancelOutline />`:

```jsx static
import { PanelHeaderClose } from '@vkontakte/vkui';

<PanelHeader left={<PanelHeaderClose onClick={this.props.onCloseClick} />}>
  Заголовок модального окна
</PanelHeader>
```
