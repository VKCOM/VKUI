import React, { ReactNode } from 'react';
import { OS } from '../lib/platform';

export interface InsetsInterface {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface DangerInnerHTML {
  __html: string;
}

/**
 * @deprecated использовать HTMLAttributes
 */
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

export type OldRef<T> = (el: T) => void;

export interface RefWithCurrent<T> {
  current: T | null;
}

export interface HasRootRef<T> {
  getRootRef?: OldRef<T> | RefWithCurrent<T>;
}

export interface HasRef<T> {
  getRef?: OldRef<T> | RefWithCurrent<T>;
}

export interface HasDangerHTML {
  dangerouslySetInnerHTML?: DangerInnerHTML;
}

export interface HasFormStatus {
  status?: 'default' | 'error' | 'valid';
}

export interface HasFormLabels {
  top?: ReactNode;
  bottom?: ReactNode;
}

export interface HasAlign {
  align?: 'left' | 'center' | 'right';
}
