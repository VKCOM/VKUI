import * as React from 'react';
import { HasChildren, HTMLAttributesWithRootRef } from '../../types';
import type { SelectType } from '../Select/Select';
import { Text } from '../Typography/Text/Text';

export interface SelectTypographyProps
  extends HTMLAttributesWithRootRef<HTMLSpanElement>,
    HasChildren {
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
