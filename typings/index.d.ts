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

export const ActionSheet: React.ComponentType<ActionSheetProps>;
export const ActionSheetItem: React.ComponentType<ActionSheetItemProps>;
export const Alert: React.ComponentType<AlertProps>;
