import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { ImageBaseContext } from '../context';
import type { ImageBaseExpectedIconProps } from '../types';
import { validateBadgeIcon } from '../validators';
import styles from './ImageBaseBadge.module.css';

const backgroundStyles = {
  stroke: styles['ImageBaseBadge--background-stroke'],
  shadow: styles['ImageBaseBadge--background-shadow'],
};

export interface ImageBaseBadgeProps extends React.AriaAttributes {
  /**
   * Вид подложки под иконку.
   *
   * - `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).
   * - `"shadow"` – добавляет небольшую тень.
   */
  background?: 'stroke' | 'shadow';
  /**
   * Принимает иконку.
   *
   * > 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.
   *
   * > Предпочтительней использовать иконки из `@vkontakte/icons`.
   *
   * > 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же
   * > чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы
   * > использовали иконку.
   */
  children: React.ReactElement<ImageBaseExpectedIconProps>;
  className?: string;
}

/**
 * Бейдж в правом нижнем углу компонента.
 *
 * > Не используйте при `size < 24`
 */
export const ImageBaseBadge = ({
  background = 'shadow',
  children,
  className,
  ...restProps
}: ImageBaseBadgeProps) => {
  if (process.env.NODE_ENV === 'development') {
    if (children) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { size } = React.useContext(ImageBaseContext);
      validateBadgeIcon(size, { name: 'children', value: children });
    }
  }

  return (
    <div
      {...restProps}
      className={classNames(styles['ImageBaseBadge'], backgroundStyles[background], className)}
    >
      {children}
    </div>
  );
};
