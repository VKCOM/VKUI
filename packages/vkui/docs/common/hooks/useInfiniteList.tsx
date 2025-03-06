import { useCallback, useEffect, useRef, useState } from 'react';
import { Spinner } from '../../../src';
import { useGlobalEventListener } from '../../../src/hooks/useGlobalEventListener';
import { useDOM } from '../../../src/lib/dom';

const SPINNER_HEIGHT = 24;
const WINDOW_PADDING_BOTTOM = 64;

export const useInfiniteList = <Section,>(config: Section[]) => {
  const [showedSections, setShowedSections] = useState<Section[]>([]);
  const { window, document } = useDOM();
  const configRef = useRef(config);

  useEffect(
    function resetShowedConfig() {
      configRef.current = config;
      setShowedSections(config.slice(0, 1));
    },
    [config],
  );

  const handleScroll = useCallback(() => {
    if (!window || !document) {
      return;
    }
    const pageYOffset = window.pageYOffset;

    const maxScrollTop =
      document.documentElement.scrollHeight -
      window.innerHeight -
      SPINNER_HEIGHT -
      WINDOW_PADDING_BOTTOM;
    const isVisible = pageYOffset >= maxScrollTop;

    if (isVisible) {
      setShowedSections(configRef.current.slice(0, showedSections.length + 1));
    }
  }, [window, document, showedSections]);

  useGlobalEventListener(window, 'scroll', handleScroll);
  useEffect(() => handleScroll(), [handleScroll]);

  return {
    showedSections,
    showMoreElement: showedSections.length < config.length && <Spinner />,
  };
};
