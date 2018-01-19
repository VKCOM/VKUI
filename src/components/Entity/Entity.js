import './Entity.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import Avatar from '../Avatar/Avatar';

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
    avatarProps: PropTypes.shape(Avatar.propTypes)
  };

  static defaultProps = {
    style: {},
    alignment: 'left',
    size: 's',
    photo: '',
    title: '',
    description: ''
  };

  get avatarSize () {
    switch (this.props.size) {
      case 'm':
        return 64;
      case 's':
        return 48;
    }
  }

  render () {
    const { className, style, size, photo, title, description, avatarProps } = this.props;
    const modifiers = {
      'Entity--small': size === 's'
    };

    return (
      <div
        className={classnames(baseClassNames, modifiers, className)}
        style={style}
      >
        <div className="Entity__aside">
          <Avatar src={photo} alt={title} size={this.avatarSize} {...avatarProps} />
        </div>
        <div className="Entity__main">
          {title && <div className="Entity__title">{title}</div>}
          {description && <div className="Entity__description">{description}</div>}
        </div>
      </div>
    );
  }
}
