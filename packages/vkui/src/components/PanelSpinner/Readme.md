Компонент-обёртка над [`<Spinner />`](https://vkcom.github.io/VKUI/#/Spinner) с заданными отступами и размером. Удобно использовать его во время загрузки данных.

### Цифровая доступность (a11y)

Чтобы уведомить о выполнении асинхронного процесса пользователей скринридеров, проставьте на контейнер, в котором выполняется процесс, метки [`aria-busy`](https://doka.guide/a11y/aria-busy/) и [`aria-live`](https://doka.guide/a11y/aria-live/).

Чтобы заменить текст, который прочитает скринридер, передайте его в `children`. Он будет скрыт визуально, но останется доступным для ассистивных технологий.

```jsx static
import { PanelSpinner } from '@vkontakte/vkui';

<Panel aria-live="polite" aria-busy={loading}>
  <PanelHeader before={<PanelHeaderBack />}>Заголовок панели</PanelHeader>

  {loading ? (
    <PanelSpinner>Панель загружается, пожалуйста, подождите...</PanelSpinner>
  ) : (
    <Group header={<Header mode="secondary">Информация</Header>}>...</Group>
  )}
</Panel>;
```
