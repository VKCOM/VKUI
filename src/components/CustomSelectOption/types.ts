import { MouseEvent, ReactNode } from 'react';

export interface CustomSelectOptionProps {
  label: string;
  index?: number;
  option?: any;
  selected?: boolean;
  focused?: boolean;
  hovered?: boolean;
  before?: ReactNode;
  after?: ReactNode;
  onClick?: () => void;
  onMouseDown?: (event: MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLElement>) => void;
}
