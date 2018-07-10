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
    setHeaderTheme: PropTypes.func,
    document: PropTypes.any
  };

  state = {
    ready: false,
    rightWidth: null,
    leftWidth: null
  };

  get document () { return this.context.document || document; }

  componentDidMount () {
    this.leftNode = this.document.getElementById('header-left-' + this.context.panel);
    this.addonNode = this.document.getElementById('header-addon-' + this.context.panel);
    this.titleNode = this.document.getElementById('header-title-' + this.context.panel);
    this.rightNode = this.document.getElementById('header-right-' + this.context.panel);
    this.context.setHeaderTheme({
      [this.context.panel]: { theme: this.props.theme, noShadow: this.props.noShadow }
    });
    this.setState({ ready: true });
  }

  render () {
    let { left, addon, children, right } = this.props;
    const isPrimitive = typeof children === 'string' || typeof children === 'number';

    return this.state.ready ? [
      ReactDOM.createPortal(<div className={classnames('PanelHeader-left-in')}>{left}</div>, this.leftNode),
      osname === IOS && ReactDOM.createPortal(<div className="PanelHeader-addon">{addon}</div>, this.addonNode),
      ReactDOM.createPortal(<div className="PanelHeader-content">
        {isPrimitive ? <span>{children}</span> : children }
      </div>, this.titleNode),
      ReactDOM.createPortal(<div className="PanelHeader-right">{right}</div>, this.rightNode)
    ] : null;
  }
}
