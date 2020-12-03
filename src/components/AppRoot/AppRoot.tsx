import React, { FC, PropsWithChildren, useEffect, useRef } from 'react';
import AdaptivityProvider, { AdaptivityProviderProps } from '../AdaptivityProvider/AdaptivityProvider';
import ConfigProvider, { ConfigProviderProps } from '../ConfigProvider/ConfigProvider';
import classNames from '../../lib/classNames';
import withAdaptivity, { SizeType } from '../../hoc/withAdaptivity';

const EmbeddedWrapper: FC<PropsWithChildren<{}>> = withAdaptivity(({ sizeX, children }: PropsWithChildren<AppRootProps>) => {
  return (
    <div className={classNames('AppRoot__wrapper', {
      'AppRoot__wrapper--sizeX-regular': sizeX === SizeType.REGULAR,
    })}>
      {children}
    </div>
  );
}, {
  sizeX: true,
});

export interface AppRootProps extends ConfigProviderProps, AdaptivityProviderProps {
  embedded?: boolean;
}

const AppRoot: FC<AppRootProps> = (props: AppRootProps) => {
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
  } = props;

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
    embedded,
    document,
    window,
    sizeX,
    sizeY,
    viewWidth,
    viewHeight,
    hasMouse,
  };

  const rootRef = useRef<HTMLDivElement>();

  useEffect(() => {
    (rootRef.current.parentNode as HTMLElement).classList.add('vkui-root');

    if (!embedded) {
      props.window.document.documentElement.classList.add('vkui');
    }

    return () => {
      (rootRef.current.parentNode as HTMLElement).classList.remove('vkui-root');
      if (!embedded) {
        props.window.document.documentElement.classList.remove('vkui');
      }
    };
  }, [rootRef, embedded]);

  return (
    <div ref={rootRef} className={classNames('AppRoot', {
      'AppRoot--embedded': embedded,
    })}>
      <ConfigProvider {...configProviderProps}>
        <AdaptivityProvider {...adaptivityProviderProps}>
          {embedded ? <EmbeddedWrapper>{children}</EmbeddedWrapper> : children}
        </AdaptivityProvider>
      </ConfigProvider>
    </div>
  );
};

AppRoot.defaultProps = {
  ...ConfigProvider.defaultProps,
  ...AdaptivityProvider.defaultProps,
};

export default AppRoot;
