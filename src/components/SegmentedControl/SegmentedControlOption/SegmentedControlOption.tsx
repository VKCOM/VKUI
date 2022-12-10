import * as React from 'react';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { callMultiple } from '../../../lib/callMultiple';
import { classNamesString } from '../../../lib/classNames';
import { FocusVisible } from '../../FocusVisible/FocusVisible';
import {
  VisuallyHiddenInput,
  VisuallyHiddenInputProps,
} from '../../VisuallyHiddenInput/VisuallyHiddenInput';
import { getSizeYClassName } from '../../../helpers/getSizeYClassName';
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
      className={classNamesString(
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
        className={classNamesString(
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
