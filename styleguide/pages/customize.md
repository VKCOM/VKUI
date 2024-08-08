> Прежде чем изучать этот документ, убедитесь, что вы были ознакомлены со страницей [Платформы и темы](#/PlatformsAndThemes).

<hr/>

> ⚠ Дисклеймер
>
> Внутренняя реализация компонентов, включая их классы — не публичное API **VKUI** и может
> измениться в любой момент без предупреждения. Не привязывайтесь к ней, если хотите сохранить
> возможность без проблем обновляться на новые версии библиотеки.

Чтобы переопределять цвета, размеры, отступы, типографию, скругления и тени, **VKUI** предоставляет
два API:

1. свойства отдельных компонентов (например, `size`, `appearance`, `borderRadius` и т.п.);
2. переопределение темы — или значений CSS-переменных из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens).

Здесь мы рассматриваем второй способ.

## Использование своей темы

В первую очередь вам нужно поправить импорт стилей:

```diff
- import '@vkontakte/vkui/dist/vkui.css';
+ import '@vkontakte/vkui/dist/components.css';
```

Так вы отключите подключение тем по умолчанию из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens).

Далее находите в [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens) нужную вам тему или
создаете свою. CSS-класс, под которым будут собраны токены, передайте в свойство `tokensClassNames`
компонента [ConfigProvider](#/ConfigProvider). Переопределить тему можно либо <a href="{{anchor}}">глобально</a>,
либо <a href="{{anchor}}">для конкретной платформы</a>.

### Глобально

Если выбрали тему из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens):

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

Если у вас своя тема:

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

Если выбрали тему из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens):

```jsx static
import { ConfigProvider, AppRoot, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
import '@vkontakte/vkui-tokens/themes/paradigmBase/cssVars/declarations/onlyVariables.css'; // базовая тема должна подключаться через `:root`, поэтому здесь импортируется `onlyVariables.css`, где токены навешиваются через псевдокласс `:root`
// @see https://unpkg.com/@vkontakte/vkui-tokens@4.48.0/themes/paradigmBase/cssVars/declarations/onlyVariables.css
import '@vkontakte/vkui-tokens/themes/paradigmBaseDark/cssVars/declarations/onlyVariablesLocal.css'; // остальные должны быть завязаны на CSS класс, поэтому здесь импортируется `onlyVariablesLocal.css` где токены навешиваются через класс темы `.vkui--paradigmBase--dark`.
// @see https://unpkg.com/@vkontakte/vkui-tokens@4.48.0/themes/paradigmBaseDark/cssVars/declarations/onlyVariablesLocal.css

// раз iOS мы не затрагиваем, то необходимо подключить стили по умолчанию
import '@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css';
import '@vkontakte/vkui-tokens/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css';

ReactDOM.render(
  <ConfigProvider
    tokensClassNames={{
      android: {
        light: 'vkui--paradigmBase--light',
        dark: 'vkui--paradigmBase--dark',
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

Если у вас своя тема:

```jsx static
import { ConfigProvider, AppRoot, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/components.css';
// тут предполагается, что светлый и тёмный режимы определены в одном файле
import './myCustomThemeTokens.css';

// раз iOS мы не затрагиваем, то необходимо подключить стили по умолчанию
import '@vkontakte/vkui-tokens/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css';
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
