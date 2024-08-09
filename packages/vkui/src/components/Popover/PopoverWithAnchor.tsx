import * as React from 'react';
import { UseFloatingRefs } from '../../lib/floating/types/common';
import { ReferenceProps } from '../../lib/floating/useFloatingWithInteractions/types';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { PopoverProps } from './Popover';

const getAnchorAttributes = (state: boolean, role?: React.AriaRole) => {
  const attributes: Record<string, string | boolean> = {};
  switch (role) {
    case 'dialog':
    case 'menu':
    case 'application':
    case 'tab':
    case 'menuitem':
    case 'treeitem':
    case 'gridcell':
      attributes['aria-expanded'] = state;
      break;
  }
  return attributes;
};

const addEventListener = (
  element: HTMLElement,
  event: string,
  callback: (e: any) => void,
): (() => void) => {
  element.addEventListener(event, callback);
  return () => element.removeEventListener(event, callback);
};

type Props<T extends HTMLElement = HTMLElement> = Required<
  Pick<PopoverProps, 'role' | 'anchorRef' | 'shown'>
> & {
  popover: React.ReactElement | null;
  referenceProps: ReferenceProps<T>;
  refs: UseFloatingRefs<T>;
};

export const PopoverWithAnchor = ({
  refs,
  referenceProps,
  popover,
  role,
  anchorRef,
  shown,
}: Props) => {
  useIsomorphicLayoutEffect(() => {
    refs.setReference('current' in anchorRef ? anchorRef.current : anchorRef);
  }, [refs, anchorRef]);

  useIsomorphicLayoutEffect(() => {
    const anchorElement = 'current' in anchorRef ? anchorRef.current : anchorRef;
    if (!anchorElement) {
      return;
    }
    const listenersUnsubs = [
      referenceProps.onClick && addEventListener(anchorElement, 'click', referenceProps.onClick),
      referenceProps.onFocus && addEventListener(anchorElement, 'focus', referenceProps.onFocus),
      referenceProps.onBlur && addEventListener(anchorElement, 'blur', referenceProps.onBlur),
      referenceProps.onMouseOver &&
        addEventListener(anchorElement, 'mouseover', referenceProps.onMouseOver),
      referenceProps.onMouseLeave &&
        addEventListener(anchorElement, 'mouseleave', referenceProps.onMouseLeave),
    ];
    return () => listenersUnsubs.forEach((unsub) => unsub && unsub());
  }, [referenceProps, anchorRef]);

  useIsomorphicLayoutEffect(
    function addNeededAttributesToAnchor() {
      const anchorElement = 'current' in anchorRef ? anchorRef.current : anchorRef;
      if (!anchorElement) {
        return;
      }
      const attributes = getAnchorAttributes(shown, role);
      Object.entries(attributes).forEach(([key, value]) => {
        anchorElement.setAttribute(key, String(value));
      });
    },
    [anchorRef, shown, role],
  );

  return <React.Fragment>{popover}</React.Fragment>;
};
