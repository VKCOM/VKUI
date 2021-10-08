import React, { FC, HTMLAttributes, RefObject, useCallback, useEffect } from 'react';
import { usePopper } from 'react-popper';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { HasRef } from '../../types';
import { setRef } from '../../lib/utils';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import './Popper.css';

type Placement = 'auto' | 'auto-start' | 'auto-end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' |
'right-start' | 'right-end' | 'left-start' | 'left-end' | 'top' | 'bottom' | 'left' | 'right';

export interface PopperCommonProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement> {
  /**
   * По умолчанию `Popper` выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства.
   */
  placement?: Placement;
  /**
   * Отступ от `targetNode` по вспомогательной оси
   */
  offsetSkidding?: number;
  /**
   * Отступ от `targetNode` по главной оси
   */
  offsetDistance?: number;
  arrow?: boolean;
  arrowClassName?: string;
  onPlacementChange?: (data: { placement?: Placement }) => void;
}

export interface PopperProps extends PopperCommonProps {
  targetRef?: RefObject<HTMLElement>;
}

export const Popper: FC<PopperProps> = ({
  targetRef,
  children,
  getRef,
  placement = 'bottom-start',
  onPlacementChange,
  arrow,
  arrowClassName,
  offsetDistance = 8,
  offsetSkidding,
  style: compStyles,
  ...restProps
}: PopperProps) => {
  const [dropdownNode, setPopperNode] = React.useState(null);
  const platform = usePlatform();

  const setExternalRef = useCallback((el) => {
    setRef(el, getRef);
    setPopperNode(el);
  }, []);

  const modifiers = [{
    name: 'preventOverflow',
  }, {
    name: 'offset',
    options: {
      offset: [offsetSkidding, arrow ? offsetDistance + 8 : offsetDistance],
    },
  }, {
    name: 'flip',
  }];

  if (arrow) {
    modifiers.push({
      name: 'arrow',
    });
  }

  const { styles, state, attributes } = usePopper(targetRef.current, dropdownNode, {
    placement,
    modifiers,
  });

  const resolvedPlacement = state?.placement;

  useEffect(() => {
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
      {arrow && <div vkuiClass={classNames('Popper__arrow', arrowClassName)} data-popper-arrow={true} {...attributes.arrow} style={styles.arrow} />}
      <div vkuiClass="Popper__content">
        {children}
      </div>
    </div>
  );

  return (<AppRootPortal forcePortal vkuiClass="PopperPortal">{dropdown}</AppRootPortal>);
};
