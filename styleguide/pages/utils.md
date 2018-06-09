### platform
Функция platform используется для определения платформы на основании user agent. На данный момент библиотеке поддерживает
iOS и Android. Пример использования:

```js static
  import { platform, IOS, ANDROID } from '@vkonktakte/vkui';

  const osname = platform();

  if (osname === IOS) {
    console.log('Это iPhone!');
  } else {
    console.log('Похоже, что это Android');
  }
```

### getClassName
Допустим, вы решили создать свой собственный компонент. Вероятно, в CSS вам захочется стилизовать ваш компонент
по-разному, в зависимости от платформы (iOS или Android).

Как вариант, на корневой элемент можно навесить модификаторы. Функция `getClassName` инкапсулирует в себе логику
определения платформы и на выходе выдает строчку, состояющую из CSS классов. Пример:

```js static
  import { getClassName } from '@vkonktakte/vkui';

  const baseClassName = getClassName('Tooltip') // "Tooltip Tooltip--ios"
```
