import './Panel.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

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
    optimized: PropTypes.bool,
    centered: PropTypes.bool,
    style: PropTypes.object,
    /**
     * @ignore
     */
    isPrev: PropTypes.bool,
    /**
     * @ignore
     */
    isNext: PropTypes.bool
  };

  static defaultProps = {
    children: '',
    theme: 'gray',
    centered: false,
    optimized: true
  };

  static contextTypes = {
    insets: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    })
  };

  getChildContext () {
    return {
      panel: this.props.id
    };
  }

  get insets () {
    return this.context.insets || {};
  }

  shouldComponentUpdate ({ optimized, isNext, isPrev }) {
    return optimized ? !isNext && !isPrev : true;
  }

  render () {
    const { className, centered, children, isPrev, isNext, theme, optimized, ...restProps } = this.props;

    return (
      <div {...restProps} className={classnames(baseClassNames, className, { 'Panel--centered': centered })}>
        <div className="Panel__in" style={{ paddingBottom: this.insets.bottom || null, paddingTop: this.insets.top || null }}>
          <div className="Panel__in-before" />
          {children}
          <div className="Panel__in-after" />
        </div>
      </div>
    );
  }
}
