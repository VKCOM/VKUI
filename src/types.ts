import * as React from 'react';
import { PlatformType } from './lib/platform';
import { Insets } from '@vkontakte/vk-bridge';

export type AnyFunction = (...args: any[]) => any;

export type AlignType = 'left' | 'center' | 'right';

export type RefWithCurrent<T> = {
  current: T | null;
};

export type Ref<T> = React.RefCallback<T> | RefWithCurrent<T>;

export interface HasRootRef<T> {
  getRootRef?: Ref<T>;
}

export interface HasRef<T> {
  getRef?: Ref<T>;
}

export interface HasAlign {
  align?: AlignType;
}

export interface HasPlatform {
  /**
   * @ignore
   */
  platform?: PlatformType;
}

export interface HasInsets {
  /**
   * @ignore
   */
  insets?: Partial<Insets>;
}

export interface Version {
  major: number;
  minor?: number;
  patch?: number;
}
