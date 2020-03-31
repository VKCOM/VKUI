Шапка в модальных страницах.

Имеет очень похожую логику на `PanelHeader`: два свойства `left` и `right` для иконок и название модальной страницы, передаваемое как `children`.

**Существуют строгие требования по расположению иконок/кнопок закрытия.**

На Android **слева** может быть **только** кнопка закрытия с иконкой `<Icon24Cancel />`.

На iOS справа **обязательно** должна быть кнопка закрытия. Это может быть либо кнопка с иконкой `<Icon24Dismiss />`, либо текстовая кнопка, например, `Готово`.

Также на Android могут быть какие-то дополнительные кнопки-иконки справа, а на iOS – слева.

```jsx static
import { ModalPageHeader, ANDROID, IOS, usePlatform } from '@vkontakte/vkui';

const platform = usePlatform();

return (
  <ModalPageHeader
    left={(
      <Fragment>
        {platform === ANDROID && <PanelHeaderButton onClick={this.backModal}><Icon24Cancel /></PanelHeaderButton>}
      </Fragment>
    )}
    right={(
      <Fragment>
        {platform === ANDROID && <PanelHeaderButton onClick={this.backModal}><Icon24Done /></PanelHeaderButton>}
        {platform === IOS && <PanelHeaderButton onClick={this.backModal}>Готово</PanelHeaderButton>}
      </Fragment>
    )}
  >
    Заголовок модальной страницы
  </ModalPageHeader>
)
```

Пример использования показан в компоненте `ModalRoot`.
