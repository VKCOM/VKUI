import { AllHTMLAttributes, ElementType, FC } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';

export interface SubheadProps extends AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
  Component?: ElementType;
}

const Subhead: FC<SubheadProps> = ({
  children,
  weight,
  Component = 'h4',
  ...restProps
}: SubheadProps) => {
  const platform = usePlatform();

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
