import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren } from '../../types/props';

const baseClassName = getClassName('Epic');

export interface EpicProps extends HasChildren {
  activeStory: string;
  tabbar: React.ReactNode;
  className?: string;
}

export default class Epic extends React.Component<EpicProps> {
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
      <div {...restProps} className={classNames(baseClassName, className)}>
        {React.Children.toArray(children).find(
          (
            item: any // FIXME
          ) => item.props.id === activeStory
        )}
        {tabbar}
      </div>
    );
  }
}
