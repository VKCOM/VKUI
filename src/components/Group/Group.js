import './Group.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('Group');

export default class Group extends Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.node,
    description: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string
  };
  static defaultProps = {
    style: {},
    title: '',
    description: '',
    children: ''
  };
  render () {
    const { style, title, description, className } = this.props;

    return (
      <div className={classnames(baseClassNames, className)} style={style}>
        {title && <h3 className="Group__title">{title}</h3>}
        <div className="Group__content">
          {this.props.children}
        </div>
        {description && <div className="Group__description">{description}</div>}
      </div>
    );
  }
}
