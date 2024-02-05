Компонент для отрисовки "сложного" содержимого шапки.

> **Важно**
>
> Правая часть шапки доступна по умолчанию. Если вы разрабатываете мини-приложение и хотите ее скрыть, передайте в
> [`ConfigProvider`](#/ConfigProvider) свойство `hasCustomPanelHeaderAfter`.

```jsx { "props": { "showCustomPanelHeaderAfterProps": true } }
const Example = () => {
  const platform = usePlatform();
  return (
    <View activePanel="brand">
      <Panel id="brand">
        <PanelHeader
          before={<PanelHeaderBack label="Назад" onClick={noop} />}
          after={
            <PanelHeaderButton onClick={noop}>
              <AdaptiveIconRenderer
                IconCompact={Icon24MessageOutline}
                IconRegular={Icon28MessageOutline}
              />
            </PanelHeaderButton>
          }
        >
          <PanelHeaderContent
            status="был в сети сегодня, в 18:46"
            before={<Avatar size={36} src={getAvatarUrl('user_va')} />}
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
