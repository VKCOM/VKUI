import * as React from 'react';
import { useTimeout } from '../../hooks/useTimeout';
import { useDOM } from '../../lib/dom';

export function useAutoPlay(timeout: number, slideIndex: number, callbackFn: VoidFunction) {
  const { clear: clearAutoPlay, set: setAutoPlay } = useTimeout(callbackFn, timeout);
  const { document } = useDOM();
  const idle = React.useRef(false);

  React.useEffect(
    () => (timeout && !idle.current ? setAutoPlay() : clearAutoPlay()),
    [timeout, slideIndex, clearAutoPlay, setAutoPlay],
  );

  // Отключаем прокрутку слайдов при неактивной вкладке
  React.useEffect(
    function preventSlideChange() {
      if (!document || !timeout) {
        return;
      }

      const changeAutoPlay = () => {
        if (document.hidden) {
          idle.current = true;
          clearAutoPlay();
        } else {
          idle.current = false;
          setAutoPlay();
        }
      };

      document.addEventListener('visibilitychange', changeAutoPlay);

      return () => {
        document.removeEventListener('visibilitychange', changeAutoPlay);
      };
    },
    [document, timeout, clearAutoPlay, setAutoPlay],
  );
}
