import React, { ElementType, FunctionComponent, HTMLAttributes } from 'react';
import usePlatform from '../../../hooks/usePlatform';
import classNames from '../../../lib/classNames';
import getClassName from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface SubheadProps extends HTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
  Component?: ElementType;
}

const Subhead: FunctionComponent<SubheadProps> = ({
  children,
  className,
  weight,
  Component,
  ...restProps
}) => {
  const platform = usePlatform();

  let SubheadComponent: React.ElementType = Component;
  let subheadWeight: SubheadProps['weight'] = platform === ANDROID && weight === 'semibold' ? 'medium' : weight;

  if (!Component) {
    SubheadComponent = platform === ANDROID ? 'h4' : 'h5';
  }

  return (
    <SubheadComponent
      {...restProps}
      className={classNames(getClassName('Subhead', platform), `Subhead--w-${subheadWeight}`, className)}
    >
      {children}
    </SubheadComponent>
  );
};

export default Subhead;
