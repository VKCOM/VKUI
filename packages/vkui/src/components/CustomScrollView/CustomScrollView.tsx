import * as React from 'react';
import { classNames, noop } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useExternRef } from '../../hooks/useExternRef';
import type { HasRootRef } from '../../types';
import { ScrollX } from './ScrollX';
import { ScrollY } from './ScrollY';
import { BarHandlers } from './types';
import { useCustomScrollViewResize } from './useCustomScrollViewResize';
import { useDetectScrollDirection } from './useDetectScrollDirection';
import { TrackerOptionsProps } from './useTrackerVisibility';
import styles from './CustomScrollView.module.css';

const DEFAULT_BAR_HANDLERS: BarHandlers = {
  resize: noop,
  scroll: noop,
};

function hasPointerClassName(hasPointer: boolean | undefined) {
  switch (hasPointer) {
    case true:
      return styles['CustomScrollView--hasPointer-true'];
    case false:
      return styles['CustomScrollView--hasPointer-false'];
    case undefined:
    default:
      return styles['CustomScrollView--hasPointer-none'];
  }
}

const overscrollBehaviorClassNames = {
  auto: undefined,
  contain: styles['CustomScrollView__box--overscrollBehavior-contain'],
  none: styles['CustomScrollView__box--overscrollBehavior-none'],
};

export interface CustomScrollViewProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement>,
    TrackerOptionsProps {
  windowResize?: boolean;
  boxRef?: React.Ref<HTMLDivElement>;
  className?: HTMLDivElement['className'];
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
  /**
   * Поведение overscroll, подробнее можно почитать в [документации](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)
   */
  overscrollBehavior?: 'auto' | 'contain' | 'none';
  /**
   * Включение замены горизонтального скролла
   *
   * > ⚠️ Важно: На версиях Firefox ниже 64 могут возникнуть проблемы при использовании этого флага, будьте осторожны
   */
  enableHorizontalScroll?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/CustomScrollView
 */
export const CustomScrollView = ({
  className,
  children,
  boxRef: externalBoxRef,
  windowResize,
  autoHideScrollbar = false,
  autoHideScrollbarDelay,
  enableHorizontalScroll = false,
  onScroll: onScrollProp,
  getRootRef,
  overscrollBehavior = 'auto',
  ...restProps
}: CustomScrollViewProps): React.ReactNode => {
  const { hasPointer } = useAdaptivity();

  const boxRef = useExternRef(externalBoxRef);
  const boxContentRef = React.useRef<HTMLDivElement>(null);
  const barX = React.useRef<HTMLDivElement>(null);
  const barY = React.useRef<HTMLDivElement>(null);

  const { scrollDirection, onScroll: detectScrollDirection } = useDetectScrollDirection(boxRef);

  const barYHandlers = React.useRef({ ...DEFAULT_BAR_HANDLERS });
  const barXHandlers = React.useRef({ ...DEFAULT_BAR_HANDLERS });

  useCustomScrollViewResize({
    windowResize,
    boxContentRef,
    onResize: () => {
      barYHandlers.current.resize(barY.current);
      barXHandlers.current.resize(barX.current);
    },
  });

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    detectScrollDirection();
    if (!scrollDirection) {
      return;
    }
    if (scrollDirection === 'horizontal') {
      barXHandlers.current.scroll();
    } else {
      barYHandlers.current.scroll();
    }
    onScrollProp?.(event);
  };

  return (
    <div
      className={classNames(className, styles['CustomScrollView'], hasPointerClassName(hasPointer))}
      ref={getRootRef}
      {...restProps}
    >
      <div
        className={classNames(
          styles['CustomScrollView__box'],
          enableHorizontalScroll && styles['CustomScrollView__box--horizontalEnabled'],
          overscrollBehaviorClassNames[overscrollBehavior],
        )}
        tabIndex={-1}
        ref={boxRef}
        onScroll={onScroll}
      >
        <div ref={boxContentRef} className={styles['CustomScrollView__box-content']}>
          {children}
        </div>
      </div>
      <ScrollY
        bar={barY}
        barHandlers={barYHandlers}
        boxRef={boxRef}
        autoHideScrollbar={autoHideScrollbar}
        autoHideScrollbarDelay={autoHideScrollbarDelay}
      />
      {enableHorizontalScroll && (
        <ScrollX
          bar={barX}
          barHandlers={barXHandlers}
          boxRef={boxRef}
          autoHideScrollbar={autoHideScrollbar}
          autoHideScrollbarDelay={autoHideScrollbarDelay}
        />
      )}
    </div>
  );
};
