import type * as React from 'react';
import { getParentElement } from '../components/AppRoot/helpers';
import { type AppRootMode } from '../components/AppRoot/types';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

export function useSyncHTMLWithBaseVKUIClasses({
  appRootRef,
  mode,
  enable,
}: {
  appRootRef: React.RefObject<HTMLElement>;
  mode: AppRootMode;
  enable: boolean;
}) {
  useIsomorphicLayoutEffect(() => {
    if (!enable) {
      return;
    }

    const htmlElement = appRootRef.current?.ownerDocument.documentElement;
    const parentElement = getParentElement(appRootRef.current);

    if (mode === 'full') {
      /* eslint-disable-next-line no-restricted-properties */
      htmlElement?.classList.add('vkui');
    }
    /* eslint-disable-next-line no-restricted-properties */
    parentElement?.classList.add('vkui__root');

    return () => {
      if (mode === 'full') {
        /* eslint-disable-next-line no-restricted-properties */
        htmlElement?.classList.remove('vkui');
      }
      /* eslint-disable-next-line no-restricted-properties */
      parentElement?.classList.remove('vkui__root');
    };
  }, []);
}
