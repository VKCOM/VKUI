import {
  autoUpdate as autoUpdateLib,
  type AutoUpdateOptions,
  type FloatingElement,
  type ReferenceType,
} from '@vkontakte/vkui-floating-ui/react-dom';

export {
  useFloating,
  offset as offsetMiddleware,
  flip as flipMiddleware,
  shift as shiftMiddleware,
  autoPlacement as autoPlacementMiddleware,
  arrow as arrowMiddleware,
  size as sizeMiddleware,
  hide as hideMiddleware,
  getOverflowAncestors,
} from '@vkontakte/vkui-floating-ui/react-dom';

export type {
  FlipOptions as FlipMiddlewareOptions,
  ShiftOptions as ShiftMiddlewareOptions,
} from '@vkontakte/vkui-floating-ui/react-dom';

const defaultOptions = {
  ancestorScroll: true,
  ancestorResize: true,
  elementResize: false,
  animationFrame: false,
};

export function autoUpdateFloatingElement(
  reference: ReferenceType,
  floating: FloatingElement,
  update: () => void,
  options: Partial<AutoUpdateOptions> = defaultOptions,
): ReturnType<typeof autoUpdateLib> {
  const autoUpdateLibDisposer = autoUpdateLib(reference, floating, update, options);

  return () => {
    autoUpdateLibDisposer();
  };
}
