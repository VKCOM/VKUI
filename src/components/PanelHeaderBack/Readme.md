Этот компонент используется для показа кнопки назад в панелях в рамках одного `View`. Внутри инкапсулирована логика показа нужной иконки для платформы.

```jsx static
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

<PanelHeader left={<PanelHeaderBack onClick={this.props.onBackClick} />}>
  Заголовок панели
</PanelHeader>
```