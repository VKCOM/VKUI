import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useBooleanState } from '../../../hooks/useBooleanState';
import { useExternRef } from '../../../hooks/useExternRef';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import {
  arrowMiddleware,
  convertFloatingDataToReactCSSProperties,
  flipMiddleware,
  offsetMiddleware,
  shiftMiddleware,
  useFloating,
} from '../../../lib/floating';
import type { HasDataAttribute, HasRootRef } from '../../../types';
import { Tappable } from '../../Tappable/Tappable';
import { TooltipBase } from '../../TooltipBase/TooltipBase';
import styles from './SliderThumb.module.css';

interface SliderThumbProps extends HasRootRef<HTMLSpanElement>, HasDataAttribute {
  className?: string;
  style?: React.CSSProperties;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement> &
    HasDataAttribute;
  withTooltip?: boolean;
}

export const SliderThumb = ({
  className,
  getRootRef,
  inputProps,
  withTooltip,
  ...restProps
}: SliderThumbProps) => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible(false);
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);

  const memoizedMiddlewares = React.useMemo(() => {
    return [
      offsetMiddleware({
        crossAxis: 0,
        mainAxis: 15,
      }),
      flipMiddleware(),
      shiftMiddleware({ padding: 8 }),
      arrowMiddleware({
        element: arrowRef,
      }),
    ];
  }, [arrowRef]);

  const {
    x: floatingDataX,
    y: floatingDataY,
    placement: resolvedPlacement,
    refs,
    strategy: floatingPositionStrategy,
    middlewareData: { arrow: arrowCoords },
    update: updateTooltipPosition,
  } = useFloating({
    placement: 'top',
    open: focusVisible,
    middleware: memoizedMiddlewares,
  });

  const {
    value: isHovered,
    setTrue: setHoveredTrue,
    setFalse: setHoveredFalse,
  } = useBooleanState(false);
  const {
    value: isActive,
    setTrue: setIsActiveTrue,
    setFalse: setIsActiveFalse,
  } = useBooleanState(false);

  const shouldShowTooltip = withTooltip && (focusVisible || isHovered || isActive);

  const inputValue = inputProps && inputProps.value;
  React.useEffect(
    function udpateTooltipPositionOnValueChange() {
      if (shouldShowTooltip && inputValue !== 'undefined') {
        updateTooltipPosition();
      }
    },
    [inputValue, updateTooltipPosition, shouldShowTooltip],
  );

  const handleRootRef = useExternRef<HTMLSpanElement>(getRootRef, refs.setReference);

  return (
    <React.Fragment>
      <Tappable
        Component="span"
        hovered={isHovered}
        focused={focusVisible}
        isActive={isActive}
        getRootRef={handleRootRef}
        onEnter={setHoveredTrue}
        onLeave={setHoveredFalse}
        activeMode="background"
        onStart={setIsActiveTrue}
        onEnd={setIsActiveFalse}
        onBlur={onBlur}
        onFocus={onFocus}
        className={classNames(
          styles['SliderThumb'],
          focusVisible && styles['SliderThumb--focused'],
          isActive && styles['SliderThumb--active'],
          className,
        )}
        {...restProps}
      >
        <input
          {...inputProps}
          tabIndex={-1}
          type="range"
          className={styles['SliderThumb__nativeInput']}
          aria-orientation="horizontal"
        />
      </Tappable>
      {shouldShowTooltip && (
        <TooltipBase
          appearance="neutral"
          getRootRef={refs.setFloating}
          floatingStyle={convertFloatingDataToReactCSSProperties(
            floatingPositionStrategy,
            floatingDataX,
            floatingDataY,
          )}
          arrowCoords={arrowCoords}
          arrowPlacement={resolvedPlacement}
          getArrowRef={setArrowRef}
          text={inputValue}
        />
      )}
    </React.Fragment>
  );
};
