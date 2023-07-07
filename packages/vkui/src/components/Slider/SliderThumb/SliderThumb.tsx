import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useExternRef } from '../../../hooks/useExternRef';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import {
  arrowMiddleware,
  autoUpdate,
  convertFloatingDataToReactCSSProperties,
  flipMiddleware,
  offsetMiddleware,
  shiftMiddleware,
  useFloating,
  type UseFloatingMiddleware,
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
    const middlewares: UseFloatingMiddleware[] = [
      offsetMiddleware({
        crossAxis: 0,
        mainAxis: 15,
      }),
    ];

    middlewares.push(flipMiddleware());
    middlewares.push(shiftMiddleware({ padding: 8 }));

    // см. https://floating-ui.com/docs/arrow#order
    middlewares.push(
      arrowMiddleware({
        element: arrowRef,
        padding: 14,
      }),
    );

    return middlewares;
  }, [arrowRef]);

  const {
    x: floatingDataX,
    y: floatingDataY,
    placement: resolvedPlacement,
    refs,
    strategy: floatingPositionStrategy,
    middlewareData: { arrow: arrowCoords },
  } = useFloating({
    placement: 'top',
    open: focusVisible,
    middleware: memoizedMiddlewares,
    whileElementsMounted: autoUpdate,
  });

  const handleRootRef = useExternRef<HTMLSpanElement>(getRootRef, refs.setReference);
  return (
    <span
      ref={handleRootRef}
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
      {withTooltip && focusVisible && Boolean(inputProps?.value !== 'undefined') && (
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
          text={`Value: ${inputProps?.value}`}
        />
      )}
    </span>
  );
};
