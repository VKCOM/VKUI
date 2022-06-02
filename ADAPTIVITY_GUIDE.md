# Гайд по написанию адаптивных компонентов

Изначально писать адаптивность стоит через `css media queries`, но так же следует учитывать то, что параметры адаптивности можно переопределить через `AdaptivityProvider`, например:

```tsx
<AdaptivityProvider sizeX="regular">
  <Button>button</Button>
</AdaptivityProvider>
```

В таком случае при использовании хука `useAdaptivity` в свойстве `sizeX` придет `regular`, в противном случае `undefined`.

## Как пользоваться `css media queries`

Для `@media` запросов мы используем [custom-media-queries](https://preset-env.cssdb.org/features/#custom-media-queries), значения хранятся в файле [src/styles/customMedia.css](src/styles/customMedia.css)

При разработке следует предусмотреть возможность переопределения параметров адаптивности через `AdaptivityProvider`, поэтому в `@media` следует применять стили только если компонент имеет CSS класс с модификатором `--sizeX-none` (адаптивность не переопределена), а также написать стили для `--sizeX-regular` и `--sizeX-compact`.

Для удобного получения `className` в зависимости от адаптивности есть такие функции как `getSizeXClassName`.

Пример:

```tsx
/* Component.tsx */
import * as React from "react";
import { classNames } from "../../lib/classNames";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";

const Component: React.FC = () => {
  const { sizeX } = useAdaptivity();

  /**
   * `getSizeXClassName()` возвращает один из следующих селекторов:
   * - `Component--sizeX-none` при `<AdaptivityProvider />`
  `* - `Component--sizeX-regular` при `<AdaptivityProvider sizeX="regular" />`
   * - `Component--sizeX-compact` при `<AdaptivityProvider sizeX="compact" />`
   */
  return (
    <div
      vkuiClass={classNames("Component", getSizeXClassName("Component", sizeX))}
    />
  );
};
```

```css
/* Component.css */
/* Равносильно модификатору `Component--sizeX-regular` */
.Component {
  color: red;
  padding: 20px;
}

.Component--sizeX-compact {
  padding: 10px;
}

@media (--size-x-compact) {
  .Component-sizeX-none {
    padding: 10px;
  }
}
```

В данном случае мы задаем `padding: 10px;` для размера `sizeX-compact` и `padding: 20px;` для размера `sizeX-regular`. В `@media (--size-x-compact)` мы задаем `padding: 10px;` для компонента только если `sizeX` не переопределен.

## Примечание

В процессе перевода существующих компонентов на новую систему адаптивности возникли места в которых пришлось отступить от стандартного поведения:

### `.Group--none`

В компоненте [Group](src/components/Group/Group.tsx) появился класс `.Group--none`. Этот класс означает что у `Group` не передан `mode` и не удалось вычислить его автоматически. `.Group--none` должен вести себя как `.Group--card` при `sizeX=regular` и как `.Group--plain` при `sizeX=compact`.

Пример использования:

```css
.Group--card .CardGrid {
  padding-left: 8px;
  padding-right: 8px;
}

@media (--size-x-regular) {
  /* Применяем стили .Group--card если не задан `mode` и `sizeX=regular` */
  .Group--none .CardGrid {
    padding-left: 8px;
    padding-right: 8px;
  }
}
```
