import * as React from 'react';
import { Card, CardProps } from '../Card/Card';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Headline } from '../Typography/Headline/Headline';
import { Text } from '../Typography/Text/Text';
import { TappableProps, Tappable } from '../Tappable/Tappable';
import { HasRef, HasRootRef } from '../../types';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { COMMON_WARNINGS, warnOnce } from '../../lib/warnOnce';
import styles from './ContentCard.module.css';

export interface ContentCardProps
  extends HasRootRef<HTMLDivElement>,
    Omit<TappableProps, 'getRootRef' | 'crossOrigin'>,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof React.HTMLAttributes<HTMLImageElement>>,
    HasRef<HTMLImageElement> {
  /**
   Текст над заголовком
   */
  subtitle?: React.ReactNode;
  /**
   Заголовок
   */
  header?: React.ReactNode;
  /**
   Текст
   */
  text?: React.ReactNode;
  /**
   Нижний текст
   */
  caption?: React.ReactNode;
  /**
    Максимальная высота изображения
   */
  maxHeight?: number;
  mode?: CardProps['mode'];
}

const warn = warnOnce('ContentCard');
const IS_DEV = process.env.NODE_ENV === 'development';

/**
 * @see https://vkcom.github.io/VKUI/#/ContentCard
 */
export const ContentCard = ({
  subtitle,
  header,
  text,
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
  alt,
  width,
  height,
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  useMap,
  hasHover = false,
  hasActive = false,
  ...restProps
}: ContentCardProps) => {
  if (IS_DEV && (src || srcSet) && !alt) {
    warn(COMMON_WARNINGS.a11y['image-alt'], 'error');
  }

  return (
    <Card
      mode={mode}
      getRootRef={getRootRef}
      style={style}
      className={classNames(
        styles['ContentCard'],
        restProps.disabled && styles['ContentCard--disabled'],
        className,
      )}
    >
      <Tappable
        {...restProps}
        disabled={restProps.disabled || (!restProps.onClick && !restProps.href)}
        hasHover={hasHover}
        hasActive={hasActive}
        className={styles['ContentCard__tappable']}
      >
        {(src || srcSet) && (
          <img
            ref={getRef}
            className={styles['ContentCard__img']}
            src={src}
            srcSet={srcSet}
            alt={alt}
            crossOrigin={crossOrigin}
            decoding={decoding}
            loading={loading}
            referrerPolicy={referrerPolicy}
            sizes={sizes}
            useMap={useMap}
            height={height}
            style={{ maxHeight }}
            width="100%"
          />
        )}
        <div className={styles['ContentCard__body']}>
          {hasReactNode(subtitle) && (
            <Caption
              className={classNames(styles['ContentCard__text'], styles['ContentCard__subtitle'])}
              weight="1"
              level="3"
              caps
            >
              {subtitle}
            </Caption>
          )}
          {hasReactNode(header) && (
            <Headline className={styles['ContentCard__text']} weight="2" level="1">
              {header}
            </Headline>
          )}
          {hasReactNode(text) && <Text className={styles['ContentCard__text']}>{text}</Text>}
          {hasReactNode(caption) && (
            <Footnote
              className={classNames(styles['ContentCard__text'], styles['ContentCard__caption'])}
            >
              {caption}
            </Footnote>
          )}
        </div>
      </Tappable>
    </Card>
  );
};
