import React, { FC, FunctionComponent, ImgHTMLAttributes, ReactNode } from 'react';
import Card from '../Card/Card';
import Caption from '../Typography/Caption/Caption';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Tappable from '../Tappable/Tappable';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import { hasReactNode } from '../../lib/utils';

export interface ContentCardInfoProps {
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
}
const ContentCardInfo: FC<ContentCardInfoProps> = (props: ContentCardInfoProps) => (
  <div className="ContentCard--body">
    {hasReactNode(props.subtitle) && <Caption caps className="ContentCard--caption" weight="semibold" level="3">{props.subtitle}</Caption>}
    {hasReactNode(props.header) && <Title className="ContentCard--title" weight="semibold" level="3">{props.header}</Title>}
    {hasReactNode(props.text) && <Text className="ContentCard--text" weight="regular">{props.text}</Text>}
    {hasReactNode(props.caption) && <Caption className="ContentCard--caption" weight="regular" level="1">{props.caption}</Caption>}
  </div>
);
export interface ContentCardProps extends ImgHTMLAttributes<HTMLImageElement>, ContentCardInfoProps{
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
  mode?: 'tint' | 'shadow' | 'outline';
}
const ContentCard: FunctionComponent = (props: ContentCardProps) => {
  const { subtitle, header, text, caption, className, image, disabled, mode, alt, style, ...restProps } = props;
  const platform = usePlatform();

  return (
    <Card mode={mode} size="l" className={classNames(className, getClassname('ContentCard', platform))} style={style}>
      <Tappable disabled={disabled} className="ContentCard--tappable">
        {image && <img src={image} alt={alt} className="ContentCard--img" style={{ objectFit: 'cover', maxHeight: props.maxHeight }} width="100%" {...restProps} />}
        <ContentCardInfo subtitle={subtitle} header={header} text={text} caption={caption} />
      </Tappable>
    </Card>
  );
};
ContentCard.defaultProps = {
  mode: 'shadow',
};
export default ContentCard;
