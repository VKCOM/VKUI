`Tooltip` – это **экспериментальный** компонент для отрисовки подсказки, как правило в случаях, когда пользователю
хочется представить новый функционал. Это достаточно сложный с точки зрения управления компонент, поэтому он
требует подробной документации.

### Концепция
Этот тултип служит для ознакомительных целей. То есть показывать его надо один раз, запоминая факт показа между
сессиями. Рекомендуется показывать тултип сразу после того, как нуждающийся в нем элемент появился в зоне видимости.
Это значит, что если, например, до элемента нужно скроллить, то показывать тултип нужно не сразу при попадании
на страницу, а именно в момент, когда пользователь доскроллил до элемента.

> **Важно** 
>
>На странице не может быть два одновременно показанных тултипа. Они всегда должны показываться
последовательно: следующий показывается при закрытии текущего и так до конца.


### API

Если хочется снабдить какой-то элемент интерфейса подсказкой, достаточно просто «обернуть» его тултипом:
``` jsx static
import { Tooltip, Button } from '@vkontakte/vkui';

<Tooltip text="Обновлённый раздел поможет найти друзей">
  <Button>Друзья</Button>
</Tooltip>
```
О возможностях тултипа можно прочитать в описании свойств и методов.

```jsx
  class Example extends React.Component {

    constructor () {
      this.state = {
        tooltip: true,
        tooltip2: true,
        tooltip3: false,
        activePanel: 'tooltip',
      }
    }

    render () {
      return (
        <View activePanel={this.state.activePanel}>

          <Panel id="tooltip">
            <PanelHeader>Tooltip</PanelHeader>
            <Group>
              <List>
                <Cell>Музыка</Cell>
                <Cell>Видео</Cell>
                <Cell>Игры</Cell>
                <Cell>Закладки</Cell>
                <Cell>Документы</Cell>
                <Cell>Денежные переводы</Cell>
              </List>
            </Group>
            <Group>
              <Tooltip
                mode="light"
                text="У нас тут brand new функционал подвезли. Зацените!"
                isShown={this.state.tooltip}
                onClose={() => this.setState({ tooltip: false })}
                offsetX={10}
              >
                <Cell onClick={() => this.setState({ activePanel: 'tooltip2' })}>VK Pay</Cell>
              </Tooltip>
            </Group>
          </Panel>

          <Panel id="tooltip2">
            <PanelHeader
              left={
                <PanelHeaderButton onClick={() => this.setState({ activePanel: 'tooltip' })}>
                  {(this.props.platform === ANDROID || this.props.platform === VKCOM) ? <Icon24Back/> : <Icon28ChevronBack/>}
                </PanelHeaderButton>
              }
              right={
                <PanelHeaderButton>
                  <Tooltip
                    isShown={this.state.tooltip2}
                    onClose={() => this.setState({ tooltip2: false, tooltip3: true })}
                    cornerOffset={-10}
                    offsetX={7}
                    text="Обновлённый раздел поможет найти друзей"
                    header="Рекомендации друзей"
                  >
                    <Icon24Add/>
                  </Tooltip>
                </PanelHeaderButton>
              }
            >
              Tooltip
            </PanelHeader>
            <Group>
              <List>
                <Cell before={
                  <Tooltip
                    text="Теперь у нас появились аватарки в списках. Правда круто?"
                    isShown={this.state.tooltip3}
                    onClose={() => this.setState({ tooltip3: false })}
                    cornerOffset={-6}
                  >
                    <Avatar />
                  </Tooltip>}
                  description="Веб-сайт"
                >Команда ВКонтакте</Cell>
                <Cell before={<Avatar />} description="Музыкант">Robbie Williams</Cell>
                <Cell before={<Avatar />} description="Издательский дом">ПостНаука</Cell>
                <Cell before={<Avatar />} description="Издательский дом">ПостНаука</Cell>
                <Cell before={<Avatar />} description="Издательский дом">ПостНаука</Cell>
                <Cell before={<Avatar />} description="Издательский дом">ПостНаука</Cell>
                <Cell before={<Avatar />} description="Издательский дом">ПостНаука</Cell>
              </List>
            </Group>
          </Panel>

        </View>
      )
    }
  }

  const ExampleWithPlatform = withPlatform(Example);

  <ExampleWithPlatform />
```

## TooltipContainer

Чтобы использовать тултип без `Panel` / `PanelHeader` / `FixedLayout`:
- в скроллящемся контейнере — замените какой-нибудь элемент, внутри которого нет скролла, на `<TooltipContainer>` и добавьте ему `position: relative` (или другую не-static).
- внутри `position: fixed` — `<TooltipContainer fixed>`

```jsx { "props": { "layout": false, "frame": true } }
<>
  <TooltipContainer style={{ minHeight: '120vh' }}>
    <Tooltip text="Я скроллюсь">
      <div style={{ display: 'inline-block' }}>
        <Avatar />
      </div>
    </Tooltip>
    <Tooltip text="Двигаем стрелочку" cornerOffset={20}>
      <div style={{ display: 'inline-block', marginLeft: 100 }}>
        <Avatar />
      </div>
    </Tooltip>
  </TooltipContainer>
  <TooltipContainer
    fixed
    style={{ 
      minHeight: '30px', 
      border: '1px solid', 
      margin: '100px 100px 0', 
      position: 'relative', 
      background: 'var(--background_content)',
      zIndex: 1,
    }}
  >
    <Tooltip text="Я вылезаю (fixed)">
      <div style={{ display: 'inline-block' }}>
        <Avatar />
      </div>
    </Tooltip>
  </TooltipContainer>
  <TooltipContainer style={{ 
    minHeight: '100vh', 
    border: '1px solid', 
    margin: '64px 100px 100px', 
    position: 'relative', 
    background: 'var(--background_content)',
    zIndex: 1,
  }}>
    <Tooltip text="Я прилип слева">
      <div style={{ display: 'inline-block', position: 'absolute', right: 0 }}>
        <Avatar />
      </div>
    </Tooltip>
    <Tooltip text="Я прилип справа">
      <div style={{ display: 'inline-block' }}>
        <Avatar />
      </div>
    </Tooltip>
    <Tooltip text="Я прилип слева">
      <div style={{ display: 'inline-block', position: 'absolute', left: 0, bottom: 0 }}>
        <Avatar />
      </div>
    </Tooltip>
    <Tooltip text="Я прилип справа">
      <div style={{ display: 'inline-block', position: 'absolute', right: 0, bottom: 0 }}>
        <Avatar />
      </div>
    </Tooltip>
    <Tooltip text="Я по центру 😎">
      <div style={{ display: 'inline-block', position: 'absolute', left: '50%', top: '50%', transform: 'translate(50%, 50%)' }}>
        <Avatar />
      </div>
    </Tooltip>
  </TooltipContainer>
  <div style={{ height: '100vh' }}></div>
  <TooltipContainer fixed style={{ position: 'fixed', bottom: 0, width: '100%' }}>
    <Tooltip text="Я прибит к низу">
      <div style={{ display: 'inline-block' }}>
        <Avatar />
      </div>
    </Tooltip>
  </TooltipContainer>
</>
```
