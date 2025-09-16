'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { RadioInput } from './RadioInput/RadioInput';
import styles from './Radio.module.css';

type HiddenRadioInputProps = Pick<
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

export interface RadioProps
  extends HiddenRadioInputProps,
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof HiddenRadioInputProps>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableOmitProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  /**
   * Дополнительное описание под основным текстом.
   */
  description?: React.ReactNode;
  /**
   * Элемент после основного текста.
   */
  titleAfter?: React.ReactNode;
  /**
   * Позволяет передавать data-* аттрибуты элементу label.
   **/
  labelProps?: HasDataAttribute;
}

/**
 * @see https://vkui.io/components/radio
 */
export const Radio = ({
  children,
  style,
  className,
  getRootRef,
  getRef,

  // Specific RadioProps
  titleAfter,
  description,
  labelProps,

  // Tappable
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,

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

  ...restProps
}: RadioProps): React.ReactNode => {
  return (
    <SelectionControl
      style={style}
      className={classNames(styles.host, className)}
      disabled={disabled}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      {...labelProps}
      {...restProps}
    >
      <RadioInput
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
        getRef={getRef}
      />
      <SelectionControlLabel titleAfter={titleAfter} description={description}>
        {children}
      </SelectionControlLabel>
    </SelectionControl>
  );
};

Radio.Input = RadioInput;
