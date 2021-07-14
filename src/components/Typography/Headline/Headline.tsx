import { AllHTMLAttributes, ElementType, FC } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';

export interface HeadlineProps extends AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold';
  Component?: ElementType;
}

const Headline: FC<HeadlineProps> = ({
  children,
  weight,
  Component = 'h3',
  ...restProps
}: HeadlineProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={classNames(getClassName('Headline', platform), `Headline--w-${weight}`)}
    >
      {children}
    </Component>
  );
};

export default Headline;
