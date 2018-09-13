`Tooltip` – это **экспериментальный** компонент для отрисовки подсказки, как правило в случаях, когда пользователю
хочется представить новый функционал. Это достаточно сложный с точки зрения управления компонент, поэтому он
требует подробной документации.

### Концепция
Этот тултип служит для ознакомительных целей. То есть показывать его надо один раз, запоминая факт показа между
сессиями. Рекомендуется показывать тултип сразу после того, как нуждающийся в нем элемент появился в зоне видимости.
Это значит, что если, например, до элемента нужно скроллить, то показывать тултип нужно не сразу при попадании
на страницу, а именно в момент, когда пользователь доскроллил до элемента.

**Важно:** на странице не может быть два одновременно показанных тултипа. Они всегда должны показываться
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

```
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
                <HeaderButton onClick={() => this.setState({ activePanel: 'tooltip' })}>
                  {osname === ANDROID ? <Icon24Back/> : <Icon28ChevronBack/>}
                </HeaderButton>
              }
              right={
                <HeaderButton>
                  <Tooltip
                    isShown={this.state.tooltip2}
                    onClose={() => this.setState({ tooltip2: false, tooltip3: true })}
                    alignX="right"
                    cornerOffset={-10}
                    offsetX={7}
                    text="Обновлённый раздел поможет найти друзей"
                    title="Рекомендации друзей"
                  >
                    <Icon24Add/>
                  </Tooltip>
                </HeaderButton>
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
                <Cell before={<Avatar />}description="Музыкант">Robbie Williams</Cell>
                <Cell before={<Avatar />}description="Издательский дом">ПостНаука</Cell>
              </List>
            </Group>
          </Panel>

        </View>
      )
    }
  }

  <Example />
```
