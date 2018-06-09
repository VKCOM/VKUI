import './Panel.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';

const baseClassNames = getClassName('Panel');

export default class Panel extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  static childContextTypes = {
    panel: PropTypes.string
  };

  static propTypes = {
    /**
     * @ignore
     */
    isPrev: PropTypes.bool,
    /**
     * @ignore
     */
    isNext: PropTypes.bool,

    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.oneOf(['white', 'gray']),
    id: PropTypes.string.isRequired,
    optimized: PropTypes.bool,
    centered: PropTypes.bool,
    style: PropTypes.object
  };

  static defaultProps = {
    children: '',
    theme: 'gray',
    centered: false,
    optimized: false
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
    const { className, id, style } = this.props;

    return (
      <div
        className={classnames(baseClassNames, className, {
          'Panel--centered': this.props.centered
        })}
        id={id}
        style={style}
      >
        <div className="Panel__in" style={{ paddingBottom: this.insets.bottom || null }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
