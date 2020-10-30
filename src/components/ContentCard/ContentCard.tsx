import React, { FunctionComponent, ImgHTMLAttributes, ReactNode } from 'react';
import Card from '../Card/Card';
import Div from '../Div/Div';
import Caption from '../Typography/Caption/Caption';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
import Tappable from '../Tappable/Tappable';
export interface ContentCardInfoProps {
  /*
  * Текст над заголовком
  * */
  subtitle?: ReactNode;
  /*
  * Заголовок
  * */
  header?: ReactNode;
  /*
  * Текст
  * */
  text?: ReactNode;
  /*
  * Нижний текст
  * */
  caption?: ReactNode;
}
const ContentCardInfo: (props: ContentCardInfoProps) => JSX.Element = (props: ContentCardInfoProps) => (
  <div style={{ padding: '12px 16px' }}>
    {props.subtitle && <Caption weight="semibold" level="3" caps style={{ marginBottom: 4, color: 'var(--text_secondary)' }}>{props.subtitle}</Caption>}
    {props.header && <Title weight="semibold" level="3" style={{ marginBottom: 4 }}>{props.header}</Title>}
    {props.text && <Text weight="regular" style={{ marginBottom: 4 }}>{props.text}</Text>}
    {props.caption && <Caption weight="regular" level="1" style={{ color: 'var(--text_secondary)' }}>{props.caption}</Caption>}
  </div>
);
export interface ContentCardProps extends ImgHTMLAttributes<HTMLImageElement>, ContentCardInfoProps{
  /*
  * URL или путь к изображению
  * */
  image?: string;
  /*
  * Максимальная высота изображения
  * */
  maxHeight?: number;
  /*
  * Аналогично alt для img
  * */
  alt?: string;
  /*
  * Отключает Tappable у карточки
  * */
  disabled?: boolean;
  mode?: 'tint' | 'shadow' | 'outline';
}
const ContentCard: FunctionComponent = (props: ContentCardProps) => {
  return (
    <Div>
      <Card style={{ overflow: 'hidden' }} mode={props.mode ? props.mode : 'shadow'}>
        <Tappable disabled={props.disabled}>
          {props.image && <img src={props.image} alt={props.alt} style={{ objectFit: 'cover', maxHeight: props.maxHeight }} width="100%" />}
          <ContentCardInfo {...props} />
        </Tappable>
      </Card>
    </Div>
  );
};
export default ContentCard;
