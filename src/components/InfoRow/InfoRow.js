import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './InfoRow.css';

const baseClassName = getClassName('InfoRow');

const InfoRow = ({ title, className, children }) => (
  <div className={classnames(baseClassName, className)}>
    <div className="InfoRow__title">{title}</div>
    <div>
      {children}
    </div>
  </div>
);

InfoRow.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default InfoRow;
