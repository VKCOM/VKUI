import React from 'react';

// Basic interfaces
export interface HasClassName {
  className?: React.ReactNode;
}

export interface StyleObject extends HasClassName {
  style?: React.CSSProperties;
}

export interface HasRef {
  getRootRef?: (
    // TODO: resolve "any"
    instance: React.Ref<any>
  ) => void;
}

export interface HasChildren {
  children?: React.ReactNode;
}

export type AlignTypes = 'left' | 'center' | 'right';
export type StatusTypes = 'default' | 'error' | 'valid';

export interface HasAlign {
  align?: AlignTypes;
}
