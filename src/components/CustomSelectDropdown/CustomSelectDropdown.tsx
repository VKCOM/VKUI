import * as React from 'react';
import { Modifier } from 'react-popper';
import { CustomScrollView } from '../CustomScrollView/CustomScrollView';
import { TrackerOptionsProps } from '../CustomScrollView/useTrackerVisibility';
import { classNamesString } from '../../lib/classNames';
import { Popper, Placement } from '../Popper/Popper';
import { Spinner } from '../Spinner/Spinner';
import { HasRef } from '../../types';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { noop } from '../../lib/utils';
import styles from './CustomSelectDropdown.module.css';

export interface CustomSelectDropdownProps
  extends React.HTMLAttributes<HTMLElement>,
    HasRef<HTMLDivElement>,
    TrackerOptionsProps {
  targetRef: React.RefObject<HTMLElement>;
  placement?: Placement;
  scrollBoxRef?: React.Ref<HTMLDivElement>;
  observableRefs?: Array<React.RefObject<HTMLElement>> | React.RefObject<HTMLElement>;
  fetching?: boolean;
  offsetDistance?: number;
  sameWidth?: boolean;
  forcePortal?: boolean;
  onPlacementChange?: (placement?: Placement) => void;
}

const calcIsTop = (placement?: Placement) => placement?.includes('top');

function getObserverModifier<T extends HTMLElement>(element: T): Modifier<string> {
  return {
    name: 'customSelectChildrenChange',
    enabled: true,
    phase: 'main',
    fn: noop,
    effect: ({ instance }) => {
      const observer = new MutationObserver(instance.forceUpdate);

      observer.observe(element, {
        childList: true,
        subtree: true,
      });

      return () => {
        observer.disconnect();
      };
    },
  };
}

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
  observableRefs,
  className,
  ...restProps
}: CustomSelectDropdownProps) => {
  const [isTop, setIsTop] = React.useState(() => calcIsTop(placement));
  const [customModifiers, setCustomModifiers] = React.useState<Array<Modifier<string>>>([]);

  useIsomorphicLayoutEffect(() => {
    if (!observableRefs) {
      return;
    }
    const customModifiers: Array<Modifier<string>> = [];

    if (Array.isArray(observableRefs)) {
      for (const ref of observableRefs) {
        if (ref?.current) {
          customModifiers.push(getObserverModifier(ref.current));
        }
      }
    } else if (observableRefs.current) {
      customModifiers.push(getObserverModifier(observableRefs.current));
    }

    setCustomModifiers(customModifiers);
  }, [observableRefs]);

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
      className={classNamesString(
        styles['CustomSelectDropdown'],
        offsetDistance === 0 &&
          (isTop ? styles['CustomSelectDropdown--top'] : styles['CustomSelectDropdown--bottom']),
        sameWidth && styles['CustomSelectDropdown--wide'],
        className,
      )}
      forcePortal={forcePortal}
      customModifiers={customModifiers}
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
