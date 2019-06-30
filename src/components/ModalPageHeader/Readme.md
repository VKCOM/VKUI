Шапка в модальных страницах.

Имеет очень похожую логику на `PanelHeader`: два свойства `left` и `right` для иконок и название модальной страницы, передаваемое как `children`.

**Существуют строгие требования по расположению иконок/кнопок закрытия.**

На Android **слева** может быть **только** кнопка закрытия с иконкой `<Icon24Cancel />`.

На iOS справа **обязательно** должна быть кнопка закрытия. Это может быть либо кнопка с иконкой `<Icon24Dismiss />`, либо текстовая кнопка, например, `Готово`.

Также на Android могут быть какие-то дополнительные кнопки-иконки, справа, а на iOS – слева.

```js static
import ModalPageHeader from '@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader';
import { IS_PLATFORM_ANDROID, IS_PLATFORM_IOS } from '@vkontakte/vkui/dist/lib/platform';

<ModalPageHeader
  left={(
    <Fragment>
      {IS_PLATFORM_ANDROID && <HeaderButton onClick={this.backModal}><Icon24Cancel /></HeaderButton>}
    </Fragment>
  )}
  right={(
    <Fragment>
      {IS_PLATFORM_ANDROID && <HeaderButton onClick={this.backModal}><Icon24Done /></HeaderButton>}
      {IS_PLATFORM_IOS && <HeaderButton onClick={this.backModal}>Готово</HeaderButton>}
    </Fragment>
  )}
>
  Заголовок модальной страницы
</ModalPageHeader>
```

Пример использования показан в компоненте `ModalRoot`.
