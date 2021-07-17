import { AllHTMLAttributes, ElementType, FC } from 'react';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '../../../lib/classNames';
import { getClassName } from '../../../helpers/getClassName';

export interface CaptionProps extends AllHTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
  level: '1' | '2' | '3' | '4';
  caps?: boolean;
  Component?: ElementType;
}

const Caption: FC<CaptionProps> = ({
  children,
  weight,
  level,
  caps,
  Component = 'span',
  ...restProps
}: CaptionProps) => {
  const platform = usePlatform();

  return (
    <Component
      {...restProps}
      vkuiClass={
        classNames(
          getClassName('Caption', platform),
          `Caption--w-${weight}`,
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

export default Caption;
