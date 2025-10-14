'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps';
import { warnOnce } from '../../lib/warnOnce';
import type { CSSCustomProperties, HasDataAttribute, HasRootRef, LiteralUnion } from '../../types';
import { Avatar } from '../Avatar/Avatar';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './HorizontalCell.module.css';

const warn = warnOnce('HorizontalCell');

export const CUSTOM_CSS_TOKEN_FOR_CELL_WIDTH = '--vkui_internal--cell_width';

const stylesSize = {
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
  xl: styles.sizeXL,
  auto: styles.sizeAuto,
};

const textAlignClassNames = {
  center: styles.textAlignCenter,
  end: styles.textAlignEnd,
};

type HorizontalCellSizes = 's' | 'm' | 'l' | 'xl' | 'auto';

export interface HorizontalCellProps
  extends Omit<TappableOmitProps, 'size' | 'getRootRef' | 'title' | 'borderRadiusMode'>,
    HasRootRef<HTMLDivElement> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ content: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLDivElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `content`: свойства для прокидывания в контент обернутый `Tappable`.
   */
  slotProps?: {
    root?: React.HTMLAttributes<HTMLDivElement> & HasRootRef<HTMLDivElement> & HasDataAttribute;
    content?: Omit<TappableOmitProps, 'size' | 'getRootRef' | 'title' | 'borderRadiusMode'> &
      HasRootRef<HTMLDivElement> &
      HasDataAttribute;
  };
  /**
   * Ширина компонента.
   *
   * Значения `'s' | 'm' | 'l' | 'xl'` определяются дизайн-системой.
   * Значение `auto` позволяет задать динамическую ширину, определяемую контентом.
   * Пользовательскую ширину можно задать через числовое значение.
   */
  size?: LiteralUnion<HorizontalCellSizes, number>;
  /**
   * Заголовок.
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
  /**
   * Задает выравнивание типографики. По умолчанию `center` для `size=s`, иначе `start`.
   */
  textAlign?: 'start' | 'center' | 'end';
  /**
   * Отключает формирование отступов у крайних элементов.
   *
   * Актуально для использования в многострочных списках.
   */
  noPadding?: boolean;
  /**
   * Позволяет передать типографический компонент, используемый для `title`.
   * По умолчанию `Caption` для `size=s`, иначе `Subhead`.
   */
  TitleComponent?: React.ElementType;
}

/**
 * @see https://vkui.io/components/horizontal-cell
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
  textAlign = size === 's' ? 'center' : 'start',
  noPadding = false,
  TitleComponent = size === 's' ? Caption : Subhead,

  slotProps,
  ...restProps
}: HorizontalCellProps): React.ReactNode => {
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ content: { getRootRef: ... } }`');
  }

  const rootRest = useMergeProps(
    {
      className,
      style,
      getRootRef,
    },
    slotProps?.root,
  );

  const contentRest = useMergeProps(
    {
      getRootRef: getRef,
      ...restProps,
    },
    slotProps?.content,
  );

  const hasTypography =
    hasReactNode(title) || hasReactNode(subtitle) || hasReactNode(extraSubtitle);

  const customProperties: CSSCustomProperties | undefined =
    typeof size === 'number' ? { [CUSTOM_CSS_TOKEN_FOR_CELL_WIDTH]: `${size}px` } : undefined;

  return (
    <RootComponent
      baseStyle={customProperties}
      baseClassName={classNames(
        styles.host,
        typeof size === 'string' && stylesSize[size],
        size !== 'auto' && styles.sized,
        typeof size === 'number' && styles.customSize,
        noPadding && styles.noPadding,
      )}
      {...rootRest}
    >
      <Tappable baseClassName={styles.body} {...contentRest}>
        {hasReactNode(children) && <div className={styles.image}>{children}</div>}
        {hasTypography && (
          <div
            className={classNames(
              styles.content,
              textAlign !== 'start' && textAlignClassNames[textAlign],
            )}
          >
            {hasReactNode(title) && <TitleComponent>{title}</TitleComponent>}
            {hasReactNode(subtitle) && <Footnote className={styles.subtitle}>{subtitle}</Footnote>}
            {hasReactNode(extraSubtitle) && (
              <Footnote className={styles.subtitle}>{extraSubtitle}</Footnote>
            )}
          </div>
        )}
      </Tappable>
    </RootComponent>
  );
};
