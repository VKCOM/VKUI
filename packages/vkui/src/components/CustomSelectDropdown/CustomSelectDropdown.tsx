import * as React from 'react';
import { CustomScrollView } from '../CustomScrollView/CustomScrollView';
import { TrackerOptionsProps } from '../CustomScrollView/useTrackerVisibility';
import { classNames } from '@vkontakte/vkjs';
import { Popper } from '../Popper/Popper';
import { Spinner } from '../Spinner/Spinner';
import { HasRef } from '../../types';
import type { Placement } from '../../lib/floating';
import styles from './CustomSelectDropdown.module.css';

export interface CustomSelectDropdownProps
  extends React.HTMLAttributes<HTMLElement>,
    HasRef<HTMLDivElement>,
    TrackerOptionsProps {
  targetRef: React.RefObject<HTMLElement>;
  placement?: Placement;
  scrollBoxRef?: React.Ref<HTMLDivElement>;
  fetching?: boolean;
  offsetDistance?: number;
  sameWidth?: boolean;
  forcePortal?: boolean;
  onPlacementChange?: (placement?: Placement) => void;
}

const calcIsTop = (placement?: Placement) => placement?.includes('top');

export const CustomSelectDropdown = ({
  children,
  targetRef,
  scrollBoxRef,
  placement,
  fetching,
  onPlacementChange: parentOnPlacementChange,
  offsetDistance = 0,
  sameWidth = true,
  forcePortal = true,
  autoHideScrollbar,
  autoHideScrollbarDelay,
  className,
  ...restProps
}: CustomSelectDropdownProps) => {
  const [isTop, setIsTop] = React.useState(() => calcIsTop(placement));

  const onPlacementChange = React.useCallback(
    ({ placement }: { placement?: Placement }) => {
      setIsTop(calcIsTop(placement));
      parentOnPlacementChange?.(placement);
    },
    [parentOnPlacementChange, setIsTop],
  );

  return (
    <Popper
      targetRef={targetRef}
      offsetDistance={offsetDistance}
      sameWidth={sameWidth}
      onPlacementChange={onPlacementChange}
      placement={placement}
      className={classNames(
        styles['CustomSelectDropdown'],
        offsetDistance === 0 &&
          (isTop ? styles['CustomSelectDropdown--top'] : styles['CustomSelectDropdown--bottom']),
        sameWidth && styles['CustomSelectDropdown--wide'],
        className,
      )}
      forcePortal={forcePortal}
      autoUpdateOnTargetResize
      {...restProps}
    >
      <CustomScrollView
        boxRef={scrollBoxRef}
        className={styles['CustomSelectDropdown__in']}
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
