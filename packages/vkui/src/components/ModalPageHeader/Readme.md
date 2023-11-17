Шапка в модальных страницах.
Имеет очень похожую логику на [`PanelHeader`](#!/PanelHeader): два свойства `before` и `after` для иконок и название модальной страницы, передаваемое как `children`.

### Требования по расположению кнопок

- На Android **слева** может быть [`PanelHeaderClose`](#!/PanelHeaderClose).
- На iOS **справа** должна быть кнопка закрытия. Это может быть либо [`PanelHeaderButton`](#!/PanelHeaderButton) с иконкой `<Icon24Dismiss />`, либо [`PanelHeaderClose`](#!/PanelHeaderClose) или [`PanelHeaderSubmit`](#!/PanelHeaderSubmit).
- Если произойдёт навигация вперёд внутри модального окна, то **слева** в шапке останется **только** кнопка назад.

Также на Android могут быть какие-то дополнительные кнопки-иконки справа, а на iOS – слева.

```jsx static
const platform = usePlatform();

return (
  <ModalPageHeader
    before={
      <Fragment>
        {(platform === 'android' || platform === 'vkcom') && (
          <PanelHeaderButton onClick={this.backModal}>
            <Icon24Cancel />
          </PanelHeaderButton>
        )}
      </Fragment>
    }
    after={
      <Fragment>
        {(platform === 'android' || platform === 'vkcom') && (
          <PanelHeaderButton onClick={this.backModal}>
            <Icon24Done />
          </PanelHeaderButton>
        )}
        {platform === 'ios' && (
          <PanelHeaderButton onClick={this.backModal}>Готово</PanelHeaderButton>
        )}
      </Fragment>
    }
  >
    Заголовок модальной страницы
  </ModalPageHeader>
);
```

Пример использования показан в компоненте `ModalRoot`.
