Компонент для отрисовки кнопок в шапке панели. Внутрь компонента передается либо [иконка](https://vkcom.github.io/icons/),
либо текст. Текстовые кнопки чаще всего используются в iOS, но есть исключения для Android.

Кнопки могут быть переданы в `left` или `right` компонента `PanelHeader`:

```jsx static
import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';

<PanelHeader
  left={<PanelHeaderButton><Icon28Notifications/></PanelHeaderButton>}
  right={<PanelHeaderButton><Icon28SettingsOutline/></PanelHeaderButton>}
/>
```

Если нужно несколько кнопок справа или слева, то используем `React.Fragment`:

```jsx static
import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';

<PanelHeader
  right={
    <React.Fragment>
      <PanelHeaderButton><Icon28SettingsOutline /></PanelHeaderButton>
      <PanelHeaderButton><Icon28Notifications /></PanelHeaderButton>
    </React.Fragment>
  }
/>
```

**VK Mini Apps**

Если вы разрабатываете приложение на платформе [VK Mini Apps](https://vk.com/vkappsdev), то вам будут недоступны
кнопки справа, так как на их месте отображаются нативные кнопки для управления приложением.
