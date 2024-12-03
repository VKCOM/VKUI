import * as React from 'react';
import { Icon16Spinner, Icon24Spinner, Icon32Spinner, Icon44Spinner } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { SpinnerAnimation } from './SpinnerAnimation';
import styles from './Spinner.module.css';

const spinnerIconMap = {
  s: Icon16Spinner,
  m: Icon24Spinner,
  l: Icon32Spinner,
  xl: Icon44Spinner,
};

export interface SpinnerProps extends HTMLAttributesWithRootRef<HTMLSpanElement> {
  size?: 's' | 'm' | 'l' | 'xl';
  disableAnimation?: boolean;
  /**
   * Задать цвет можно будет через свойство color родителя
   */
  noColor?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spinner
 */
export const Spinner: React.FC<SpinnerProps> = React.memo(
  ({
    size = 'm',
    children = 'Загружается...',
    disableAnimation = false,
    noColor = false,
    ...restProps
  }: SpinnerProps) => {
    const SpinnerIcon = spinnerIconMap[size];

    return (
      <RootComponent
        Component="span"
        role="status"
        {...restProps}
        baseClassName={classNames(styles.host, noColor && styles.noColor)}
      >
        <SpinnerIcon>{disableAnimation ? null : <SpinnerAnimation size={size} />}</SpinnerIcon>
        {hasReactNode(children) && <VisuallyHidden>{children}</VisuallyHidden>}
      </RootComponent>
    );
  },
);

Spinner.displayName = 'Spinner';
