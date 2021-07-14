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

  let SubheadComponent: ElementType = Component;

  if (!Component) {
    SubheadComponent = platform === ANDROID ? 'h4' : 'h5';
  }

  return (
    <SubheadComponent
      {...restProps}
      vkuiClass={classNames(getClassName('Subhead', platform), `Subhead--w-${subheadWeight}`)}
    >
      {children}
    </SubheadComponent>
  );
};

export default Subhead;
