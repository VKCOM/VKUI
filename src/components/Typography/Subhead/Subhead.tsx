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

  let subheadWeight: SubheadProps['weight'] = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      subheadWeight = 'medium';
    }
  }

  return (
    <div
      {...restProps}
      className={classNames(getClassName('Subhead', platform), `Subhead--w-${subheadWeight}`, className)}
    >
      {children}
    </div>
  );
};

export default Subhead;
