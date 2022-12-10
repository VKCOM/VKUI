Этот компонент - обёртка над `<Spinner />` с заданными отступами и размером. Удобно использовать его во время загрузки данных.

```jsx static
import { PanelSpinner } from '@vkontakte/vkui';

<Panel>
  <PanelHeader before={<PanelHeaderBack />}>Заголовок панели</PanelHeader>

  {loading ? (
    <PanelSpinner />
  ) : (
    <Group header={<Header mode="secondary">Информация</Header>}>...</Group>
  )}
</Panel>;
```
