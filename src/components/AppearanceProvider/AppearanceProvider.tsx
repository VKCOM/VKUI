import * as React from 'react';
import { AppearanceType } from '@vkontakte/vk-bridge';
import { classNamesString } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { ConfigProviderOverride } from '../ConfigProvider/ConfigProviderOverride';

export interface AppearanceProviderProps {
  appearance: AppearanceType;
  children: React.ReactNode;
}

export const generateVKUITokensClassName = (platform: string, appearance: string): string => {
  let tokensPlatform;
  switch (platform) {
    case Platform.ANDROID:
      tokensPlatform = 'vkBase';
      break;
    case Platform.IOS:
      tokensPlatform = 'vkIOS';
      break;
    case Platform.VKCOM:
      tokensPlatform = 'vkCom';
      break;
    default:
      tokensPlatform = platform;
  }

  return `vkui--${tokensPlatform}--${appearance}`;
};

/**
 * @see https://vkcom.github.io/VKUI/#/AppearanceProvider
 */
export const AppearanceProvider = ({ appearance, children }: AppearanceProviderProps) => {
  const platform = usePlatform();

  return (
    <ConfigProviderOverride appearance={appearance}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<{ className?: string }>(child)) {
          return React.cloneElement(child, {
            className: classNamesString(
              child.props.className,
              generateVKUITokensClassName(platform, appearance),
            ),
          });
        }
        return child;
      })}
    </ConfigProviderOverride>
  );
};
