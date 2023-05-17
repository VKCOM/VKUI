import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { HasComponent, HasRef, HasRootRef } from '../../types';
import { Avatar } from '../Avatar/Avatar';
import { Tappable } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './HorizontalCell.module.css';

interface CellTypographyProps extends React.HTMLAttributes<HTMLDivElement> {
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
  const platform = usePlatform();

  return (
    <div
      ref={getRootRef}
      style={style}
      className={classNames(
        styles['HorizontalCell'],
        {
          s: styles['HorizontalCell--size-s'],
          m: styles['HorizontalCell--size-m'],
          l: styles['HorizontalCell--size-l'],
        }[size],
        platform === Platform.IOS && styles['HorizontalCell--ios'],
        className,
      )}
    >
      <Tappable className={styles['HorizontalCell__body']} getRootRef={getRef} {...restProps}>
        {hasReactNode(children) && (
          <div className={styles['HorizontalCell__image']}>{children}</div>
        )}
        <div className={styles['HorizontalCell__content']}>
          {hasReactNode(header) && <CellTypography size={size}>{header}</CellTypography>}
          {hasReactNode(subtitle) && (
            <Footnote className={styles['HorizontalCell__subtitle']}>{subtitle}</Footnote>
          )}
          {hasReactNode(extraSubtitle) && (
            <Footnote className={styles['HorizontalCell__subtitle']}>{extraSubtitle}</Footnote>
          )}
        </div>
      </Tappable>
    </div>
  );
};
