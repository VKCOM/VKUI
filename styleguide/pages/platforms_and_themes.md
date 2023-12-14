Как уже было сказано ранее, **VKUI** может мимикрировать под дизайны разных платформ. Благодаря этой
особенности, у вас есть возможность расширять функционал интерфейсами, которые неотличимы от нативных
разделов.

## Содержание

- <a href={{anchor}}>Платформы</a>
- <a href={{anchor}}>Темы</a>
  - <a href={{anchor}}>@vkontakte/vkui-tokens</a>
  - <a href={{anchor}}>Режимы</a>
  - <a href={{anchor}}>Переопределение темы</a>

## Платформы

На данный момент поддерживаются 2 платформы — `android` и `ios`. Также есть `vkcom`, но она, начиная
с **VKUI v6**, считается устаревшей (см. <a href={{anchor}}>О `vkcom`</a>).

Передавать платформу в `ConfigProvider` необязательно, т.к. она по умолчанию определяется
автоматически.

Для ручного определения, достаточно передать в компонент [`ConfigProvider`](https://vkcom.github.io/VKUI/#/ConfigProvider)
свойство `platform` с нужной платформой. Пример:

```jsx static
<ConfigProvider platform="ios">
  <AdaptivityProvider>
    <AppRoot>
      <SimpleCell>Эта ячейка будет иметь поведение и стилизация как в iOS</SimpleCell>
    </AppRoot>
  </AdaptivityProvider>
</ConfigProvider>
```

Или, если вам необходимо переопределить платформу точечно для отдельных компонентов приложения, то
это можно сделать через `PlatformProvider`.

```jsx static
<PlatformProvider value="ios">
  <Snackbar action="Поделиться">Поделиться</Snackbar>
</PlatformProvider>
```

Чтобы получить значение текущей платформы используйте хук `usePlatform` или HOC `withPlatform`.
Подробнее об этих инструментах можно познакомиться на странице [Утилиты](https://vkcom.github.io/VKUI/#/Utils).

<br/>

### О `vkcom`

Такое название платформа имеет по историческим причинам и используется командой ВКонтакте.

Нужно иметь ввиду, что она не предназначена для адаптивного интерфейса. Используйте её только в том
случае, если ваше приложение встроено в [vk.com](https://vk.com).

<br/><br/><hr/><br/>

## Темы

Тема в библиотеке представляет из себя набор [дизайн токенов](https://foundation.mozilla.org/en/docs/design/websites/design-tokens/)
в виде [CSS переменных](https://developer.mozilla.org/en-US/docs/Web/CSS/--*). Вот как это может
выглядеть:

```css static
.SomeComponent {
  color: var(--vkui--color_text_primary);
  background: var(--vkui--color_background_content);
}
```

Каждая тема обычно поддерживает как <u title='англ. "light"'>светлый</u>, так и
<u title='англ. "dark"'>тёмный</u> режим (см. <a href="{{anchor}}">Режимы</a>).

<br/>

### [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens)

**VKUI** использует пакет `@vkontakte/vkui-tokens`, который предоставляет готовые наборы **дизайн токенов**.

Каждый набор объявлен в классе формата `vkui--<themeName>--<appearance>`. На примере светлой темы
с названием `vkBase` класс будет выглядеть так – `vkui--vkBase--light` ([ссылка на сам CSS файл](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css)).
Подобный класс выставляется на контейнер приложения.

> В **VKUI** контейнер зависит от свойства `mode` в [AppRoot](#/AppRoot).

В стили библиотеки, которые подключаются через `import '@vkontakte/vkui/dist/vkui.css'`, встроены 3
темы в зависимости от платформы и режима:

- `android` (используется по умолчанию)
  - `light` – `vkBase` ([ссылка на CSS файл](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkBase/cssVars/declarations/onlyVariablesLocal.css))
  - `dark` – `vkBaseDark` ([ссылка на CSS файл](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkBaseDark/cssVars/declarations/onlyVariablesLocal.css))
- `ios`
  - `light` – `vkIOS` ([ссылка на CSS файл](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkIOS/cssVars/declarations/onlyVariablesLocal.css))
  - `dark` – `vkIOSDark` ([ссылка на CSS файл](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkIOSDark/cssVars/declarations/onlyVariablesLocal.css))
- `vkcom` (см. <a href={{anchor}}>О `vkcom`</a>)
  - `light` – `vkCom` ([ссылка на CSS файл](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkCom/cssVars/declarations/onlyVariablesLocal.css))
  - `dark` – `vkComDark` ([ссылка на CSS файл](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css))

<br/>

### Режимы

За <u title='англ. "light"'>светлый</u> и <u title='англ. "dark"'>тёмный</u> режим отвечает свойство
`appearance`, и также как `platform`, по умолчанию, определяется автоматически за счёт CSS медиа
выражения [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

Ручное определение будет выглядеть так:

```jsx static
import { ConfigProvider, AdaptivityProvider, AppRoot, SimpleCell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

ReactDOM.render(
  <ConfigProvider appearance="dark">
    <AdaptivityProvider>
      <AppRoot>
        <SimpleCell>Темны темно</SimpleCell>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>,
  root,
);
```

Или, если вам необходимо переопределить режим для отдельных компонентов приложения, то это можно
сделать через `AppearanceProvider`.

```jsx static
<AppearanceProvider value="dark">
  <Snackbar action="Поделиться">Поделиться</Snackbar>
</AppearanceProvider>
```

Чтобы получить значение текущего режима используйте хук `useAppearance`. Может пригодиться для
замены изображений на инвертированную версию в темных темах. Пример:

```jsx static
const appearance = useAppearance();
<Div>{appearance === 'light' ? 'Out of the blue' : 'And into the black'}</Div>;
```

### Переопределение темы

Про использование своей темы смотрите на странице [Кастомизация](#/Customize).
