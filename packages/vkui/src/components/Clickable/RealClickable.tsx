'use client';

import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { mergeCalls } from '../../lib/mergeCalls';
import { clickByKeyboardHandler } from '../../lib/utils';
import { RootComponent } from '../RootComponent/RootComponent';
import { type ClickableProps } from './Clickable';
import { ClickableLockStateContext, DEFAULT_ACTIVE_EFFECT_DELAY, useState } from './useState';
import styles from './Clickable.module.css';

/**
 * Кликабельный компонент. Добавляем кучу обвесов
 */
export const RealClickable = <T,>({
  baseClassName,
  children,
  focusVisibleMode = 'inside',
  activeClassName,
  hoverClassName,
  activeEffectDelay = DEFAULT_ACTIVE_EFFECT_DELAY,
  hasHover = true,
  hasActive = true,
  hovered,
  activated,
  hasHoverWithChildren,
  unlockParentHover,
  onPointerEnter,
  onPointerLeave,
  onPointerDown,
  onPointerCancel,
  onPointerUp,
  onBlur,
  onFocus,
  onKeyDown,
  ...restProps
}: ClickableProps<T>) => {
  const { focusVisible, ...focusEvents } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: focusVisibleMode });

  const {
    stateClassName,
    setLockHoverBubblingImmediate,
    setLockActiveBubblingImmediate,
    ...stateEvents
  } = useState({
    activeClassName,
    hoverClassName,
    activeEffectDelay,
    hasHover,
    hasActive,
    hovered,
    activated,
    unlockParentHover,
  });

  const handlers = mergeCalls(
    focusEvents,
    stateEvents,
    { onKeyDown: clickByKeyboardHandler },
    {
      onPointerEnter,
      onPointerLeave,
      onPointerDown,
      onPointerCancel,
      onPointerUp,
      onBlur,
      onFocus,
      onKeyDown,
    },
  );

  const lockStateContextValue = React.useMemo(
    () => ({
      lockHoverStateBubbling: hasHoverWithChildren ? noop : setLockHoverBubblingImmediate,
      lockActiveStateBubbling: setLockActiveBubblingImmediate,
    }),
    [setLockHoverBubblingImmediate, setLockActiveBubblingImmediate, hasHoverWithChildren],
  );

  return (
    <RootComponent
      baseClassName={classNames(
        baseClassName,
        styles.realClickable,
        focusVisibleClassNames,
        stateClassName,
      )}
      {...handlers}
      {...restProps}
    >
      <ClickableLockStateContext.Provider value={lockStateContextValue}>
        {children}
      </ClickableLockStateContext.Provider>
    </RootComponent>
  );
};
