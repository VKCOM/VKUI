## usePlatform/withPlatform

Как уже было сказано ранее, компоненты библиотеки имеют разный внешний вид в зависимости от платформы – iOS или Android.
Вам может понадобиться определить платформу в коде приложения. Для этого используйте либо Hook `usePlatform`,
либо HOC `withPlatform`.

```jsx static
import { usePlatform, Platform } from '@vkontakte/vkui';

const MyComponent = () => {
  const platform = usePlatform(); // android или ios
  return '...';
};
```

```jsx static
import { withPlatform, Platform } from '@vkontakte/vkui';

class MyComponent extends React.Component {
  render() {
    const { platform } = this.props; // android или ios
    return '...';
  }
}

withPlatform(MyComponent);
```

Способ определения платформы вне компонента устарел, так как мы начинаем поддерживать
[SSR](https://reactjs.org/docs/react-dom-server.html).

## calcInitialsAvatarColor

Используется для определения цвета в [Avatar](#!/Avatar) по переданному идентификатору объекта.

```jsx static
import { calcInitialsAvatarColor } from '@vkontakte/vkui';

const conversation = { peer: { id: 480 }, name: 'Библиотека компонентов VKUI' };

<Avatar size={48} gradientColor={calcInitialsAvatarColor(conversation.peer.id)}>
  {conversation.name[0]}
</Avatar>;
```
