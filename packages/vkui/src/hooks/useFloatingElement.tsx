import * as React from 'react';
import { type Ref, useMemo } from 'react';
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
import { useReferenceHiddenChangeCallback } from '../lib/floating/useReferenceHiddenChangeCallback';
import { useExternRef } from './useExternRef';
import { useGlobalEscKeyDown } from './useGlobalEscKeyDown';

export type FloatingComponentProps<FloatingElement extends HTMLElement = HTMLElement> = Pick<
  UseFloatingWithInteractionsReturn,
  | 'shown'
  | 'willBeHide'
  | 'floatingProps'
  | 'middlewareData'
  | 'onClose'
  | 'onRestoreFocus'
  | 'placement'
> & {
  floatingRef: React.Ref<FloatingElement>;
  setArrowRef: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
};

export type RenderFloatingComponentFn<FloatingElement extends HTMLElement = HTMLElement> = (
  props: FloatingComponentProps<FloatingElement>,
) => React.ReactNode | null;

export type RemapReferencePropsFn<ReferenceElement extends HTMLElement = HTMLElement> = (
  props: ReferenceProps<ReferenceElement> & { shown: boolean },
) => ReferenceProps<ReferenceElement>;

export type UseFloatingElementProps<
  FloatingElement extends HTMLElement = HTMLElement,
  ReferenceElement extends HTMLElement = HTMLElement,
> = Omit<UseFloatingMiddlewaresBootstrapOptions, 'arrowRef'> &
  Omit<UseFloatingWithInteractionsProps, 'placement'> & {
    onPlacementChange?: OnPlacementChange;
    onReferenceHiddenChange?: (hidden: boolean) => void;
    renderFloatingComponent: RenderFloatingComponentFn<FloatingElement>;
    remapReferenceProps?: RemapReferencePropsFn<ReferenceElement>;
    externalFloatingElementRef?: React.Ref<FloatingElement>;
  };

export type UseFloatingResult<ReferenceElement extends HTMLElement = HTMLElement> = {
  anchorRef: Ref<ReferenceElement>;
  anchorProps: ReferenceProps<ReferenceElement>;
  component: React.ReactNode | null;
};

export const useFloatingElement = <
  ReferenceElement extends HTMLElement = HTMLElement,
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
  strategy,
  onReferenceHiddenChange,

  onPlacementChange,

  renderFloatingComponent,
  externalFloatingElementRef,
  remapReferenceProps,
}: UseFloatingElementProps<
  FloatingElement,
  ReferenceElement
>): UseFloatingResult<ReferenceElement> => {
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
    strategy,
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

  useReferenceHiddenChangeCallback(middlewareData.hide, onReferenceHiddenChange);

  const component = renderFloatingComponent({
    shown,
    willBeHide,
    floatingProps,
    floatingRef: resultRef,
    middlewareData,
    placement: resolvedPlacement,
    onClose,
    onRestoreFocus,
    setArrowRef,
  });

  useGlobalEscKeyDown(shown, onEscapeKeyDown);

  const remappedReferenceProps = useMemo(
    () =>
      remapReferenceProps ? remapReferenceProps({ ...referenceProps, shown }) : referenceProps,
    [remapReferenceProps, shown, referenceProps],
  );

  return {
    anchorRef: refs.setReference,
    anchorProps: remappedReferenceProps,
    component,
  };
};
