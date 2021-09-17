import * as React from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import { HasRootRef } from '../../../types';
import { warnOnce } from '../../../lib/warnOnce';
import './Text.css';

export interface TextProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement> {
  weight: 'regular' | 'medium' | 'semibold';
  Component?: React.ElementType;
}

const warn = warnOnce('Text');
const Text: React.FC<TextProps> = ({
  children,
  weight,
  Component = 'span',
  getRootRef,
  ...restProps
}: TextProps) => {
  const platform = usePlatform();

  if (process.env.NODE_ENV === 'development' && typeof Component !== 'string' && getRootRef) {
    warn('getRootRef can only be used with DOM components');
  }

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(getClassName('Text', platform), `Text--w-${weight}`)}
    >
      {children}
    </Component>
  );
};

export default Text;
