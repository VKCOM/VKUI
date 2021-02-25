import { AllHTMLAttributes, ElementType, FunctionComponent } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface CaptionProps extends AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
  level: '1' | '2' | '3' | '4';
  caps?: boolean;
  Component?: ElementType;
}

const Caption: FunctionComponent<CaptionProps> = ({
  children,
  weight,
  level,
  caps,
  Component,
  ...restProps
}: CaptionProps) => {
  const platform = usePlatform();

  let captionWeight: CaptionProps['weight'] = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      captionWeight = 'medium';
    }
  }

  return (
    <Component
      {...restProps}
      vkuiClass={
        classNames(
          getClassName('Caption', platform),
          `Caption--w-${captionWeight}`,
          `Caption--l-${level}`,
          {
            'Caption--caps': caps,
          },
        )
      }
    >
      {children}
    </Component>
  );
};

Caption.defaultProps = {
  Component: 'div',
};

export default Caption;
