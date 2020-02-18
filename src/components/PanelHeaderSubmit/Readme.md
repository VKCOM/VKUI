Этот компонент используется для показа кнопки "Готово" в модальных окнах для закрытия текущего `View` в рамках `Root` и сохранения какого-либо результата. На iOS будет показан текст, передаваемый как `children`, на Android - `<Icon28DoneOutline />`:

```jsx static
import { PanelHeaderSubmit } from '@vkontakte/vkui';

<PanelHeader right={<PanelHeaderSubmit onClick={this.props.onSubmit}>Готово</PanelHeaderSubmit>}>
  Заголовок модального окна
</PanelHeader>
```
