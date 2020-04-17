import React, { FunctionComponent, HTMLAttributes } from 'react';
import usePlatform from '../../../hooks/usePlatform';
import classNames from '../../../lib/classNames';
import getClassName from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface HeadlineProps extends HTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold';
}

const Headline: FunctionComponent<HeadlineProps> = ({
  children,
  className,
  weight,
  ...restProps
}) => {
  const platform = usePlatform();

  let headlineWeight: HeadlineProps['weight'] = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      headlineWeight = 'medium';
    }
  }

  return (
    <div
      {...restProps}
      className={classNames(getClassName('Headline', platform), `Headline--w-${headlineWeight}`, className)}
    >
      {children}
    </div>
  );
};

export default Headline;
