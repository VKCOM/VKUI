Компонент для отрисовки "сложного" содержимого шапки.

```jsx
const Example = () => {
  const platform = usePlatform();
  return (
    <View activePanel="brand">
      <Panel id="brand">
        <PanelHeader
          left={<PanelHeaderBack label="Назад" />}
          right={(
            <PanelHeaderButton>
              <Icon28MessageOutline
                width={platform === VKCOM ? 24 : 28}
                height={platform === VKCOM ? 24 : 28}
              />
            </PanelHeaderButton>
          )}
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
}

<Example />
```
