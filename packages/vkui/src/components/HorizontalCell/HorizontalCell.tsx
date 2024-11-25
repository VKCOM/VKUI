import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { mergeStyle } from '../../helpers/mergeStyle';
import type {
  CSSCustomProperties,
  HasRef,
  HasRootRef,
  HTMLAttributesWithRootRef,
  LiteralUnion,
} from '../../types';
import { Avatar } from '../Avatar/Avatar';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './HorizontalCell.module.css';

export const CUSTOM_CSS_TOKEN_FOR_CELL_WIDTH = '--vkui_internal--cell_width';

const stylesSize = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
  xl: styles.sizeXL,
  auto: styles.sizeAuto,
};

type HorizontalCellSizes = 's' | 'm' | 'l' | 'xl' | 'auto';

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
  extends Omit<TappableProps, 'size' | 'getRootRef' | 'title' | 'borderRadiusMode'>,
    HasRootRef<HTMLDivElement>,
    HasRef<HTMLDivElement> {
  /**
   * Ширина компонента
   *
   * Значения `'s' | 'm' | 'l' | 'xl'` определяются дизайн-системой.
   * Значение `auto` позволяет задать динамическую ширину, определяемую контентом.
   * Пользовательскую ширину можно задать через числовое значение.
   */
  size?: LiteralUnion<HorizontalCellSizes, number>;
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
  const hasTypography =
    hasReactNode(title) || hasReactNode(subtitle) || hasReactNode(extraSubtitle);

  const customProperties: CSSCustomProperties | undefined =
    typeof size === 'number' ? { [CUSTOM_CSS_TOKEN_FOR_CELL_WIDTH]: `${size}px` } : undefined;

  return (
    <div
      ref={getRootRef}
      style={mergeStyle(customProperties, style)}
      className={classNames(
        styles.host,
        typeof size === 'string' && stylesSize[size],
        size !== 'auto' && styles.sized,
        className,
      )}
    >
      <Tappable className={styles.body} getRootRef={getRef} {...restProps}>
        {hasReactNode(children) && <div className={styles.image}>{children}</div>}
        {hasTypography && (
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
