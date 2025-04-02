import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import { SpinnerAnimation } from './SpinnerAnimation';
import { Icon16Spinner, Icon24Spinner, Icon32Spinner, Icon44Spinner } from './icons';
import styles from './Spinner.module.css';

const spinnerIconMap = {
  s: Icon16Spinner,
  m: Icon24Spinner,
  l: Icon32Spinner,
  xl: Icon44Spinner,
};

export interface SpinnerProps extends HTMLAttributesWithRootRef<HTMLSpanElement> {
  /**
   * Размер спиннера.
   */
  size?: 's' | 'm' | 'l' | 'xl';
  /**
   * Отключение анимации.
   */
  disableAnimation?: boolean;
  /**
   * Задать цвет можно будет через свойство color родителя.
   */
  noColor?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spinner
 */
// eslint-disable-next-line react/display-name -- используется defineComponentDisplayNames
export const Spinner = React.memo(
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

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(Spinner, 'Spinner');
}
