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
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ image: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLImageElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `content`: свойства для прокидывания в контент обернутый `Tappable`;
   * - `image`: войства для прокидывания в компонент картинки.
   */
  slotProps?: {
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
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ image: { style: { maxHeight: ... } } }`.
   *
   * Максимальная высота изображения.
   */
  maxHeight?: number;
  /**
   * Внешний вид карточки.
   */
  mode?: CardProps['mode'];
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ image: { style: { objectFit: ... } } }`.
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

  slotProps,
  ...restProps
}: ContentCardProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development') {
    /* istanbul ignore if: не проверяем в тестах */
    if (getRef) {
      warn('Свойство `getRef` устаревшее, используйте `slotProps={ image: { getRootRef: ... } }`');
    }
    /* istanbul ignore if: не проверяем в тестах */
    if (maxHeight) {
      warn(
        'Свойство `maxHeight` устаревшее, используйте `slotProps={ image: { style: { maxHeight: ... } } }`',
      );
    }
    /* istanbul ignore if: не проверяем в тестах */
    if (imageObjectFit) {
      warn(
        'Свойство `imageObjectFit` устаревшее, используйте `slotProps={ image: { style: { objectFit: ... } } }`',
      );
    }
  }

  const { className, ...rootRest } = useMergeProps(
    {
      className: rootClassName,
      style,
      getRootRef,
    },
    slotProps?.root,
  );

  const contentRest = useMergeProps({ hasHover, hasActive, ...restProps }, slotProps?.content);

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
    slotProps?.image,
  );

  return (
    <Card
      mode={mode}
      Component={Component}
      className={classNames(restProps.disabled && styles.disabled, className)}
      {...rootRest}
    >
      <Tappable baseClassName={styles.tappable} {...contentRest}>
        {(imageRest.src || imageRest.srcSet) && (
          <RootComponent
            Component="img"
            baseClassName={styles.img}
            baseStyle={{ maxHeight, objectFit: imageObjectFit }}
            {...(imageRest as React.AllHTMLAttributes<HTMLImageElement>)}
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
