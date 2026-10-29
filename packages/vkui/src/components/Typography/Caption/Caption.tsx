'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { type HasCaps, Typography, type TypographyProps } from '../Typography';
import { captionClassNames } from './helpers';

export { captionClassNames } from './helpers';

export interface CaptionProps extends TypographyProps, HasCaps {
  /**
   * Уровень заголовка (от 1 до 3).
   */
  level?: '1' | '2' | '3' | undefined;
}

/**
 * Используется для мелких подписей.
 *
 * @see https://vkui.io/components/typography#caption
 */
export const Caption = ({
  className,
  level = '1',
  caps,
  Component = 'span',
  normalize = true,
  inline = false,
  ...restProps
}: CaptionProps): React.ReactNode => {
  const { density = 'none' } = useAdaptivity();

  return (
    <Typography
      Component={Component}
      normalize={normalize}
      inline={inline}
      className={classNames(className, captionClassNames(density, level, caps))}
      {...restProps}
    />
  );
};
