import { AllHTMLAttributes, ElementType, FC } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface SubheadProps extends AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
  Component?: ElementType;
}

const Subhead: FC<SubheadProps> = ({
  children,
  weight,
  Component,
  ...restProps
}: SubheadProps) => {
  const platform = usePlatform();

  if (!Component) {
    Component = platform === ANDROID ? 'h4' : 'h5';
  }

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(getClassName('Subhead', platform), `Subhead--w-${weight}`)}
    >
      {children}
    </Component>
  );
};

export default Subhead;
