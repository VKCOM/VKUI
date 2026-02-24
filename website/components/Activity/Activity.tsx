import * as React from 'react';

type ChildrenProps = {
  style?: React.CSSProperties | undefined;
};

interface ActivityProps {
  mode?: 'visible' | 'hidden' | undefined;
  children?: React.ReactElement<ChildrenProps> | undefined;
}

// TODO [react@>=19.2.0]: Заменить на https://react.dev/reference/react/Activity
export function Activity({ mode, children }: ActivityProps) {
  if (mode !== 'hidden' || !children) {
    return children;
  }

  return React.cloneElement(children, { style: { ...children.props.style, display: 'none' } });
}
