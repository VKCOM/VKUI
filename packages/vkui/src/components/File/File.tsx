'use client';

import * as React from 'react';
import { useMergeProps } from '../../hooks/useMergeProps.ts';
import type { HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { Button, type VKUIButtonProps } from '../Button/Button';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

export interface FileProps
  extends Omit<VKUIButtonProps, 'type'>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLElement> {
  /**
   *
   */
  slotsProps?: {
    root?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> &
      HasRootRef<HTMLLabelElement> &
      HasDataAttribute;
    input?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
}

/**
 * @see https://vkui.io/components/file
 */
export const File = ({
  getRootRef: rootGetRootRef,
  className: rootClassName,
  style: rootStyle,
  children = 'Выберите файл',
  align = 'left',
  size,
  mode,
  stretched,
  before,
  after,
  loading,
  getRef,
  appearance,
  slotsProps,
  ...restProps
}: FileProps): React.ReactNode => {
  const { className, style, getRootRef, ...rootProps } = useMergeProps(
    {
      className: rootClassName,
      style: rootStyle,
      getRootRef: rootGetRootRef,
    },
    slotsProps?.root,
  );
  const { disabled, ...inputRest } = useMergeProps(
    { getRootRef: getRef, ...restProps },
    slotsProps?.input,
  );

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
      {...rootProps}
    >
      <VisuallyHidden title="" {...inputRest} Component="input" type="file" disabled={disabled} />
      {children}
    </Button>
  );
};
