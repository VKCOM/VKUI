Каждая иконка – это JS-файл, который экспортирует React-компонент. Базовый пример использования:
```jsx static
  import IconAbout24 from '@vkontakte/vkui/dist/icons/about_24';
  
  ReactDOM.render(<IconAbout24 />, root);
```

Список доступных иконок:

```
  <View activePanel="icons">
    <ScrollView id="icons">
      <Group>
        <List>
          { Object.keys(Icon).map((iconName) => {
            let ListIcon = Icon[iconName];
            return <ListItem icon={<ListIcon />}>{iconName}</ListItem>
          }) }
        </List>
      </Group>
    </ScrollView>
  </View>
```

Иконки можно красить:

```
  <View activePanel="icons-color">
    <ScrollView id="icons-color">
      <Group>
        <List>
          <ListItem icon={<Icon.about_24 fill={colors.red}/>}>about_24, {colorKeys.red}</ListItem>
          <ListItem icon={<Icon.services_24 fill={colors.green}/>}>services_24, {colorKeys.green}</ListItem>
        </List>
      </Group>
    </ScrollView>
  </View>
```
