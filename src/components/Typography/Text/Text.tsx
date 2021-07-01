import { AllHTMLAttributes, ElementType, FunctionComponent } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';
import { HasRootRef } from '../../../types';
import { warnOnce } from '../../../lib/warnOnce';

export interface TextProps extends AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement> {
  weight: 'regular' | 'medium' | 'semibold';
  Component?: ElementType;
}

const warn = warnOnce('Text');
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

  if (process.env.NODE_ENV === 'development' && typeof Component !== 'string' && getRootRef) {
    warn('getRootRef can only be used with DOM components');
  }

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
