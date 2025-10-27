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
import { onLabelClickWrapper } from '../../lib/onLabelClickWrapper';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { VisuallyHidden, type VisuallyHiddenProps } from '../VisuallyHidden/VisuallyHidden';
import styles from './Switch.module.css';

const warn = warnOnce('Switch');

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export interface SwitchProps
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
    HasRootRef<HTMLLabelElement> {
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в скрытый `input`.
   */
  slotProps?: {
    root?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> &
      HasRootRef<HTMLLabelElement> &
      HasDataAttribute;
    input?: React.InputHTMLAttributes<HTMLInputElement> &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ input: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLInputElement>;
}

/**
 * @see https://vkui.io/components/switch
 */
export const Switch = ({
  getRef,

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
}: SwitchProps): React.ReactNode => {
  /* istanbul ignore if: не проверяем в тестах */
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
  }

  const { onClick: onRootClick, ...rootRest } = useMergeProps(restProps, slotProps?.root);

  const {
    checked: checkedProp,
    onBlur: onInputBlur,
    onFocus: onInputFocus,
    onClick,
    ...inputRest
  } = useMergeProps(
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

  const direction = useConfigDirection();
  const isRtl = direction === 'rtl';
  const platform = usePlatform();
  const { sizeY = 'none' } = useAdaptivity();
  const {
    focusVisible,
    onBlur: onFocusVisibleBlur,
    onFocus: onFocusVisibleFocus,
  } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible, mode: 'outside' });
  const handleBlur = callMultiple(onFocusVisibleBlur, onInputBlur);
  const handleFocus = callMultiple(onFocusVisibleFocus, onInputFocus);

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
      onClick={onLabelClickWrapper(onRootClick)}
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
