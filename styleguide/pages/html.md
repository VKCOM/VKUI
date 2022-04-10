Пример структуры html файла:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
    >
    <title>{{app_title}}</title>
    <link href={{path/to/css}} rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script src={{path/to/js}}></script>
  </body>
</html>
```

_В этом примере показан режим подключения `full`_

> **Важно**
>
> В мета теге `viewport` должно обязательно быть правило `viewport-fit=cover`. Это нужно для корректного рассчитывания отступов на определённых устройствах, например, на iPhone. Прочитать подробнее [можно тут](https://css-tricks.com/the-notch-and-css/).

VKUI поддерживает 3 режима использования:

- `full` — приложение полностью написано и контролируется VKUI
- `embedded` — встраивание VKUI приложения в существующее приложение
- `partial` — UI компоненты используются в существующем приложении без лаяут компонентов

Для примеров и полного описания режимов, см. [Режимы подключения](#/Режимы%20подключения).
