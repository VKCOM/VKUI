import { AllHTMLAttributes, ElementType, FunctionComponent } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface HeadlineProps extends AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold';
  Component?: ElementType;
}

const Headline: FunctionComponent<HeadlineProps> = ({
  children,
  weight,
  Component,
  ...restProps
}: HeadlineProps) => {
  const platform = usePlatform();
  let HeadlineComponent = Component;

  if (!Component) {
    HeadlineComponent = platform === ANDROID ? 'h3' : 'h4';
  }

  let headlineWeight: HeadlineProps['weight'] = weight;

  if (platform === ANDROID && weight === 'semibold') {
    headlineWeight = 'medium';
  }

  return (
    <HeadlineComponent
      {...restProps}
      vkuiClass={classNames(getClassName('Headline', platform), `Headline--w-${headlineWeight}`)}
    >
      {children}
    </HeadlineComponent>
  );
};

export default Headline;
