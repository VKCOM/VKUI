import * as React from 'react';
import { Icon16Spinner, Icon24Spinner, Icon32Spinner, Icon44Spinner } from '@vkontakte/icons';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Spinner.module.css';

export interface SpinnerProps extends HTMLAttributesWithRootRef<HTMLSpanElement> {
  size?: 'small' | 'regular' | 'medium' | 'large';
  disableAnimation?: boolean;
}

const warn = warnOnce('Spinner');
/**
 * @see https://vkcom.github.io/VKUI/#/Spinner
 */
export const Spinner = React.memo(
  ({
    size = 'regular',
    children = 'Загружается...',
    // TODO [>=6]: Удалить автоматическое приведение aria-label
    'aria-label': ariaLabel = 'Загружается...',
    disableAnimation,
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

    // TODO [>=6]: Удалить варнинг
    if (process.env.NODE_ENV === 'development') {
      if (ariaLabel && !children) {
        warn(
          'a11y: Пожалуйста, передавайте ваш текст для ассистивных технологий в children вместо aria-label.',
        );
      }
    }

    return (
      <RootComponent
        Component="span"
        role="status"
        {...restProps}
        baseClassName={styles['Spinner']}
      >
        <SpinnerIcon>
          {!disableAnimation && (
            // TODO [a11y]: use reduced motion hook?
            //              https://github.com/VKCOM/VKUI/pull/4673
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
        <VisuallyHidden>{children ?? ariaLabel}</VisuallyHidden>
      </RootComponent>
    );
  },
);

Spinner.displayName = 'Spinner';
