import {
  autoUpdate as autoUpdateLib,
  type AutoUpdateOptions,
  type FloatingElement,
  type ReferenceType,
} from '@vkontakte/vkui-floating-ui/react-dom';
import { isHTMLElement } from '../dom';
import { IFrameResizeObserver } from './iframeResizeObserver';

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

const defaultOptions = {
  ancestorScroll: true,
  ancestorResize: true,
  // По умолчанию отключаем, т.к. навешивать `IFrameResizeObserver` может быть дорого.
  // В `autoUpdateLib` по умолчанию опция включена. Там используется ResizeObserver, но и он не менее дорогостоящий.
  // https://github.com/floating-ui/floating-ui/blob/0a34fe9cc2c7483976785a71bd0777cd7c3f2a6a/packages/dom/src/autoUpdate.ts#L6-L33
  elementResize: false,
  animationFrame: false,
};

export function autoUpdateFloatingElement(
  reference: ReferenceType,
  floating: FloatingElement,
  update: () => void,
  options: Partial<AutoUpdateOptions> = defaultOptions,
): ReturnType<typeof autoUpdateLib> {
  const { elementResize = false, ...restOptions } = options;

  const canUseResizeObserver = typeof ResizeObserver === 'function';
  const autoUpdateLibDisposer = autoUpdateLib(reference, floating, update, {
    ...restOptions,
    elementResize: elementResize && canUseResizeObserver,
  });

  // В случае если `ResizeObserver` будет полифилиться или он будет покрываться нашим `browserlist`, то надо удалить
  // код с `IFrameResizeObserver`.
  let observer: IFrameResizeObserver | null = null;
  if (elementResize && !canUseResizeObserver) {
    observer = new IFrameResizeObserver(update);

    if (isHTMLElement(reference)) {
      observer.observe(reference);
    }
    observer.observe(floating);
  }

  return () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }

    autoUpdateLibDisposer();
  };
}
