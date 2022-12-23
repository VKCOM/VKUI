import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { usePlatform } from '../../hooks/usePlatform';
import { Platform } from '../../lib/platform';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useDOM } from '../../lib/dom';
import { pressedKey } from '../../lib/accessibility';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { getSizeXClassName } from '../../helpers/getSizeXClassName';
import styles from './Tabs.module.css';

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  mode?: 'default' | 'accent' | 'secondary';
}

export interface TabsContextProps {
  mode: TabsProps['mode'];
  withGaps: boolean;
}

export const TabsModeContext = React.createContext<TabsContextProps>({
  mode: 'default',
  withGaps: false,
});

/**
 * @see https://vkcom.github.io/VKUI/#/Tabs
 */
export const Tabs = ({
  children,
  mode = 'default',
  getRootRef,
  className,
  role = 'tablist',
  ...restProps
}: TabsProps) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivity();
  const { document } = useDOM();

  const isTabFlow = role === 'tablist';

  const tabsRef = React.useRef<HTMLDivElement>(null);

  const withGaps = mode === 'accent' || mode === 'secondary';

  const getTabEls = () => {
    if (!tabsRef.current) {
      return [];
    }

    return Array.from(
      // eslint-disable-next-line no-restricted-properties
      tabsRef.current.querySelectorAll<HTMLDivElement>('[role=tab]:not([disabled])'),
    );
  };

  const handleDocumentKeydown = (event: KeyboardEvent) => {
    if (!document || !tabsRef.current || !isTabFlow) {
      return;
    }

    const key = pressedKey(event);

    switch (key) {
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'End':
      case 'Home': {
        const tabEls = getTabEls();
        const currentFocusedElIndex = tabEls.findIndex((el) => document.activeElement === el);
        if (currentFocusedElIndex === -1) {
          return;
        }

        let nextIndex = 0;
        if (key === 'Home') {
          nextIndex = 0;
        } else if (key === 'End') {
          nextIndex = tabEls.length - 1;
        } else {
          const offset = key === 'ArrowRight' ? 1 : -1;
          nextIndex = currentFocusedElIndex + offset;
        }

        const nextTabEl = tabEls[nextIndex];

        if (nextTabEl) {
          event.preventDefault();
          nextTabEl.focus();
        }

        break;
      }
      /*
       В JAWS и NVDA стрелка вниз активирует контент.
       Это не прописано в стандартах, но по ссылке ниже это рекомендуется делать.
       https://inclusive-components.design/tabbed-interfaces/
      */
      case 'ArrowDown': {
        const tabEls = getTabEls();
        const currentFocusedEl = tabEls.find((el) => document.activeElement === el);

        if (!currentFocusedEl || currentFocusedEl.getAttribute('aria-selected') !== 'true') {
          return;
        }

        const relatedContentElId = currentFocusedEl.getAttribute('aria-controls');
        if (!relatedContentElId) {
          return;
        }

        // eslint-disable-next-line no-restricted-properties
        const relatedContentEl = document.getElementById(relatedContentElId);
        if (!relatedContentEl) {
          return;
        }

        event.preventDefault();
        relatedContentEl.focus();

        break;
      }
      case 'Space':
      case 'Enter': {
        const tabEls = getTabEls();
        const currentFocusedEl = tabEls.find((el) => document.activeElement === el);
        if (currentFocusedEl) {
          currentFocusedEl.click();
        }
      }
    }
  };

  useGlobalEventListener(document, 'keydown', handleDocumentKeydown, {
    capture: true,
  });

  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(
        styles['Tabs'],
        platform === Platform.VKCOM && styles[`Tabs--${platform}`],
        getSizeXClassName(styles['Tabs'], sizeX),
        withGaps && styles['Tabs--withGaps'],
        styles[`Tabs--mode-${mode}`],
        className,
      )}
      role={role}
    >
      <div className={styles['Tabs__in']} ref={tabsRef}>
        <TabsModeContext.Provider value={{ mode, withGaps }}>{children}</TabsModeContext.Provider>
      </div>
    </div>
  );
};
