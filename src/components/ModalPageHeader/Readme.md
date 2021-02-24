Шапка в модальных страницах.
Имеет очень похожую логику на [`PanelHeader`](#!/PanelHeader): два свойства `left` и `right` для иконок и название модальной страницы, передаваемое как `children`.

### Требования по расположению кнопок

* На Android **слева** может быть [`PanelHeaderClose`](#!/PanelHeaderClose).
* На iOS **справа** должна быть кнопка закрытия. Это может быть либо [`PanelHeaderButton`](#!/PanelHeaderButton) с иконкой `<Icon24Dismiss />`, либо [`PanelHeaderClose`](#!/PanelHeaderClose) или [`PanelHeaderSubmit`](#!/PanelHeaderSubmit).
* Если произойдёт навигация вперёд внутри модального окна, то **слева** в шапке останется **только** кнопка назад.

Также на Android могут быть какие-то дополнительные кнопки-иконки справа, а на iOS – слева.

```jsx static
import { ModalPageHeader, ANDROID, IOS, usePlatform } from '@vkontakte/vkui';

const platform = usePlatform();

return (
  <ModalPageHeader
    left={(
      <Fragment>
        {(platform === ANDROID || platform === VKCOM) && <PanelHeaderButton onClick={this.backModal}><Icon24Cancel /></PanelHeaderButton>}
      </Fragment>
    )}
    right={(
      <Fragment>
        {(platform === ANDROID || platform === VKCOM) && <PanelHeaderButton onClick={this.backModal}><Icon24Done /></PanelHeaderButton>}
        {platform === IOS && <PanelHeaderButton onClick={this.backModal}>Готово</PanelHeaderButton>}
      </Fragment>
    )}
  >
    Заголовок модальной страницы
  </ModalPageHeader>
)
```

Пример использования показан в компоненте `ModalRoot`.
