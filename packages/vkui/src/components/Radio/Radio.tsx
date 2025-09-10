'use client';

import { type LabelHTMLAttributes } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { RadioInput, type RadioInputModernProps } from './RadioInput/RadioInput';
import styles from './Radio.module.css';

interface RadioBaseProps
  extends HasRootRef<HTMLLabelElement>,
    Pick<
      TappableOmitProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
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

interface RadioLegacyProps
  extends RadioBaseProps,
    React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement> {
  /**
   *
   */
  slotsProps?: undefined;
}

interface RadioModernProps
  extends RadioBaseProps,
    Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'>,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      | 'type'
      | 'value'
      | 'defaultValue'
      | 'checked'
      | 'defaultChecked'
      | 'name'
      | 'disabled'
      | 'onChange'
    > {
  /**
   *
   */
  slotsProps: {
    input: Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      | 'type'
      | 'value'
      | 'defaultValue'
      | 'checked'
      | 'defaultChecked'
      | 'name'
      | 'disabled'
      | 'onChange'
    > &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
}

export type RadioProps = RadioModernProps | RadioLegacyProps;

const useProps = (
  props: Omit<
    RadioProps,
    | 'children'
    | 'description'
    | 'style'
    | 'className'
    | 'getRootRef'
    | 'titleAfter'
    | 'labelProps'
    | 'hoverMode'
    | 'activeMode'
    | 'hasHover'
    | 'hasActive'
    | 'focusVisibleMode'
  >,
): [LabelHTMLAttributes<HTMLLabelElement>, RadioInputModernProps] => {
  return React.useMemo<[LabelHTMLAttributes<HTMLLabelElement>, RadioInputModernProps]>(() => {
    if (props.slotsProps?.input) {
      const {
        slotsProps,
        value,
        defaultValue,
        name,
        disabled,
        onChange,
        checked,
        defaultChecked,
        ...rootProps
      } = props as RadioModernProps;
      const radioInputProps: RadioInputModernProps = {
        value,
        defaultValue,
        onChange,
        name,
        disabled,
        checked,
        defaultChecked,
        slotsProps: {
          input: props.slotsProps.input,
        },
      };
      return [rootProps, radioInputProps];
    }
    const { getRef, ...inputProps } = props as RadioLegacyProps;
    const radioInputProps: RadioInputModernProps = {
      slotsProps: {
        input: {
          ...inputProps,
          getRootRef: getRef,
        },
      },
    };
    return [{}, radioInputProps];
  }, [props]);
};

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
  labelProps,
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,
  ...restProps
}: RadioProps): React.ReactNode => {
  const [rootProps, inputProps] = useProps(restProps);

  return (
    <SelectionControl
      style={style}
      className={classNames(styles.host, className)}
      disabled={inputProps.disabled}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      {...labelProps}
      {...rootProps}
    >
      <RadioInput {...inputProps} />
      <SelectionControlLabel titleAfter={titleAfter} description={description}>
        {children}
      </SelectionControlLabel>
    </SelectionControl>
  );
};

Radio.Input = RadioInput;
