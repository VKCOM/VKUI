import * as React from 'react';
import { Button } from '../../Button/Button';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';

export interface PaginationNavigationButtonProps {
  type: 'prev' | 'next';
  style: 'icon' | 'caption' | 'both';
  caption: React.ReactNode;
  Icon: React.ComponentType;
  a11yLabel: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

/**
 * @private
 */
export const PaginationNavigationButton = ({
  type,
  style,
  caption: captionProp,
  Icon,
  a11yLabel,
  disabled,
  onClick,
}: PaginationNavigationButtonProps) => {
  const icon: React.ReactElement | null =
    style !== 'caption' ? (
      <>
        <VisuallyHidden>{a11yLabel}</VisuallyHidden>
        <Icon />
      </>
    ) : null;
  const caption: React.ReactElement | null =
    style === 'caption' ? (
      <>
        <VisuallyHidden>{a11yLabel}</VisuallyHidden>
        <span aria-hidden="true">{captionProp}</span>
      </>
    ) : style !== 'icon' ? (
      <span aria-hidden="true">{captionProp}</span>
    ) : null;

  return (
    <Button
      size="l"
      before={type === 'prev' ? icon : null}
      after={type === 'next' ? icon : null}
      appearance={style === 'caption' ? 'neutral' : 'accent'}
      mode="tertiary"
      disabled={disabled}
      onClick={onClick}
    >
      {caption}
    </Button>
  );
};
