import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';

import { IS_PLATFORM_IOS } from '../../lib/platform';

export const baseClassNames = getClassName('PanelHeader');

export default class PanelHeader extends React.Component {
  static propTypes = {
    left: PropTypes.node,
    /**
     * iOS only
     */
    addon: PropTypes.node,
    right: PropTypes.node,
    children: PropTypes.node,
    /**
     * Вместо `light` используйте `alternate`. Значение `light` устарело и будет удалено в следующей
     * мажорной версии.
     */
    theme: PropTypes.oneOf(['light', 'alternate', 'brand']),
    /**
     * @ignore
     */
    transparent: PropTypes.bool,
    noShadow: PropTypes.bool,
    getRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
  };

  static defaultProps = {
    theme: 'brand',
    transparent: false,
    noShadow: false
  };

  static contextTypes = {
    panel: PropTypes.string,
    document: PropTypes.any,
    scheme: PropTypes.string,
    webviewType: PropTypes.oneOf(['vkapps', 'internal'])
  };

  state = {
    ready: false
  };

  get document () { return this.context.document || document; }

  get webviewType () { return this.context.webviewType || 'vkapps'; }

  componentDidMount () {
    const panelId = this.context.panel;

    this.leftNode = this.document.getElementById('header-left-' + panelId);
    this.addonNode = this.document.getElementById('header-addon-' + panelId);
    this.titleNode = this.document.getElementById('header-title-' + panelId);
    this.rightNode = this.document.getElementById('header-right-' + panelId);
    this.bgNode = this.document.getElementById('header-bg-' + panelId);

    const getRef = this.props.getRef;
    if (getRef) {
      const element = this.document.getElementById(`panel-header-${panelId}`);
      if (typeof getRef === 'function') {
        getRef(element);
      } else {
        getRef.current = element;
      }
    }

    this.setState({ ready: true });
  }

  render () {
    let { left, addon, children, right, theme, noShadow, transparent } = this.props;
    const isPrimitive = typeof children === 'string' || typeof children === 'number';

    return this.state.ready ? [
      ReactDOM.createPortal(<div className={classNames('PanelHeader-bg', {
        [`PanelHeader-bg--${theme}`]: true,
        'PanelHeader-bg--tp': transparent,
        [`PanelHeader-bg--no-shadow`]: noShadow || ['bright_light', 'space_gray'].indexOf(this.context.scheme) >= 0
      })}/>, this.bgNode),
      ReactDOM.createPortal(<div className={classNames('PanelHeader-left-in', {
        [`PanelHeader-left-in--${theme}`]: true,
        'PanelHeader-left-in--tp': transparent
      })}>{left}</div>, this.leftNode),
      IS_PLATFORM_IOS && ReactDOM.createPortal(<div className={classNames('PanelHeader-addon', {
        [`PanelHeader-addon--${theme}`]: true,
        'PanelHeader-addon--tp': transparent
      })}>{addon}</div>, this.addonNode),
      ReactDOM.createPortal(<div className={classNames('PanelHeader-content', {
        [`PanelHeader-content--${theme}`]: true,
        'PanelHeader-content--tp': transparent
      })}>
        {isPrimitive ? <span>{children}</span> : children}
      </div>, this.titleNode),
      ReactDOM.createPortal(<div className={classNames('PanelHeader-right', {
        [`PanelHeader-right--${theme}`]: true,
        'PanelHeader-right--tp': transparent,
        'PanelHeader-right--vkapps': this.webviewType === 'vkapps'
      })}>{this.webviewType === 'internal' ? right : null}</div>, this.rightNode)
    ] : null;
  }
}
