import React, { FunctionComponent } from 'react';
import Spinner from '../Spinner/Spinner';

export interface PanelSpinnerProps {
  height?: number;
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
