import './Group.css';
import React, { Component, PropTypes } from 'react';
import { platform, ANDROID, IOS } from '../../lib/platform.js';
import classnames from '../../lib/classnames';

const osname = platform();

export default class Group extends Component {
  static propTypes = {
    style: PropTypes.object,
    title: PropTypes.node,
    description: PropTypes.node
  };
  static defaultProps = {
    style: {},
    title: '',
    description: ''
  };
  render() {
    const { style, title, description } = this.props;
    const classes = classnames('Group', {
      'Group--android': osname === ANDROID,
      'Group--ios': osname === IOS,
    });

    return (
      <div className={classes} style={style}>
        {title && <h3 className="Group__title">{title}</h3>}
        <div className="Group__content">
          {this.props.children}
        </div>
        {description && <div className="Group__description">{description}</div>}
      </div>
    );
  }
}