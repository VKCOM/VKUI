import * as React from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import './Subhead.css';

export interface SubheadProps extends React.AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
  Component?: React.ElementType;
}

const Subhead: React.FC<SubheadProps> = ({
  children,
  weight,
  Component = 'h4',
  ...restProps
}: SubheadProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(getClassName('Subhead', platform), `Subhead--w-${weight}`)}
    >
      {children}
    </Component>
  );
};

export default Subhead;
