'use client';

import * as React from 'react';
import type { HasChildren, HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { Button, type VKUIButtonProps } from '../Button/Button';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

type HiddenInputFileProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'id'
  | 'name'
  | 'value'
  | 'required'
  | 'disabled'
  | 'readOnly'
  | 'autoFocus'
  | 'onChange'
  | 'onInvalid'
>;

export interface FileProps
  extends Omit<VKUIButtonProps, 'type'>,
    HiddenInputFileProps,
    HasChildren,
    Omit<TappableOmitProps, 'size' | keyof HiddenInputFileProps>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLElement> {
  /**
   *
   */
  slotsProps?: {
    root?: Omit<VKUIButtonProps, 'type'> & HasDataAttribute;
    input?: React.InputHTMLAttributes<HTMLInputElement> & HasDataAttribute;
  };
}

/**
 * @see https://vkui.io/components/file
 */
export const File = ({
  className,
  style,
  getRef,
  getRootRef,
  children = 'Выберите файл',

  // VKUIButtonProps
  align = 'left',
  size,
  mode,
  stretched,
  before,
  after,
  loading,
  appearance,

  // HiddenInputFileProps
  id,
  name,
  value,
  required,
  readOnly,
  autoFocus,
  onChange,
  onInvalid,
  disabled,

  slotsProps,
  ...restProps
}: FileProps): React.ReactNode => {
  return (
    <Button
      Component="label"
      align={align}
      className={className}
      stretched={stretched}
      mode={mode}
      appearance={appearance}
      size={size}
      before={before}
      after={after}
      loading={loading}
      style={style}
      getRootRef={getRootRef}
      disabled={disabled}
      {...restProps}
      {...slotsProps?.root}
    >
      <VisuallyHidden
        title=""
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        autoFocus={autoFocus}
        onChange={onChange}
        onInvalid={onInvalid}
        Component="input"
        type="file"
        getRootRef={getRef}
        {...slotsProps?.input}
      />
      {children}
    </Button>
  );
};
