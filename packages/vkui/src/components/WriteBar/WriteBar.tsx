'use client';

import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { WriteBarFormField } from './WriteBarFormField/WriteBarFormField';
import { WriteBarFormFieldInlineAfter } from './WriteBarFormField/WriteBarFormFieldInlineAfter/WriteBarFormFieldInlineAfter';
import { WriteBarRoot } from './WriteBarRoot/WriteBarRoot';
import { WriteBarTextarea } from './WriteBarTextarea/WriteBarTextarea';

const warn = warnOnce('WriteBar');

export interface WriteBarProps
  extends Pick<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      | 'autoComplete'
      | 'autoCapitalize'
      | 'autoCorrect'
      | 'cols'
      | 'dirName'
      | 'disabled'
      | 'maxLength'
      | 'minLength'
      | 'name'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'rows'
      | 'value'
      | 'wrap'
      | 'form'
      | 'onChange'
      | 'onFocus'
      | 'onBlur'
    >,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onFocus' | 'onBlur'>,
    HasRootRef<HTMLDivElement> {
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ textArea: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLTextAreaElement>;
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `textArea`: свойства для прокидывания в поле ввода.
   */
  slotProps?: {
    root?: Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> &
      HasRootRef<HTMLDivElement> &
      HasDataAttribute;
    textArea?: React.TextareaHTMLAttributes<HTMLTextAreaElement> &
      HasRootRef<HTMLTextAreaElement> &
      HasDataAttribute;
  };
  /**
   * Содержимое, отображаемое слева от поля ввода.
   */
  before?: React.ReactNode;
  /**
   * Содержимое, отображаемое поверх поля ввода (актуально для iOS).
   */
  inlineAfter?: React.ReactNode;
  /**
   * Содержимое, отображаемое справа от поля ввода.
   */
  after?: React.ReactNode;
  /**
   * Вызывается при смене высоты поля ввода.
   */
  onHeightChange?: VoidFunction;
  /**
   * Добавляет тень вокруг поля ввода.
   */
  shadow?: boolean;
  /**
   * @deprecated Неиспользуемое свойство.
   */
  children?: never;
}

/**
 * @see https://vkui.io/components/write-bar
 */
export const WriteBar = ({
  // WriteBarProps
  before,
  inlineAfter,
  after,
  onHeightChange,
  shadow = false,
  getRef,

  // textarea props
  autoComplete,
  autoCapitalize,
  autoCorrect,
  cols,
  dirName,
  disabled,
  maxLength,
  minLength,
  name,
  placeholder,
  readOnly,
  required,
  value: valueProp,
  wrap,
  rows,
  form,
  onChange,
  onFocus,
  onBlur,
  id,
  inputMode,
  defaultValue,
  autoFocus,
  tabIndex,
  spellCheck,

  slotProps,
  ...restProps
}: WriteBarProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ textArea: { getRootRef: ... } }`');
  }

  const rootProps = useMergeProps(restProps, slotProps?.root);

  const textAreaRest = useMergeProps(
    {
      getRootRef: getRef,
      autoComplete,
      autoCapitalize,
      autoCorrect,
      cols,
      dirName,
      disabled,
      maxLength,
      minLength,
      name,
      placeholder,
      readOnly,
      required,
      value: valueProp,
      wrap,
      rows,
      form,
      onChange,
      onFocus,
      onBlur,
      id,
      inputMode,
      defaultValue,
      autoFocus,
      tabIndex,
      spellCheck,
    },
    slotProps?.textArea,
  );

  return (
    <WriteBarRoot shadow={shadow} {...rootProps}>
      {hasReactNode(before) && <WriteBarRoot.Before>{before}</WriteBarRoot.Before>}
      <WriteBarFormField>
        <WriteBarTextarea onHeightChange={onHeightChange} {...textAreaRest} />
        {hasReactNode(inlineAfter) && (
          <WriteBarFormFieldInlineAfter>{inlineAfter}</WriteBarFormFieldInlineAfter>
        )}
      </WriteBarFormField>
      {hasReactNode(after) && <WriteBarRoot.After>{after}</WriteBarRoot.After>}
    </WriteBarRoot>
  );
};

WriteBar.FormField = WriteBarFormField;
WriteBar.Textarea = WriteBarTextarea;
WriteBar.Root = WriteBarRoot;
