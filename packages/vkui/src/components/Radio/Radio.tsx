'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps.ts';
import type { HasComponent, HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { RadioInput } from './RadioInput/RadioInput';
import styles from './Radio.module.css';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableOmitProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  /**
   *
   */
  slotsProps?: {
    root?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> &
      HasRootRef<HTMLLabelElement> &
      HasComponent &
      HasDataAttribute;
    input?: React.ComponentProps<'input'> &
      HasRootRef<HTMLInputElement> &
      HasComponent &
      HasDataAttribute;
  };
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
