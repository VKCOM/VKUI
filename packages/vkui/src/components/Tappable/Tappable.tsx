'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { SizeType } from '../../lib/adaptivity';
import { mergeCalls } from '../../lib/mergeCalls';
import { checkClickable, Clickable, type ClickableProps } from '../Clickable/Clickable';
import { Ripple, useMaybeNeedRipple, useRipple } from './Ripple';
import { activeClass, DEFAULT_STATE_MODE, hoverClass, type StateProps } from './state';
import styles from './Tappable.module.css';

const sizeXClassNames = {
  none: styles.sizeXNone,
  compact: styles.sizeXCompact,
};

function hasPointerClassName(hasPointer: boolean | undefined) {
  switch (hasPointer) {
    case undefined:
      return styles.hasPointerNone;
    case false:
      return styles.hasPointerFalse;
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
}: TappableProps): React.ReactNode => {
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
        'vkuiInternalTappable',
        baseClassName,
        styles.host,
        sizeX !== SizeType.REGULAR && sizeXClassNames[sizeX],
        borderRadiusMode === 'inherit' && styles.borderRadiusInherit,
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
