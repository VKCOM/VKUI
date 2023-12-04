import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { hasAccessibleName } from '../../lib/accessibility';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import { Tappable, TappableProps } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './IconButton.module.css';

const sizeYClassNames = {
  none: styles['IconButton--sizeY-none'],
  compact: styles['IconButton--sizeY-compact'],
} as const;

export interface IconButtonProps extends TappableProps {
  /**
   * Текст кнопки-иконки. Делает ее доступной для ассистивных технологий
   */
  label?: string;
}

const warn = warnOnce('IconButton');

/**
 * @see https://vkcom.github.io/VKUI/#/IconButton
 */
export const IconButton = ({ label, children, className, ...restProps }: IconButtonProps) => {
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();

  if (process.env.NODE_ENV === 'development') {
    /* istanbul ignore next: проверка в dev mode, тест на hasAccessibleName() есть в lib/accessibility.test.tsx */
    const isAccessible = hasAccessibleName({
      children: [children, label],
      ...restProps,
    });

    if (!isAccessible) {
      warn(COMMON_WARNINGS.a11y[restProps.href ? 'link-name' : 'button-name'], 'error');
    }
  }

  return (
    <Tappable
      activeEffectDelay={200}
      activeMode="background"
      Component={restProps.href ? 'a' : 'button'}
      {...restProps}
      className={classNames(
        styles['IconButton'],
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        platform === 'ios' && styles['IconButton--ios'],
        className,
      )}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {children}
    </Tappable>
  );
};
