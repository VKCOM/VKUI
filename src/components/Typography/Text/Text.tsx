import React, { AllHTMLAttributes, ElementType, FunctionComponent } from 'react';
import usePlatform from '../../../hooks/usePlatform';
import classNames from '../../../lib/classNames';
import getClassName from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface TextProps extends AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold';
  Component?: ElementType;
}

const Text: FunctionComponent<TextProps> = ({
  children,
  className,
  weight,
  Component,
  ...restProps
}: TextProps) => {
  const platform = usePlatform();

  let textWeight: TextProps['weight'] = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      textWeight = 'medium';
    }
  }

  return (
    <Component
      {...restProps}
      className={classNames(getClassName('Text', platform), `Text--w-${textWeight}`, className)}
    >
      {children}
    </Component>
  );
};

Text.defaultProps = {
  Component: 'div',
};

export default Text;
