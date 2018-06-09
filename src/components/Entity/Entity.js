import './Entity.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from '../../lib/classnames';
import getClassName from '../../helpers/getClassName';
import Avatar, {sizes as avatarSizes} from '../Avatar/Avatar';

const baseClassNames = getClassName('Entity');

// @TODO Try to load photo

export default class Entity extends Component {
  static propTypes = {
    style: PropTypes.object,
    size: PropTypes.oneOf(['s', 'm', ...avatarSizes]),
    photo: PropTypes.string,
    title: PropTypes.node,
    description: PropTypes.node,
    className: PropTypes.string,
    avatarProps: PropTypes.shape(Avatar.propTypes),
    children: PropTypes.node
  };

  static defaultProps = {
    size: 48,
    photo: '',
    title: '',
    description: ''
  };

  get avatarSize () {
    switch (this.props.size) {
      case 'm':
        console.warn('size m is deprecated. Use 64 instead');
        return 64;
      case 's':
        console.warn('size m is deprecated. Use 48 instead');
        return 48;
      default:
        return this.props.size;
    }
  }

  render () {
    const { className, style, photo, title, description, avatarProps, children } = this.props;

    return (
      <div
        className={classnames(baseClassNames, className)}
        style={style}
      >
        <div className="Entity__aside">
          <Avatar src={photo} alt={title} size={this.avatarSize} {...avatarProps} />
        </div>
        <div className="Entity__main">
          {title && <div className="Entity__title">{title}</div>}
          {description && <div className="Entity__description">{description}</div>}
          {children &&
            <div className="Entity__content">
              {children}
            </div>
          }
        </div>
      </div>
    );
  }
}
