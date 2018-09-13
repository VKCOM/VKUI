Компонент помогает сгруппировать несколько элементов форм по какому-то признаку. Пример: форма ввода пароля.

```jsx static
import { FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';

<FormLayout>
  <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
    <Input type="password" placeholder="Введите пароль" />
    <Input type="password" placeholder="Повторите пароль" />
  </FormLayoutGroup>
</FormLayout>
```
