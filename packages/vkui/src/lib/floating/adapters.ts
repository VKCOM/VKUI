import {
  autoUpdate as autoUpdateLib,
  type AutoUpdateOptions,
  type FloatingElement,
  type ReferenceType,
} from '@vkontakte/vkui-floating-ui/react-dom';

const defaultOptions = {
  ancestorScroll: true,
  ancestorResize: true,
  // По умолчанию отключаем, т.к. навешивать `MutationObserver` может быть дорого.
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

  const autoUpdateLibDisposer = autoUpdateLib(reference, floating, update, {
    ...restOptions,
    // Отключаем в библиотеке, т.к. под капотом используется `ResizeObserver`, которое не покрывается нашим `browserlist`.
    // Вместо него мы используем `MutationObserver`.
    // https://caniuse.com/resizeobserver
    elementResize: false,
  });

  // В случае если `ResizeObserver` будет полифилиться или он будет покрываться нашим `browserlist`, то надо удалить
  // код с `MutationObserver`.
  let observer: MutationObserver | null = null;
  if (elementResize) {
    let initialUpdate = true;
    observer = new MutationObserver(() => {
      if (!initialUpdate) {
        update();
      }

      initialUpdate = false;
    });

    if (reference instanceof Element) {
      observer.observe(reference, {
        childList: true,
        subtree: true,
      });
    }

    observer.observe(floating, {
      childList: true,
      subtree: true,
    });
  }

  return () => {
    if (observer !== null) {
      observer.disconnect();
      observer = null;
    }
    autoUpdateLibDisposer();
  };
}
