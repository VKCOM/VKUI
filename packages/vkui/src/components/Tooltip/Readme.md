Тултип, открывающийся при наведении мыши на `children`. В качестве содержимого тултипа рекомендуется использовать только текст.

```jsx { "props": { "layout": false, "iframe": false } }
<Tooltip placement="right" description="Привет">
  <Button style={{ margin: 20 }}>Наведи</Button>
</Tooltip>
```

## Использование хука useTooltip

Вы можете использовать хук `useTooltip`, который позволяет устанавливать якорный элемент для `Tooltip`, не прокидывая его в качестве `children`

```jsx { "props": { "layout": false, "iframe": true } }
const Example = () => {
  const { anchorRef, anchorProps, tooltip } = useTooltip({
    placement: 'right',
    description: 'Привет',
  });

  return (
    <View activePanel="tooltip">
      <Panel id="tooltip">
        <PanelHeader>useTooltip</PanelHeader>
        <Group>
          {tooltip}
          <FormItem>
            <Button getRootRef={anchorRef} {...anchorProps}>
              Наведи на меня
            </Button>
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```
