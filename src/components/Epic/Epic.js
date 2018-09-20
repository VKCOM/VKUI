import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassName = getClassName('Epic');

export default class Epic extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    tabbar: PropTypes.node.isRequired,
    activeStory: PropTypes.string.isRequired
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
    const { className, activeStory, tabbar, children, ...restProps } = this.props;

    return (
      <div {...restProps} className={classnames(baseClassName, className)}>
        {React.Children.toArray(children).find(item => item.props.id === activeStory)}
        {tabbar}
      </div>
    );
  }
}
