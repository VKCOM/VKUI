Структура html файла:

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

Важно отметить два момента:

* В `body` обязательно должен быть дочерний элемент с `id="root"`, в который нужно
рендерить приложение.
* В мета тег `viewport` нужно дописать правило `viewport-fit=cover`. Если интересно, что это, то 
[вот](https://css-tricks.com/the-notch-and-css/) подробная статья.
