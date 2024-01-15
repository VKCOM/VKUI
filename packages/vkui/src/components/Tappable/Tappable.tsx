import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { mergeCalls } from '../../lib/mergeCalls';
import { checkClickable, Clickable, ClickableProps } from '../Clickable/Clickable';
import { Ripple, useMaybeNeedRipple, useRipple } from './Ripple';
import { activeClass, DEFAULT_STATE_MODE, hoverClass, StateProps } from './state';
import styles from './Tappable.module.css';

const sizeXClassNames = {
  none: styles['Tappable--sizeX-none'],
  compact: styles['Tappable--sizeX-compact'],
};

function hasPointerClassName(hasPointer: boolean | undefined) {
  switch (hasPointer) {
    case undefined:
      return styles['Tappable--hasPointer-none'];
    case false:
      return styles['Tappable--hasPointer-false'];
  }

  return undefined;
}

export interface TappableProps extends ClickableProps, StateProps {
  /**
   * Задает border-radius элементу
   * В режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`
   */
  borderRadiusMode?: 'auto' | 'inherit';
}

export const Tappable = ({
  baseClassName,
  borderRadiusMode = 'auto',
  children,
  hoverMode = DEFAULT_STATE_MODE,
  activeMode = DEFAULT_STATE_MODE,
  onPointerDown,
  onPointerCancel,
  ...restProps
}: TappableProps) => {
  const isClickable = checkClickable(restProps);

  const { sizeX = 'none', hasPointer } = useAdaptivity();

  const needRipple = useMaybeNeedRipple(activeMode, hasPointer);
  const { clicks, ...rippleEvents } = useRipple(needRipple, hasPointer);

  const handlers = mergeCalls(rippleEvents, {
    onPointerDown,
    onPointerCancel,
  });

  const typeProps = restProps.Component === 'button' ? { type: 'button' } : {};

  return (
    <Clickable
      baseClassName={classNames(
        baseClassName,
        styles['Tappable'],
        sizeX !== SizeType.REGULAR && sizeXClassNames[sizeX],
        borderRadiusMode === 'inherit' && styles['Tappable--borderRadiusInherit'],
        hasPointerClassName(hasPointer),
      )}
      hoverClassName={hoverClass(hoverMode)}
      activeClassName={activeClass(activeMode)}
      {...typeProps}
      {...handlers}
      {...restProps}
    >
      {children}
      {isClickable && (hoverMode === 'background' || activeMode === 'background') && (
        <Ripple needRipple={needRipple} clicks={clicks} />
      )}
    </Clickable>
  );
};
