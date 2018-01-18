import './Entity.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';

const baseClassNames = getClassName('Entity');

// @TODO Try to load photo

export default class Entity extends Component {
  static propTypes = {
    style: PropTypes.object,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    size: PropTypes.oneOf(['s', 'm']),
    photo: PropTypes.string,
    title: PropTypes.node,
    description: PropTypes.node,
    className: PropTypes.string,
    asideStyle: PropTypes.object
  };
  static defaultProps = {
    style: {},
    alignment: 'left',
    size: 's',
    photo: '',
    title: '',
    description: ''
  };
  render () {
    const { className, style, size, photo, title, description } = this.props;
    const modifiers = {
      'Entity--small': size === 's',
      'Entity--no-photo': !photo
    };

    return (
      <div
        className={classnames(baseClassNames, modifiers, className)}
        style={style}
      >
        <div className="Entity__aside" style={this.props.asideStyle}>
          {photo && <img src={photo} alt={title} className="Entity__photo" />}
        </div>
        <div className="Entity__main">
          {title && <div className="Entity__title">{title}</div>}
          {description && <div className="Entity__description">{description}</div>}
        </div>
      </div>
    );
  }
}
