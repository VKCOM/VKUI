import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import Entity from '../Entity/Entity';
import './Pane.css';
import PropTypes from 'prop-types';

const baseClassName = getClassName('NewPane');

const Pane = ({ children, className }) => {
  return (
    <div className={ classnames(baseClassName, {'NewPane--entity': children && children.type === Entity}, className) }>
      {children}
    </div>
  );
};

Pane.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Pane;
