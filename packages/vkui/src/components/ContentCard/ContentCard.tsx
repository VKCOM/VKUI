import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { getFetchPriorityProp } from '../../lib/utils';
import type { HasComponent, HasRef, HasRootRef } from '../../types';
import { Card, type CardProps } from '../Card/Card';
import { Tappable, type TappableProps } from '../Tappable/Tappable';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Text } from '../Typography/Text/Text';
import styles from './ContentCard.module.css';

export interface ContentCardProps
  extends HasRootRef<HTMLDivElement>,
    HasComponent,
    Omit<TappableProps, 'getRootRef' | 'crossOrigin' | 'title'>,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof React.HTMLAttributes<HTMLImageElement>>,
    HasRef<HTMLImageElement> {
  /**
   Текст над заголовком
   */
  overTitle?: React.ReactNode;
  /**
   Заголовок
   */
  title?: React.ReactNode;
  /**
   Позволяет поменять тег используемый для заголовка
   */
  titleComponent?: React.ElementType;
  /**
   Текст
   */
  description?: React.ReactNode;
  /**
   Нижний текст
   */
  caption?: React.ReactNode;
  /**
    Максимальная высота изображения
   */
  maxHeight?: number;
  mode?: CardProps['mode'];
  /**
   * Пользовательское значения стиля `object-fit` для картинки
   * Подробнее можно почитать в [документации](https://developer.mozilla.org/ru/docs/Web/CSS/object-fit)
   */
  imageObjectFit?: React.CSSProperties['objectFit'];
}

/**
 * @see https://vkcom.github.io/VKUI/#/ContentCard
 */
export const ContentCard = ({
  overTitle,
  title,
  titleComponent = 'span',
  description,
  caption,
  // card props
  className,
  mode = 'shadow',
  style,
  getRootRef,
  // img props
  getRef,
  maxHeight,
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
  fetchPriority,
  imageObjectFit,
  hasHover = false,
  hasActive = false,
  Component = 'li',
  ...restProps
}: ContentCardProps): React.ReactNode => {
  return (
    <Card
      mode={mode}
      getRootRef={getRootRef}
      Component={Component}
      style={style}
      className={classNames(restProps.disabled && styles.disabled, className)}
    >
      <Tappable
        {...restProps}
        hasHover={hasHover}
        hasActive={hasActive}
        className={styles.tappable}
      >
        {(src || srcSet) && (
          <img
            ref={getRef}
            className={styles.img}
            src={src}
            srcSet={srcSet}
            alt={alt}
            crossOrigin={crossOrigin}
            decoding={decoding}
            loading={loading}
            referrerPolicy={referrerPolicy}
            sizes={sizes}
            useMap={useMap}
            {...getFetchPriorityProp(fetchPriority)}
            height={height}
            width={width}
            style={{ maxHeight, objectFit: imageObjectFit }}
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
