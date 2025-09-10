'use client';

import * as React from 'react';
import type { HasDataAttribute, HasRef, HasRootRef } from '../../../types';
import { AdaptiveIconRenderer } from '../../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { RootComponent, type RootComponentProps } from '../../RootComponent/RootComponent';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './RadioInput.module.css';

function RadioIcon24(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="7" className={styles.pin} fill="currentColor" />
    </svg>
  );
}

function RadioIcon20(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden {...props}>
      <circle cx="10" cy="10" r="7.75" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="10" r="5.5" className={styles.pin} fill="currentColor" />
    </svg>
  );
}

function RadioIcon() {
  return (
    <div className={styles.icon}>
      <AdaptiveIconRenderer IconCompact={RadioIcon20} IconRegular={RadioIcon24} />
    </div>
  );
}

export interface RadioInputLegacyProps
  extends Omit<React.ComponentProps<'input'>, 'type'>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  /**
   *
   */
  slotsProps?: undefined;
}

export interface RadioInputModernProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      React.ComponentProps<'input'>,
      'value' | 'defaultValue' | 'checked' | 'defaultChecked' | 'name' | 'disabled' | 'onChange'
    > {
  /**
   *
   */
  slotsProps: {
    input: Omit<
      React.ComponentProps<'input'>,
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

export type RadioInputProps = RadioInputModernProps | RadioInputLegacyProps;

const useProps = (
  props: Omit<RadioInputProps, 'className' | 'style' | 'getRootRef'>,
): [RootComponentProps<HTMLLabelElement>, RootComponentProps<HTMLInputElement>] => {
  return React.useMemo<
    [RootComponentProps<HTMLLabelElement>, RootComponentProps<HTMLInputElement>]
  >(() => {
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
      } = props as RadioInputModernProps;
      const inputProps = {
        value,
        defaultValue,
        onChange,
        name,
        disabled,
        checked,
        defaultChecked,
        ...props.slotsProps.input,
      };
      return [rootProps, inputProps];
    } else {
      const { getRef, ...inputProps } = props as RadioInputLegacyProps;

      return [{}, { ...inputProps, getRootRef: getRef }];
    }
  }, [props]);
};

export function RadioInput({ className, style, getRootRef, ...restProps }: RadioInputProps) {
  const [rootProps, inputProps] = useProps(restProps);
  return (
    <RootComponent className={className} style={style} getRootRef={getRootRef} {...rootProps}>
      <VisuallyHidden {...inputProps} Component="input" type="radio" baseClassName={styles.input} />
      <RadioIcon />
    </RootComponent>
  );
}
