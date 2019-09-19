Данный компонент является надстройкой над нативным [select](https://reactjs.org/docs/forms.html#the-select-tag) 
и принимает все его свойства.

```jsx static
import { Select } from '@vkontakte/vkui';

<Select placeholder="Выберите пол">
  <option value="m">Мужской</option>
  <option value="f">Женский</option>
</Select>
```

```
<View activePanel="select">
  <Panel id="select" theme="white">
    <PanelHeader>
      Select
    </PanelHeader>
    <FormLayout>
      <Select top="Обычный Select" placeholder="Выберите пол">
        <option value="m">Мужской</option>
        <option value="f">Женский</option>
      </Select>
    </FormLayout>
  </Panel>
</View>
```
