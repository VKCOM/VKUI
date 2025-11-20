import * as React from 'react';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import { type HTMLAttributesWithRootRef } from '../../types';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { CellButtonGroupSeparator } from './CellButtonGroupSeparator/CellButtonGroupSeparator';

export type CellButtonGroupProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * @since 7.2.0
 *
 * @see https://vkui.io/components/cell-button-group
 */
export const CellButtonGroup = (props: CellButtonGroupProps): React.ReactNode => {
  return <ButtonGroup gap="none" stretched {...props} />;
};

CellButtonGroup.Separator = CellButtonGroupSeparator;

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(CellButtonGroup.Separator, 'CellButtonGroup.Separator');
}
