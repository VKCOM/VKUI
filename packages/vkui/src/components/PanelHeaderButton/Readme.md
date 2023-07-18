Компонент для отрисовки кнопок в шапке панели. Внутрь компонента передается либо [иконка](https://vkcom.github.io/icons/),
либо текст. Текстовые кнопки чаще всего используются в iOS, но есть исключения для Android.

Кнопки могут быть переданы в `before` или `after` компонента `PanelHeader`:

```jsx static
import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import { Icon28Notifications, Icon28SettingsOutline } from '@vkontakte/icons';

<PanelHeader
  before={
    <PanelHeaderButton>
      <Icon28Notifications />
    </PanelHeaderButton>
  }
  after={
    <PanelHeaderButton>
      <Icon28SettingsOutline />
    </PanelHeaderButton>
  }
/>;
```

Если нужно несколько кнопок справа или слева, то используем `React.Fragment`:

```jsx static
import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import { Icon28SettingsOutline, Icon28Notifications } from '@vkontakte/icons';

<PanelHeader
  after={
    <React.Fragment>
      <PanelHeaderButton>
        <Icon28SettingsOutline />
      </PanelHeaderButton>
      <PanelHeaderButton>
        <Icon28Notifications />
      </PanelHeaderButton>
    </React.Fragment>
  }
/>;
```

<!--TODO [>=6]: удалить информацию про VK Mini Apps-->

**VK Mini Apps**

Если вы разрабатываете приложение на платформе [VK Mini Apps](https://vk.com/vkappsdev), то вам
будет недоступен слот `after`, т.к. на их месте отображаются нативные кнопки для управления
приложением.
