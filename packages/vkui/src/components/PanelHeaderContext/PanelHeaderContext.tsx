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
  none: styles['PanelHeaderContext--sizeX-none'],
  compact: styles['PanelHeaderContext--sizeX-compact'],
  regular: styles['PanelHeaderContext--sizeX-regular'],
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
        styles['PanelHeaderContext'],
        platform === 'ios' && styles['PanelHeaderContext--ios'],
        opened ? styles['PanelHeaderContext--opened'] : styles['PanelHeaderContext--closing'],
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
        className={styles['PanelHeaderContext__fade']}
      />
      <div
        data-testid={process.env.NODE_ENV === 'test' ? 'content' : undefined}
        className={styles['PanelHeaderContext__in']}
        ref={elementRef}
        {...animationHandlers}
      >
        <div className={styles['PanelHeaderContext__content']}>{children}</div>
      </div>
    </FixedLayout>
  );
};
