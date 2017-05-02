import './ScreenSpinner.css';

import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import removeObjectKeys from '../../lib/removeObjectKeys';

const baseClassNames = getClassName('ScreenSpinner');

export default function ScreenSpinner (props) {
  return (
    <div
      className={classnames(baseClassNames, props.className)}
      {...removeObjectKeys(props, ['className'])}
    >
      <Spinner color="#fff" />
    </div>
  );
}

ScreenSpinner.propTypes = {
  className: PropTypes.string
};
