Палитра используемых цветов.

```jsx static
  import { colors } from '@vkontakte/vkui';

  let accentBlueBlock = () => (<div style={{ backgroundColor: colors.accentBlue }} />);
```

```
  <View activePanel="colors" header={false}>
    <Panel id="colors">
      <Group>
        <List>
          { Object.keys(colors).map((color) => (
            <Cell key={color} description={color} before={<Avatar style={{ backgroundColor: colors[color] }} />}>
              {colors[color]}
            </Cell>
          )) }
        </List>
      </Group>
    </Panel>
  </View>
```
