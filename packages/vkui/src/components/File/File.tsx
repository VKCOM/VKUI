'use client';

import * as React from 'react';
import { useMergeProps } from '../../hooks/useMergeProps';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { Button, type VKUIButtonProps } from '../Button/Button';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

const warn = warnOnce('File');

export interface FileProps
  extends Omit<VKUIButtonProps, 'type'>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    HasRootRef<HTMLElement> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ input: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLInputElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в скрытый `input`.
   */
  slotProps?: {
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
  slotProps,
  ...restProps
}: FileProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
  }

  const rootProps = useMergeProps(
    {
      className,
      style,
      getRootRef: getRootRef as React.Ref<HTMLLabelElement>,
    },
    slotProps?.root,
  );
  const inputRest = useMergeProps({ getRootRef: getRef, ...restProps }, slotProps?.input);

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
