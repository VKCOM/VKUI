import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

export interface PanelSpinnerProps {
  height?: number;
}

const PanelSpinner = ({ height, ...restProps }: PanelSpinnerProps) => (
  <Spinner size="small" {...restProps} style={{ height }} />
);

PanelSpinner.defaultProps = {
  height: 96
};

PanelSpinner.propTypes = {
  height: PropTypes.number
};

export default React.memo(PanelSpinner);
