import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { HTMLAttributesWithRootRef } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { FixedLayout } from '../FixedLayout/FixedLayout';
import styles from './PanelHeaderContext.module.css';

const sizeXClassNames = {
  none: styles.hostSizeXNone,
  ['compact']: styles.hostSizeXCompact,
  ['regular']: styles.hostSizeXRegular,
};

export interface PanelHeaderContextProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  opened: boolean;
  onClose: VoidFunction;
}

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderContext
 */
export const PanelHeaderContext = ({
  children,
  onClose,
  opened = false,
  className,
  ...restProps
}: PanelHeaderContextProps) => {
  const { document } = useDOM();
  const platform = usePlatform();
  const [visible, setVisible] = React.useState(opened);
  const closing = visible && !opened;
  const { sizeX = 'none' } = useAdaptivity();
  const elementRef = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    opened && setVisible(true);
  }, [opened]);

  useScrollLock(platform !== 'vkcom' && opened);

  // start closing on outer click
  useGlobalEventListener(
    document,
    'click',
    opened &&
      !closing &&
      ((event) => {
        if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
          event.stopPropagation();
          onClose();
        }
      }),
    { capture: true },
  );

  // fallback onAnimationEnd when animationend not supported
  const onAnimationEnd = () => setVisible(false);
  const animationFallback = useTimeout(onAnimationEnd, 200);
  React.useEffect(
    () => (closing ? animationFallback.set() : animationFallback.clear()),
    [animationFallback, closing],
  );

  return (
    <FixedLayout
      {...restProps}
      className={classNames(
        styles.host,
        platform === 'ios' && styles.hostIos,
        opened && styles.hostOpened,
        closing && styles.hostClosing,
        sizeXClassNames[sizeX],
        className,
      )}
      vertical="top"
    >
      {visible && (
        <div
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          className={styles.fade}
        />
      )}
      <div
        className={styles.in}
        ref={elementRef}
        onAnimationEnd={closing ? onAnimationEnd : undefined}
      >
        {visible && <div className={styles.content}>{children}</div>}
      </div>
    </FixedLayout>
  );
};
