import React, { HTMLAttributes, ReactNode, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes, { Requireable } from 'prop-types';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform, HasRef } from '../../types/props';
import { IOS } from '../../lib/platform';

export interface PanelHeaderProps extends HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement>, HasPlatform {
  left?: ReactNode;
  addon?: ReactNode;
  right?: ReactNode;
  transparent?: boolean;
}

export interface PanelHeaderState {
  ready: boolean;
}

export interface PanelHeaderContext {
  panel: Requireable<string>;
  document: Requireable<{}>;
  scheme: Requireable<string>;
  webviewType: Requireable<'vkapps' | 'internal'>;
}

/**
 * @deprecated используйте PanelHeaderSimple
 */
class PanelHeader extends Component<PanelHeaderProps, PanelHeaderState> {
  static defaultProps: PanelHeaderProps = {
    transparent: false,
  };

  static contextTypes: PanelHeaderContext = {
    panel: PropTypes.string,
    document: PropTypes.any,
    scheme: PropTypes.string,
    webviewType: PropTypes.oneOf(['vkapps', 'internal']),
  };

  state: PanelHeaderState = {
    ready: false,
  };

  leftNode: HTMLDivElement;
  addonNode: HTMLDivElement;
  titleNode: HTMLDivElement;
  rightNode: HTMLDivElement;

  get document() {return this.context.document || document;}

  get webviewType() {return this.context.webviewType || 'vkapps';}

  componentDidMount() {
    const panelId = this.context.panel;

    this.leftNode = this.document.getElementById(`header-left-${panelId}`);
    this.addonNode = this.document.getElementById(`header-addon-${panelId}`);
    this.titleNode = this.document.getElementById(`header-title-${panelId}`);
    this.rightNode = this.document.getElementById(`header-right-${panelId}`);

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

  render() {
    let { left, addon, children, right, transparent, platform } = this.props;
    const isPrimitive = typeof children === 'string' || typeof children === 'number';

    return this.state.ready ? [
      ReactDOM.createPortal(<div className={classNames('PanelHeader-left-in', {
        'PanelHeader-left-in--tp': transparent,
      })}>{left}</div>, this.leftNode),
      platform === IOS && ReactDOM.createPortal(<div className={classNames('PanelHeader-addon', {
        'PanelHeader-addon--tp': transparent,
      })}>{addon}</div>, this.addonNode),
      ReactDOM.createPortal(<div className={classNames('PanelHeader-content', {
        'PanelHeader-content--tp': transparent,
      })}>
        {isPrimitive ? <span>{children}</span> : children}
      </div>, this.titleNode),
      ReactDOM.createPortal(<div className={classNames('PanelHeader-right', {
        'PanelHeader-right--tp': transparent,
        'PanelHeader-right--vkapps': this.webviewType === 'vkapps',
      })}>{this.webviewType === 'internal' ? right : null}</div>, this.rightNode),
    ] : null;
  }
}

export default withPlatform(PanelHeader);
