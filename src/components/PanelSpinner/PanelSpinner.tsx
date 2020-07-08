import React, { FunctionComponent } from 'react';
import Spinner, { SpinnerSize } from '../Spinner/Spinner';

export interface PanelSpinnerProps {
  height?: number;
  size?: SpinnerSize;
}

const PanelSpinner: FunctionComponent<PanelSpinnerProps> = ({ height, ...restProps }: PanelSpinnerProps) => {
  return (
    <Spinner size="small" {...restProps} style={{ height }} />
  );
};

PanelSpinner.defaultProps = {
  height: 96,
};

export default React.memo(PanelSpinner);
