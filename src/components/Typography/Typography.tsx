import { FC, ElementType, AllHTMLAttributes } from 'react';
import Caption, { CaptionProps } from './Caption/Caption';
import Headline, { HeadlineProps } from './Headline/Headline';
import Subhead, { SubheadProps } from './Subhead/Subhead';
import Text, { TextProps } from './Text/Text';
import Title, { TitleProps } from './Title/Title';

type TypographyMode = 'text' | 'caption' | 'headline' | 'subhead' | 'title';

export type TextModeProps = { mode: 'text' } & TextProps;
export type CaptionModeProps = { mode: 'caption' } & CaptionProps;
export type HeadlineModeProps = { mode: 'headline' } & HeadlineProps;
export type SubheadModeProps = { mode: 'subhead' } & SubheadProps;
export type TitleModeProps = { mode: 'title' } & TitleProps;

export type TypographyProps = AllHTMLAttributes<HTMLElement> & (
  | TextModeProps
  | CaptionModeProps
  | HeadlineModeProps
  | SubheadModeProps
  | TitleModeProps
);

const determineComponent = (mode: TypographyMode) => {
  switch (mode) {
    case 'title':
      return Title;
    case 'subhead':
      return Subhead;
    case 'headline':
      return Headline;
    case 'caption':
      return Caption;
    case 'text':
    default:
      return Text;
  }
};

export const Typography: FC<TypographyProps> = ({
  mode = 'text',
  Component = 'span',
  ...restProps
}: TypographyProps) => {
  const TComponent: ElementType = determineComponent(mode);

  return <TComponent Component={Component} {...restProps} />;
};
