Этот компонент - обёртка над `<Spinner />` с высотой 100 пикселей. Удобно использовать его во время загрузки данных.

```js static
import PanelSpinner from '@vkontakte/vkui/dist/components/PanelSpinner/PanelSpinner';

<Panel>
  <PanelHeader left={<PanelHeaderBack />}>Заголовок панели</PanelHeader>

  {loading ? <PanelSpinner /> : <Group title="Информация">...</Group}
</Panel>
```