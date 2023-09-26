import { memo } from 'react';
import { Spinner, SpinnerProps } from '../Spinner/Spinner';

export interface PanelSpinnerProps extends SpinnerProps {
  height?: number;
}

/**
 * @see https://vkcom.github.io/VKUI/#/PanelSpinner
 */
export const PanelSpinner = memo(({ height = 96, style, ...restProps }: PanelSpinnerProps) => (
  <Spinner size="regular" {...restProps} style={{ height, ...style }} />
));

PanelSpinner.displayName = 'PanelSpinner';
