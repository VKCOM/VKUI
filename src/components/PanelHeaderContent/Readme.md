Компонент для отрисовки "сложного" содержимого шапки.

> **Важно**
>
> Правая часть шапки скрыта по умолчанию, если требуется показать её, передайте в [`ConfigProvider`](https://vkcom.github.io/VKUI/#/ConfigProvider) свойство `webviewType={WebviewType.INTERNAL}`.

```jsx { "props": { "webviewType": true } }
const Example = () => {
  const platform = usePlatform();
  return (
    <View activePanel="brand">
      <Panel id="brand">
        <PanelHeader
          before={<PanelHeaderBack label="Назад" />}
          after={
            <PanelHeaderButton>
              <Icon28MessageOutline
                width={platform === Platform.VKCOM ? 24 : 28}
                height={platform === Platform.VKCOM ? 24 : 28}
              />
            </PanelHeaderButton>
          }
        >
          <PanelHeaderContent
            status="был в сети сегодня, в 18:46"
            before={<Avatar size={36} src={getAvatarUrl("user_va")} />}
          >
            Влад Анесов
          </PanelHeaderContent>
        </PanelHeader>
      </Panel>
    </View>
  );
};

<Example />;
```
