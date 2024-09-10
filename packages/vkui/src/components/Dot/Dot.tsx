import { classNames } from '@vkontakte/vkjs';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Dot.module.css';

const stylesMode = {
  new: styles['Dot--mode-new'],
  prominent: styles['Dot--mode-prominent'],
};

export interface DotProps extends RootComponentProps<HTMLSpanElement> {
  mode?: 'new' | 'prominent';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Dot
 */
export const Dot = ({ mode = 'new', children, ...restProps }: DotProps): React.ReactNode => (
  <RootComponent
    Component="span"
    baseClassName={classNames(styles['Dot'], stylesMode[mode])}
    {...restProps}
  >
    {children && <VisuallyHidden>{children}</VisuallyHidden>}
  </RootComponent>
);
