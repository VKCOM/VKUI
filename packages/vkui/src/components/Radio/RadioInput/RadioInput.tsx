'use client';

import * as React from 'react';
import type { HasDataAttribute, HasRef, HasRootRef } from '../../../types';
import { AdaptiveIconRenderer } from '../../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { RootComponent } from '../../RootComponent/RootComponent';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './RadioInput.module.css';

function RadioIcon24(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="7" className={styles.pin} fill="currentColor" />
    </svg>
  );
}

function RadioIcon20(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden {...props}>
      <circle cx="10" cy="10" r="7.75" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="10" r="5.5" className={styles.pin} fill="currentColor" />
    </svg>
  );
}

function RadioIcon() {
  return (
    <div className={styles.icon}>
      <AdaptiveIconRenderer IconCompact={RadioIcon20} IconRegular={RadioIcon24} />
    </div>
  );
}

type HiddenInputRadioInputProps = Pick<
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

export interface RadioInputProps
  extends HiddenInputRadioInputProps,
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, keyof HiddenInputRadioInputProps>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  /**
   *
   */
  slotsProps?: {
    root?: React.LabelHTMLAttributes<HTMLLabelElement> & HasDataAttribute;
    input?: React.ComponentProps<'input'> & HasDataAttribute;
  };
}

export function RadioInput({
  className,
  style,
  getRootRef,
  getRef,

  // HiddenInputRadioInputProps
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
}: RadioInputProps) {
  return (
    <RootComponent<HTMLLabelElement>
      Component="label"
      className={className}
      style={style}
      getRootRef={getRootRef}
      {...restProps}
      {...slotsProps?.root}
    >
      <VisuallyHidden
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
        Component="input"
        type="radio"
        baseClassName={styles.input}
        getRootRef={getRef}
        {...slotsProps?.input}
      />
      <RadioIcon />
    </RootComponent>
  );
}
