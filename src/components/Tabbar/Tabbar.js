import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassName = getClassName('Tabbar');

export default class Tabbar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    /**
     * флаг для показа/скрытия верхней тени (Android) или границы (iOS)
     */
    shadow: PropTypes.bool
  };

  static defaultProps = {
    shadow: true
  };

  static contextTypes = {
    insets: PropTypes.shape({
      bottom: PropTypes.number
    })
  };

  render () {
    const { className, children, shadow } = this.props;

    return (
      <div className={classnames(baseClassName, className, {
        'Tabbar--shadow': shadow
      })} style={{ paddingBottom: this.context.insets && this.context.insets.bottom || null }}>
        {children}
      </div>
    );
  }
}
