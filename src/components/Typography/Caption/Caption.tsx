import React, { FunctionComponent, HTMLAttributes } from 'react';
import usePlatform from '../../../hooks/usePlatform';
import classNames from '../../../lib/classNames';
import getClassName from '../../../helpers/getClassName';
import { ANDROID } from '../../../lib/platform';

export interface CaptionProps extends HTMLAttributes<HTMLElement> {
  weight: 'regular' | 'medium' | 'semibold' | 'bold';
  level: '1' | '2' | '3' | '4';
  caps?: boolean;
}

const Caption: FunctionComponent<CaptionProps> = ({
  children,
  className,
  weight,
  level,
  caps,
  ...restProps
}) => {
  const platform = usePlatform();

  let captionWeight: CaptionProps['weight'] = weight;

  if (platform === ANDROID) {
    if (weight === 'semibold') {
      captionWeight = 'medium';
    }
  }

  return (
    <div
      {...restProps}
      className={
        classNames(
          getClassName('Caption', platform),
          `Caption--w-${captionWeight}`,
          `Caption--l-${level}`,
          {
            'Caption--caps': caps,
          },
          className,
        )
      }
    >
      {children}
    </div>
  );
};

export default Caption;
