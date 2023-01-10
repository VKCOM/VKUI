Низкоуровневый компонент для отрисовки карточки со сложным содержимым. Используется внутри [ModalCard](https://vkcom.github.io/VKUI/#/ModalCard).

### Кнопка для закрытия

Согласно нашим дизайн-гайдам, в Android-версии специальной кнопки для закрытия не предусмотрено.

```jsx { "props": { "layout": false, "iframe": false } }
<div style={{ margin: 20 }}>
  <Text style={{ marginBottom: 10 }}>Десктопная и планшетная версии</Text>
  <AdaptivityProvider viewWidth={ViewWidth.TABLET}>
    <ModalCardBase
      style={{ width: 450, marginBottom: 20 }}
      header="Отправляйте деньги друзьям, используя банковскую карту"
      subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
      actions={
        <Button size="l" mode="primary" stretched>
          Попробовать
        </Button>
      }
      icon={<Icon56MoneyTransferOutline key="icon" />}
    />
  </AdaptivityProvider>
  <Text style={{ marginBottom: 10 }}>Мобильная версия</Text>
  <AdaptivityProvider viewWidth={ViewWidth.MOBILE}>
    <ModalCardBase
      style={{ width: 320 }}
      icon={<Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
      header="Добавить игру «Загадки детства» в меню?"
      subheader="Игра появится под списком разделов на экране меню и будет всегда под рукой."
      actions={
        <ButtonGroup mode="horizontal" gap="s" stretched>
          <Button size="l" mode="primary" stretched>
            Да
          </Button>
          <Button size="l" mode="secondary" stretched>
            Позже
          </Button>
        </ButtonGroup>
      }
    />
  </AdaptivityProvider>
</div>
```
