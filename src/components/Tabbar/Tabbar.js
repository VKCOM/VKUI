import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

const baseClassName = getClassName('Tabbar');

export default class Tabbar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    /**
     * флаг для показа/скрытия верхней тени (Android) или границы (iOS)
     */
    shadow: PropTypes.bool,
    itemsLayout: PropTypes.oneOf(['vertical', 'horizontal', 'auto'])
  };

  static defaultProps = {
    shadow: true
  };

  static contextTypes = {
    insets: PropTypes.shape({
      bottom: PropTypes.number
    })
  };

  get itemsLayout () {
    const { children, itemsLayout } = this.props;

    switch (itemsLayout) {
      case 'horizontal':
      case 'vertical':
        return itemsLayout;
      default:
        return React.Children.count(children) > 2 ? 'vertical' : 'horizontal';
    }
  }

  render () {
    const { className, children, shadow } = this.props;

    return (
      <div className={classNames(baseClassName, className, `Tabbar--l-${this.itemsLayout}`, {
        'Tabbar--shadow': shadow
      })} style={{ paddingBottom: this.context.insets && this.context.insets.bottom || null }}>
        {children}
      </div>
    );
  }
}
