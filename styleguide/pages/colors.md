Палитра используемых цветов

```jsx static
  import { colors } from '@vkontakte/vkui';
  
  let accentBlueBlock = () => (<div style={{ backgroundColor: colors.accentBlue }} />);
```

```
  <View activePanel="colors">
    <ScrollView id="colors">
      <Group>
        <List>
          { Object.keys(colors).map((color) => (
            <ListItem key={color}>
              <Entity
                title={colors[color]} 
                description={colorKeys[color]}
                avatarProps={{ style: { backgroundColor: colors[color] } }}
              />
            </ListItem>
          )) }
        </List>
      </Group>
    </ScrollView>
  </View>
```
