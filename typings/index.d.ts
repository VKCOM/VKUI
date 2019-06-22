import * as React from 'react';

interface StyleObject {
  style?: React.CSSProperties;
  className?: string;
}

interface ActionSheetProps extends StyleObject {
  onClose: () => void;
  children?: React.ReactNode;
  text?: React.ReactNode;
  title?: React.ReactNode;
}

interface ActionSheetItemProps extends StyleObject {
  autoclose?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  theme?: 'default' | 'destructive' | 'cancel';
}

interface AlertActions {
  title?: string;
  action?: () => void;
  style?: 'cancel' | 'destructive' | 'default';
}

interface AlertProps extends StyleObject {
  onClose: () => void;
  actions?: AlertActions;
  actionsLayout?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

interface AvatarProps extends StyleObject {
  children?: React.ReactNode;
  getRootRef?: (instance: React.Ref) => void;
  size?: 80 | 72 | 64 | 56 | 48 | 40 | 36 | 32 | 28;
  src?: string;
  type?: 'default' | 'image' | 'app';
}

interface ButtonProps extends StyleObject {
  after?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  before?: React.ReactNode;
  children?: React.ReactNode;
  level?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce';
  size?: 'm' | 'l' | 'xl';
  stretched?: boolean;
}

interface CellProps extends StyleObject {
  asideContent?: React.ReactNode;
  before?: React.ReactNode;
  bottomContent?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  draggable?: boolean;
  expandable?: boolean;
  getRootRef?: (instance: React.Ref) => void;
  href?: string;
  indicator?: React.ReactNode;
  multiline?: boolean;
  onClick?: () => void;
  onDragFinish?: () => void;
  onRemove?: () => void;
  removable?: boolean;
  removePlaceholder?: React.ReactNode;
  selectable?: boolean;
  size?: 'm' | 'l';
}

interface CellButtonProps extends StyleObject {
  align: 'left' | 'center' | 'right';
  before?: React.ReactNode;
  children?: React.ReactNode;
  level?: 'primary' | 'danger';
}

export const ActionSheet: React.ComponentType<ActionSheetProps>;
export const ActionSheetItem: React.ComponentType<ActionSheetItemProps>;
export const Alert: React.ComponentType<AlertProps>;
export const Avatar: React.ComponentType<AvatarProps>;
export const Button: React.ComponentType<ButtonProps>;
export const Cell: React.ComponentType<CellProps>;
export const CellButton: React.ComponentType<CellButtonProps>;
