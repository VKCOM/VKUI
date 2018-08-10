Компонент для создания форм. Принимает в качестве `children` один или несколько элементов форм.

Для отрисовки лейблов снизу и сверху у каждой строчки, используются свойства `top` и `bottom`, которые нужно навесить
на `children` элементы.

Иногда требуется объединить несколько контролов в группу. Делается это путем оборачивания их в `div`.

```jsx static
import { FormLayout, Input } from '@vkontakte/vkui';

<FormLayout>
  <Input top="Имя" />
  <div top="Пароль">
    <Input type="password" top="Пароль" placeholder="Введите пароль" />
    <Input type="password" placeholder="Повторите пароль" />
  </div>
</FormLayout>
```

```
<View activePanel="new-user">
  <Panel id="new-user" theme="white">
    <PanelHeader>Регистрация</PanelHeader>
    <FormLayout>
      <Input type="email" top="E-mail" />
      <div top="Пароль">
        <Input type="password" top="Пароль" placeholder="Введите пароль" />
        <Input type="password" placeholder="Повторите пароль" />
      </div>
      <Input top="Имя" />
      <Input top="Фамилия" />
      <Select top="Пол" placeholder="Выберите пол">
        <option value="m">Мужской</option>
        <option value="f">Женский</option>
      </Select>
      <div top="Тип документа">
        <Radio name="type">Паспорт</Radio>
        <Radio name="type">Загран</Radio>
      </div>
      <Textarea top="О себе" />
      <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
      <Button size="xl">Зарегистрироваться</Button>
    </FormLayout>
  </Panel>
</View>
```
