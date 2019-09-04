Мы постарались максимально облегчить вам работу с SSR. Для корректного рендеринга VKUI-компонент на сервере, достаточно
обернуть ваше приложения в `SSRWrapper`, передав туда значение заголовка `userAgent`. Это нужно для
определения платформы пользователя внутри компонент. Пример:

```jsx static
import ReactDOM from 'react-dom';
import { Button, SSRWrapper } from '@vkontakte/vkui';
import express from 'express';
import useragent from 'express-useragent';

const server = express();
server.use(useragent.express());

server.get('/', function(req, res) {
  res.send(ReactDOM.renderToString(
    <SSRWrapper userAgent={req.useragent}>
      <Button>Hello</Button>
    </SSRWrapper>
  ))
});

server.listen(3000);
```
