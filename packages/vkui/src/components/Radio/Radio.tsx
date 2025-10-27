'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps';
import { onLabelClickWrapper } from '../../lib/onLabelClickWrapper';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { RadioInput } from './RadioInput/RadioInput';
import styles from './Radio.module.css';

const warn = warnOnce('Radio');

export interface RadioProps
  extends Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      | 'checked'
      | 'defaultChecked'
      | 'disabled'
      | 'readOnly'
      | 'required'
      | 'autoFocus'
      | 'onChange'
      | 'name'
      | 'value'
      | 'onFocus'
      | 'onBlur'
    >,
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange' | 'onFocus' | 'onBlur'>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableOmitProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в скрытый `input`.
   */
  slotProps?: {
    root?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> &
      HasRootRef<HTMLLabelElement> &
      HasDataAttribute;
    input?: React.ComponentProps<'input'> & HasRootRef<HTMLInputElement> & HasDataAttribute;
  };
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ input: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLInputElement>;
  /**
   * Дополнительное описание под основным текстом.
   */
  description?: React.ReactNode;
  /**
   * Элемент после основного текста.
   */
  titleAfter?: React.ReactNode;
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ root: {...} }`.
   *
   * Позволяет передавать data-* аттрибуты элементу label.
   **/
  labelProps?: HasDataAttribute;
}

/**
 * @see https://vkui.io/components/radio
 */
export const Radio = ({
  // RadioProps
  children,
  description,
  titleAfter,
  labelProps,
  getRef,
  className,

  // Tappable props
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,

  // Input props
  checked,
  defaultChecked,
  disabled,
  readOnly,
  required,
  autoFocus,
  id,
  name,
  value,
  onChange,
  onFocus,
  onBlur,

  slotProps,
  ...restProps
}: RadioProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development') {
    if (labelProps) {
      warn('Свойство `labelProps` устаревшее, используйте `slotProps={ root: {...} }`');
    }
    if (getRef) {
      warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
    }
  }

  const { onClick: onRootClick, ...rootRest } = useMergeProps(
    {
      className: classNames(styles.host, className),
      ...labelProps,
      ...restProps,
    },
    slotProps?.root,
  );

  const inputRest = useMergeProps(
    {
      getRootRef: getRef,
      checked,
      defaultChecked,
      disabled,
      readOnly,
      required,
      autoFocus,
      id,
      name,
      value,
      onChange,
      onFocus,
      onBlur,
    },
    slotProps?.input,
  );

  return (
    <SelectionControl
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      disabled={inputRest.disabled}
      onClick={onLabelClickWrapper(onRootClick)}
      {...rootRest}
    >
      <RadioInput slotProps={{ input: inputRest }} />
      <SelectionControlLabel titleAfter={titleAfter} description={description}>
        {children}
      </SelectionControlLabel>
    </SelectionControl>
  );
};

Radio.Input = RadioInput;
