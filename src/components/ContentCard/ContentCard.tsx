import { FC, ImgHTMLAttributes, ReactNode } from 'react';
import Card, { CardProps } from '../Card/Card';
import Caption from '../Typography/Caption/Caption';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Tappable from '../Tappable/Tappable';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';
import { HasRef, HasRootRef } from '../../types';

export interface ContentCardProps extends HasRootRef<HTMLDivElement>, ImgHTMLAttributes<HTMLImageElement>, HasRef<HTMLImageElement>{
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

const ContentCard: FC<ContentCardProps> = (props: ContentCardProps) => {
  const { getRef, onClick, onTouchEnd, onMouseLeave, onMouseUp, onTouchStart, onMouseDown, subtitle, header, text, caption, className, image, maxHeight, disabled, mode, alt, style, getRootRef, ...restProps } = props;
  const platform = usePlatform();

  return (
    <Card mode={mode} getRootRef={getRootRef} vkuiClass={getClassName('ContentCard', platform)} style={style} className={className}>
      <Tappable disabled={disabled} onClick={onClick} onMouseDown={onMouseDown} onTouchStart={onTouchStart} onMouseUp={onMouseUp} onMouseLeave={onMouseLeave} onTouchEnd={onTouchEnd} vkuiClass="ContentCard__tappable">
        {image && <img {...restProps} ref={getRef} src={image} alt={alt} vkuiClass="ContentCard__img" style={{ maxHeight: props.maxHeight }} width="100%" />}
        <div vkuiClass="ContentCard__body">
          {hasReactNode(subtitle) && <Caption caps vkuiClass="ContentCard__caption" weight="semibold" level="3">{subtitle}</Caption>}
          {hasReactNode(header) && <Title vkuiClass="ContentCard__title" weight="semibold" level="3">{header}</Title>}
          {hasReactNode(text) && <Text vkuiClass="ContentCard__text" weight="regular">{text}</Text>}
          {hasReactNode(caption) && <Caption vkuiClass="ContentCard__caption" weight="regular" level="1">{caption}</Caption>}
        </div>
      </Tappable>
    </Card>
  );
};

ContentCard.defaultProps = {
  mode: 'shadow',
};

export default ContentCard;
