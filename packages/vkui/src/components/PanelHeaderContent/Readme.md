Компонент для отрисовки "сложного" содержимого шапки.

> **Важно**
>
> Правая часть шапки скрыта по умолчанию. Если хотите ее показать, передайте в
> [`ConfigProvider`](#/ConfigProvider) свойство `hasCustomPanelHeaderAfter={false}`.
>
> ⚠️ В v6 значение по умолчанию будет изменено на `false` (см. https://github.com/VKCOM/VKUI/issues/5049).

```jsx { "props": { "showCustomPanelHeaderAfterProps": true } }
const Example = () => {
  const platform = usePlatform();
  return (
    <View activePanel="brand">
      <Panel id="brand">
        <PanelHeader
          before={<PanelHeaderBack label="Назад" />}
          after={
            <PanelHeaderButton>
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
