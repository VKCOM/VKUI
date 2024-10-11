import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { Placement } from '../../lib/floating';
import type { HasDataAttribute, HTMLAttributesWithRootRef } from '../../types';
import { CustomScrollView, type CustomScrollViewProps } from '../CustomScrollView/CustomScrollView';
import type { TrackerOptionsProps } from '../CustomScrollView/FallbackCustomScrollView/useTrackerVisibility';
import { Popper } from '../Popper/Popper';
import { Spinner } from '../Spinner/Spinner';
import styles from './CustomSelectDropdown.module.css';

export interface CustomSelectDropdownProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    Pick<CustomScrollViewProps, 'overscrollBehavior'>,
    TrackerOptionsProps,
    HasDataAttribute {
  useCustomScrollViewFallback?: boolean;
  targetRef: React.RefObject<HTMLElement>;
  placement?: Placement;
  scrollBoxRef?: React.Ref<HTMLDivElement>;
  fetching?: boolean;
  offsetDistance?: number;
  /**
   * Ширина раскрывающегося списка зависит от контента
   */
  autoWidth?: boolean;
  forcePortal?: boolean;
  onPlacementChange?: (placement: Placement) => void;
  /**
   * Отключает максимальную высоту по умолчанию
   */
  noMaxHeight?: boolean;
}

export const CustomSelectDropdown = ({
  children,
  targetRef,
  scrollBoxRef,
  placement = 'bottom',
  fetching,
  offsetDistance = 0,
  autoWidth = false,
  forcePortal = true,
  autoHideScrollbar,
  autoHideScrollbarDelay,
  className,
  noMaxHeight = false,
  // CustomScrollView
  useCustomScrollViewFallback = false,
  overscrollBehavior,
  ...restProps
}: CustomSelectDropdownProps): React.ReactNode => {
  return (
    <Popper
      targetRef={targetRef}
      offsetByMainAxis={offsetDistance}
      sameWidth={!autoWidth}
      placement={placement}
      className={classNames(
        styles.host,
        'vkuiInternalCustomSelectDropdown',
        offsetDistance === 0 && (placement.includes('top') ? styles.top : styles.bottom),
        autoWidth && classNames(styles.wide, 'vkuiInternalCustomSelectDropdown--wide'),
        className,
      )}
      usePortal={forcePortal}
      autoUpdateOnTargetResize
      {...restProps}
    >
      <CustomScrollView
        boxRef={scrollBoxRef}
        className={noMaxHeight ? undefined : styles.inWithMaxHeight}
        useFallback={useCustomScrollViewFallback}
        autoHideScrollbar={autoHideScrollbar}
        autoHideScrollbarDelay={autoHideScrollbarDelay}
        overscrollBehavior={overscrollBehavior}
      >
        {fetching ? (
          <div className={styles.fetching}>
            <Spinner size="s" />
          </div>
        ) : (
          children
        )}
      </CustomScrollView>
    </Popper>
  );
};
