import React, { ReactNode } from 'react';
import { canUseDOM, withDOM, DOMProps } from '../../lib/dom';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  Scheme,
  AppearanceScheme,
  defaultConfigProviderProps,
} from './ConfigProviderContext';
import { Platform, VKCOM } from '../../lib/platform';

export interface ConfigProviderProps extends ConfigProviderContextInterface {
  /**
   * Цветовая схема приложения
   */
  scheme?: AppearanceScheme;
  children?: ReactNode;
}

class ConfigProvider extends React.Component<ConfigProviderProps & DOMProps> {
  constructor(props: ConfigProviderProps) {
    super(props);
    if (canUseDOM) {
      this.setScheme(this.getScheme(props.platform, props.scheme));
    }
  }

  // Деструктуризация нужна из бага в react-docgen-typescript
  // https://github.com/styleguidist/react-docgen-typescript/issues/195
  public static defaultProps = { ...defaultConfigProviderProps };

  mapOldScheme(scheme: AppearanceScheme): AppearanceScheme {
    switch (scheme) {
      case Scheme.DEPRECATED_CLIENT_LIGHT:
        return Scheme.BRIGHT_LIGHT;
      case Scheme.DEPRECATED_CLIENT_DARK:
        return Scheme.SPACE_GRAY;
      default:
        return scheme;
    }
  }

  getScheme = (platform: Platform, scheme: AppearanceScheme): AppearanceScheme => {
    return platform === VKCOM ? Scheme.VKCOM : this.mapOldScheme(scheme);
  };

  setScheme = (scheme: AppearanceScheme): void => {
    if (scheme !== 'inherit') {
      (this.props.document || document).body.setAttribute('scheme', scheme);
    }
  };

  componentDidUpdate(prevProps: ConfigProviderProps) {
    if (prevProps.scheme !== this.props.scheme) {
      this.setScheme(this.getScheme(this.props.platform, this.props.scheme));
    }
  }

  getContext(): ConfigProviderProps {
    return {
      isWebView: this.props.isWebView,
      webviewType: this.props.webviewType,
      scheme: this.getScheme(this.props.platform, this.props.scheme),
      appearance: this.props.appearance,
      app: this.props.app,
      transitionMotionEnabled: this.props.transitionMotionEnabled,
      platform: this.props.platform,
    };
  }

  render() {
    return (
      <ConfigProviderContext.Provider value={this.getContext()}>
        {this.props.children}
      </ConfigProviderContext.Provider>
    );
  }
}

export default withDOM<ConfigProviderProps>(ConfigProvider);
