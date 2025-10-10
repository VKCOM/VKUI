'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { RadioInput } from './RadioInput/RadioInput';
import styles from './Radio.module.css';

const warn = warnOnce('Radio');

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
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
  slotsProps?: {
    root?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> &
      HasRootRef<HTMLLabelElement> &
      HasDataAttribute;
    input?: React.ComponentProps<'input'> & HasRootRef<HTMLInputElement> & HasDataAttribute;
  };
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotsProps={ input: { getRootRef: ... } }`.
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
   * @deprecated Since 7.9.0. Вместо этого используйте `slotsProps={ root: {...} }`.
   *
   * Позволяет передавать data-* аттрибуты элементу label.
   **/
  labelProps?: HasDataAttribute;
}

/**
 * @see https://vkui.io/components/radio
 */
export const Radio = ({
  children,
  description,
  style,
  className,
  getRootRef,
  titleAfter,
  getRef,
  labelProps,
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,

  slotsProps,
  ...restProps
}: RadioProps): React.ReactNode => {
  if (process.env.NODE_ENV === 'development') {
    if (labelProps) {
      warn('Свойство `labelProps` устаревшее, используйте `slotsProps={ root: {...} }`');
    }
    if (getRef) {
      warn('Свойство `getRef` устаревшее, используйте `slotsProps={ input: { getRootRef: ... } }`');
    }
  }

  const rootProps = useMergeProps(
    {
      style,
      className: classNames(styles.host, className),
      getRootRef,
      ...labelProps,
    },
    slotsProps?.root,
  );

  const inputRest = useMergeProps({ getRootRef: getRef, ...restProps }, slotsProps?.input);

  return (
    <SelectionControl
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      disabled={inputRest.disabled}
      {...rootProps}
    >
      <RadioInput slotsProps={{ input: inputRest }} />
      <SelectionControlLabel titleAfter={titleAfter} description={description}>
        {children}
      </SelectionControlLabel>
    </SelectionControl>
  );
};

Radio.Input = RadioInput;
