import React from 'react';

// Basic interfaces
export interface HasClassName {
  className?: React.ReactNode;
}

export interface HasStyleObject extends HasClassName {
  style?: React.CSSProperties;
}

export interface HasRef<
  T = any // TODO: Remove default "any"
> {
  getRootRef?: (instance: T) => void;
}

export interface HasChildren {
  children?: React.ReactNode;
}

export type AlignTypes = 'left' | 'center' | 'right';
export type StatusTypes = 'default' | 'error' | 'valid';

export interface HasAlign {
  align?: AlignTypes;
}
