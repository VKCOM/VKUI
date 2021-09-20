import * as React from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import './Headline.css';

export interface HeadlineProps extends React.AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold';
  Component?: React.ElementType;
}

const Headline: React.FC<HeadlineProps> = ({
  children,
  weight,
  Component = 'h3',
  ...restProps
}: HeadlineProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(getClassName('Headline', platform), `Headline--w-${weight}`)}
    >
      {children}
    </Component>
  );
};

export default Headline;
