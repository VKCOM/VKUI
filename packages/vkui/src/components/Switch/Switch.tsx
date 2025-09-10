'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import type { HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { VisuallyHidden, type VisuallyHiddenProps } from '../VisuallyHidden/VisuallyHidden';
import styles from './Switch.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

interface SwitchModernProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'checked' | 'defaultChecked' | 'onChange' | 'name' | 'disabled'
    > {
  /**
   *
   */
  slotsProps: {
    input: Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'checked' | 'defaultChecked' | 'onChange' | 'name' | 'disabled'
    > &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
}

interface SwitchLegacyProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  /**
   *
   */
  slotsProps?: undefined;
}

export type SwitchProps = SwitchLegacyProps | SwitchModernProps;

const useProps = (
  props: Omit<SwitchProps, 'style' | 'className' | 'getRootRef' | 'onBlur' | 'onFocus' | 'onClick'>,
): [React.LabelHTMLAttributes<HTMLLabelElement>, VisuallyHiddenProps<HTMLInputElement>] => {
  return React.useMemo<
    [React.LabelHTMLAttributes<HTMLLabelElement>, VisuallyHiddenProps<HTMLInputElement>]
  >(() => {
    if (props.slotsProps) {
      const {
        slotsProps: { input: userSlotsInputProps = {} },
        checked,
        defaultChecked,
        onChange,
        disabled,
        name,
        ...rootProps
      } = props as SwitchModernProps;
      return [
        rootProps,
        { ...userSlotsInputProps, checked, defaultChecked, onChange, disabled, name },
      ];
    } else {
      const { getRef, ...inputProps } = props as SwitchLegacyProps;
      return [{}, { ...inputProps, getRootRef: getRef }];
    }
  }, [props]);
};

/**
 * @see https://vkui.io/components/switch
 */
export const Switch = ({
  style,
  className,
  getRootRef,
  onBlur: onBlurProp,
  onFocus: onFocusProp,
  onClick,
  ...restProps
}: SwitchProps): React.ReactNode => {
  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: 'outside' });
  const handleBlur = callMultiple(onBlur, onBlurProp);
  const handleFocus = callMultiple(onFocus, onFocusProp);

  const [localUncontrolledChecked, setLocalUncontrolledChecked] = React.useState(
    Boolean(restProps.defaultChecked),
  );

  const [rootProps, inputBaseProps] = useProps(restProps);

  const isControlled = inputBaseProps.checked !== undefined;

  const syncUncontrolledCheckedStateOnClick = React.useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      if (isControlled) {
        return;
      }

      const switchTarget = e.target as HTMLInputElement;
      setLocalUncontrolledChecked(switchTarget.checked);
    },
    [isControlled],
  );

  const inputProps: VisuallyHiddenProps<HTMLInputElement> = {
    ...inputBaseProps,
    Component: 'input',
    type: 'checkbox',
    role: 'switch',
    onClick: callMultiple(syncUncontrolledCheckedStateOnClick, onClick),
  };

  if (isControlled) {
    inputProps.checked = inputBaseProps.checked;
    inputProps['aria-checked'] = inputBaseProps.checked ? 'true' : 'false';
  } else {
    inputProps['aria-checked'] = localUncontrolledChecked ? 'true' : 'false';
  }

  return (
    <label
      className={classNames(
        styles.host,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        platform === 'ios' ? styles.ios : styles.default,
        inputBaseProps.disabled && styles.disabled,
        isRtl && styles.rtl,
        focusVisibleClassNames,
        className,
      )}
      style={style}
      ref={getRootRef}
      {...rootProps}
    >
      <VisuallyHidden
        {...inputProps}
        className={styles.inputNative}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <span aria-hidden className={styles.inputFake}>
        <span className={styles.track} />
        <span
          aria-hidden
          className={classNames(
            styles.handle,
            platform !== 'ios' && !inputBaseProps.disabled && styles.handleWithRipple,
          )}
        />
      </span>
    </label>
  );
};
