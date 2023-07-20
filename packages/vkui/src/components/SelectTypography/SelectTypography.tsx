import * as React from 'react';
import { HasChildren } from '../../types';
import type { SelectType } from '../Select/Select';
import { Text } from '../Typography/Text/Text';

export interface SelectTypographyProps extends React.HTMLAttributes<HTMLSpanElement>, HasChildren {
  selectType?: SelectType;
}

/**
 * @private
 */
export const SelectTypography = ({
  selectType = 'default',
  children,
  ...restProps
}: SelectTypographyProps) => {
  return (
    <Text weight={selectType === 'accent' ? '2' : '3'} {...restProps}>
      {children}
    </Text>
  );
};
