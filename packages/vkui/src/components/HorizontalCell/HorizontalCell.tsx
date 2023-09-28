import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { HasComponent, HasRef, HasRootRef, HTMLAttributesWithRootRef } from '../../types';
import { Avatar } from '../Avatar/Avatar';
import { Tappable } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './HorizontalCell.module.css';

const stylesSize = {
  s: styles['HorizontalCell--size-s'],
  m: styles['HorizontalCell--size-m'],
  l: styles['HorizontalCell--size-l'],
};

interface CellTypographyProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  size: HorizontalCellProps['size'];
}

const CellTypography = ({ size, children, ...restProps }: CellTypographyProps) => {
  return size === 's' ? (
    <Caption {...restProps}>{children}</Caption>
  ) : (
    <Subhead {...restProps}>{children}</Subhead>
  );
};

export interface HorizontalCellProps
  extends React.AnchorHTMLAttributes<HTMLElement>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement>,
    HasComponent {
  size?: 's' | 'm' | 'l';
  /**
   * Заголовок
   */
  header?: React.ReactNode;
  /**
   * Дополнительная строка текста под `children`.
   */
  subtitle?: React.ReactNode;
  /**
   * Дополнительная строка текста под `children` и `subtitle`.
   */
  extraSubtitle?: React.ReactNode;
  disabled?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/HorizontalCell
 */
export const HorizontalCell = ({
  className,
  header,
  style,
  subtitle,
  size = 's',
  children = <Avatar size={56} />,
  getRootRef,
  getRef,
  extraSubtitle,
  ...restProps
}: HorizontalCellProps) => {
  return (
    <div
      ref={getRootRef}
      style={style}
      className={classNames(styles['HorizontalCell'], stylesSize[size], className)}
    >
      <Tappable className={styles['HorizontalCell__body']} getRootRef={getRef} {...restProps}>
        {hasReactNode(children) && (
          <div className={styles['HorizontalCell__image']}>{children}</div>
        )}
        {(header || subtitle || extraSubtitle) && (
          <div className={styles['HorizontalCell__content']}>
            {hasReactNode(header) && <CellTypography size={size}>{header}</CellTypography>}
            {hasReactNode(subtitle) && (
              <Footnote className={styles['HorizontalCell__subtitle']}>{subtitle}</Footnote>
            )}
            {hasReactNode(extraSubtitle) && (
              <Footnote className={styles['HorizontalCell__subtitle']}>{extraSubtitle}</Footnote>
            )}
          </div>
        )}
      </Tappable>
    </div>
  );
};
