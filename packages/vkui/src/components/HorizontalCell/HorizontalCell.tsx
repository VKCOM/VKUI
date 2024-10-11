import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import type { HasRef, HasRootRef, HTMLAttributesWithRootRef } from '../../types';
import { Avatar } from '../Avatar/Avatar';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './HorizontalCell.module.css';

const stylesSize = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
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
  extends Omit<TappableProps, 'size' | 'getRootRef' | 'title'>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  /**
   * Заголовок
   */
  title?: React.ReactNode;
  /**
   * Дополнительная строка текста под `children`.
   */
  subtitle?: React.ReactNode;
  /**
   * Дополнительная строка текста под `children` и `subtitle`.
   */
  extraSubtitle?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/HorizontalCell
 */
export const HorizontalCell = ({
  className,
  title,
  style,
  subtitle,
  size = 's',
  children = <Avatar size={56} />,
  getRootRef,
  getRef,
  extraSubtitle,
  ...restProps
}: HorizontalCellProps): React.ReactNode => {
  return (
    <div
      ref={getRootRef}
      style={style}
      className={classNames(styles.host, stylesSize[size], className)}
    >
      <Tappable className={styles.body} getRootRef={getRef} {...restProps}>
        {hasReactNode(children) && <div className={styles.image}>{children}</div>}
        {(title || subtitle || extraSubtitle) && (
          <div className={styles.content}>
            {hasReactNode(title) && <CellTypography size={size}>{title}</CellTypography>}
            {hasReactNode(subtitle) && <Footnote className={styles.subtitle}>{subtitle}</Footnote>}
            {hasReactNode(extraSubtitle) && (
              <Footnote className={styles.subtitle}>{extraSubtitle}</Footnote>
            )}
          </div>
        )}
      </Tappable>
    </div>
  );
};
