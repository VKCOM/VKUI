import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { callMultiple } from '../../../lib/callMultiple';
import { HasRef } from '../../../types';
import { FocusVisible } from '../../FocusVisible/FocusVisible';
import { Headline } from '../../Typography/Headline/Headline';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './SegmentedControlOption.module.css';

export interface SegmentedControlOptionProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement> {}

/**
 * @see https://vkcom.github.io/VKUI/#/SegmentedControl
 */
export const SegmentedControlOption = ({
  getRef,
  className,
  style,
  children,
  ...restProps
}: SegmentedControlOptionProps) => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible();

  return (
    <label
      className={classNames(
        styles['SegmentedControlOption'],
        restProps.checked && styles['SegmentedControlOption--checked'],
        className,
      )}
      style={style}
    >
      <VisuallyHidden
        {...restProps}
        Component="input"
        getRootRef={getRef}
        type="radio"
        onBlur={callMultiple(onBlur, restProps.onBlur)}
        onFocus={callMultiple(onFocus, restProps.onFocus)}
      />
      <Headline className={styles['SegmentedControlOption__content']} level="2" weight="2">
        {children}
      </Headline>
      <FocusVisible visible={focusVisible} mode="inside" />
    </label>
  );
};
