import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasChildren } from '../../types';
import styles from './Spacing.module.css';

export interface SpacingProps extends React.HTMLAttributes<HTMLDivElement>, HasChildren {
  /**
   * Высота спэйсинга
   */
  size?: number;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spacing
 */
export const Spacing = ({ size = 8, style: styleProp, className, ...restProps }: SpacingProps) => {
  const style: React.CSSProperties = {
    height: size,
    padding: `${size / 2}px 0`,
    ...styleProp,
  };

  return <div {...restProps} className={classNames(className, styles['Spacing'])} style={style} />;
};
