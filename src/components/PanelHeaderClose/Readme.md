Этот компонент используется для показа кнопки "Отмена" в модальных окнах для закрытия текущего `View` в рамках `Root`. На iOS будет показан текст, передаваемый как `children`, на Android - `<Icon24Cancel />`:

```js static
import PanelHeaderClose from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';

<PanelHeader left={<PanelHeaderClose onClick={this.props.onCloseClick} />}>
  Заголовок модального окна
</PanelHeader>
```