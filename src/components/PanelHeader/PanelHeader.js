import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import './PanelHeader.css';
import { platform, IOS } from '../../lib/platform';

const osname = platform();

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
    theme: PropTypes.oneOf(['light', 'brand']),
    noShadow: PropTypes.bool
  };

  static defaultProps = {
    theme: 'brand',
    noShadow: false
  };

  static contextTypes = {
    panel: PropTypes.string,
    document: PropTypes.any,
    webviewType: PropTypes.oneOf(['vkapps', 'internal'])
  };

  state = {
    ready: false,
    rightWidth: null,
    leftWidth: null
  };

  get document () { return this.context.document || document; }

  get webviewType () { return this.context.webviewType || 'vkapps'; }

  componentDidMount () {
    this.leftNode = this.document.getElementById('header-left-' + this.context.panel);
    this.addonNode = this.document.getElementById('header-addon-' + this.context.panel);
    this.titleNode = this.document.getElementById('header-title-' + this.context.panel);
    this.rightNode = this.document.getElementById('header-right-' + this.context.panel);
    this.bgNode = this.document.getElementById('header-bg-' + this.context.panel);
    this.setState({ ready: true });
  }

  render () {
    let { left, addon, children, right, theme, noShadow } = this.props;
    const isPrimitive = typeof children === 'string' || typeof children === 'number';

    return this.state.ready ? [
      ReactDOM.createPortal(<div className={classnames('PanelHeader-bg', {
        [`PanelHeader-bg--${theme}`]: true,
        [`PanelHeader-bg--no-shadow`]: noShadow
      })}/>, this.bgNode),
      ReactDOM.createPortal(<div className={classnames('PanelHeader-left-in', {
        [`PanelHeader-left-in--${theme}`]: true
      })}>{left}</div>, this.leftNode),
      osname === IOS && ReactDOM.createPortal(<div className={classnames('PanelHeader-addon', {
        [`PanelHeader-addon--${theme}`]: true
      })}>{addon}</div>, this.addonNode),
      ReactDOM.createPortal(<div className={classnames('PanelHeader-content', {
        [`PanelHeader-content--${theme}`]: true
      })}>
        {isPrimitive ? <span>{children}</span> : children}
      </div>, this.titleNode),
      ReactDOM.createPortal(<div className={classnames('PanelHeader-right', {
        [`PanelHeader-right--${theme}`]: true,
        'PanelHeader-right--vkapps': this.webviewType === 'vkapps'
      })}>{this.webviewType === 'internal' ? right : null}</div>, this.rightNode)
    ] : null;
  }
}
