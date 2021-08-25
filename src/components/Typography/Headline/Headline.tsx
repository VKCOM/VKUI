import { AllHTMLAttributes, FC } from 'react';
import { HasComponent } from '../../../types';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import './Headline.css';

export interface HeadlineProps extends AllHTMLAttributes<HTMLElement>, HasComponent {
  weight: 'regular' | 'medium' | 'semibold';
}

const Headline: FC<HeadlineProps> = ({
  children,
  weight,
  Component = 'span',
  ...restProps
}: HeadlineProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(getClassName('Headline', platform), `Headline--${weight}`)}
    >
      {children}
    </Component>
  );
};

export default Headline;
