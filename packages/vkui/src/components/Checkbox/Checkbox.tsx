'use client';

import * as React from 'react';
import {
  Icon20CheckBoxIndetermanate,
  Icon20CheckBoxOff,
  Icon20CheckBoxOn,
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
} from '@vkontakte/icons';
import { hasReactNode } from '@vkontakte/vkjs';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { CheckboxInput, type CheckboxInputProps } from './CheckboxInput/CheckboxInput';
import { CheckboxSimple } from './CheckboxSimple/CheckboxSimple';

type HiddenCheckboxInputProps = Pick<
  React.ComponentProps<'input'>,
  | 'id'
  | 'name'
  | 'value'
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'required'
  | 'readOnly'
  | 'autoFocus'
  | 'onChange'
  | 'onInvalid'
>;

export interface CheckboxProps
  extends HiddenCheckboxInputProps,
    Pick<
      CheckboxInputProps,
      | 'indeterminate'
      | 'defaultIndeterminate'
      | 'IconOnCompact'
      | 'IconOnRegular'
      | 'IconOffCompact'
      | 'IconOffRegular'
      | 'IconIndeterminate'
    >,
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof HiddenCheckboxInputProps>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableOmitProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  /**
   *
   */
  slotsProps?: {
    root?: React.LabelHTMLAttributes<HTMLLabelElement> & HasDataAttribute;
    input?: React.ComponentProps<'input'> & HasDataAttribute;
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

  // Specific props
  description,
  titleAfter,
  noPadding,

  // TappableProps
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,

  // CheckboxInputProps
  indeterminate,
  defaultIndeterminate,
  IconOnCompact = Icon20CheckBoxOn,
  IconOnRegular = Icon24CheckBoxOn,
  IconOffCompact = Icon20CheckBoxOff,
  IconOffRegular = Icon24CheckBoxOff,
  IconIndeterminate = Icon20CheckBoxIndetermanate,

  // HiddenRadioInputProps
  id,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  required,
  readOnly,
  autoFocus,
  onChange,
  onInvalid,

  slotsProps,
  ...restProps
}: CheckboxProps): React.ReactNode => {
  return (
    <SelectionControl
      className={className}
      style={style}
      disabled={disabled}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      noPadding={noPadding}
      {...restProps}
      {...slotsProps?.root}
    >
      <CheckboxInput
        id={id}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        autoFocus={autoFocus}
        onChange={onChange}
        onInvalid={onInvalid}
        indeterminate={indeterminate}
        defaultIndeterminate={defaultIndeterminate}
        IconOnCompact={IconOnCompact}
        IconOnRegular={IconOnRegular}
        IconOffCompact={IconOffCompact}
        IconOffRegular={IconOffRegular}
        IconIndeterminate={IconIndeterminate}
        slotsProps={{
          input: slotsProps?.input,
        }}
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
