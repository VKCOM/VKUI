import * as React from 'react';
import { type HTMLAttributesWithRootRef } from '../../types';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { CellButtonGroupSeparator } from './CellButtonGroupSeparator/CellButtonGroupSeparator';

export type CellButtonGroupProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * @since 7.2.0
 *
 * @see https://vkcom.github.io/VKUI/#/CellButtonGroup
 */
export const CellButtonGroup = (props: CellButtonGroupProps): React.ReactNode => {
  return <ButtonGroup gap="none" stretched {...props} />;
};

CellButtonGroup.displayName = 'CellButtonGroup';

CellButtonGroup.Separator = CellButtonGroupSeparator;
CellButtonGroup.Separator.displayName = 'CellButtonGroup.Separator';
