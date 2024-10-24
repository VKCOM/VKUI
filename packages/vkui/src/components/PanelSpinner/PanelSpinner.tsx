import * as React from 'react';
import { Spinner, type SpinnerProps } from '../Spinner/Spinner';

export interface PanelSpinnerProps extends SpinnerProps {
  height?: number;
}

/**
 * @see https://vkcom.github.io/VKUI/#/PanelSpinner
 */
export const PanelSpinner: React.FC<PanelSpinnerProps> = React.memo(
  ({ height = 96, style, ...restProps }: PanelSpinnerProps) => (
    <Spinner size="m" {...restProps} style={{ height, ...style }} />
  ),
);

PanelSpinner.displayName = 'PanelSpinner';
