import * as React from 'react';
import { Icon16Spinner, Icon24Spinner, Icon32Spinner, Icon44Spinner } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import styles from './Spinner.module.css';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'regular' | 'medium' | 'large';
  disableAnimation?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spinner
 */
export const Spinner = React.memo(
  ({
    size = 'regular',
    'aria-label': ariaLabel = 'Загружается...',
    disableAnimation,
    className,
    ...restProps
  }: SpinnerProps) => {
    const SpinnerIcon = {
      small: Icon16Spinner,
      regular: Icon24Spinner,
      medium: Icon32Spinner,
      large: Icon44Spinner,
    }[size];

    const center = {
      small: 8,
      regular: 12,
      medium: 16,
      large: 22,
    }[size];

    return (
      <span
        role="status"
        aria-label={ariaLabel}
        {...restProps}
        className={classNames(styles['Spinner'], className)}
      >
        <SpinnerIcon>
          {!disableAnimation && (
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from={`0 ${center} ${center}`}
              to={`360 ${center} ${center}`}
              dur="0.7s"
              repeatCount="indefinite"
            />
          )}
        </SpinnerIcon>
      </span>
    );
  },
);

Spinner.displayName = 'Spinner';
