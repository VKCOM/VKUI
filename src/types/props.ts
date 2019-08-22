import React from 'react';

export interface ObjectClassNames {
  [index: string]: boolean;
}

export interface HasClassName {
  className?: string | number | ObjectClassNames;
}

export interface HasStyleObject extends HasClassName {
  style?: React.CSSProperties;
}

export interface HasChildren {
  children?: React.ReactNode;
}
