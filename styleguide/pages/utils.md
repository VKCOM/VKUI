### usePlatform и withPlatform
Как уже было сказано ранее, компоненты библиотеки имеют разный внешний вид в зависимости от платформы – iOS или Android.
Вам может понадобиться определить платформу в коде приложения. Для этого используйте либо Hook `usePlatform`, 
либо HOC `withPlatform`.

```jsx static
import { usePlatform } from '@vkontakte/vkui'

const MyComponent = () => {
    const platform = usePlatform();
    return '...';
}
```

```jsx static
import { withPlatform } from '@vkontakte/vkui'

class MyComponent extends React.Component {

    render() {
        const { platform } = this.props;
        return '...';
    }
}

withPlatform(withPlatform);
```

Способ определения платформы вне компонента устарел, так как мы начинаем поддерживать [SSR](https://reactjs.org/docs/react-dom-server.html).

### getClassName
Допустим, вы решили создать собственный комопонент, внешний вид которого зависит от платформы. Функция `getClassName`
вернет вам строку, представляющую набор CSS-классов с модификатором платформы:

```jsx static
import { usePlatform, getClassName } from '@vkontakte/vkui'

const MyButton = ({ children }) => {
    const platform = usePlatform();
    return <button className={getClassName('MyButton', platform)}>{children}</button>;
}

<MyButton>Click me</MyButton> // <button class="MyButton MyButton--ios">Click me</button>
```
