Надстройка над `<textarea />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
const WriteBarExample = () => {
  const platform = usePlatform();

  return (
    <View activePanel="input">
      <Panel id="input">
        <PanelHeader>
          WriteBar
        </PanelHeader>
        <FixedLayout vertical="bottom" filled>
          <WriteBar placeholder="Сообщение"
                    grow
                    before={<IconButton icon={platform === 'android' || platform === 'vkcom' ? <Icon28AttachOutline/> : <Icon28AddCircleOutline/>}/>}
                    after={<IconButton icon={<Icon28VoiceOutline/>}/>}
          />
          <WriteBar placeholder="Сообщение"
                    before={<IconButton icon={platform === 'android' || platform === 'vkcom' ? <Icon28AttachOutline/> : <Icon28AddCircleOutline/>}/>}
                    after={<IconButton icon={platform === 'android' || platform === 'vkcom' ? <Icon28Send style={{color: 'var(--accent)'}}/> : <Icon48WritebarSend/>}/>}
          />
        </FixedLayout>
      </Panel>
    </View>
  );
}

<WriteBarExample/>;
```
