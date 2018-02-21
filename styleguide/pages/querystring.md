Работа с query-параметрами

**querystring.create**

Создает query-строку из объекта 

```js static
  querystring.create({ param1: value1, param2: value2 }, options) => "param1=value1&param2=value2"
```

options: 

* encode (boolean, false по-дефолту) – если true, то будет сделан encodeURIComponent значения каждого ключа. 

**querystring.parse**

Парсит строку и возвращает объект

```js static
  querystring.parse("param1=value1&param2=value2", options) => { param1: value1, param2: value2 }
```

В качестве аргумента принимает урл целиком, только location.search или строку вида `"param1=value1&param2=value2"` 
