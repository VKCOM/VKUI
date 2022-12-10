# Гайд по написанию адаптивных компонентов

Есть два способа:

1. **CSS Media Queries**
2. **JS Media Queries**

Для поддержки SSR приоритет мы отдаём _первому способу_.

## CSS Media Queries

Изначально писать адаптивность стоит через **CSS Media Queries**.

Для медиа запросов мы используем [custom-media-queries](https://preset-env.cssdb.org/features/#custom-media-queries).
Значения определяются в функции `getCustomMedias()` в [./shared.js](../shared.js).

При разработке следует предусмотреть возможность переопределения параметров адаптивности через `AdaptivityProvider`,
вот пример:

```tsx
<AdaptivityProvider sizeX="regular">
  <Button>button</Button>
</AdaptivityProvider>
```

Поэтому в `@media` следует применять стили только если компонент имеет CSS класс с модификатором `--sizeX-none`
(адаптивность не переопределена), а также написать стили для `--sizeX-regular` и `--sizeX-compact`.

Для удобного получения `className` в зависимости от адаптивности есть такие функции как:

- [`getHoverClassName()`](../src/helpers/getHoverClassName.ts)
- [`getPointerClassName()`](../src/helpers/getPointerClassName.ts)
- [`getPlatformClassName()`](../src/helpers/getPlatformClassName.ts)
- [`getSizeXClassName()`](../src/helpers/getSizeXClassName.ts)
- [`getSizeYClassName()`](../src/helpers/getSizeYClassName.ts)
- [`getViewHeightClassName()`](../src/helpers/getViewHeightClassName.ts)
- [`getViewWidthClassName()`](../src/helpers/getViewWidthClassName.ts)

Пример:

_Component.tsx_

```tsx
import * as React from 'react';
import { classNames } from '../../lib/classNames';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { getSizeXClassName } from '../../helpers/getSizeXClassName';
import styles from './Component.module.css';

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
      className={classNamesString(styles.Component, getSizeXClassName('Component', sizeX, styles))}
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

В данном случае мы задаём `padding: 10px;` для размера `sizeX-compact` и `padding: 20px;` для размера `sizeX-regular`.
В `@media (--sizeX-compact)` мы задаём `padding: 10px;` для компонента только если `sizeX` не переопределен.

Помимо утилитарных функций, есть хук [`useAdaptivityConditionalRender`](../src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx).

### Подводные камни

В процессе перевода существующих компонентов на новую систему адаптивности возникли места, в которых пришлось отступить
от стандартного поведения.

- `.Group--mode-none`

  В компоненте [Group](../src/components/Group/Group.tsx) появился класс `.Group--mode-none`. Он означает, что у `Group`
  не передан `mode` и не удалось вычислить его автоматически. `.Group--mode-none` должен вести себя как
  `.Group--mode-card` при `sizeX=regular` и как `.Group--mode-plain` при `sizeX=compact`. Пример использования:

  ```css
  .Group--mode-card .CardGrid {
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (--sizeX-regular) {
    /* Применяем стили `.Group--mode-card`, если не задан `mode` и `sizeX=regular` */
    .Group--mode-none .CardGrid {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  ```

## JS Media Queries

**JS Media Queries** мы используем только для компонентов, которые гарантировано будут показаны после **первого**
рендера страницы. Иначе пользователи, которые используют SSR, получат ошибку при гидратации. На стороне сервера нет
доступа к клиентским API, которые используются для реализации **JS Media Queries**.

Зачастую это _всплывающие окна_: **модалки**, **тултипы**, **дропдауны** и др.

### Почему мы не рекомендуем использовать **CSS Media Queries** для всплывающих окон

В случаях, где внешний вид компонента меняется в зависимости от размера вьюпорта, для адаптивности через CSS мы должны
создать несколько разметок (для мобильного и десктопа, например) и показывать только одну из них. Для _всплывающих окон_
такой подход обозначает дублирование атрибута `id`. При этом с точки зрения UX такие окна появляются либо после вызова
их программно, либо после вызова их пользователем, то есть рендериться на сервере они не будут. Поэтому для _всплывающих
окон_ мы используем адаптивность через JS. Для этого создан хук [`useAdaptivityWithJSMediaQueries()`](../src/hooks/useAdaptivityWithJSMediaQueries.ts).

При этом мы помним про показ компонента только после **первого** рендера. Пример:

```tsx
// ❌ bad for SSR
const App = () => {
  return (
    <ModalRoot activeModal="main">
      <ModalPage id="main">Hello World!</ModalPage>
    </ModalRoot>
  );
};

// ✅ good for SSR
const App = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <ModalRoot activeModal="main">
      <ModalPage id="main">Hello World!</ModalPage>
    </ModalRoot>
  ) : null;
};
```

В нашем примере внутри `<ModalRoot />` и `<ModalPage />` используется `useAdaptivityWithJSMediaQueries()` для
переключения компонентов на мобильный или десктопный виды.

В библиотеке логику с состоянием `mounted` инкапсулирует в себе компонент [AppRootPortal](../src/components/AppRoot/AppRootPortal.tsx).
