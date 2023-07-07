export {
  useFloating,
  offset as offsetMiddleware,
  flip as flipMiddleware,
  shift as shiftMiddleware,
  limitShift,
  autoPlacement as autoPlacementMiddleware,
  arrow as arrowMiddleware,
  size as sizeMiddleware,
  autoUpdate,
} from '@floating-ui/react-dom';

export type {
  Placement,
  PlacementWithAuto,
  AutoPlacementType,
  UseFloatingMiddleware,
} from './types';

export {
  checkIsNotAutoPlacement,
  getAutoPlacementAlign,
  convertFloatingDataToReactCSSProperties,
} from './functions';

export { autoUpdateFloatingElement } from './adapters';
