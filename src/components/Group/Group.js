
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Header from '../Header/Header';

const baseClassNames = getClassName('Group');

export default class Group extends Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.node,
    description: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
    getRootRef: PropTypes.func
  };
  static defaultProps = {
    title: null,
    description: null
  };
  render () {
    const { title, description, className, children, getRootRef, ...restProps } = this.props;

    return (
      <div {...restProps} ref={getRootRef} className={classNames(baseClassNames, className)}>
        {title && <Header level="2">{title}</Header>}
        {children && <div className="Group__content">{children}</div>}
        {description && <div className="Group__description">{description}</div>}
      </div>
    );
  }
}
