import React from 'react';
import { canUseDOM } from '../../lib/dom';
import {
  ConfigProviderContext,
  ConfigProviderContextInterface,
  Scheme,
  AppearanceScheme,
  defaultConfigProviderProps,
} from './ConfigProviderContext';
import { HasChildren, DOMProps } from '../../types';
import PropTypes from 'prop-types';
import { Platform, VKCOM } from '../../lib/platform';

export interface ConfigProviderProps extends ConfigProviderContextInterface, HasChildren {}

export default class ConfigProvider extends React.Component<ConfigProviderProps> {
  constructor(props: ConfigProviderProps, context: DOMProps) {
    super(props);
    if (canUseDOM) {
      this.setScheme(this.getScheme(props.platform, props.scheme), context);
    }
  }

  static contextTypes = {
    document: PropTypes.any,
  };

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

  setScheme = (scheme: AppearanceScheme, context: DOMProps): void => {
    (context.document || document).body.setAttribute('scheme', scheme);
  };

  componentDidUpdate(prevProps: ConfigProviderProps) {
    if (prevProps.scheme !== this.props.scheme) {
      this.setScheme(this.getScheme(this.props.platform, this.props.scheme), this.context);
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
