/* eslint-disable jsdoc/require-jsdoc */

import type { SelectType } from '../Select/Select';
import { Text, type TextProps } from '../Typography/Text/Text';

export interface SelectTypographyProps extends TextProps {
  selectType?: SelectType;
}

/**
 * @private
 */
export const SelectTypography = ({
  selectType = 'default',
  children,
  ...restProps
}: SelectTypographyProps): React.ReactNode => {
  return (
    <Text weight={selectType === 'accent' ? '2' : '3'} {...restProps}>
      {children}
    </Text>
  );
};
