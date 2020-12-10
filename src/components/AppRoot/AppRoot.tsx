import React, { createRef, PropsWithChildren, RefObject } from 'react';
import classNames from '../../lib/classNames';
import { AppRootContext } from './AppRootContext';

export interface AppRootProps {
  embedded?: boolean;
  window?: Window;
}

export class AppRoot extends React.Component<PropsWithChildren<AppRootProps>> {
  private readonly rootRef: RefObject<HTMLDivElement>;
  private readonly portalRoot: HTMLDivElement;

  constructor(props: AppRootProps) {
    super(props);
    this.portalRoot = props.window.document.createElement('div');
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
    const { embedded, children } = this.props;

    return (
      <div ref={this.rootRef} className={classNames('AppRoot', {
        'AppRoot--embedded': embedded,
      })}>
        <AppRootContext.Provider value={{ portalRoot: this.portalRoot, embedded }}>
          {embedded ? (
            <div className="AppRoot__wrapper">
              {children}
            </div>
          ) : children}
        </AppRootContext.Provider>
      </div>
    );
  }
}

export default AppRoot;
