import { classNames } from '@vkontakte/vkjs';
import { resolveLayoutProps } from '../../lib/layouts';
import type { LayoutProps } from '../../lib/layouts/types';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import styles from './Box.module.css';

const displayClassNames = {
  'none': styles.displayNone,
  'inline': styles.displayInline,
  'inline-block': styles.displayInlineBlock,
  'block': styles.displayBlock,
  'contents': styles.displayContents,
};

export interface BoxProps
  extends Omit<RootComponentProps<HTMLElement>, 'baseClassName' | 'baseStyle'>,
    LayoutProps {
  /**
   * Возможность задать css-свойство `display`.
   */
  display?: 'none' | 'inline' | 'inline-block' | 'block' | 'contents';
}

/**
 * @see https://vkui.io/components/box
 *
 * @since 7.9.0
 */
export const Box = ({ className, style, display, ...restProps }: BoxProps) => {
  const resolvedProps = resolveLayoutProps(restProps);

  return (
    <RootComponent
      {...resolvedProps}
      baseClassName={resolvedProps.className}
      baseStyle={resolvedProps.style}
      className={classNames(className, display && displayClassNames[display])}
      style={style}
    />
  );
};
