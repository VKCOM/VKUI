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
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в скрытый `input`.
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
  getRootRef,
  className,
  style,
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
  const rootProps = useMergeProps(
    {
      className,
      style,
      getRootRef: getRootRef as React.Ref<HTMLLabelElement>,
    },
    slotsProps?.root,
  );
  const inputRest = useMergeProps({ getRootRef: getRef, ...restProps }, slotsProps?.input);

  return (
    <Button
      Component="label"
      align={align}
      stretched={stretched}
      mode={mode}
      appearance={appearance}
      size={size}
      before={before}
      after={after}
      loading={loading}
      disabled={inputRest.disabled}
      {...rootProps}
    >
      <VisuallyHidden title="" Component="input" type="file" {...inputRest} />
      {children}
    </Button>
  );
};
