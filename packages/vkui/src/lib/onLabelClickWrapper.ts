import type * as React from 'react';

export const onLabelClickWrapper = (
  onClick?: React.MouseEventHandler<HTMLLabelElement>,
): React.MouseEventHandler<HTMLLabelElement> => {
  return (event) => {
    if (onClick && (event.target as HTMLElement).tagName === 'INPUT') {
      onClick(event);
    }
  };
};
