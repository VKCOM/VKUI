import * as React from 'react';
import { useDOM } from '../lib/dom';

/**
 * @private
 */
export const useDocumentVisibilityState = (turnOn = true) => {
  const { document } = useDOM();
  const [visible, setVisible] = React.useState(() => (document ? document.visibilityState : true));

  React.useEffect(
    function handleVisibilityChange() {
      if (!turnOn || !document) {
        return;
      }

      const listener = () => {
        setVisible(document.visibilityState);
      };

      document.addEventListener('visibilitychange', listener);

      return () => {
        document.removeEventListener('visibilitychange', listener);
      };
    },
    [turnOn, document],
  );

  return visible;
};
