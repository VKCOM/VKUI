import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassName = getClassName('Epic');

export default class Epic extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    /**
     * Свойство для передачи Tabbar. Так как Tabbar является единственным способом переключаться между экранами в
     * Epic, свойство tabbar является обязательным.
     */
    tabbar: PropTypes.node.isRequired,
    /**
     * id активного окна
     */
    active: PropTypes.string
  };

  getChildContext () {
    return {
      hasTabbar: this.props.hasOwnProperty('tabbar')
    };
  }

  static childContextTypes = {
    hasTabbar: PropTypes.bool
  };

  render () {
    const { className, active, tabbar, children } = this.props;

    return (
      <div className={classnames(baseClassName, className)}>
        {React.Children.toArray(children).find(item => item.props.id === active)}
        {tabbar}
      </div>
    );
  }
}
