import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Avatar from '../Avatar/Avatar';

const baseClassNames = getClassName('Entity');

// @TODO Try to load photo
/**
 * @deprecated Используйте `Cell`. Этот компонент устарел и будет удален в 3.0.0
 */
export default class Entity extends Component {
  static propTypes = {
    style: PropTypes.object,
    /**
     * @deprecated Используйте `avatarProps.size`
     */
    size: PropTypes.oneOf(['m', 's', 80, 72, 64, 56, 48, 40, 36, 32, 28]),
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
        return 64;
      case 's':
        return 48;
      default:
        return this.props.size;
    }
  }

  render () {
    const { className, style, photo, title, description, avatarProps, children } = this.props;

    return (
      <div className={classNames(baseClassNames, className)} style={style}>
        <div className="Entity__aside">
          <Avatar src={photo} alt={title} size={this.avatarSize} {...avatarProps} />
        </div>
        <div className="Entity__main">
          {title && <div className="Entity__title">{title}</div>}
          {description && <div className="Entity__description">{description}</div>}
          {children && <div className="Entity__content">{children}</div>}
        </div>
      </div>
    );
  }
}
