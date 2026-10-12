'use client';

import type * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import { useMergeProps } from '../../hooks/useMergeProps';
import { warnOnce } from '../../lib/warnOnce';
import { withLabelClickWrapper } from '../../lib/withLabelClickWrapper';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { Button, type VKUIButtonProps } from '../Button/Button';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';

const warn = warnOnce('File');

export interface FileProps
  extends Omit<VKUIButtonProps, 'type'>,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      | 'disabled'
      | 'readOnly'
      | 'required'
      | 'autoFocus'
      | 'name'
      | 'value'
      | 'accept'
      | 'capture'
      | 'multiple'
      | 'form'
      | 'onChange'
      | 'onFocus'
      | 'onBlur'
    >,
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange' | 'onFocus' | 'onBlur'>,
    HasRootRef<HTMLElement> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ input: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLInputElement> | undefined;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в скрытый `input`.
   */
  slotProps?:
    | {
        root?:
          | (Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> &
              HasRootRef<HTMLLabelElement> &
              HasDataAttribute)
          | undefined;
        input?:
          | (Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> &
              HasRootRef<HTMLInputElement> &
              HasDataAttribute)
          | undefined;
      }
    | undefined;
}

/**
 * @see https://vkui.io/components/file
 */
export const File = ({
  // FileProps
  getRootRef: getRootRefProp,
  ref: refProp,
  children = 'Выберите файл',
  getRef,

  // VKUIButtonProps
  align = 'left',
  size,
  mode,
  stretched,
  before,
  after,
  loading,
  appearance,

  // Input props
  disabled,
  readOnly,
  required,
  autoFocus,
  id,
  name,
  value,
  accept,
  capture,
  multiple,
  form,
  onChange,
  onFocus,
  onBlur,

  slotProps,
  ...restProps
}: FileProps): React.ReactNode => {
  const getRootRef = useExternRef(getRootRefProp, refProp);
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
  }

  const { onClick, ...rootRest } = useMergeProps(
    {
      getRootRef: getRootRef as React.Ref<HTMLLabelElement>,
      ...restProps,
    },
    slotProps?.root,
  );
  const inputRest = useMergeProps(
    {
      getRootRef: getRef,
      disabled,
      readOnly,
      required,
      autoFocus,
      id,
      name,
      value,
      accept,
      capture,
      multiple,
      form,
      onChange,
      onFocus,
      onBlur,
    },
    slotProps?.input,
  );

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
      onClick={withLabelClickWrapper(onClick)}
      {...rootRest}
    >
      <VisuallyHidden title="" Component="input" type="file" {...inputRest} />
      {children}
    </Button>
  );
};
