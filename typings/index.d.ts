import * as React from 'react';

// Basic interfaces
interface StyleObject {
  style?: React.CSSProperties;
  className?: string;
}

interface HasRef {
  getRootRef?: (instance: React.Ref) => void;
}

interface HasChildren {
  children?: React.ReactNode;
}

interface ActionSheetProps extends StyleObject, HasChildren {
  onClose: () => void;
  text?: React.ReactNode;
  title?: React.ReactNode;
}

interface ActionSheetItemProps extends StyleObject, HasChildren {
  autoclose?: boolean;
  onClick?: () => void;
  theme?: 'default' | 'destructive' | 'cancel';
}

interface AlertActions {
  title?: string;
  action?: () => void;
  style?: 'cancel' | 'destructive' | 'default';
}

interface AlertProps extends StyleObject, HasChildren {
  onClose: () => void;
  actions?: AlertActions;
  actionsLayout?: 'vertical' | 'horizontal';
}

interface AvatarProps extends StyleObject, HasChildren, HasRef {
  size?: 80 | 72 | 64 | 56 | 48 | 40 | 36 | 32 | 28;
  src?: string;
  type?: 'default' | 'image' | 'app';
}

interface ButtonProps extends StyleObject, HasChildren {
  after?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  before?: React.ReactNode;
  level?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce';
  size?: 'm' | 'l' | 'xl';
  stretched?: boolean;
}

interface CellProps extends StyleObject, HasChildren, HasRef {
  asideContent?: React.ReactNode;
  before?: React.ReactNode;
  bottomContent?: React.ReactNode;
  description?: React.ReactNode;
  draggable?: boolean;
  expandable?: boolean;
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

interface CellButtonProps extends StyleObject, HasChildren {
  align: 'left' | 'center' | 'right';
  before?: React.ReactNode;
  level?: 'primary' | 'danger';
}

interface CheckBoxProps extends StyleObject, HasChildren, HasRef {}

interface CounterProps extends HasChildren {
  type: 'secondary' | 'primary' | 'prominent';
}

interface DivProps extends StyleObject, HasChildren, HasRef {}

interface EpicProps extends HasChildren {
  activeStory: string;
  tabbar: React.ReactNode;
  className?: string;
}

interface FileProps extends StyleObject, HasChildren {
  align?: 'left' | 'center' | 'right';
  getRef?: (instance: React.Ref) => void;
}

interface FixedLayoutProps extends StyleObject, HasChildren, HasRef {
  vertical?: 'top' | 'bottom';
}

interface FooterProps extends StyleObject, HasChildren {}

interface FormLayoutProps extends HasChildren {
  TagName?: string;
  className?: string;
  getRef?: (instance: React.Ref) => void;
  onSubmit?: () => void;
  status?: 'default' | 'error' | 'valid';
}

export const ActionSheet: React.ComponentType<ActionSheetProps>;
export const ActionSheetItem: React.ComponentType<ActionSheetItemProps>;
export const Alert: React.ComponentType<AlertProps>;
export const Avatar: React.ComponentType<AvatarProps>;
export const Button: React.ComponentType<ButtonProps>;
export const Cell: React.ComponentType<CellProps>;
export const CellButton: React.ComponentType<CellButtonProps>;
export const CheckBox: React.ComponentType<CheckBoxProps>;
export const Counter: React.ComponentType<CounterProps>;
export const Div: React.ComponentType<DivProps>;
export const Epic: React.ComponentType<EpicProps>;
export const File: React.ComponentType<FileProps>;
export const FixedLayout: React.ComponentType<FixedLayoutProps>;
export const Footer: React.ComponentType<FooterProps>;
export const FormLayout: React.ComponentType<FormLayoutProps>;
