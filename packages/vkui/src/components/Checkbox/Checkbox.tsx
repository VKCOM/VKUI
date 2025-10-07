'use client';

import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps.ts';
import type { HasComponent, HasDataAttribute, HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { CheckboxInput, type CheckboxInputProps } from './CheckboxInput/CheckboxInput';
import { CheckboxSimple } from './CheckboxSimple/CheckboxSimple';

export interface CheckboxProps
  extends Omit<CheckboxInputProps, 'getRootRef'>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableOmitProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  /**
   *
   */
  slotsProps?: {
    root?: React.LabelHTMLAttributes<HTMLLabelElement> &
      HasRootRef<HTMLLabelElement> &
      HasComponent &
      HasDataAttribute;
    input?: React.ComponentProps<'input'> &
      HasRootRef<HTMLInputElement> &
      HasComponent &
      HasDataAttribute;
  };
  /**
   * Подпись под основным текстом.
   */
  description?: React.ReactNode;
  /**
   * Контент, идущий за основным текстом.
   */
  titleAfter?: React.ReactNode;
  /**
   * Отключает отступы у чекбокса. При использовании этого свойства, значение по умолчанию для свойств `hoverMode` и `activeMode` становится `"opacity"`.
   */
  noPadding?: boolean;
}

const CheckboxComponent = ({
  children,
  className,
  style,
  getRootRef,
  getRef,
  description,
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,
  titleAfter,
  noPadding,

  IconOnCompact,
  IconOnRegular,
  IconOffCompact,
  IconOffRegular,
  IconIndeterminate,

  slotsProps,
  ...restProps
}: CheckboxProps): React.ReactNode => {
  const rootRest = useMergeProps(
    {
      className,
      style,
      getRootRef,
    },
    slotsProps?.root,
  );

  const inputRest = useMergeProps({ getRootRef: getRef, ...restProps }, slotsProps?.input);

  return (
    <SelectionControl
      disabled={inputRest.disabled}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      noPadding={noPadding}
      {...rootRest}
    >
      <CheckboxInput
        IconIndeterminate={IconIndeterminate}
        IconOnCompact={IconOnCompact}
        IconOnRegular={IconOnRegular}
        IconOffCompact={IconOffCompact}
        IconOffRegular={IconOffRegular}
        slotsProps={{ input: inputRest }}
      />
      <SelectionControlLabel titleAfter={titleAfter} description={description}>
        {children}
      </SelectionControlLabel>
    </SelectionControl>
  );
};

/**
 * @see https://vkui.io/components/checkbox
 */
export const Checkbox = (props: CheckboxProps): React.ReactNode => {
  const simple = !(hasReactNode(props.children) || hasReactNode(props.description));
  if (simple) {
    return <CheckboxSimple {...props} />;
  }

  return <CheckboxComponent {...props} />;
};

Checkbox.Input = CheckboxInput;
