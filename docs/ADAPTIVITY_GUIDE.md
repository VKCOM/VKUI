# Гайд по написанию адаптивных компонентов

Есть два способа:

1. **CSS Media Queries**
2. **JS Media Queries**

Для поддержки SSR приоритет мы отдаём _первому способу_.

## CSS Media Queries

Изначально писать адаптивность стоит через **CSS Media Queries**.

Для медиа запросов мы используем [custom-media-queries](https://preset-env.cssdb.org/features/#custom-media-queries).
Текущие медиа запросы можно посмотреть в типе [CSSCustomMedias](../packages/vkui/src/lib/adaptivity/types.ts).

При разработке следует предусмотреть возможность переопределения параметров адаптивности через `AdaptivityProvider`.

**Пример 1.**

```tsx
<AdaptivityProvider sizeX="compact">
  <Component>lorem ipsum</Component>
</AdaptivityProvider>
```

_Component.tsx_

```tsx
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import styles from './Component.module.css';

const sizeXClassNames = {
  none: styles.hostSizeXNone, // означает, что sizeX не определён в AdaptivityProvider – используем `@media`
  compact: styles.hostSizeXCompact,
};

const Component = () => {
  const { sizeX = 'none' } = useAdaptivity();

  return (
    <div
      className={classNames(
        styles.host,
        // компонент слушает только compact
        sizeX !== 'regular' && sizeXClassNames[sizeX],
      )}
    />
  );
};
```

_Component.module.css_

```css
/* Равносильно модификатору `sizeXRegular` */
.host {
  color: red;
  padding: 20px;
}

.sizeXCompact {
  padding: 10px;
}

@media (--sizeX-compact) {
  .sizeXNone {
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
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { ViewWidth, viewWidthToClassName } from '../../../lib/adaptivity';
import styles from './Component.module.css';

const viewWidthClassNames = {
  none: styles.viewWidthNone, // означает, что viewWidth не определён в AdaptivityProvider – используем `@media`
  smallTabletMinus: styles.viewWidthSmallTabletMinus,
  smallTabletPlus: styles.viewWidthSmallTabletPlus,
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
.host {
  color: red;
}

.viewWidthSmallTabletPlus {
  color: blue;
}

@media (--viewWidth-smallTabletPlus) {
  .viewWidthNone {
    color: blue;
  }
}

.viewWidthSmallTabletMinus {
  color: green;
}

@media (--viewWidth-smallTabletMinus) {
  .viewWidthNone {
    color: green;
  }
}
```

По историческим причинам, в JS (см. [AdaptivityProvider](../packages/vkui/src/components/AdaptivityProvider/AdaptivityProvider.tsx))
и в CSS (см. [customMedias.generated.css](../packages/vkui/src/styles/customMedias.generated.css)) по-разному определяются брейкпоинты. В CSS они
выходят более расширенными, а в JS ограничиваются точечными значениями. Для конвертации этой разницы создана функция [viewWidthToClassName](../packages/vkui/src/lib/adaptivity/functions.ts).

### Хук [useAdaptivityConditionalRender](../packages/vkui/src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx)

Помогает скрывать/показать блок в зависимости от `@media` или `AdaptivityProvider`.

### Подводные камни

В процессе перевода существующих компонентов на новую систему адаптивности возникли места, в которых пришлось отступить
от стандартного поведения.

- `.modeNone`

  В компоненте [Group](../packages/vkui/src/components/Group/Group.tsx) появился класс `.modeNone`. Он означает, что у `Group`
  не передан `mode` и не удалось вычислить его автоматически. `.modeNone` должен вести себя как
  `.modeCard` при `sizeX=regular` и как `.modePlain` при `sizeX=compact`. Пример использования:

  ```css
  .modeCard .сomponent {
    padding-inline: 8px;
  }

  @media (--sizeX-regular) {
    /* Применяем стили `.modeCard`, если не задан `mode` и `sizeX=regular` */
    .modeNone .in {
      padding-inline: 8px;
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
