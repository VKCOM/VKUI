# Гайд по написанию адаптивных компонентов

Есть два способа:

1. **CSS Media Queries**
2. **JS Media Queries**

Для поддержки SSR приоритет мы отдаём _первому способу_.

## CSS Media Queries

Изначально писать адаптивность стоит через **CSS Media Queries**.

Для медиа запросов мы используем [custom-media-queries](https://preset-env.cssdb.org/features/#custom-media-queries).
Значения определяются в функции `getCustomMedias()` в [./packages/vkui/shared.config.js](../packages/vkui/shared.config.js).

При разработке следует предусмотреть возможность переопределения параметров адаптивности через `AdaptivityProvider`.

**Пример 1.**

```tsx
<AdaptivityProvider sizeX={SizeType.COMPACT}>
  <Component>lorem ipsum</Component>
</AdaptivityProvider>
```

_Component.tsx_

```tsx
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../../lib/adaptivity';
import styles from './Component.module.css';

const sizeXClassNames = {
  none: styles['Component--sizeX-none'], // означает, что sizeX не определён в AdaptivityProvider – используем `@media`
  [SizeType.COMPACT]: styles['Component--sizeX-compact'],
};

const Component = () => {
  const { sizeX = 'none' } = useAdaptivity();

  return (
    <div
      className={classNames(
        styles.Component,
        // компонент слушает только compact
        sizeX !== SizeType.REGULAR && sizeXClassNames[sizeX],
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

.Component--sizeX-compact {
  padding: 10px;
}

@media (--sizeX-compact) {
  .Component--sizeX-none {
    padding: 10px;
  }
}
```

Мы задаём `padding: 10px;` для размера `sizeX-compact` и `padding: 20px;` для размера `sizeX-regular`.
В `@media (--sizeX-compact)` мы задаём `padding: 10px;` для компонента только если `sizeX` не переопределен.

**Пример 2.**

```tsx
<AdaptivityProvider viewWidth={ViewWidth.TABLET}>
  <Component>lorem ipsum</Component>
</AdaptivityProvider>
```

_Component.tsx_

```tsx
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { ViewWidth, viewWidthToClassName } from '../../../lib/adaptivity';
import styles from './Component.module.css';

const viewWidthClassNames = {
  none: styles['Component--viewWidth-none'], // означает, что viewWidth не определён в AdaptivityProvider – используем `@media`
  smallTabletMinus: styles['Component--viewWidth-smallTabletMinus'],
  smallTabletPlus: styles['Component--viewWidth-smallTabletPlus'],
};

const Component = () => {
  const { viewWidth } = useAdaptivity();

  return (
    <div
      className={classNames(styles.Component, viewWidthToClassName(viewWidthClassNames, viewWidth))}
    />
  );
};
```

_Component.module.css_

```css
.Component {
  color: red;
}

.Component--viewWidth-smallTabletPlus {
  color: blue;
}

@media (--viewWidth-smallTabletPlus) {
  .Component--viewWidth-none {
    color: blue;
  }
}

.Component--viewWidth-smallTabletMinus {
  color: green;
}

@media (--viewWidth-smallTabletMinus) {
  .Component--viewWidth-none {
    color: green;
  }
}
```

По историческим причинам, в JS (см. [AdaptivityProvider](../packages/vkui/src/components/AdaptivityProvider/AdaptivityProvider.tsx))
и в CSS (см. [getCustomMedias().js](../packages/vkui/shared.config.js)) по-разному определяются брейкпоинты. В CSS они
выходят более расширенными, а в JS ограничиваются точечными значениями. Для конвертации этой разницы создана функция [viewWidthToClassName](../packages/vkui/src/lib/adaptivity/functions.ts).

### Хук [useAdaptivityConditionalRender](../packages/vkui/src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx)

Помогает скрывать/показать блок в зависимости от `@media` или `AdaptivityProvider`.

### Подводные камни

В процессе перевода существующих компонентов на новую систему адаптивности возникли места, в которых пришлось отступить
от стандартного поведения.

- `.Group--mode-none`

  В компоненте [Group](../packages/vkui/src/components/Group/Group.tsx) появился класс `.Group--mode-none`. Он означает, что у `Group`
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
окон_ мы используем адаптивность через JS. Для этого создан хук [`useAdaptivityWithJSMediaQueries()`](../packages/vkui/src/hooks/useAdaptivityWithJSMediaQueries.ts).

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

В библиотеке логику с состоянием `mounted` инкапсулирует в себе компонент [AppRootPortal](../packages/vkui/src/components/AppRoot/AppRootPortal.tsx).
