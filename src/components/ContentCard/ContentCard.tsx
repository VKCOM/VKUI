import * as React from 'react';
import Card, { CardProps } from '../Card/Card';
import Caption from '../Typography/Caption/Caption';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Tappable from '../Tappable/Tappable';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import { HasRef, HasRootRef } from '../../types';
import './ContentCard.css';

export interface ContentCardProps extends HasRootRef<HTMLDivElement>, React.ImgHTMLAttributes<HTMLImageElement>, HasRef<HTMLImageElement> {
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
    URL или путь к изображению
   */
  src?: string;
  /**
    @deprecated будет удалено в 5.0.0. Используйте src
   */
  image?: string;
  /**
    Максимальная высота изображения
   */
  maxHeight?: number;
  /**
    Аналогично alt для img
   */
  alt?: string;
  /**
    Отключает Tappable у карточки
   */
  disabled?: boolean;
  /**
   В точности как у `<Card/>`
   */
  mode?: CardProps['mode'];
}

const ContentCard: React.FC<ContentCardProps> = (props: ContentCardProps) => {
  const {
    subtitle,
    header,
    text,
    caption,
    // card props
    className,
    mode,
    style,
    getRootRef,
    // img props
    getRef,
    maxHeight,
    image,
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
    ...restProps
  } = props;
  const platform = usePlatform();

  const disabled = restProps.disabled || typeof restProps.onClick !== 'function';

  const source = image || src;

  return (
    <Card mode={mode} getRootRef={getRootRef} vkuiClass={getClassName('ContentCard', platform)} style={style} className={className}>
      <Tappable {...restProps} disabled={disabled} vkuiClass="ContentCard__tappable">
        {(source || srcSet) && (
          <img
            ref={getRef}
            vkuiClass="ContentCard__img"
            src={source}
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
        <div vkuiClass="ContentCard__body">
          {hasReactNode(subtitle) && <Caption caps vkuiClass="ContentCard__text" weight="semibold" level="3">{subtitle}</Caption>}
          {hasReactNode(header) && <Title vkuiClass="ContentCard__text" weight="semibold" level="3">{header}</Title>}
          {hasReactNode(text) && <Text vkuiClass="ContentCard__text" weight="regular">{text}</Text>}
          {hasReactNode(caption) && <Caption vkuiClass="ContentCard__text" weight="regular" level="1">{caption}</Caption>}
        </div>
      </Tappable>
    </Card>
  );
};

ContentCard.defaultProps = {
  mode: 'shadow',
};

export default ContentCard;
