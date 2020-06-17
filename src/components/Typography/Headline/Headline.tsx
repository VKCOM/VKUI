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

  let Component: React.ElementType = 'h4';

  let headlineWeight: HeadlineProps['weight'] = weight;

  if (platform === ANDROID) {
    Component = 'h3';
    if (weight === 'semibold') {
      headlineWeight = 'medium';
    }
  }

  return (
    <Component
      {...restProps}
      className={classNames(getClassName('Headline', platform), `Headline--w-${headlineWeight}`, className)}
    >
      {children}
    </Component>
  );
};

export default Headline;
