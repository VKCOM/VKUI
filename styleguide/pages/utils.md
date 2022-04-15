## usePlatform/withPlatform

Как уже было сказано ранее, компоненты библиотеки имеют разный внешний вид в зависимости от платформы – iOS или Android.
Вам может понадобиться определить платформу в коде приложения. Для этого используйте либо Hook `usePlatform`,
либо HOC `withPlatform`.

```jsx static
import { usePlatform, ANDROID, IOS } from "@vkontakte/vkui";

const MyComponent = () => {
  const platform = usePlatform(); // android или ios
  return "...";
};
```

```jsx static
import { withPlatform, ANDROID, IOS } from "@vkontakte/vkui";

class MyComponent extends React.Component {
  render() {
    const { platform } = this.props; // android или ios
    return "...";
  }
}

withPlatform(MyComponent);
```

Способ определения платформы вне компонента устарел, так как мы начинаем поддерживать
[SSR](https://reactjs.org/docs/react-dom-server.html).

## getClassName

Допустим, вы решили создать собственный компонент, внешний вид которого зависит от платформы. Функция `getClassName`
вернет вам строку, представляющую набор CSS-классов с модификатором платформы:

```jsx static
import { usePlatform, getClassName } from "@vkontakte/vkui";

const MyButton = ({ children }) => {
  const platform = usePlatform();
  const baseClassNames = getClassName("MyButton", platform); // 'MyButton MyButton--ios'
  return <button className={baseClassNames}>{children}</button>;
};
```

## calcInitialsAvatarColor

Используется для определения цвета [InitialsAvatar](#!/InitialsAvatar) по переданному идентификатору объекта.

```jsx static
import { calcInitialsAvatarColor } from "@vkontakte/vkui";

const conversation = { peer: { id: 480 }, name: "Библиотека компонентов VKUI" };

<InitialsAvatar
  size={48}
  gradientColor={calcInitialsAvatarColor(conversation.peer.id)}
>
  {conversation.name[0]}
</InitialsAvatar>;
```
