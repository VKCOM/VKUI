import type * as React from 'react';

export const withLabelClickWrapper = (
  onClick?: React.MouseEventHandler<HTMLLabelElement>,
): React.MouseEventHandler<HTMLLabelElement> | undefined => {
  if (onClick) {
    return (event) => {
      if ((event.target as HTMLElement).tagName === 'INPUT') {
        onClick(event);
      }
    };
  }
  return undefined;
};
