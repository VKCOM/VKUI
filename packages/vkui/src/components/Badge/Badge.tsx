import { classNames } from '@vkontakte/vkjs';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Badge.module.css';

const stylesMode = {
  new: styles.modeNew,
  prominent: styles.modeProminent,
};

export interface BadgeProps extends RootComponentProps<HTMLSpanElement> {
  mode?: 'new' | 'prominent';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Badge
 */
export const Badge = ({ mode = 'new', children, ...restProps }: BadgeProps): React.ReactNode => (
  <RootComponent
    Component="span"
    baseClassName={classNames(styles.host, 'vkuiInternalBadge', stylesMode[mode])}
    {...restProps}
  >
    {children && <VisuallyHidden>{children}</VisuallyHidden>}
  </RootComponent>
);
