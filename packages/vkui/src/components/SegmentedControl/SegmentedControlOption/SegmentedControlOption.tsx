import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { getSizeYClassName } from '../../../helpers/getSizeYClassName';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { callMultiple } from '../../../lib/callMultiple';
import { FocusVisible } from '../../FocusVisible/FocusVisible';
import {
  VisuallyHiddenInput,
  VisuallyHiddenInputProps,
} from '../../VisuallyHiddenInput/VisuallyHiddenInput';
import styles from './SegmentedControlOption.module.css';

/**
 * @see https://vkcom.github.io/VKUI/#/SegmentedControl
 */
export const SegmentedControlOption = ({
  className,
  style,
  children,
  ...restProps
}: VisuallyHiddenInputProps) => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const { sizeY } = useAdaptivity();

  return (
    <label
      className={classNames(
        styles['SegmentedControlOption'],
        restProps.checked && styles['SegmentedControlOption--checked'],
        focusVisible && styles['SegmentedControlOption--focus-visible'],
        className,
      )}
      style={style}
    >
      <VisuallyHiddenInput
        {...restProps}
        type="radio"
        onBlur={callMultiple(onBlur, restProps.onBlur)}
        onFocus={callMultiple(onFocus, restProps.onFocus)}
      />
      <span
        className={classNames(
          styles['SegmentedControlOption__content'],
          getSizeYClassName(styles['SegmentedControlOption__content'], sizeY),
        )}
      >
        {children}
      </span>
      <FocusVisible mode="inside" />
    </label>
  );
};
