import * as React from 'react';
import { usePopper } from 'react-popper';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { HasRef } from '../../types';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { useExternRef } from '../../hooks/useExternRef';
import './Popper.css';

type Placement = 'auto' | 'auto-start' | 'auto-end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' |
'right-start' | 'right-end' | 'left-start' | 'left-end' | 'top' | 'bottom' | 'left' | 'right';

type Modifier = {
  name: string;
  options?: {
    [index: string]: any;
  };
};

export interface PopperCommonProps extends React.HTMLAttributes<HTMLElement>, HasRef<HTMLElement> {
  /**
   * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
   */
  placement?: Placement;
  /**
   * Отступ по вспомогательной оси
   */
  offsetSkidding?: number;
  /**
   * Отступ по главной оси
   */
  offsetDistance?: number;
  arrow?: boolean;
  arrowClassName?: string;
  onPlacementChange?: (data: { placement?: Placement }) => void;
}

export interface PopperProps extends PopperCommonProps {
  targetRef?: React.RefObject<HTMLElement>;
}

const ARROW_PADDING = 10;
const ARROW_WIDTH = 20;
const ARROW_HEIGHT = 8;

export const Popper: React.FC<PopperProps> = ({
  targetRef,
  children,
  getRef,
  placement = 'bottom-start',
  onPlacementChange,
  arrow,
  arrowClassName,
  offsetDistance = 8,
  offsetSkidding = 0,
  style: compStyles,
  ...restProps
}: PopperProps) => {
  const [dropdownNode, setPopperNode] = React.useState(null);
  const [ready, setReady] = React.useState(!arrow);
  const [smallTargetOffsetSkidding, setSmallTargetOffsetSkidding] = React.useState(0);
  const platform = usePlatform();

  const setExternalRef = useExternRef(getRef, setPopperNode);

  React.useEffect(() => {
    if (arrow) {
      const targetWidth = targetRef.current.offsetWidth;
      if (targetWidth < ARROW_WIDTH + 2 * ARROW_PADDING) {
        setSmallTargetOffsetSkidding(ARROW_PADDING + ARROW_WIDTH / 2);
      }
      setReady(true);
    }
  }, [arrow]);

  const modifiers: Modifier[] = [{
    name: 'preventOverflow',
  }, {
    name: 'offset',
    options: {
      offset: [
        arrow ? offsetSkidding - smallTargetOffsetSkidding : offsetSkidding,
        arrow ? offsetDistance + ARROW_HEIGHT : offsetDistance,
      ],
    },
  }, {
    name: 'flip',
  }];

  if (arrow) {
    modifiers.push({
      name: 'arrow',
      options: {
        padding: ARROW_PADDING,
      },
    });
  }

  const { styles, state, attributes } = usePopper(targetRef.current, dropdownNode, {
    placement,
    modifiers,
  });

  const resolvedPlacement = state?.placement;

  React.useEffect(() => {
    if (resolvedPlacement) {
      onPlacementChange && onPlacementChange({ placement: resolvedPlacement });
    }
  }, [resolvedPlacement]);

  const dropdown = (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('Popper', platform))}
      ref={setExternalRef}
      style={{ ...compStyles, ...styles.popper }}
      {...attributes.popper}
    >
      {arrow && (
        <div
          vkuiClass="Popper__arrow"
          data-popper-arrow={true}
          {...attributes.arrow}
          style={styles.arrow}
        >
          <div vkuiClass="Popper__arrow-in" className={arrowClassName} />
        </div>
      )}
      <div vkuiClass="Popper__content">
        {children}
      </div>
    </div>
  );

  return ready ? <AppRootPortal forcePortal vkuiClass="PopperPortal">{dropdown}</AppRootPortal> : null;
};
