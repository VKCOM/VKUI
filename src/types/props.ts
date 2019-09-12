import React from 'react';
import { OS } from '../lib/platform';

export interface ObjectClassNames {
  [index: string]: boolean;
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

export interface OldRef<T> {
  (el: T): void
}

export interface HasRootRef<T> {
  getRootRef?: OldRef<T> | React.RefObject<T>
}

export interface HasRef<T> {
  getRef?: OldRef<T> | React.RefObject<T>
}
