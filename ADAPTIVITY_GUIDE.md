# Гайд по написанию адаптивных компонентов

Изначально писать адаптивность стоит через `css media queries` но так же следует учитывать то что параметры адаптивности можно переопределить через `AdaptivityProvider`, например:

```tsx
<AdaptivityProvider sizeX="regular">
  <Button>button</Button>
</AdaptivityProvider>
```

В таком случае при использовании хука `useAdaptivity` в свойстве `sizeX` придет `regular`, в противном случае `undefined`.

Для удобного получения `className` в зависимости от адаптивности есть такие функции как `getSizeXClassName`.

```tsx
const Component: React.FC = () => {
  const { 
    sizeX // по умолчанию приходит `undefined`, если не
          // задавать явно через `AdaptivityProvider`
  } = useAdaptivity();

  return (
    <div
      vkuiClass={
        getSizeXClassName("Component", sizeX), // получаем класс по `sizeX` возвращает `Component--sizeX-regular`, `Component--sizeX-compact` или `Component--sizeX-none` если sizeX не определен
      }
    >/>
  );
};
```

## Как пользоваться `css media queries`

Для `@media` запросов мы используем [custom-media-queries](https://preset-env.cssdb.org/features/#custom-media-queries), значения хранятся в файле [src/styles/customMedia.css](src/styles/customMedia.css)

При разработке следует предусмотреть возможность переопределения параметров адаптивности через `AdaptivityProvider`, поэтому, в `@media` следует применять стили только если компонент имеет класс `--sizeX-none` (адаптивность не переопределена) а также написать стили для `--sizeX-regular/compact`.

Пример:

```tsx
/* Component.tsx */
const Component: React.FC = () => {
  const { 
    sizeX // по умолчанию приходит `undefined`, если не
          // задавать явно через `AdaptivityProvider`
  } = useAdaptivity();

  return (
    <div
      vkuiClass={
        getSizeXClassName("Component", sizeX), // получаем класс по `sizeX` возвращает `Component--sizeX-regular`, `Component--sizeX-compact` или `Component--sizeX-none` если sizeX не определен
      }
    >/>
  );
};
```

```css
/* Component.css */
.Component {
  color: red;
  padding: 20px;
}

.Component-sizeX-compact {
  padding: 10px;
}

@media (--size-x-compact) {
  .Component-sizeX-none {
    padding: 10px;
  }
}
```

В данном случае мы задаем `padding: 10px;` для размера `sizeX-compact` и `padding: 20px;` для размера `sizeX-regular`. В `@media (--size-x-compact)` мы задаем `padding: 10px;` для компонента только если `sizeX` не переопределен.
