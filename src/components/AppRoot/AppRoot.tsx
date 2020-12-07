import React, { createRef, PropsWithChildren, RefObject } from 'react';
import AdaptivityProvider, { AdaptivityProviderProps } from '../AdaptivityProvider/AdaptivityProvider';
import ConfigProvider, { ConfigProviderProps } from '../ConfigProvider/ConfigProvider';
import classNames from '../../lib/classNames';
import { AppRootContext } from './AppRootContext';

export interface AppRootProps extends ConfigProviderProps, AdaptivityProviderProps {
  embedded?: boolean;
}

export class AppRoot extends React.Component<PropsWithChildren<AppRootProps>> {
  private readonly rootRef: RefObject<HTMLDivElement>;
  private readonly portalRoot: HTMLDivElement;

  constructor(props: AppRootProps) {
    super(props);
    this.portalRoot = props.window.document.createElement('div');
    this.portalRoot.setAttribute('id', 'vkui-portal-root');
    this.portalRoot.classList.add('vkui-portal-root');
    this.rootRef = createRef<HTMLDivElement>();
  }

  static defaultProps = {
    window: window,
  };

  update(props: AppRootProps) {
    if (!props.embedded) {
      props.window.document.documentElement.classList.add('vkui');
    } else {
      props.window.document.documentElement.classList.remove('vkui');
    }
  }

  componentDidMount() {
    this.props.window.document.body.appendChild(this.portalRoot);
    (this.rootRef.current.parentNode as HTMLElement).classList.add('vkui-root');
    this.update(this.props);
  }

  componentDidUpdate(prevProps: AppRootProps) {
    if (prevProps.embedded !== this.props.embedded) {
      this.update(this.props);
    }
  }

  componentWillUnmount() {
    this.props.window.document.body.removeChild(this.portalRoot);

    (this.rootRef.current.parentNode as HTMLElement).classList.remove('vkui-root');
    if (!this.props.embedded) {
      this.props.window.document.documentElement.classList.remove('vkui');
    }
  }

  render() {
    const {
      embedded,
      children,
      scheme,
      isWebView,
      webviewType,
      app,
      appearance,
      transitionMotionEnabled,
      platform,
      document,
      window,
      sizeX,
      sizeY,
      viewWidth,
      viewHeight,
      hasMouse,
    } = this.props;

    const configProviderProps: ConfigProviderProps = {
      scheme,
      isWebView,
      webviewType,
      app,
      appearance,
      transitionMotionEnabled,
      platform,
    };

    const adaptivityProviderProps: AdaptivityProviderProps = {
      document,
      window,
      sizeX,
      sizeY,
      viewWidth,
      viewHeight,
      hasMouse,
    };

    return (
      <div ref={this.rootRef} className={classNames('AppRoot', {
        'AppRoot--embedded': embedded,
      })}>
        <AppRootContext.Provider value={{ portalRoot: this.portalRoot, embedded }}>
          <ConfigProvider {...configProviderProps}>
            <AdaptivityProvider {...adaptivityProviderProps}>
              {embedded ? (
                <div className="AppRoot__wrapper">
                  {children}
                </div>
              ) : children}
            </AdaptivityProvider>
          </ConfigProvider>
        </AppRootContext.Provider>
      </div>
    );
  }
}

AppRoot.defaultProps = {
  ...ConfigProvider.defaultProps,
  ...AdaptivityProvider.defaultProps,
};

export default AppRoot;
