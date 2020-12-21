import React, { ElementType, FunctionComponent, HTMLAttributes } from 'react';
import usePlatform from '../../../hooks/usePlatform';
import classNames from '../../../lib/classNames';
import getClassName from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface HeadlineProps extends HTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold';
  Component?: ElementType;
}

const Headline: FunctionComponent<HeadlineProps> = ({
  children,
  className,
  weight,
  Component,
  ...restProps
}) => {
  const platform = usePlatform();
  let HeadlineComponent = Component;

  if (!Component) {
    HeadlineComponent = platform === ANDROID ? 'h3' : 'h4';
  }

  let headlineWeight: HeadlineProps['weight'] = weight;

  if (platform === ANDROID && weight === 'semibold') {
    headlineWeight = 'medium';
  }

  return (
    <HeadlineComponent
      {...restProps}
      className={classNames(getClassName('Headline', platform), `Headline--w-${headlineWeight}`, className)}
    >
      {children}
    </HeadlineComponent>
  );
};

export default Headline;
