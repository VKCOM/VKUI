import React, { FunctionComponent, HTMLAttributes } from 'react';
import usePlatform from '../../../hooks/usePlatform';
import classNames from '../../../lib/classNames';
import getClassName from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';
import Headline, { HeadlineProps } from '../Headline/Headline';

export interface TitleProps extends HTMLAttributes<HTMLElement> {
  weight: 'heavy' | 'bold' | 'semibold' | 'medium' | 'regular';
  level: '1' | '2' | '3';
}

const Title: FunctionComponent<TitleProps> = ({
  children,
  className,
  weight,
  level,
  ...restProps
}) => {
  const platform = usePlatform();

  let Component: React.ElementType = 'div';
  switch (level) {
    case '1':
      Component = 'h1';
      break;
    case '2':
      Component = 'h2';
      break;
    case '3':
      Component = 'h3';
      break;
  }

  let titleWeight: TitleProps['weight'] = weight;
  if (platform === ANDROID) {
    if (level === '3') {
      let headlineWeight: HeadlineProps['weight'];
      switch (weight) {
        case 'heavy':
        case 'bold':
        case 'semibold':
          headlineWeight = 'medium';
          break;
        default:
          headlineWeight = weight;
      }
      return <Headline {...restProps} weight={headlineWeight} className={className}>{children}</Headline>;
    }
    if (platform === ANDROID) {
      if (level === '1' && weight === 'heavy') {
        titleWeight = 'bold';
      }
      if (level === '2') {
        switch (weight) {
          case 'heavy':
            titleWeight = 'bold';
            break;
          case 'semibold':
            titleWeight = 'medium';
        }
      }
    }
  }

  return (
    <Component
      {...restProps}
      className={
        classNames(
          getClassName('Title', platform),
          `Title--w-${titleWeight}`,
          `Title--l-${level}`,
          className,
        )
      }
    >
      {children}
    </Component>
  );
};

export default Title;
