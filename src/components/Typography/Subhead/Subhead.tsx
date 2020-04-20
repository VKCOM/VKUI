import React, { FunctionComponent, HTMLAttributes } from 'react';
import usePlatform from '../../../hooks/usePlatform';
import classNames from '../../../lib/classNames';
import getClassName from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface SubheadProps extends HTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
}

const Subhead: FunctionComponent<SubheadProps> = ({
  children,
  className,
  weight,
  ...restProps
}) => {
  const platform = usePlatform();

  let Component: React.ElementType = 'h5';

  let subheadWeight: SubheadProps['weight'] = weight;

  if (platform === ANDROID) {
    Component = 'h4';
    if (weight === 'semibold') {
      subheadWeight = 'medium';
    }
  }

  return (
    <Component
      {...restProps}
      className={classNames(getClassName('Subhead', platform), `Subhead--w-${subheadWeight}`, className)}
    >
      {children}
    </Component>
  );
};

export default Subhead;
