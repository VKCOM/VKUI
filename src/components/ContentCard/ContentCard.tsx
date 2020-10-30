import React, { FunctionComponent, ImgHTMLAttributes, ReactNode } from 'react';
import Card, { CardProps } from '../Card/Card';
import Caption from '../Typography/Caption/Caption';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Tappable from '../Tappable/Tappable';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import { HasRootRef } from '../../types';

export interface ContentCardProps extends HasRootRef<HTMLDivElement>, ImgHTMLAttributes<HTMLImageElement>{
  /**
   Текст над заголовком
   */
  subtitle?: ReactNode;
  /**
   Заголовок
   */
  header?: ReactNode;
  /**
   Текст
   */
  text?: ReactNode;
  /**
   Нижний текст
   */
  caption?: ReactNode;
  /**
    URL или путь к изображению
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

const ContentCard: FunctionComponent = (props: ContentCardProps) => {
  const { subtitle, header, text, caption, className, image, disabled, mode, alt, style, getRootRef, ...restProps } = props;
  const platform = usePlatform();

  return (
    <Card mode={mode} getRootRef={getRootRef} size="l" className={classNames(className, getClassname('ContentCard', platform))} style={style}>
      <Tappable disabled={disabled} className="ContentCard__tappable">
        {image && <img src={image} alt={alt} className="ContentCard__img" style={{ objectFit: 'cover', maxHeight: props.maxHeight }} width="100%" {...restProps} />}
        <div className="ContentCard__body">
          {hasReactNode(subtitle) && <Caption caps className="ContentCard__caption" weight="semibold" level="3">{subtitle}</Caption>}
          {hasReactNode(header) && <Title className="ContentCard__title" weight="semibold" level="3">{header}</Title>}
          {hasReactNode(text) && <Text className="ContentCard__text" weight="regular">{text}</Text>}
          {hasReactNode(caption) && <Caption className="ContentCard__caption" weight="regular" level="1">{caption}</Caption>}
        </div>
      </Tappable>
    </Card>
  );
};

ContentCard.defaultProps = {
  mode: 'shadow',
};

export default ContentCard;
