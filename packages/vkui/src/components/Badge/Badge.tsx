import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { RootComponent, RootComponentProps } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Badge.module.css';

const stylesMode = {
  new: styles.hostModeNew,
  prominent: styles.hostModeProminent,
};

export interface BadgeProps extends RootComponentProps<HTMLSpanElement> {
  mode: 'new' | 'prominent';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Badge
 */
export const Badge = ({ mode = 'new', children, ...restProps }: BadgeProps) => (
  <RootComponent
    Component="span"
    baseClassName={classNames(styles.host, stylesMode[mode])}
    {...restProps}
  >
    {children && <VisuallyHidden>{children}</VisuallyHidden>}
  </RootComponent>
);
