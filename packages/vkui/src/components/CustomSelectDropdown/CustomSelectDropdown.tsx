import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { Placement } from '../../lib/floating';
import { HTMLAttributesWithRootRef } from '../../types';
import { CustomScrollView } from '../CustomScrollView/CustomScrollView';
import { TrackerOptionsProps } from '../CustomScrollView/useTrackerVisibility';
import { Popper } from '../Popper/Popper';
import { Spinner } from '../Spinner/Spinner';
import styles from './CustomSelectDropdown.module.css';

export interface CustomSelectDropdownProps
  extends HTMLAttributesWithRootRef<HTMLDivElement>,
    TrackerOptionsProps {
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
  onPlacementChange?(placement: Placement): void;
  /**
   * Отключает максимальную высоту по умолчанию
   */
  noMaxHeight?: boolean;
}

const calcIsTop = (placement: Placement) => placement.startsWith('top');

export const CustomSelectDropdown = ({
  children,
  targetRef,
  scrollBoxRef,
  placement = 'bottom',
  fetching,
  onPlacementChange: parentOnPlacementChange,
  offsetDistance = 0,
  autoWidth = false,
  forcePortal = true,
  autoHideScrollbar,
  autoHideScrollbarDelay,
  className,
  noMaxHeight = false,
  ...restProps
}: CustomSelectDropdownProps) => {
  const [isTop, setIsTop] = React.useState(() => calcIsTop(placement));

  const onPlacementChange = React.useCallback(
    (placement: Placement) => {
      setIsTop(calcIsTop(placement));
      if (parentOnPlacementChange) {
        parentOnPlacementChange(placement);
      }
    },
    [parentOnPlacementChange],
  );

  return (
    <Popper
      targetRef={targetRef}
      offsetByMainAxis={offsetDistance}
      sameWidth={!autoWidth}
      onPlacementChange={onPlacementChange}
      placement={placement}
      className={classNames(
        styles['CustomSelectDropdown'],
        'vkuiInternalCustomSelectDropdown',
        offsetDistance === 0 &&
          (isTop ? styles['CustomSelectDropdown--top'] : styles['CustomSelectDropdown--bottom']),
        autoWidth &&
          classNames(
            styles['CustomSelectDropdown--wide'],
            'vkuiInternalCustomSelectDropdown--wide',
          ),
        className,
      )}
      usePortal={forcePortal}
      autoUpdateOnTargetResize
      {...restProps}
    >
      <CustomScrollView
        boxRef={scrollBoxRef}
        className={noMaxHeight ? undefined : styles['CustomSelectDropdown__in--withMaxHeight']}
        autoHideScrollbar={autoHideScrollbar}
        autoHideScrollbarDelay={autoHideScrollbarDelay}
      >
        {fetching ? (
          <div className={styles['CustomSelectDropdown__fetching']}>
            <Spinner size="small" />
          </div>
        ) : (
          children
        )}
      </CustomScrollView>
    </Popper>
  );
};
