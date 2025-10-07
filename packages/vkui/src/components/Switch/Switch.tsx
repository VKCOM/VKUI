'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useConfigDirection } from '../../hooks/useConfigDirection';
import { useFocusVisible } from '../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../hooks/useFocusVisibleClassName';
import { useMergeProps } from '../../hooks/useMergeProps';
import { usePlatform } from '../../hooks/usePlatform';
import { callMultiple } from '../../lib/callMultiple';
import type { HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent.tsx';
import { VisuallyHidden, type VisuallyHiddenProps } from '../VisuallyHidden/VisuallyHidden';
import styles from './Switch.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в скрытый `input`.
   */
  slotsProps?: {
    root?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> &
      HasRootRef<HTMLLabelElement> &
      HasDataAttribute;
    input?: React.InputHTMLAttributes<HTMLInputElement> &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
}

/**
 * @see https://vkui.io/components/switch
 */
export const Switch = ({
  style: rootStyle,
  className: rootClassName,
  getRootRef: rootGetRootRef,
  getRef,
  slotsProps,
  ...restProps
}: SwitchProps): React.ReactNode => {
  const rootRest = useMergeProps(
    {
      style: rootStyle,
      className: rootClassName,
      getRootRef: rootGetRootRef,
    },
    slotsProps?.root,
  );
  const {
    checked: checkedProp,
    onBlur: onBlurProp,
    onFocus: onFocusProp,
    onClick,
    ...inputRest
  } = useMergeProps({ getRootRef: getRef, ...restProps }, slotsProps?.input);

  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: 'outside' });
  const handleBlur = callMultiple(onBlur, onBlurProp);
  const handleFocus = callMultiple(onFocus, onFocusProp);

  const [localUncontrolledChecked, setLocalUncontrolledChecked] = React.useState(
    Boolean(inputRest.defaultChecked),
  );
  const isControlled = checkedProp !== undefined;

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
    Component: 'input',
    type: 'checkbox',
    role: 'switch',
    onBlur: handleBlur,
    onFocus: handleFocus,
    onClick: callMultiple(syncUncontrolledCheckedStateOnClick, onClick),
    ...inputRest,
  };

  if (isControlled) {
    inputProps.checked = checkedProp;
    inputProps['aria-checked'] = checkedProp ? 'true' : 'false';
  } else {
    inputProps['aria-checked'] = localUncontrolledChecked ? 'true' : 'false';
  }

  return (
    <RootComponent
      Component="label"
      baseClassName={classNames(
        styles.host,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
        platform === 'ios' ? styles.ios : styles.default,
        inputRest.disabled && styles.disabled,
        isRtl && styles.rtl,
        focusVisibleClassNames,
      )}
      {...rootRest}
    >
      <VisuallyHidden baseClassName={styles.inputNative} {...inputProps} />
      <span aria-hidden className={styles.inputFake}>
        <span className={styles.track} />
        <span
          aria-hidden
          className={classNames(
            styles.handle,
            platform !== 'ios' && !inputRest.disabled && styles.handleWithRipple,
          )}
        />
      </span>
    </RootComponent>
  );
};
