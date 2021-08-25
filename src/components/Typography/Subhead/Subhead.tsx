import { AllHTMLAttributes, FC } from 'react';
import { HasComponent } from '../../../types';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import './Subhead.css';

export interface SubheadProps extends AllHTMLAttributes<HTMLElement>, HasComponent {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
}

const Subhead: FC<SubheadProps> = ({
  children,
  weight,
  Component = 'span',
  ...restProps
}: SubheadProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(getClassName('Subhead', platform), `Subhead--${weight}`)}
    >
      {children}
    </Component>
  );
};

export default Subhead;
