import { AllHTMLAttributes, ElementType, FC } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface HeadlineProps extends AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold';
  Component?: ElementType;
}

const Headline: FC<HeadlineProps> = ({
  children,
  weight,
  Component,
  ...restProps
}: HeadlineProps) => {
  const platform = usePlatform();

  if (!Component) {
    Component = platform === ANDROID ? 'h3' : 'h4';
  }

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
