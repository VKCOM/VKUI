import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Touch from '../Touch/Touch';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import withPlatform from '../../hoc/withPlatform';
import { isNumeric } from '../../lib/utils';
import Separator from '../Separator/Separator';

class Panel extends Component {
  static childContextTypes = {
    panel: PropTypes.string
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    centered: PropTypes.bool,
    separator: PropTypes.bool,
    style: PropTypes.object,
    /**
     * @ignore
     */
    insets: PropTypes.object,
    /**
     * @ignore
     */
    platform: PropTypes.string
  };

  static defaultProps = {
    children: '',
    centered: false,
    separator: true
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
    const { className, centered, children, insets, platform, separator, ...restProps } = this.props;
    const tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;

    return (
      <div {...restProps} className={classNames(getClassName('Panel', platform), className, {
        'Panel--centered': centered
      })}>
        <Touch className="Panel__in" style={{
          paddingBottom: isNumeric(insets.bottom) ? (insets.bottom + tabbarPadding) : null
        }}>
          <div className="Panel__in-before" />
          {separator && <Separator />}
          {centered ? <div className="Panel__centered">{children}</div> : children}
          <div className="Panel__in-after" />
        </Touch>
      </div>
    );
  }
}

export default withPlatform(withInsets(Panel));
