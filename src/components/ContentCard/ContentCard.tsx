import React, { FunctionComponent, ImgHTMLAttributes } from 'react';
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
  subtitle?: string;
  /*
  * Заголовок
  * */
  title?: string;
  /*
  * Текст
  * */
  text?: string;
  /*
  * Нижний текст
  * */
  caption?: string;
}
const ContentCardInfo: (props: ContentCardInfoProps) => JSX.Element = (props: ContentCardInfoProps) => (
  <div style={{ padding: '12px 16px' }}>
    {props.subtitle && <Caption weight="semibold" level="3" caps style={{ marginBottom: 4, color: 'var(--text_secondary)' }}>{props.subtitle}</Caption>}
    {props.title && <Title weight="semibold" level="3" style={{ marginBottom: 4 }}>{props.title}</Title>}
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
}
const ContentCard: FunctionComponent = (props: ContentCardProps) => {
  return (
    <Div>
      <Card style={{ overflow: 'hidden' }} mode="shadow">
        <Tappable disabled={props.disabled}>
          {props.image && <img src={props.image} alt={props.alt} style={{ objectFit: 'cover', maxHeight: props.maxHeight }} width="100%" />}
          <ContentCardInfo {...props} />
        </Tappable>
      </Card>
    </Div>
  );
};
export default ContentCard;
