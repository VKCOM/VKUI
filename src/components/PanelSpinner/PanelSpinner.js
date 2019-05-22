import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

const PanelSpinner = React.memo(({ height, ...restProps }) => <Spinner size="small" {...restProps} style={{ height }} />);

PanelSpinner.defaultProps = {
  height: 96
};

PanelSpinner.propTypes = {
  height: PropTypes.number
};

export default PanelSpinner;
