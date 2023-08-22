import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { pressedKey } from '../../lib/accessibility';
import { useDOM } from '../../lib/dom';
import { Platform } from '../../lib/platform';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Tabs.module.css';

export interface TabsProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
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
export const Tabs = ({ children, mode = 'default', role = 'tablist', ...restProps }: TabsProps) => {
  const platform = usePlatform();
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
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['Tabs'],
        'vkuiInternalTabs',
        platform === Platform.VKCOM && 'vkuiInternalTabs--vkcom',
        withGaps && classNames(styles['Tabs--withGaps'], 'vkuiInternalTabs--withGaps'),
        mode === 'default' && styles['Tabs--mode-default'],
      )}
      role={role}
    >
      <div className={styles['Tabs__in']} ref={tabsRef}>
        <TabsModeContext.Provider value={{ mode, withGaps }}>{children}</TabsModeContext.Provider>
      </div>
    </RootComponent>
  );
};
