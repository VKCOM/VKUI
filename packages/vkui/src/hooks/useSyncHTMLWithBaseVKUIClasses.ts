import type * as React from 'react';
import type { AppRootLayout, AppRootMode } from '../components/AppRoot/types';
import { useIsomorphicLayoutEffect } from '../lib/useIsomorphicLayoutEffect';

const layoutClassNames = { card: 'vkui--layout-card', plain: 'vkui--layout-plain' };

export function useSyncHTMLWithBaseVKUIClasses({
  appRootRef,
  mode,
  enable,
  layoutMode,
}: {
  appRootRef: React.RefObject<HTMLElement | null>;
  mode: AppRootMode;
  layoutMode?: AppRootLayout | undefined;
  enable: boolean;
}) {
  useIsomorphicLayoutEffect(() => {
    if (!enable) {
      return;
    }

    const htmlElement = appRootRef.current?.ownerDocument.documentElement;
    const parentElement = appRootRef.current?.parentElement ?? null;

    const htmlElementClasses = ['vkui'];
    const parentElementClasses = ['vkui__root'];

    if (mode === 'embedded') {
      parentElementClasses.push('vkui__root--embedded');
    }

    if (mode === 'full') {
      if (layoutMode) {
        htmlElementClasses.push(layoutClassNames[layoutMode]);
      }
      /* eslint-disable-next-line no-restricted-properties */
      htmlElement?.classList.add(...htmlElementClasses);
    }

    /* eslint-disable-next-line no-restricted-properties */
    parentElement?.classList.add(...parentElementClasses);

    return () => {
      if (mode === 'full') {
        /* eslint-disable-next-line no-restricted-properties */
        htmlElement?.classList.remove(...htmlElementClasses);
      }
      /* eslint-disable-next-line no-restricted-properties */
      parentElement?.classList.remove(...parentElementClasses);
    };
  }, [mode, enable, layoutMode, appRootRef]);
}
