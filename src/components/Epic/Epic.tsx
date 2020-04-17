import React, { HTMLAttributes, ReactNode, Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasChildren, HasPlatform } from '../../types';
import withPlatform from '../../hoc/withPlatform';

export interface EpicProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasPlatform {
  tabbar: ReactNode;
  activeStory: string;
}

export interface EpicContext {
  hasTabbar: boolean;
}

class Epic extends Component<EpicProps> {
  getChildContext(): EpicContext {
    return {
      hasTabbar: this.props.hasOwnProperty('tabbar'),
    };
  }

  static childContextTypes: {} = {
    hasTabbar: PropTypes.bool,
  };

  render() {
    const { className, activeStory, tabbar, children, platform, ...restProps } = this.props;

    return (
      <div {...restProps} className={classNames(getClassName('Epic', platform), className)}>
        {React.Children.toArray(children).find((item: React.ReactElement) => item.props.id === activeStory)}
        {tabbar}
      </div>
    );
  }
}

export default withPlatform(Epic);
