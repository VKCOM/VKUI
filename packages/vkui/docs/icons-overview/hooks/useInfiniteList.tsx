import { useCallback, useEffect, useRef, useState } from 'react';
import { Spinner } from '../../../src';
import { useGlobalEventListener } from '../../../src/hooks/useGlobalEventListener';
import { useDOM } from '../../../src/lib/dom';
import { type CONFIG, type ConfigData } from '../config';

const SPINNER_HEIGHT = 24;
const WINDOW_PADDING_BOTTOM = 64;

export const useInfiniteList = (config: ConfigData[]) => {
  const [showedConfig, setShowedConfig] = useState<typeof CONFIG>([]);
  const { window, document } = useDOM();
  const configRef = useRef(config);

  useEffect(
    function resetShowedConfig() {
      configRef.current = config;
      setShowedConfig(config.slice(0, 1));
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
      setShowedConfig(configRef.current.slice(0, showedConfig.length + 1));
    }
  }, [window, document, showedConfig]);

  useGlobalEventListener(window, 'scroll', handleScroll);
  useEffect(handleScroll, [handleScroll]);

  return {
    showedConfig,
    showMoreElement: showedConfig.length < config.length && <Spinner />,
  };
};
