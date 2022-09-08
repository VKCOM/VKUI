# Гайд по написанию адаптивных компонентов

Изначально писать адаптивность стоит через `css media queries`, но так же следует учитывать то, что параметры адаптивности можно переопределить через `AdaptivityProvider`, например:

```tsx
<AdaptivityProvider sizeX="regular">
  <Button>button</Button>
</AdaptivityProvider>
```

В таком случае при использовании хука `useAdaptivity` в свойстве `sizeX` придёт `regular`, в противном случае `undefined`.

## Как пользоваться `css media queries`

Для `@media` запросов мы используем [custom-media-queries](https://preset-env.cssdb.org/features/#custom-media-queries), значения хранятся в файле [src/styles/customMedia.css](../src/styles/customMedia.css)

При разработке следует предусмотреть возможность переопределения параметров адаптивности через `AdaptivityProvider`, поэтому в `@media` следует применять стили только если компонент имеет CSS класс с модификатором `--sizeX-none` (адаптивность не переопределена), а также написать стили для `--sizeX-regular` и `--sizeX-compact`.

Для удобного получения `className` в зависимости от адаптивности есть такие функции как `getSizeXClassName`.

Пример:

_Component.tsx_

```tsx
import * as React from "react";
import { classNames } from "../../lib/classNames";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import styles from "./Component.module.css";

const Component = () => {
  const { sizeX } = useAdaptivity();

  /**
   * `getSizeXClassName()` возвращает один из следующих селекторов:
   * - `Component--sizeX-none` при `<AdaptivityProvider />`
  `* - `Component--sizeX-regular` при `<AdaptivityProvider sizeX="regular" />`
   * - `Component--sizeX-compact` при `<AdaptivityProvider sizeX="compact" />`
   */
  return (
    <div
      className={classNamesString(
        styles.Component,
        getSizeXClassName("Component", sizeX, styles)
      )}
    />
  );
};
```

_Component.module.css_

```css
/* Равносильно модификатору `Component--sizeX-regular` */
.Component {
  color: red;
  padding: 20px;
}

.Component--sizeX-regular {
  /* Пустой класс для CSS Modules (см. CONTRIBUTING.md)  */
}

.Component--sizeX-compact {
  padding: 10px;
}

@media (--sizeX-compact) {
  .Component--sizeX-none {
    padding: 10px;
  }
}
```

В данном случае мы задаём `padding: 10px;` для размера `sizeX-compact` и `padding: 20px;` для размера `sizeX-regular`. В `@media (--sizeX-compact)` мы задаём `padding: 10px;` для компонента только если `sizeX` не переопределен.

## Примечание

В процессе перевода существующих компонентов на новую систему адаптивности возникли места в которых пришлось отступить от стандартного поведения:

### `.Group--mode-none`

В компоненте [Group](../src/components/Group/Group.tsx) появился класс `.Group--mode-none`. Этот класс означает что у `Group` не передан `mode` и не удалось вычислить его автоматически. `.Group--mode-none` должен вести себя как `.Group--mode-card` при `sizeX=regular` и как `.Group--mode-plain` при `sizeX=compact`.

Пример использования:

```css
.Group--mode-card .CardGrid {
  padding-left: 8px;
  padding-right: 8px;
}

@media (--sizeX-regular) {
  /* Применяем стили .Group--mode-card если не задан `mode` и `sizeX=regular` */
  .Group--mode-none .CardGrid {
    padding-left: 8px;
    padding-right: 8px;
  }
}
```
