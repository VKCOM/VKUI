import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

const PanelSpinner = ({ height, ...restProps }) => <Spinner {...restProps} style={{ height }} />;

PanelSpinner.defaultProps = {
  height: 100
};

PanelSpinner.propTypes = {
  height: PropTypes.number
};

export default PanelSpinner;
