import * as React from 'react';
import { usePatchChildren } from '../../hooks/usePatchChildren';
import { injectAriaExpandedPropByRole } from '../../lib/accessibility';
import { UseFloatingRefs } from '../../lib/floating/types/common';
import { ReferenceProps } from '../../lib/floating/useFloatingWithInteractions/types';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { PopoverProps } from './Popover';

type Props<T extends HTMLElement = HTMLElement> = Required<Pick<PopoverProps, 'role' | 'shown'>> & {
  children?: React.ReactElement;
  popover: React.ReactElement | null;
  referenceProps: ReferenceProps<T>;
  refs: UseFloatingRefs<T>;
};

export const PopoverWithChildren = ({
  referenceProps,
  shown,
  role,
  children,
  popover,
  refs,
}: Props) => {
  const [childRef, child] = usePatchChildren<HTMLDivElement>(
    children,
    injectAriaExpandedPropByRole(referenceProps, shown, role),
  );

  useIsomorphicLayoutEffect(() => {
    childRef.current && refs.setReference(childRef.current);
  }, [childRef, refs]);

  return (
    <React.Fragment>
      {child}
      {popover}
    </React.Fragment>
  );
};
