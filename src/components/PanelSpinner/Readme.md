Этот компонент - обёртка над `<Spinner />` с заданными отступами и размером. Удобно использовать его во время загрузки данных.

```js static
import PanelSpinner from '@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner';

<Panel>
  <PanelHeader left={<PanelHeaderBack />}>Заголовок панели</PanelHeader>

  {loading ? <PanelSpinner /> : <Group title="Информация">...</Group}
</Panel>
```
