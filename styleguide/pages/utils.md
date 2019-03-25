### platform
Функция `platform` используется для определения платформы на основании user agent. На данный момент библиотека поддерживает
iOS и Android. Пример использования:

```js static
  import { platform, IOS, ANDROID } from '@vkontakte/vkui';

  const osname = platform();

  if (osname === IOS) {
    console.log('Это iPhone!');
  } else {
    console.log('Похоже, что это Android');
  }
```

Также вы можете использовать предопределенные константы, определяющие платформу:

```js static
  import { IS_PLATFORM_IOS, IS_PLATFORM_ANDROID } from '@vkontakte/vkui';

  if (IS_PLATFORM_IOS) {
    console.log('Это iPhone!');
  } else if (IS_PLATFORM_ANDROID) {
    console.log('Это Android!');
  }
```

### getClassName
Допустим, вы решили создать свой собственный компонент. Вероятно, в CSS вам захочется стилизовать ваш компонент
по-разному, в зависимости от платформы (iOS или Android).

Как вариант, на корневой элемент можно навесить модификаторы. Функция `getClassName` инкапсулирует в себе логику
определения платформы и на выходе выдает строчку, состоящую из css-классов. Пример:

```js static
  import { getClassName } from '@vkontakte/vkui';

  const baseClassName = getClassName('Tooltip') // "Tooltip Tooltip--ios"
```
