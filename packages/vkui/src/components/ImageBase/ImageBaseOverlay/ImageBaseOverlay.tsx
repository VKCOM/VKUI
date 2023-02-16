import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityHasPointer } from '../../../hooks/useAdaptivityHasPointer';
import { useAppearance } from '../../../hooks/useAppearance';
import { Tappable } from '../../Tappable/Tappable';
import { ImageBaseContext } from '../context';
import type { ImageBaseExpectedIconProps } from '../types';
import { validateOverlayIcon } from '../validators';
import styles from './ImageBaseOverlay.module.css';

export interface ImageBaseOverlayProps extends React.AriaAttributes {
  /**
   * Задаёт тему оформления.
   *
   * > По умолчанию берётся из параметра `appearance` в `ConfigProvider`.
   */
  theme?: 'dark' | 'light';
  /**
   * Определяет каким образом должен показываться оверлей.
   *
   * - `"on-hover"` – на наведение указателя мыши.
   * - `"always"` – всегда показывать.
   *
   * > По умолчанию определяется в зависимости от того, есть ли у пользователя мышь или нет.
   */
  visibility?: 'on-hover' | 'always';
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
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

/**
 * Интерактивный оверлей над картинкой.
 */
export const ImageBaseOverlay = ({
  className,
  theme: themeProp,
  visibility: visibilityProp,
  children,
  onClick,
  ...restProps
}: ImageBaseOverlayProps) => {
  const appearance = useAppearance();
  const hasPointer = useAdaptivityHasPointer();
  const theme = themeProp ?? appearance;
  const visibility = visibilityProp ?? (hasPointer ? 'on-hover' : 'always');

  if (process.env.NODE_ENV === 'development') {
    if (children) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { size } = React.useContext(ImageBaseContext);
      validateOverlayIcon(size, { name: 'children', value: children });
    }
  }

  return (
    <Tappable
      {...restProps}
      type="button"
      Component="button"
      className={classNames(
        styles['ImageBaseOverlay'],
        visibility === 'always' && styles['ImageBaseOverlay--visible'],
        theme === 'light' && styles['ImageBaseOverlay--theme-light'],
        theme === 'dark' && styles['ImageBaseOverlay--theme-dark'],
        className,
      )}
      hasHover={visibility === 'on-hover'}
      hoverMode={visibility === 'on-hover' ? styles['ImageBaseOverlay--visible'] : undefined}
      focusVisibleMode={styles['ImageBaseOverlay--focus-visible']}
      hasActive={false}
      onClick={onClick}
    >
      {children}
    </Tappable>
  );
};
