import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Touch from '../Touch/Touch';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';

const baseClassNames = getClassName('Panel');

class Panel extends Component {
  static childContextTypes = {
    panel: PropTypes.string
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.oneOf(['white', 'gray']),
    id: PropTypes.string.isRequired,
    centered: PropTypes.bool,
    style: PropTypes.object,
    /**
     * @ignore
     */
    insets: PropTypes.object
  };

  static defaultProps = {
    children: '',
    theme: 'gray',
    centered: false
  };

  static contextTypes = {
    hasTabbar: PropTypes.bool
  };

  getChildContext () {
    return {
      panel: this.props.id
    };
  }

  render () {
    const { className, centered, children, theme, insets, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;

    return (
      <div {...restProps} className={classNames(baseClassNames, className, {
        'Panel--centered': centered,
        [`Panel--tm-${theme}`]: theme
      })}>
        <Touch className="Panel__in" style={{
          paddingBottom: !isNaN(insets.bottom) ? insets.bottom + tabbarPadding : null
        }}>
          <div className="Panel__in-before" />
          {children}
          <div className="Panel__in-after" />
        </Touch>
      </div>
    );
  }
}

export default withInsets(Panel);
