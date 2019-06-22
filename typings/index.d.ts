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

export const ActionSheet: React.ComponentType<ActionSheetProps>;
export const ActionSheetItem: React.ComponentType<ActionSheetItemProps>;
