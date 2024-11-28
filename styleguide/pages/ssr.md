Мы постарались максимально облегчить вам работу с SSR. Для корректного рендеринга VKUI-компонентов на сервере,
необходимо обернуть ваше приложение в `SSRWrapper`, передав туда значение заголовка `userAgent`. Это нужно для
определения платформы пользователя (iOS или Android) на стороне сервера. Пример:

```jsx static
import { renderToString } from 'react-dom/server';
import { Button, SSRWrapper } from '@vkontakte/vkui';
import express from 'express';
import useragent from 'express-useragent';

const server = express();
server.use(useragent.express());

server.get('/', function (req, res) {
  res.send(
    renderToString(
      <SSRWrapper userAgent={req.useragent.source}>
        <Button>Hello</Button>
      </SSRWrapper>,
    ),
  );
});

server.listen(3000);
```

## Оптимизация отрисовки страницы

По умолчанию, для корректной работы, на html-элемент и точку монтирования приложения автоматически
добавляются дополнительные классы VKUI. Так как это происходит при инициализации приложения, то приводит к дополнительным
расчётам и рендеру которые требуется произвести браузеру для того, чтобы корректно отрисовать страницу.
Чтобы улучшить загрузку при SSR и избежать лишних перерасчётов желательно на стороне сервера добавить необходимые дополнительные классы самостоятельно на стороне сервера.

В режиме `full` добавляются следующие классы:

- на `html` элемент:
  - `.vkui` на html элемент;
  - класс токенов соответствующей темы, в зависимости от платформы и цветовой схемы.
    Например: `vkui--vkBase--dark`.
  - класс типа оформления макета для компонентов [Panel](#/Panel) [Group](#/Group) если тип оформления макета задан через свойство `layout` компонента [AppRoot](#/AppRoot):
    - `.vkui--layout-card` если `layout="card"`;
    - `.vkui--layout-plain` если `layout="plain"`.
- на точку монтирования приложения:
  - `.vkui__root`

В режиме `embedded` добавляются следующие классы на точку монтирования приложения:

- `.vkui__root`;
- `.vkui__root--embedded`.

В режиме `partial` дополнительные классы не добавляются.

### Класс темы

Самое сложное это определить нужный класс темы. К сожалению, у нас ещё не выработано красивого решения для этой задачи.
Тема зависит от цветовой схемы (`light | dark`) и от платформы (`android | ios | vkcom`).

По умолчанию в VKUI используются следующие классы тем из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens) (см. [Платформы и темы](#/PlatformsAndThemes)).

```css
/* android */
.vkui--vkBase--light {
}
.vkui--vkBase--dark {
}

/* ios */
.vkui--vkIOS--light {
}
.vkui--vkIOS--dark {
}

/* vkcom */
.vkui--vkCom--light {
}
.vkui--vkCom--dark {
}
```

Можно зашить класс с дефолтной цветовой схемой, но тогда, если зашита светлая тема, то у пользователя, предпочитающего тёмную тему, отрендериться сначала светлая тема, а потом произойдёт переключение на тёмную.

В случае, если нужна лишь одна цветовая схема для конкретной платформы, то можно жёстко зашить платформу и цветовую схему через cвойства `platform` и `colorScheme` у [ConfigProvider](#/ConfigProvider) и прописать соответствующий класс темы в `html`.

Если платформы могут быть разными, то можно определить платформу на стороне сервера с помощью `userAgent`, аналогично тому как мы это делаем в [SSRWrapper](https://github.com/VKCOM/VKUI/blob/57e99745c816ef7b84b242335c49713c7512da3a/packages/vkui/src/lib/SSR.tsx).

Если цветовая схема может меняться в зависимости от системных настроек клиента, то тут два варианта.

1. Определить цветовую схему пользователя через заголовок [Sec-CH-Prefers-Color-Schem](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme). Но этот заголовок имеет плохую кроссбраузерную поддержку.
2. Подготовить свою тему (см. [Кастомизация](#/Customize)) где бы переключение цветовой схемы было реализовано через медиа-выражение:

```css
.your-theme-name {
  --vkui--colors_scheme: light;
  --vkui--color_background: #ffffff;
}
@media (prefers-color-scheme: dark) {
  .your-theme-name {
    --vkui--colors_scheme: dark;
    --vkui--color_background: #ffffff;
  }
}
```

Но в таком случае невозможно будет точечно переключаться между темами при помощи [ColorSchemeProvider](#/ColorSchemeProvider), так как там переключение осуществляется через класс темы с префиксом цвета, который одновременно с такой цветовой схемой не добавить.
