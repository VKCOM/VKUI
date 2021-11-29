import * as React from 'react';
import { Spinner, SpinnerProps } from '../Spinner/Spinner';

export interface PanelSpinnerProps extends SpinnerProps {
  height?: number;
}

const _PanelSpinner: React.FunctionComponent<PanelSpinnerProps> = ({ height, style, ...restProps }: PanelSpinnerProps) => {
  return (
    <Spinner size="regular" {...restProps} style={{ height, ...style }} />
  );
};

_PanelSpinner.defaultProps = {
  height: 96,
};

export const PanelSpinner = React.memo(_PanelSpinner);
