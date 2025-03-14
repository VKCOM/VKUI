Кнопка для закрытия модальных окон на широком экране.
Для правильной отрисовки нужно расположить в контейнере с `position: "relative"` и отображать при достаточной ширине экрана (от `ViewWidth.SMALL_TABLET`)

## Цифровая доступность (a11y)

Чтобы кнопка была доступной для ассистивных технологий, мы передаем в нее скрытый визуально текст, который сможет прочитать скринридер. Сейчас по умолчанию это — "Закрыть". Чтобы заменить текст, передайте его в `children`.

```jsx { "props": { "layout": false, "adaptivity": true } }
const CustomPopout = ({ onClose }) => {
  const { sizeX } = useAdaptivityConditionalRender();
  return (
    <PopoutWrapper onClick={onClose}>
      <div
        style={{
          backgroundColor: 'var(--vkui--color_background_content)',
          borderRadius: 8,
          position: 'relative',
          padding: '12px',
        }}
      >
        <h4>Кастомное модальное окно</h4>

        {sizeX.regular && (
          <ModalDismissButton className={sizeX.regular.className} onClick={onClose}>
            Закрыть кастомное модальное окно
          </ModalDismissButton>
        )}
      </div>
    </PopoutWrapper>
  );
};

const Example = () => {
  const [popout, setPopout] = React.useState(null);

  const onClick = () => setPopout(<CustomPopout onClose={() => setPopout(null)} />);

  return (
    <View activePanel="popout">
      <Panel id="popout">
        <PanelHeader>ModalDismissButton</PanelHeader>
        <Group>
          <CellButton onClick={onClick}>Открыть модальное окно</CellButton>
        </Group>
        {popout}
      </Panel>
    </View>
  );
};

<Example />;
```
