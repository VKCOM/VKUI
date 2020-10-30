import React, { FunctionComponent, ImgHTMLAttributes } from 'react';
import Card from '../Card/Card';
import Div from '../Div/Div';
import Caption from '../Typography/Caption/Caption';
import Title from '../Typography/Title/Title';
import Text from '../Typography/Text/Text';
export interface ContentCardInfoProps {
  subtitle?: string;
  title?: string;
  text?: string;
  caption?: string;
}
const ContentCardInfo: (props: ContentCardInfoProps) => JSX.Element = (props: ContentCardInfoProps) => (
  <div style={{ padding: '12px 16px' }}>
    {props.caption && <Caption weight="semibold" level="3" caps style={{ marginBottom: 4, color: 'var(--text_secondary)' }}>{props.caption}</Caption>}
    {props.title && <Title weight="semibold" level="3" style={{ marginBottom: 4 }}>{props.title}</Title>}
    {props.text && <Text weight="regular" style={{ marginBottom: 4 }}>{props.text}</Text>}
    {props.subtitle && <Caption weight="regular" level="1" style={{ color: 'var(--text_secondary)' }}>{props.subtitle}</Caption>}
  </div>
);
export interface ContentCardProps extends ImgHTMLAttributes<HTMLImageElement>, ContentCardInfoProps{
  image?: string;
  maxHeight?: number;
  alt?: string;
}
const ContentCard: FunctionComponent = (props: ContentCardProps) => {
  return (
    <Div>
      <Card style={{ overflow: 'hidden' }} mode="shadow">
        {props.image && <img src={props.image} alt={props.alt} style={{ objectFit: 'cover', maxHeight: props.maxHeight }} width="100%" />}
        <ContentCardInfo {...props} />
      </Card>
    </Div>
  );
};
export default ContentCard;
