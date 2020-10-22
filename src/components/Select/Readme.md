Отрисовывает [CustomSelect](#!/CustomSelect), если есть мышка, либо [NativeSelect](#!/NativeSelect)

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
    <Group>
      <FormItem top="Обычный Select">
        <Select placeholder="Выберите пол">
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </Select>
      </FormItem>
      <FormItem top="Обычный Select с скроллом">
        <Select placeholder="Выберите месяц">
          <option value="1">Январь</option>
          <option value="2">Февраль</option>
          <option value="3">Март</option>
          <option value="4">Апрель</option>
          <option value="5">Май</option>
          <option value="6">Июнь</option>
          <option value="7">Июль</option>
          <option value="8">Август</option>
          <option value="9">Сентябрь</option>
          <option value="10">Октябрь</option>
          <option value="11">Ноябрь</option>
          <option value="12">Декабрь</option>
        </Select>
      </FormItem>
    </Group>
  </Panel>
</View>
```
