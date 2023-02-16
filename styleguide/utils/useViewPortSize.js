import { useEffect, useState } from 'react';
import { useDOM } from '@vkui/lib/dom';

export function useViewPortSize() {
  const { window } = useDOM();

  const [viewPortSize, setViewPortSize] = useState({
    viewWidth: 0,
    viewHeight: 0,
  });
  useEffect(() => {
    function handleResize() {
      setViewPortSize({
        viewWidth: window.innerWidth,
        viewHeight: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [window]);

  return viewPortSize;
}
