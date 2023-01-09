import * as React from 'react';
import { FixedLayout } from '../FixedLayout/FixedLayout';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useDOM } from '../../lib/dom';
import { Platform } from '../../lib/platform';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useTimeout } from '../../hooks/useTimeout';
import { usePlatform } from '../../hooks/usePlatform';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { getSizeXClassName } from '../../helpers/getSizeXClassName';
import styles from './PanelHeaderContext.module.css';

export interface PanelHeaderContextProps extends React.HTMLAttributes<HTMLDivElement> {
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
  const { sizeX } = useAdaptivity();
  const elementRef = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    opened && setVisible(true);
  }, [opened]);

  useScrollLock(platform !== Platform.VKCOM && opened);

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
        styles['PanelHeaderContext'],
        platform === Platform.IOS && styles['PanelHeaderContext--ios'],
        opened && styles['PanelHeaderContext--opened'],
        closing && styles['PanelHeaderContext--closing'],
        getSizeXClassName(styles['PanelHeaderContext'], sizeX),
        styles['PanelHeaderContext--rounded'],
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
          className={styles['PanelHeaderContext__fade']}
        />
      )}
      <div
        className={styles['PanelHeaderContext__in']}
        ref={elementRef}
        onAnimationEnd={closing ? onAnimationEnd : undefined}
      >
        <div className={styles['PanelHeaderContext__content']}>{visible && children}</div>
      </div>
    </FixedLayout>
  );
};
