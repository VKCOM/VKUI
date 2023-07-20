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
import { FocusVisible } from '../../FocusVisible/FocusVisible';
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

  const shouldShowTooltip = withTooltip && (focusVisible || isHovered);

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
    <span
      ref={handleRootRef}
      onMouseEnter={setHoveredTrue}
      onMouseLeave={setHoveredFalse}
      className={classNames(
        styles['SliderThumb'],
        focusVisible && styles['SliderThumb--focused'],
        className,
      )}
      {...restProps}
    >
      <input
        {...inputProps}
        type="range"
        className={styles['SliderThumb__nativeInput']}
        aria-orientation="horizontal"
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <FocusVisible visible={focusVisible} mode="outside" />
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
    </span>
  );
};
