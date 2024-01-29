export type {
  UseFloatingOptions,
  Placement,
  VirtualElement,
  PlacementWithAuto,
  AutoPlacementType,
  UseFloatingMiddleware,
  OnPlacementChange,
} from './types/common';

export type { FloatingComponentProps, FloatingContentRenderProp } from './types/component';

export {
  checkIsNotAutoPlacement,
  getAutoPlacementAlign,
  convertFloatingDataToReactCSSProperties,
  getArrowCoordsByMiddlewareData,
} from './functions';

export {
  useFloating,
  offsetMiddleware,
  flipMiddleware,
  shiftMiddleware,
  autoPlacementMiddleware,
  arrowMiddleware,
  sizeMiddleware,
  hideMiddleware,
  getOverflowAncestors,
  autoUpdateFloatingElement,
} from './adapters';

export {
  type UseFloatingMiddlewaresBootstrapOptions,
  useFloatingMiddlewaresBootstrap,
} from './useFloatingMiddlewaresBootstrap';

export * from './useFloatingWithInteractions';

export { usePlacementChangeCallback } from './usePlacementChangeCallback';
