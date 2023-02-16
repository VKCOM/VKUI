import * as React from 'react';
import { Insets } from '@vkontakte/vk-bridge';
import { PlatformType } from './lib/platform';

export type AnyFunction = (...args: any[]) => any;

export type AlignType = 'left' | 'center' | 'right';

export interface HasChildren {
  children?: React.ReactNode;
}

export interface HasRootRef<T> {
  getRootRef?: React.Ref<T>;
}

export interface HasRef<T> {
  getRef?: React.Ref<T>;
}

export interface HasComponent {
  Component?: React.ElementType;
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

/**
 * Тип содержит атрибуты, которые применяются только для `<a>`
 *
 * @see {@link https://developer.mozilla.org/ru/docs/Web/HTML/Element/A &lt;a&gt; - HTML | MDN}
 */
export type AnchorHTMLAttributesOnly = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof React.HTMLAttributes<HTMLAnchorElement>
>;
