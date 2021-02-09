Компонент, используемый в качестве кнопок в [SubnavigationBar](#/SubnavigationBar).

Этот компонент может использоваться:

- В качестве ссылки для создания быстрой и заметной точки входа в важный подраздел.
- В качестве кнопки, для управления контентом на странице. Например, показать модальную страницу с фильтрами или сразу активировать какой-то фильтр.

```jsx
const SubnavigationButtonExample = () => {
  return (
    <View activePanel="example">
      <Panel id="example">
        <PanelHeader>SubnavigationButton</PanelHeader>
        <Group>
          <SubnavigationBar>
            <SubnavigationButton
              before={<Icon24Filter/>}
              expandable
            >
              Фильтры
            </SubnavigationButton>

            <SubnavigationButton
              before={<Icon24Filter/>}
              selected
              expandable
              after={<Counter mode="primary" size="s">3</Counter>}
            >
              Фильтры
            </SubnavigationButton>
          </SubnavigationBar>

          <SubnavigationBar>
            <SubnavigationButton
              before={<Icon24ScanViewfinderOutline/>}
              size="l"
            >
              Сканировать QR
            </SubnavigationButton>

            <SubnavigationButton
              before={<Icon24UserAddOutline/>}
              size="l"
            >
              Добавить друга
            </SubnavigationButton>
          </SubnavigationBar>

          <SubnavigationBar>
            <SubnavigationButton>
              Мой размер
            </SubnavigationButton>

            <SubnavigationButton
              selected
            >
              Мой размер
            </SubnavigationButton>
          </SubnavigationBar>

          <SubnavigationBar>
            <SubnavigationButton
              after={<Counter mode="prominent" size="s">3</Counter>}
            >
              Новинки
            </SubnavigationButton>
          </SubnavigationBar>

          <SubnavigationBar>
            <SubnavigationButton
              before={<Icon24Filter/>}
              selected
              expandable
              after={<Counter mode="primary" size="s">3</Counter>}
            >
              Фильтры
            </SubnavigationButton>

            <SubnavigationButton
              selected
            >
              Мой размер
            </SubnavigationButton>

            <SubnavigationButton>
              В наличии
            </SubnavigationButton>

            <SubnavigationButton
              before={<Icon24FavoriteOutline/>}
            >
              Избранное
            </SubnavigationButton>
          </SubnavigationBar>
        </Group>
        
        <Group>
          <Header>Уменьшение шрифта</Header>

          <SubnavigationBar>
            <SubnavigationButton
              before={<Icon24ScanViewfinderOutline/>}
              size="l"
              textLevel={1}
            >
              Сканировать QR
            </SubnavigationButton>
          </SubnavigationBar>

          <SubnavigationBar>
            <SubnavigationButton
              before={<Icon24ScanViewfinderOutline/>}
              size="l"
              textLevel={2}
            >
              Сканировать QR
            </SubnavigationButton>
          </SubnavigationBar>

          <SubnavigationBar>
            <SubnavigationButton
              before={<Icon24ScanViewfinderOutline/>}
              size="l"
              textLevel={3}
            >
              Сканировать QR
            </SubnavigationButton>
          </SubnavigationBar>
        </Group>
      </Panel>
    </View>
  );
};

<SubnavigationButtonExample/>
```
