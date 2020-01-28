Компонент для отрисовки кнопок в шапке панели. Внутрь компонента передается либо [иконка](https://vkcom.github.io/icons/),
либо текст. Текстовые кнопки чаще всего используются в iOS, но есть исключения для Android.

Кнопки могут быть переданы в `left` или `right` компонента `PanelHeader`:

```jsx static
import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';

<PanelHeader
  left={<PanelHeaderButton><Icon24Back/></PanelHeaderButton>}
  right={<PanelHeaderButton><Icon24Search/></PanelHeaderButton>}
/>
```

Если нужно несколько кнопок справа или слева, то передаем массив:

```jsx static
import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Search from '@vkontakte/icons/dist/24/search';

<PanelHeader
  right={[
    <PanelHeaderButton key="search"><Icon24Search/></PanelHeaderButton>,
    <PanelHeaderButton key="add"><Icon24Add/></PanelHeaderButton>
  ]}
/>
```

**VK Apps**

Если вы разрабатываете приложение на платформе [VK Apps](https://vk.com/vkappsdev), то вам будут недоступны
кнопки справа, так как на их месте отображаются нативные кнопки для управления приложением.

**Addon для iOS**

В iOS к левой кнопке может быть добавлена подпись. Пример:

```jsx static
import { PanelHeader, PanelHeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

const osname = platform();

<PanelHeader
  addon={<PanelHeaderButton>Назад</PanelHeaderButton>}
  left={<PanelHeaderButton>{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</PanelHeaderButton>}
/>
```

**Важно:** кнопки для возврата к предыдущей панели отличаются.
В случае с iOS используется иконка [28/chevron_back](https://vkcom.github.io/icons/#28/chevron_back), в случае с
Android – [24/back](https://vkcom.github.io/icons/#24/back). Так же различаются кнопки для возврата к предыдущей
`View`. iOS – текст "Отмена", Android – иконка [24/cancel](https://vkcom.github.io/icons/#24/cancel).

```

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'panel1',
      activeView: 'main'
    }
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View id="main" activePanel={this.state.activePanel}>
          <Panel id="panel1">
            <PanelHeader left={<PanelHeaderButton>{osname === IOS ? 'Отмена' : <Icon24Cancel/>}</PanelHeaderButton>}>
              Стартовый экран
            </PanelHeader>
            <Group>
              <Div>
                Если приложение открывается как модальное окно, то в качестве левой кнопки принято использовать кнопку "Отмена".
                <br/>
                <br/>
                В противном случае показывается кнопка "Назад".
              </Div>
            </Group>
            <Div>
              <Button stretched mode="secondary" size="l" onClick={ () => this.setState({ activePanel: 'panel2' }) }>
                Больше примеров
              </Button>
            </Div>
          </Panel>
          <Panel id="panel2">
            <PanelHeader
              left={<PanelHeaderButton onClick={() => this.setState({ activePanel: 'panel1' })}>{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</PanelHeaderButton>}
              addon={<PanelHeaderButton onClick={() => this.setState({ activePanel: 'panel1' })}>Назад</PanelHeaderButton>}
              right={<PanelHeaderButton onClick={() => {}}><Icon24Story/></PanelHeaderButton>}
            >
              Заголовок
            </PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ activePanel: 'panel3' }) }>
                Несколько иконок
              </CellButton>
            </Group>
          </Panel>
          <Panel id="panel3">
            <PanelHeader
              left={<PanelHeaderButton onClick={() => this.setState({ activePanel: 'panel2' })}>{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</PanelHeaderButton>}
              addon={<PanelHeaderButton onClick={() => this.setState({ activePanel: 'panel2' })}>Назад</PanelHeaderButton>}
              right={[
                <PanelHeaderButton key="add" onClick={() => {}}><Icon24Add/></PanelHeaderButton>,
                <PanelHeaderButton key="more" onClick={() => {}}><Icon24MoreVertical/></PanelHeaderButton>
              ]}
            >
              Две иконки
            </PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ activeView: 'modal' }) }>
                Модальное окно
              </CellButton>
            </Group>
          </Panel>
        </View>
        <View id="modal" header activePanel="modal-panel">
          <Panel id="modal-panel">
            <PanelHeader
              left={<PanelHeaderButton onClick={() => this.setState({ activeView: 'main' })}>{osname === IOS ? 'Отмена' : <Icon24Cancel/>}</PanelHeaderButton>}
              right={<PanelHeaderButton disabled primary onClick={() => this.setState({ activeView: 'main' })}>{osname === IOS ? 'Готово' : <Icon24Done/>}</PanelHeaderButton>}
            >
              Модальное окно
            </PanelHeader>
          </Panel>
        </View>
      </Root>
    )
  }
}

<Example/>
```
