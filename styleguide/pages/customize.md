> Прежде чем изучать этот документ, убедитесь, что вы были ознакомлены со страницей [Платформы и темы](#/PlatformsAndThemes).

<hr/>

> ⚠ Дисклеймер
>
> Внутренняя реализация компонентов, включая их классы — не публичное API **VKUI** и может
> измениться в любой момент без предупреждения. Не привязывайтесь к ней, если хотите сохранить
> возможность без проблем обновляться на новые версии библиотеки.

Для возможности переопределения цветов, размеров, отступов, типографии, скруглений и теней, **VKUI**
предоставляет два API:

1. передача свойств в сами компоненты (например, `size`, `appearance`, `borderRadius` и т.п.);
2. переопределение значений CSS переменных из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens).

Использование первого способа предполагает изучение страниц нужного компонента, поэтому здесь мы
рассмотрим второй способ.

## Использование своей темы

В первую очередь, необходимо поправить импорт стилей:

```diff
- import '@vkontakte/vkui/dist/vkui.css';
+ import '@vkontakte/vkui/dist/components.css';
```

Так мы отключим подключение тем по умолчанию из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens).

Далее ищем в [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens) иную желаемую тему или
определяем свою. CSS класс, где будут собраны токены, необходимо будет передать в свойство
`tokensClassNames` компонента [ConfigProvider](#/ConfigProvider). Переопределить тему можно либо
<a href="{{anchor}}">глобально</a>, либо <a href="{{anchor}}">для конкретной платформы</a>.

### Глобально

Если выбрали что-то из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens):

```jsx static
import { ConfigProvider, AppRoot, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
import '@vkontakte/vkui-tokens/themes/paradigmBase/cssVars/declarations/onlyVariables.css';
import '@vkontakte/vkui-tokens/themes/paradigmBaseDark/cssVars/declarations/onlyVariablesLocal.css';

ReactDOM.render(
  <ConfigProvider
    tokensClassNames={{
      light: 'vkui--paradigmBase--light',
      dark: 'vkui--paradigmBase--dark',
    }}
  >
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root,
);
```

Или, если хотим задать свою тему:

```jsx static
import { ConfigProvider, AppRoot, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
// тут предполагается, что светлый и тёмный режимы определены в одном файле
import './myCustomThemeTokens.css';

ReactDOM.render(
  <ConfigProvider
    tokensClassNames={{
      light: 'myCustomThemeTokens--light',
      dark: 'myCustomThemeTokens--dark',
    }}
  >
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root,
);
```

### Для конкретной платформы

Если выбрали что-то из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens):

```jsx static
import { ConfigProvider, AppRoot, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
import '@vkontakte/vkui-tokens/themes/paradigmBase/cssVars/declarations/onlyVariables.css';
import '@vkontakte/vkui-tokens/themes/paradigmBaseDark/cssVars/declarations/onlyVariablesLocal.css';

// раз iOS мы не затрагиваем, то необходимо подключить стили по умолчанию
import '@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariables.css';
import '@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css';

ReactDOM.render(
  <ConfigProvider
    tokensClassNames={{
      android: {
        light: 'myCustomThemeTokens--appearance-light',
        dark: 'myCustomThemeTokens--appearance-dark',
      },
    }}
  >
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root,
);
```

Или, если хотим задать свою тему:

```jsx static
import { ConfigProvider, AppRoot, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
// тут предполагается, что светлый и тёмный режимы определены в одном файле
import './myCustomThemeTokens.css';

// раз iOS мы не затрагиваем, то необходимо подключить стили по умолчанию
import '@vkontakte/vkui-tokens/themes/myCustomIOS/cssVars/declarations/onlyVariables.css';
import '@vkontakte/vkui-tokens/themes/myCustomIOSDark/cssVars/declarations/onlyVariablesLocal.css';

ReactDOM.render(
  <ConfigProvider
    tokensClassNames={{
      android: {
        light: 'myCustomThemeTokens--appearance-light',
        dark: 'myCustomThemeTokens--appearance-dark',
      },
    }}
  >
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root,
);
```
