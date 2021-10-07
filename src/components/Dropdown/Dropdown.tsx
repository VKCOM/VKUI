import React, { FC, HTMLAttributes, RefObject, useCallback, useEffect } from 'react';
import { usePopper } from 'react-popper';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { HasRef } from '../../types';
import { setRef } from '../../lib/utils';
import { classNames } from '../../lib/classNames';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import './Dropdown.css';

type Placement = 'auto' | 'auto-start' | 'auto-end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' |
'right-start' | 'right-end' | 'left-start' | 'left-end' | 'top' | 'bottom' | 'left' | 'right';

export interface DropdownCommonProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement> {
  /**
   * По умолчанию `Dropdown` выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства.
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
  /**
   * Стиль дропдауна. Если хочется стилизовать дропдаун по-своему, то следует использовать `plain`, так как он
   * не содержит никаких собственных css-правил.
   */
  mode?: 'card' | 'tooltip' | 'plain';
  arrow?: boolean;
  onPlacementChange?: (data: { placement?: Placement }) => void;
}

export interface DropdownProps extends DropdownCommonProps {
  targetRef?: RefObject<HTMLElement>;
}

export const Dropdown: FC<DropdownProps> = ({
  targetRef,
  children,
  getRef,
  placement = 'bottom-start',
  onPlacementChange,
  mode,
  offsetDistance,
  offsetSkidding,
  style: compStyles,
  arrow,
  ...restProps
}: DropdownProps) => {
  const [dropdownNode, setDropdownNode] = React.useState(null);
  const platform = usePlatform();

  arrow = typeof arrow === 'boolean' ? arrow : mode === 'tooltip';

  const setExternalRef = useCallback((el) => {
    setRef(el, getRef);
    setDropdownNode(el);
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
      vkuiClass={classNames(getClassName('Dropdown', platform), `Dropdown--${mode}`)}
      ref={setExternalRef}
      style={{ ...compStyles, ...styles.popper }}
      {...attributes.popper}
    >
      {arrow && <div vkuiClass="Dropdown__arrow" data-popper-arrow={true} {...attributes.arrow} style={styles.arrow} />}
      <div vkuiClass="Dropdown__content">
        {children}
      </div>
    </div>
  );

  return (<AppRootPortal forcePortal vkuiClass="DropdownPortal">{dropdown}</AppRootPortal>);
};
