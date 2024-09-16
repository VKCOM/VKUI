import { classNames } from '@vkontakte/vkjs';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Badge.module.css';

const stylesMode = {
  new: styles['Badge--mode-new'],
  prominent: styles['Badge--mode-prominent'],
};

export interface BadgeProps extends RootComponentProps<HTMLSpanElement> {
  mode?: 'new' | 'prominent';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Badge
 *
 * TODO [>=7]: переименовать в Dot
 */
export const Badge = ({ mode = 'new', children, ...restProps }: BadgeProps): React.ReactNode => (
  <RootComponent
    Component="span"
    baseClassName={classNames(styles['Badge'], 'vkuiInternalBadge', stylesMode[mode])}
    {...restProps}
  >
    {children && <VisuallyHidden>{children}</VisuallyHidden>}
  </RootComponent>
);
