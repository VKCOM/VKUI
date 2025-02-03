'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useEffectDev } from '../../hooks/useEffectDev';
import { useEventListener } from '../../hooks/useEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { useDOM } from '../../lib/dom';
import { isRefObject } from '../../lib/isRefObject';
import { stopPropagation } from '../../lib/utils';
import { warnOnce } from '../../lib/warnOnce';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { Popper } from '../Popper/Popper';
import type { SharedDropdownProps } from './types';
import styles from './ActionSheet.module.css';

const warn = warnOnce('ActionSheet');
function getEl(ref: SharedDropdownProps['toggleRef']): Element | null | undefined {
  return ref && 'current' in ref ? ref.current : ref;
}

export const ActionSheetDropdownMenu = ({
  children,
  toggleRef,
  closing,
  onClose,
  className,
  style,
  popupOffsetDistance = 0,
  placement,
  onAnimationStart,
  onAnimationEnd,
  allowClickPropagation = false,
  onClick,
  ...restProps
}: SharedDropdownProps): React.ReactNode => {
  const { document } = useDOM();
  const platform = usePlatform();
  const { sizeY } = useAdaptivityWithJSMediaQueries();
  const elementRef = React.useRef<HTMLDivElement | null>(null);

  useEffectDev(() => {
    const toggleEl = getEl(toggleRef);
    if (!toggleEl) {
      warn(`Свойство "toggleRef" не передано`, 'error');
    }
  }, [toggleRef]);

  const bodyClickListener = useEventListener('click', (e: MouseEvent) => {
    const dropdownElement = elementRef?.current;
    if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
      onClose?.();
    }
  });

  React.useEffect(() => {
    setTimeout(() => {
      bodyClickListener.add(document!.body);
    });
  }, [bodyClickListener, document]);

  const targetRef = React.useMemo(() => {
    if (isRefObject<SharedDropdownProps['toggleRef'], HTMLElement>(toggleRef)) {
      return toggleRef;
    }

    return { current: toggleRef as HTMLElement };
  }, [toggleRef]);

  const handleClick = allowClickPropagation
    ? onClick
    : (event: React.MouseEvent<HTMLElement>) => {
        stopPropagation(event);
        onClick?.(event);
      };

  return (
    <Popper
      targetRef={targetRef}
      offsetByMainAxis={popupOffsetDistance}
      placement={placement}
      className={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        styles.menu,
        closing ? styles.closing : styles.opening,
        sizeY === 'compact' && styles.sizeYCompact,
        className,
      )}
      style={style}
      getRootRef={elementRef}
      usePortal={false}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      <FocusTrap onClose={onClose} {...restProps} onClick={handleClick}>
        {children}
      </FocusTrap>
    </Popper>
  );
};
