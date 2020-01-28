Надстройка над `<select />`. Компонент принимает все валидные для этого элемента свойства.

```jsx static
import { Select } from '@vkontakte/vkui';

<Select placeholder="Выберите пол">
  <option value="m">Мужской</option>
  <option value="f">Женский</option>
</Select>
```

```jsx
<View activePanel="select">
  <Panel id="select">
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
