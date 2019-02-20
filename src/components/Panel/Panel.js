import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { tabbarHeight } from '../../appearance/constants';

const baseClassNames = getClassName('Panel');

export default class Panel extends Component {
  static childContextTypes = {
    panel: PropTypes.string
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.oneOf(['white', 'gray']),
    id: PropTypes.string.isRequired,
    centered: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    children: '',
    theme: 'gray',
    centered: false
  };

  static contextTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    }),
    hasTabbar: PropTypes.bool
  };

  getChildContext () {
    return {
      panel: this.props.id
    };
  }

  get insets () {
    return this.context.insets || {};
  }

  render () {
    const { className, centered, children, theme, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;

    return (
      <div {...restProps} className={classNames(baseClassNames, className, {
        'Panel--centered': centered,
        [`Panel--tm-${theme}`]: theme
      })}>
        <div className="Panel__in" style={{
          paddingBottom: this.context.insets && this.context.insets.bottom ? this.context.insets.bottom + tabbarPadding : null
        }}>
          <div className="Panel__in-before" />
          {children}
          <div className="Panel__in-after" />
        </div>
      </div>
    );
  }
}
