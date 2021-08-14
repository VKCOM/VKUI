import React, { FC, HTMLAttributes, useCallback, useEffect } from 'react';
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
   * Актуально для [mode="embedded"](#/Modes). Если передан true, то дропдаун отрисуется не рядом с `targetNode`,
   * а в портале в конце `body`.
   */
  portal?: boolean;
  /**
   * Стиль дропдауна. Если хочется стилизовать дропдаун по-своему, то следует использовать `plain`, так как он
   * не содержит никаких собственных css-правил.
   */
  mode?: 'card' | 'plain';
  onPlacementChange?: (data: { placement?: Placement }) => void;
}

export interface DropdownProps extends DropdownCommonProps {
  /**
   * Ссылка на DOM-элемент, рядом с которым должен открыться `Dropdown`
   */
  targetNode?: HTMLElement;
}

export const Dropdown: FC<DropdownProps> = ({
  targetNode,
  children,
  getRef,
  placement = 'bottom-start',
  portal = false,
  onPlacementChange,
  mode = 'card',
  offsetDistance = 8,
  offsetSkidding = 0,
  style: compStyles,
  ...restProps
}: DropdownProps) => {
  const [dropdownNode, setDropdownNode] = React.useState(null);
  const platform = usePlatform();

  const setExternalRef = useCallback((el) => {
    setRef(el, getRef);
    setDropdownNode(el);
  }, []);

  const { styles, state, forceUpdate } = usePopper(targetNode, dropdownNode, {
    placement,
    modifiers: [
      {
        name: 'preventOverflow',
      },
      {
        name: 'offset',
        options: {
          offset: [offsetSkidding, offsetDistance],
        },
      },
    ],
  });

  const resolvedPlacement = state?.placement;

  useEffect(() => {
    if (dropdownNode && forceUpdate) {
      forceUpdate();
    }
  }, [dropdownNode, forceUpdate]);

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
    >
      {children}
    </div>
  );

  return (
    portal ? <AppRootPortal vkuiClass="DropdownPortal">{dropdown}</AppRootPortal> : dropdown
  );
};
