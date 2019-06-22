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

interface HasAlign {
  align?: 'left' | 'center' | 'right';
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

interface ButtonProps extends StyleObject, HasChildren, HasAlign {
  after?: React.ReactNode;
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

interface CellButtonProps extends StyleObject, HasChildren, HasAlign {
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

interface FileProps extends StyleObject, HasChildren, HasAlign {
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

interface FormLayoutGroupProps extends StyleObject, HasChildren {
  bottom?: React.ReactNode;
  status?: 'default' | 'error' | 'valid';
  top?: React.ReactNode;
}

interface FormStatusProps extends HasChildren {
  className?: string;
  dangerouslySetInnerHTML?: { __html: string };
  state?: 'default' | 'error';
  title?: React.ReactNode;
}

interface GalleryProps extends StyleObject, HasChildren, HasAlign {
  autoplay?: number;
  bullets?: 'dark' | 'light' | false;
  initialSlideIndex?: number;
  onChange?: () => void;
  onDragEnd?: () => void;
  onDragStart?: () => void;
  onEnd?: () => void;
  slideIndex?: number;
  slideWidth?: number | string;
}

interface GroupProps extends StyleObject, HasChildren, HasRef {
  description?: React.ReactNode;
  title?: React.ReactNode;
}

interface HeaderProps extends StyleObject, HasChildren, HasRef {
  aside?: React.ReactNode;
  indicator?: React.ReactNode;
  level?: '1' | '2';
}

interface HeaderButtonProps extends HasChildren {
  className?: string;
  href?: string;
  primary?: boolean;
}

interface HeaderContextProps extends HasChildren, StyleObject {
  onClose: () => void;
  opened: boolean;
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
export const FormLayoutGroup: React.ComponentType<FormLayoutGroupProps>;
export const FormStatus: React.ComponentType<FormStatusProps>;
export const Gallery: React.ComponentType<GalleryProps>;
export const Group: React.ComponentType<GroupProps>;
export const Header: React.ComponentType<HeaderProps>;
export const HeaderButton: React.ComponentType<HeaderButtonProps>;
export const HeaderContext: React.ComponentType<HeaderContextProps>;
