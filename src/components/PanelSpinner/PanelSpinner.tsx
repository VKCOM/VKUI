import * as React from 'react';
import Spinner, { SpinnerProps } from '../Spinner/Spinner';

export interface PanelSpinnerProps extends SpinnerProps {
  height?: number;
}

const PanelSpinner: React.FunctionComponent<PanelSpinnerProps> = ({ height, style, ...restProps }: PanelSpinnerProps) => {
  return (
    <Spinner size="regular" {...restProps} style={{ height, ...style }} />
  );
};

PanelSpinner.defaultProps = {
  height: 96,
};

export default React.memo(PanelSpinner);
