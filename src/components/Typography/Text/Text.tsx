import React, { FunctionComponent, HTMLAttributes } from 'react';
import usePlatform from '../../../hooks/usePlatform';
import classNames from '../../../lib/classNames';
import getClassName from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold';
}

const Text: FunctionComponent<TextProps> = ({
  children,
  className,
  weight,
  ...restProps
}) => {
  const platform = usePlatform();

  let textWeight: TextProps['weight'] = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      textWeight = 'medium';
    }
  }

  return (
    <div
      {...restProps}
      className={classNames(getClassName('Text', platform), `Text--w-${textWeight}`, className)}
    >
      {children}
    </div>
  );
};

export default Text;
