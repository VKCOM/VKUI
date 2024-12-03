import * as React from 'react';
import { type Ref } from 'react';
import {
  type OnPlacementChange,
  useFloatingMiddlewaresBootstrap,
  type UseFloatingMiddlewaresBootstrapOptions,
  useFloatingWithInteractions,
  type UseFloatingWithInteractionsProps,
  type UseFloatingWithInteractionsReturn,
  usePlacementChangeCallback,
} from '../lib/floating';
import { type ReferenceProps } from '../lib/floating/useFloatingWithInteractions/types';
import { useExternRef } from './useExternRef';

export type FloatingComponentProps<FloatingElement extends HTMLElement = HTMLElement> = Pick<
  UseFloatingWithInteractionsReturn,
  | 'shown'
  | 'willBeHide'
  | 'floatingProps'
  | 'middlewareData'
  | 'onClose'
  | 'onRestoreFocus'
  | 'onEscapeKeyDown'
  | 'placement'
> & {
  floatingRef: React.Ref<FloatingElement>;
  setArrowRef: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
};

export type UseFloatingElementProps<FloatingElement extends HTMLElement = HTMLElement> = Omit<
  UseFloatingMiddlewaresBootstrapOptions,
  'arrowRef'
> &
  Omit<UseFloatingWithInteractionsProps, 'placement'> & {
    onPlacementChange?: OnPlacementChange;
    renderFloatingComponent: (
      props: FloatingComponentProps<FloatingElement>,
    ) => React.ReactNode | null;
    externalFloatingElementRef?: React.Ref<FloatingElement>;
  };

export type UseFloatingResult<AnchorElement extends HTMLElement = HTMLElement> = {
  anchorRef: Ref<AnchorElement>;
  anchorProps: ReferenceProps<AnchorElement>;
  componentShow: boolean;
  onEscapeKeyDown?: VoidFunction;
  component: React.ReactNode | null;
};

export const useFloatingElement = <
  AnchorElement extends HTMLElement = HTMLElement,
  FloatingElement extends HTMLElement = HTMLElement,
>({
  // useFloatingMiddlewaresBootstrap
  placement = 'bottom-start',
  arrow,
  arrowHeight,
  arrowPadding,
  sameWidth,
  offsetByMainAxis = 0,
  offsetByCrossAxis = 0,
  customMiddlewares,
  hideWhenReferenceHidden,
  disableFlipMiddleware = false,

  // useFloatingWithInteractions
  trigger,
  hoverDelay,
  closeAfterClick,
  disabled,
  disableInteractive,
  disableCloseOnClickOutside,
  disableCloseOnEscKey,
  defaultShown,
  shown: shownProp,
  onShownChange,
  onShownChanged,

  onPlacementChange,

  renderFloatingComponent,
  externalFloatingElementRef,
}: UseFloatingElementProps<FloatingElement>): UseFloatingResult<AnchorElement> => {
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);

  const { middlewares, strictPlacement } = useFloatingMiddlewaresBootstrap({
    placement,
    offsetByMainAxis,
    offsetByCrossAxis,
    customMiddlewares,
    hideWhenReferenceHidden,
    sameWidth,
    arrow,
    arrowRef,
    arrowPadding,
    arrowHeight,
    disableFlipMiddleware,
  });

  const {
    placement: resolvedPlacement,
    shown,
    willBeHide,
    refs,
    referenceProps,
    floatingProps,
    middlewareData,
    onClose,
    onRestoreFocus,
    onEscapeKeyDown,
  } = useFloatingWithInteractions({
    middlewares,
    placement: strictPlacement,
    trigger,
    hoverDelay,
    closeAfterClick,
    disabled,
    disableInteractive,
    disableCloseOnClickOutside,
    disableCloseOnEscKey,
    defaultShown,
    shown: shownProp,
    onShownChange,
    onShownChanged,
  });

  const resultRef = useExternRef<FloatingElement>(externalFloatingElementRef, refs.setFloating);

  usePlacementChangeCallback(placement, resolvedPlacement, onPlacementChange);

  const component = renderFloatingComponent({
    shown,
    willBeHide,
    floatingProps,
    floatingRef: resultRef,
    middlewareData,
    placement: resolvedPlacement,
    onClose,
    onRestoreFocus,
    onEscapeKeyDown,
    setArrowRef,
  });

  return {
    anchorRef: refs.setReference,
    anchorProps: referenceProps,
    component,
    componentShow: shown,
    onEscapeKeyDown,
  };
};
