import * as React from 'react';
import { Icon16Spinner, Icon24Spinner, Icon32Spinner, Icon44Spinner } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import styles from './Spinner.module.css';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'regular' | 'medium' | 'large';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spinner
 */
export const Spinner = React.memo(
  ({
    size = 'regular',
    'aria-label': ariaLabel = 'Загружается...',
    className,
    ...restProps
  }: SpinnerProps) => {
    const SpinnerIcon = {
      small: Icon16Spinner,
      regular: Icon24Spinner,
      medium: Icon32Spinner,
      large: Icon44Spinner,
    }[size];

    return (
      <span
        role="status"
        aria-label={ariaLabel}
        {...restProps}
        className={classNames(styles['Spinner'], className)}
      >
        <SpinnerIcon className={styles['Spinner__self']} />
      </span>
    );
  },
);

Spinner.displayName = 'Spinner';
