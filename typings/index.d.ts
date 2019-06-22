import * as React from 'react';

interface ActionSheetProps {
    onClose: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    text?: React.ReactNode;
    title?: React.ReactNode;
}

export const ActionSheet: React.ComponentType<ActionSheetProps>;

