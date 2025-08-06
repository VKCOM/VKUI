'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useGlobalOnClickOutside } from '../../hooks/useGlobalOnClickOutside';
import { usePlatform } from '../../hooks/usePlatform';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import type { HTMLAttributesWithRootRef } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { FixedLayout } from '../FixedLayout/FixedLayout';
import styles from './PanelHeaderContext.module.css';

const sizeXClassNames = {
  none: styles.sizeXNone,
  compact: styles.sizeXCompact,
  regular: styles.sizeXRegular,
};

export interface PanelHeaderContextProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Управление состоянием всплывающего элемента
   * true - элемент открыт, false - элемент закрыт.
   */
  opened: boolean;

  /**
   * Обработчик закрытия всплывающего элемента.
   */
  onClose: VoidFunction;
}

/**
 * @see https://vkui.io/components/panel-header-context
 */
export const PanelHeaderContext = ({
  children,
  opened = false,
  className,
  onClose,
  ...restProps
}: PanelHeaderContextProps): React.ReactNode => {
  const platform = usePlatform();
  const { sizeX = 'none' } = useAdaptivity();
  const elementRef = React.useRef<HTMLDivElement>(null);
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    opened ? 'enter' : 'exit',
    undefined,
    true,
  );
  const visible = animationState !== 'exited';

  useScrollLock(platform !== 'vkcom' && visible);

  const handleGlobalOnClickOutside = React.useCallback(
    (event: MouseEvent) => {
      if (opened) {
        event.stopPropagation();
        onClose();
      }
    },
    [opened, onClose],
  );

  useGlobalOnClickOutside(handleGlobalOnClickOutside, visible ? elementRef : null);

  if (!visible) {
    return null;
  }

  return (
    <FixedLayout
      {...restProps}
      className={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        opened ? styles.opened : styles.closing,
        sizeXClassNames[sizeX],
        className,
      )}
      vertical="top"
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className={styles.fade}
      />
      <div
        data-testid={process.env.NODE_ENV === 'test' ? 'content' : undefined}
        className={styles.in}
        ref={elementRef}
        {...animationHandlers}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </FixedLayout>
  );
};
