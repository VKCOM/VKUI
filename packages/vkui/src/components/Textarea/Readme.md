Надстройка над `<textarea />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
const App = () => {
  const textAreaRef = useRef(null);
  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>Textarea</PanelHeader>
        <Group>
          <FormItem top="Любимая музыка">
            <Textarea placeholder="Группы, исполнители, продюсеры" />
          </FormItem>
          <FormItem top="Увлечения">
            <Textarea
              placeholder="Музыка, спорт"
              defaultValue="Музыка\nСпорт\nФотография\nПлавание\nПрограммирование\nПутешествия\nКниги\nСериалы\nФильмы\nНастольные игры"
            />
          </FormItem>
          <FormItem top="Прикидываемся Input">
            <Textarea rows={1} placeholder="Once upon a time" />
          </FormItem>

          <FormItem top="С кнопкой">
            <Textarea
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget commodo lorem. Suspendisse convallis ligula vitae mi dictum ullamcorper. Fusce pulvinar quis sem vel tincidunt. Fusce lectus odio, dapibus at metus congue, mollis tempor lorem. Vivamus dictum iaculis turpis non tincidunt. Cras ornare venenatis mi, quis mollis mauris tempus at. Curabitur turpis metus, hendrerit a ligula quis, euismod fringilla neque. Cras pretium aliquet convallis. In et bibendum nulla. Maecenas iaculis commodo blandit. Phasellus semper nunc nec placerat dictum."
              getRef={textAreaRef}
              after={
                <Tooltip description="Скопировать" placement="top" usePortal>
                  <IconButton
                    label="Скопировать"
                    onClick={() => navigator.clipboard.writeText(textAreaRef.current.value)}
                  >
                    <Icon20CopyOutline />
                  </IconButton>
                </Tooltip>
              }
              afterAlign="start"
              readOnly
            />
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

<App />;
```
