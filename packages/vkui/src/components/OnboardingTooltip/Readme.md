`OnboardingTooltip` – это компонент для отрисовки подсказки, как правило в случаях, когда
пользователю хочется представить новый функционал. Это достаточно сложный с точки зрения управления
компонент, поэтому он требует подробной документации.

Для показа тултипа по ховеру воспользуйтесь [`Tooltip`](#/Tooltip).

### Концепция

Этот тултип служит для ознакомительных целей. То есть показывать его надо один раз, запоминая факт показа между
сессиями. Рекомендуется показывать тултип сразу после того, как нуждающийся в нем элемент появился в зоне видимости.
Это значит, что если, например, до элемента нужно скроллить, то показывать тултип нужно не сразу при попадании
на страницу, а именно в момент, когда пользователь доскроллил до элемента.

> **Важно**
>
> На странице не может быть два одновременно показанных тултипа. Они всегда должны показываться
> последовательно: следующий показывается при закрытии текущего и так до конца.

### API

Если хочется снабдить какой-то элемент интерфейса подсказкой, достаточно просто «обернуть» его тултипом:

```jsx static
import { OnboardingTooltip, Button } from '@vkontakte/vkui';

<OnboardingTooltip text="Обновлённый раздел поможет найти друзей">
  <Button>Друзья</Button>
</OnboardingTooltip>;
```

О возможностях тултипа можно прочитать в описании свойств и методов.

```jsx
const Example = () => {
  const [tooltip, setTooltip] = React.useState(true);
  const [tooltip2, setTooltip2] = React.useState(true);
  const [tooltip3, setTooltip3] = React.useState(false);
  const [activePanel, setActivePanel] = React.useState('tooltip');

  return (
    <View activePanel={activePanel}>
      <Panel id="tooltip">
        <PanelHeader>OnboardingTooltip</PanelHeader>
        <Group>
          <List>
            <SimpleCell>Музыка</SimpleCell>
            <SimpleCell>Видео</SimpleCell>
            <SimpleCell>Игры</SimpleCell>
            <SimpleCell>Закладки</SimpleCell>
            <SimpleCell>Документы</SimpleCell>
            <SimpleCell>Денежные переводы</SimpleCell>
          </List>
        </Group>
        <Group>
          <OnboardingTooltip
            text="У нас тут brand new функционал подвезли. Зацените!"
            shown={tooltip}
            onClose={() => setTooltip(false)}
            offsetByMainAxis={8}
            offsetByCrossAxis={10}
          >
            <SimpleCell onClick={() => setActivePanel('tooltip2')}>VK Pay</SimpleCell>
          </OnboardingTooltip>
        </Group>
      </Panel>

      <Panel id="tooltip2">
        <PanelHeader
          before={
            <OnboardingTooltip
              shown={tooltip2}
              onClose={() => {
                setTooltip2(false);
                setTooltip3(true);
              }}
              text="Нажмите на кнопку, если хотите вернуться"
              header="Назад"
            >
              <PanelHeaderBack onClick={() => setActivePanel('tooltip')} />
            </OnboardingTooltip>
          }
        >
          OnboardingTooltip
        </PanelHeader>
        <Group>
          <List>
            <SimpleCell
              before={
                <OnboardingTooltip
                  text="Теперь у нас появились аватарки в списках. Правда круто?"
                  shown={tooltip3}
                  onClose={() => setTooltip3(false)}
                  arrowOffset={-6}
                >
                  <Avatar />
                </OnboardingTooltip>
              }
              subtitle="Веб-сайт"
            >
              Команда ВКонтакте
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Музыкант">
              Robbie Williams
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
            <SimpleCell before={<Avatar />} subtitle="Издательский дом">
              ПостНаука
            </SimpleCell>
          </List>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

## OnboardingTooltipContainer

Чтобы использовать тултип без [`Panel`](#/Panel), [`PanelHeader`](#/PanelHeader) или [`FixedLayout`](#/FixedLayout):

- в скроллящемся контейнере — замените какой-нибудь элемент, внутри которого нет скролла, на `<OnboardingTooltipContainer>` и добавьте ему `position: relative` (или другую не-static).
- внутри `position: fixed` — `<OnboardingTooltipContainer fixed>`

```jsx { "props": { "layout": false } }
<>
  <OnboardingTooltipContainer style={{ minHeight: '120vh' }}>
    <OnboardingTooltip text="Я скроллюсь">
      <div style={{ display: 'inline-block' }}>
        <Avatar />
      </div>
    </OnboardingTooltip>
    <OnboardingTooltip text="Двигаем стрелочку" arrowOffset={20}>
      <div style={{ display: 'inline-block', marginLeft: 100 }}>
        <Avatar />
      </div>
    </OnboardingTooltip>
  </OnboardingTooltipContainer>
  <OnboardingTooltipContainer
    fixed
    style={{
      minHeight: '30px',
      border: '1px solid',
      margin: '100px 100px 0',
      position: 'relative',
      background: 'var(--vkui--color_background_content)',
      zIndex: 1,
    }}
  >
    <OnboardingTooltip text="Я вылезаю (fixed)">
      <div style={{ display: 'inline-block' }}>
        <Avatar />
      </div>
    </OnboardingTooltip>
  </OnboardingTooltipContainer>
  <OnboardingTooltipContainer
    style={{
      minHeight: '100vh',
      border: '1px solid',
      margin: '64px 100px 100px',
      position: 'relative',
      background: 'var(--vkui--color_background_content)',
      zIndex: 1,
    }}
  >
    <OnboardingTooltip text="Я прилип слева">
      <div style={{ display: 'inline-block', position: 'absolute', right: 0 }}>
        <Avatar />
      </div>
    </OnboardingTooltip>
    <OnboardingTooltip text="Я прилип справа">
      <div style={{ display: 'inline-block' }}>
        <Avatar />
      </div>
    </OnboardingTooltip>
    <OnboardingTooltip text="Я прилип слева">
      <div
        style={{
          display: 'inline-block',
          position: 'absolute',
          left: 0,
          bottom: 0,
        }}
      >
        <Avatar />
      </div>
    </OnboardingTooltip>
    <OnboardingTooltip text="Я прилип справа">
      <div
        style={{
          display: 'inline-block',
          position: 'absolute',
          right: 0,
          bottom: 0,
        }}
      >
        <Avatar />
      </div>
    </OnboardingTooltip>
    <OnboardingTooltip text="Я по центру 😎">
      <div
        style={{
          display: 'inline-block',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(50%, 50%)',
        }}
      >
        <Avatar />
      </div>
    </OnboardingTooltip>
  </OnboardingTooltipContainer>
  <div style={{ height: '100vh' }}></div>
  <OnboardingTooltipContainer fixed style={{ position: 'fixed', bottom: 0, width: '100%' }}>
    <OnboardingTooltip text="Я прибит к низу">
      <div style={{ display: 'inline-block' }}>
        <Avatar />
      </div>
    </OnboardingTooltip>
  </OnboardingTooltipContainer>
</>
```

## Цветовые варианты

```jsx { "props": { "layout": false } }
<OnboardingTooltipContainer>
  <OnboardingTooltip placement="right" text={`appearance="accent"`} appearance="accent">
    <div style={{ width: 50, margin: 10 }}>
      <Avatar />
    </div>
  </OnboardingTooltip>
  <OnboardingTooltip placement="right" text={`appearance="neutral"`} appearance="neutral">
    <div style={{ width: 50, margin: 10 }}>
      <Avatar />
    </div>
  </OnboardingTooltip>
  <OnboardingTooltip placement="right" text={`appearance="white`} appearance="white">
    <div style={{ width: 50, margin: 10 }}>
      <Avatar />
    </div>
  </OnboardingTooltip>
  <OnboardingTooltip placement="right" text={`appearance="black"`} appearance="black">
    <div style={{ width: 50, margin: 10 }}>
      <Avatar />
    </div>
  </OnboardingTooltip>
  <OnboardingTooltip placement="right" text={`appearance="inversion"`} appearance="inversion">
    <div style={{ width: 50, margin: 10 }}>
      <Avatar />
    </div>
  </OnboardingTooltip>
</OnboardingTooltipContainer>
```

## Кастомная стрелка – `ArrowIcon`

> ⚠️ Для начала, следует ознакомиться с описанием параметра `ArrowIcon`.

```jsx { "props": { "layout": false, "adaptivity": true } }
const ARROW_HEIGHT = 11;

/**
 * @param {React.SVGAttributes<SVGSVGElement>} props
 */
const CustomIcon = (props) => {
  return (
    <svg
      width="80"
      height={ARROW_HEIGHT}
      viewBox={`0 0 80 ${ARROW_HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M40 0C33 5.5 20 10 0 10v1h80v-1C60 10 47 5.5 40 0Z" fill="currentColor" />
    </svg>
  );
};

const App = () => {
  return (
    <OnboardingTooltipContainer>
      <OnboardingTooltip
        text="У этого тултипа кастомная стрелка"
        arrowHeight={ARROW_HEIGHT}
        arrowPadding={6}
        ArrowIcon={CustomIcon}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Якорь
        </div>
      </OnboardingTooltip>
    </OnboardingTooltipContainer>
  );
};

<App />;
```
