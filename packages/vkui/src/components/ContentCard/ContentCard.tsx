'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps';
import { getFetchPriorityProp } from '../../lib/utils';
import { warnOnce } from '../../lib/warnOnce';
import type { HasComponent, HasDataAttribute, HasRootRef } from '../../types';
import { Card, type CardProps } from '../Card/Card';
import { RootComponent } from '../RootComponent/RootComponent';
import { Tappable, type TappableOmitProps } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Text } from '../Typography/Text/Text';
import styles from './ContentCard.module.css';

const warn = warnOnce('ContentCard');

export interface ContentCardProps
  extends HasRootRef<HTMLDivElement>,
    HasComponent,
    Omit<TappableOmitProps, 'getRootRef' | 'crossOrigin' | 'title' | 'src'>,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof React.HTMLAttributes<HTMLImageElement>> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotsProps={ image: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLImageElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `content`: свойства для прокидывания в контент обернутый `Tappable`;
   * - `image`: войства для прокидывания в компонент картинки.
   */
  slotsProps?: {
    root?: React.HTMLAttributes<HTMLDivElement> & HasRootRef<HTMLDivElement> & HasDataAttribute;
    content?: Omit<TappableOmitProps, 'getRootRef' | 'crossOrigin' | 'title' | 'src'> &
      HasRootRef<HTMLDivElement> &
      HasDataAttribute;
    image?: React.ImgHTMLAttributes<HTMLImageElement> &
      HasRootRef<HTMLImageElement> &
      HasDataAttribute;
  };
  /**
   Текст над заголовком.
   */
  overTitle?: React.ReactNode;
  /**
   Заголовок.
   */
  title?: React.ReactNode;
  /**
   Позволяет поменять тег используемый для заголовка.
   */
  titleComponent?: React.ElementType;
  /**
   Текст.
   */
  description?: React.ReactNode;
  /**
   Нижний текст.
   */
  caption?: React.ReactNode;
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotsProps={ image: { style: { maxHeight: ... } } }`.
   *
   * Максимальная высота изображения.
   */
  maxHeight?: number;
  /**
   * Внешний вид карточки.
   */
  mode?: CardProps['mode'];
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotsProps={ image: { style: { objectFit: ... } } }`.
   *
   * Пользовательское значения стиля `object-fit` для картинки
   * Подробнее можно почитать в [документации](https://developer.mozilla.org/ru/docs/Web/CSS/object-fit).
   */
  imageObjectFit?: React.CSSProperties['objectFit'];
}

/**
 * @see https://vkui.io/components/content-card
 */
export const ContentCard = ({
  overTitle,
  title,
  titleComponent = 'span',
  description,
  caption,
  // card props
  className: rootClassName,
  mode = 'shadow',
  style,
  getRootRef,
  Component = 'li',
  // img props
  getRef,
  maxHeight,
  imageObjectFit,
  // HTMLImageAttributes
  src,
  srcSet,
  alt = '',
  width = '100%',
  height,
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  useMap,
  fetchPriority: fetchPriorityProp,
  // content props
  hasHover = false,
  hasActive = false,

  slotsProps,
  ...restProps
}: ContentCardProps): React.ReactNode => {
  if (process.env.NODE_ENV === 'development') {
    if (getRef) {
      warn('Свойство `getRef` устаревшее, используйте `slotsProps={ image: { getRootRef: ... } }`');
    }
    if (maxHeight) {
      warn(
        'Свойство `maxHeight` устаревшее, используйте `slotsProps={ image: { style: { maxHeight: ... } } }`',
      );
    }
    if (imageObjectFit) {
      warn(
        'Свойство `imageObjectFit` устаревшее, используйте `slotsProps={ image: { style: { objectFit: ... } } }`',
      );
    }
  }

  const { className, ...rootRest } = useMergeProps(
    {
      className: rootClassName,
      style,
      getRootRef,
    },
    slotsProps?.root,
  );

  const contentRest = useMergeProps({ hasHover, hasActive, ...restProps }, slotsProps?.content);

  const { fetchPriority, ...imageRest } = useMergeProps(
    {
      src,
      srcSet,
      alt,
      width,
      height,
      crossOrigin,
      decoding,
      loading,
      referrerPolicy,
      sizes,
      useMap,
      fetchPriority: fetchPriorityProp,
      getRootRef: getRef,
    },
    slotsProps?.image,
  );

  return (
    <Card
      mode={mode}
      Component={Component}
      className={classNames(restProps.disabled && styles.disabled, className)}
      {...rootRest}
    >
      <Tappable baseClassName={styles.tappable} {...contentRest}>
        {(src || srcSet) && (
          <RootComponent
            Component="img"
            baseClassName={styles.img}
            baseStyle={{ maxHeight, objectFit: imageObjectFit }}
            {...imageRest}
            {...getFetchPriorityProp(fetchPriority)}
          />
        )}
        <div className={styles.body}>
          {hasReactNode(overTitle) && (
            <Caption
              className={classNames(styles.text, styles.overTitle)}
              weight="1"
              level="3"
              caps
            >
              {overTitle}
            </Caption>
          )}
          {hasReactNode(title) && (
            <Headline className={styles.text} weight="2" level="1" Component={titleComponent}>
              {title}
            </Headline>
          )}
          {hasReactNode(description) && <Text className={styles.text}>{description}</Text>}
          {hasReactNode(caption) && (
            <Footnote className={classNames(styles.text, styles.caption)}>{caption}</Footnote>
          )}
        </div>
      </Tappable>
    </Card>
  );
};
