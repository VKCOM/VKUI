import { AllHTMLAttributes, ElementType, FunctionComponent, useEffect } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';
import { HasRootRef } from '../../../types';

export interface TextProps extends AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement> {
  weight: 'regular' | 'medium' | 'semibold';
  Component?: ElementType;
}

const Text: FunctionComponent<TextProps> = ({
  children,
  weight,
  Component,
  getRootRef,
  ...restProps
}: TextProps) => {
  const platform = usePlatform();

  let textWeight: TextProps['weight'] = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      textWeight = 'medium';
    }
  }

  useEffect(() => {
    if (typeof Component !== 'string' && getRootRef) {
      console.warn('[VKUI/Text]: getRootRef can only be used with DOM components');
    }
  }, []);

  return (
    <Component
      {...restProps}
      ref={getRootRef}
      vkuiClass={classNames(getClassName('Text', platform), `Text--w-${textWeight}`)}
    >
      {children}
    </Component>
  );
};

Text.defaultProps = {
  Component: 'div',
};

export default Text;
