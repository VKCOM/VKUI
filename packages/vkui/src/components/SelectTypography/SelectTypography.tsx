import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import type { SelectType } from '../Select/Select';
import styles from './SelectTypography.module.css';

const sizeYClassNames = {
  none: styles['SelectTypography--sizeY-none'],
  compact: styles['SelectTypography--sizeY-compact'],
};

const platformClassNames = {
  vkcom: styles['SelectTypography--vkcom'],
  android: styles['SelectTypography--android'],
};

export interface SelectTypographyProps {
  selectType?: SelectType;
  className?: string;
  children?: React.ReactNode;
}

/**
 * @private
 */
export const SelectTypography = ({
  selectType = 'default',
  children,
  className,
  ...restProps
}: SelectTypographyProps) => {
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <span
      className={classNames(
        styles['SelectTypography'],
        platformClassNames.hasOwnProperty(platform) && platformClassNames[platform],
        sizeY !== SizeType.REGULAR && sizeYClassNames[sizeY],
        selectType === 'accent' && styles['SelectTypography--selectType-accent'],
        className,
      )}
      {...restProps}
    >
      {children}
    </span>
  );
};
