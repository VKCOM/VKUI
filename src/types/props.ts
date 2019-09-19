import React from 'react';
import { OS } from '../lib/platform';

export interface ObjectClassNames {
  [index: string]: boolean;
}

export interface InsetsInterface {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

export interface DangerInnerHTML {
  __html: string
}

export interface HasClassName {
  className?: string | number | ObjectClassNames;
}

export interface HasStyleObject {
  style?: React.CSSProperties;
}

export interface HasChildren {
  children?: React.ReactNode;
}

export interface HasPlatform {
  /**
   * @ignore
   */
  platform?: OS;
}

export interface HasInsets {
  /**
   * @ignore
   */
  insets?: InsetsInterface;
}

export interface OldRef<T> {
  (el: T): void
}

export interface RefWithCurrent<T> {
  current: T | null
}

export interface HasRootRef<T> {
  getRootRef?: OldRef<T> | RefWithCurrent<T>
}

export interface HasRef<T> {
  getRef?: OldRef<T> | RefWithCurrent<T>
}

export interface HasDangerHTML {
  dangerouslySetInnerHTML?: DangerInnerHTML
}

export interface HasFormStatus {
  /**
   * Значение `verified` устарело и будет удалено в 3.0.0. Используйте вместо него `valid`
   */
  status?: 'default' | 'error' | 'valid' | 'verified'
}
