import type * as React from 'react';
import type { HasRootRef } from '../../../types';
import type { ImageBaseExpectedIconProps } from '../types';

export interface ImageBaseOverlayCommonProps
  extends React.AriaAttributes,
    HasRootRef<HTMLDivElement> {
  /**
   * Задаёт тему оформления.
   *
   * > По умолчанию берётся из параметра `appearance` в `ConfigProvider`.
   */
  theme?: 'dark' | 'light' | undefined;
  /**
   * Определяет каким образом должен показываться оверлей.
   *
   * - `"on-hover"` – на наведение указателя мыши.
   * - `"always"` – всегда показывать.
   *
   * > По умолчанию определяется в зависимости от того, есть ли у пользователя мышь или нет.
   * > Определение просиходит с помощью двойного рендера, так что на устройствах без мыши
   * > оверлей покажется не раньше второго рендера.
   * > Если это критично (например при SSR), то старайтесь явно указывать значение `visibility`, либо используйте
   * > [AdaptivityProvider](#/AdaptivityProvider) для того, чтобы явно определить `hasPointer`.
   */
  visibility?: 'on-hover' | 'always' | undefined;
  /**
   * `className` для компонента.
   */
  className?: string | undefined;
}

export interface ImageBaseOverlayInteractiveProps extends ImageBaseOverlayCommonProps {
  /**
   * Обработчик взаимодействия с элементом.
   */
  onClick: React.MouseEventHandler<HTMLElement>;
  /**
   * Принимает иконку.
   *
   *
   * > 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getOverlayIconSizeByImageBaseSize()`.
   *
   * > Предпочтительней использовать иконки из `@vkontakte/icons`.
   *
   * > 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же
   * > чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы
   * > использовали иконку.
   */
  children: React.ReactElement<ImageBaseExpectedIconProps>;
}

export interface ImageBaseOverlayNonInteractiveProps extends ImageBaseOverlayCommonProps {
  /**
   * По умолчанию сам компонент является интерактивным элементом. Передав значение равное `'undefined'` или не передав этот параметр вовсе, можно отключить
   * такое поведение, что дает возможность передавать отдельные интерактивные элементы в `children`.
   */
  onClick?: undefined;
  /**
   * Содержимое.
   */
  children: React.ReactNode;
}
