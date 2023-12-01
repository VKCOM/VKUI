export type {
  UseFloatingOptions,
  Placement,
  VirtualElement,
  PlacementWithAuto,
  AutoPlacementType,
  UseFloatingMiddleware,
} from './types';

export {
  checkIsNotAutoPlacement,
  getAutoPlacementAlign,
  convertFloatingDataToReactCSSProperties,
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
