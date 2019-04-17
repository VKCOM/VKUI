import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';

const baseClassName = getClassName('Tabbar');

class Tabbar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    /**
     * флаг для показа/скрытия верхней тени (Android) или границы (iOS)
     */
    shadow: PropTypes.bool,
    itemsLayout: PropTypes.oneOf(['vertical', 'horizontal', 'auto']),
    /**
     * @ignore
     */
    insets: PropTypes.object
  };

  static defaultProps = {
    shadow: true
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
    const { className, children, shadow, insets } = this.props;

    return (
      <div className={classNames(baseClassName, className, `Tabbar--l-${this.itemsLayout}`, {
        'Tabbar--shadow': shadow
      })} style={{ paddingBottom: isNaN(insets.bottom) ? null : insets.bottom }}>
        {children}
      </div>
    );
  }
}

export default withInsets(Tabbar);
