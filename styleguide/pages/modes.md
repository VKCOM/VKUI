### `full`

При `full` режиме, VKUI полностью контролирует страницу и root-элемент должен находиться в `<body>`. В этом режиме, VKUI так же может добавить свои классы на html, body и #root. Пример того как может выглядеть html после подключения vkui в `full` режиме:
```html
<html class="vkui">
  ...
  <body>
    <div id="root" class="vkui__root">
      <!-- здесь рендерится vkui -->
    </div>
  </body>
</html>
```

**Важно:** В `full` режиме, в мета теге `viewport` должно обязательно быть правило `viewport-fit=cover`. Это нужно для корректного расчитывания отступов на определённых устройствах, например, на iPhone. Прочитать подробнее [можно тут](https://css-tricks.com/the-notch-and-css/).

При работе с SSR нужно изначально добавить классы `vkui` тегу `html` и `vkui__root` корневому контейнеру, чтобы избежать изменения стилей после гидратации.

### `embedded`

В `embedded` режиме, VKUI приложение подключается не на всю страницу, а в определённый контейнер. Этот контейнер становится рутом приложения. Так как в этом случае всё равно подключается приложение полностью, вместе со всеми лаяутами, то на рут добавляется свойство `transform: translate3d(0, 0, 0)`, что бы не выпускать fixed элементы за его пределы. Так же, как и с `full` режимом, VKUI добавит свои классы на рут-элемент.

Пример получившейся разметки при `embedded` режиме (VKUI моунтится в `#some-container`):
```html
<html>
  ...
  <body>
    <div>
      ...
      <div id="some-container" class="vkui__root vkui__root--embedded">
        <!-- здесь рендерится vkui -->
      </div>
      ...
    </div>
  </body>
</html>
```

**Важно:** В режиме `embedded`, `AppRoot` компоненту нужно указать свойство `embedded`: `<AppRoot embedded>`.

**new** Чтобы отключить css-классы без префиксов (как `.Button`), которые могут конфликтовать с классами основного приложения, используйте `<AppRoot noLegacyClasses>`. В таком режиме на элементах vkui классы вида `class="vkuiButton vkuiButton--primary"`.

### Режимы скролла

Навигационные компоненты VKUI — `Root, View, Panel, Epic` — запоминают скролл экрана и восстанавливают его при возвращении. embedded-приложения поддерживают два режима скролла:
- `global` (по умолчанию) — VKUI-приложение скроллится вместе со страницей.
- `contain` — VKUI-приложние живет в отдельной зоне и скроллится независимо внутри `AppRoot` (например, в модалке).
Режимы переключают через `<AppRoot scroll="...">`:

```jsx { "props": { "autoLayout": "none", "integration": "embedded", "containerStyle": { "height": "auto" }, "config": { "transitionMotionEnabled": false } } }
const [activePanel, setPanel] = useState('main');
const [activeModalPanel, setModalPanel] = useState('gallery');
const [hasModal, showModal] = useState(false);
console.log(hasModal);

<>
<div>
  <AppRoot embedded noLegacyClasses scroll="global">
    <View activePanel={activePanel}>
      <Panel id="main">
        <PanelHeader>vkui embedded</PanelHeader>
        <Group>
          <Placeholder
            icon={<Icon56UsersOutline />}
            style={{ minHeight: '110vh' }}
            action={<Button size="m" onClick={() => showModal(true)}>Хочу модалку</Button>}
          >
            Это vkui-приложение в контентной зоне скроллится вместе с body.
          </Placeholder>
          <CellButton onClick={() => setPanel('deep-main')}>Второй экран</CellButton>
        </Group>
      </Panel>

      <Panel id="deep-main">
        <PanelHeader left={<PanelHeaderBack onClick={() => setPanel('main')} />}>
          Второй экран
        </PanelHeader>
        <Group>
          <Placeholder>Ничего интересного</Placeholder>
        </Group>
      </Panel>
    </View>
  </AppRoot>
</div>
{ hasModal && (
  <div style={{ position: 'fixed', boxSizing: 'border-box', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', padding: '30px' }}>
    <div style={{ height: '100%', borderRadius: '8px' }}>
      <AppRoot embedded scroll="contain" noLegacyClasses>
        <View activePanel={activeModalPanel}>
          <Panel id="gallery">
            <PanelHeader
              right={<PanelHeaderButton onClick={() => showModal(false)}><Icon24Dismiss/></PanelHeaderButton>}
            >Модалка</PanelHeader>
            <Group>
              <Placeholder
                icon={<Icon56FlipPortraitOutline />}
                style={{ minHeight: '100vh' }}
                action={<Button size="m" onClick={() => setModalPanel('secondary')}>Глубже</Button>}
              >
                Это другое приложение, и оно скроллится внутри модалки
              </Placeholder>
            </Group>
          </Panel>

          <Panel id="secondary">
            <PanelHeader left={<PanelHeaderBack onClick={() => setModalPanel('gallery')} />}>
              Вы спите
            </PanelHeader>
            <Group>
              <Placeholder icon={<Icon56GhostOutline />}>
                Тут мужики на снегоходах катаются
              </Placeholder>
            </Group>
          </Panel>
        </View>
      </AppRoot>
    </div>
  </div>
)}
</>
```


### `partial`

`partial` режим предназначен для ситуаций, когда нужно использовать VKUI компоненты без всего лаяута VKUI. Этот режим отличается тем, что нужно вручную добавить класс `.vkui__root` на какой-то из контейнеров, а потом использовать VKUI компоненты где-то внутри него.

```html
<html>
  ...
  <body>
    <div>
      ...
      <div id="top-container" class="vkui__root">
        <div>
          ...
            <!-- здесь рендерится, например, Button -->
          ...
        </div>
      </div>
      ...
    </div>
  </body>
</html>
```

**Важно:** В режиме `partial`, `AppRoot` компонент не используется.

### Наследование темы

__Advanced__ Если ваше приложение само определяет цвета через css-переменные аналогично [https://github.com/VKCOM/VKUI/blob/master/package.json](bright_light.css), используйте `<ConfigProvider theme="inherit">`, а стили подключайте через `import '@vkontakte/vkui/components.css'`.
