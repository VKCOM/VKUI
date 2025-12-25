'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import {
  Icon20ChevronUp,
  Icon20Dropdown,
  Icon24ChevronDown,
  Icon24ChevronUp,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivityConditionalRender } from '../../hooks/useAdaptivityConditionalRender';
import type { HTMLAttributesWithRootRef } from '../../types';

export interface DropdownIconProps extends HTMLAttributesWithRootRef<SVGSVGElement> {
  opened?: boolean;
}

export const DropdownIcon = ({
  opened = false,
  className,
  ...restProps
}: DropdownIconProps): React.ReactNode => {
  const { density } = useAdaptivityConditionalRender();
  const IconCompact = opened ? Icon20ChevronUp : Icon20Dropdown;
  const IconRegular = opened ? Icon24ChevronUp : Icon24ChevronDown;

  return (
    <React.Fragment>
      {density.compact && (
        <IconCompact className={classNames(density.compact.className, className)} {...restProps} />
      )}
      {density.regular && (
        <IconRegular className={classNames(density.regular.className, className)} {...restProps} />
      )}
    </React.Fragment>
  );
};
