import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useFocusVisible } from '../../../hooks/useFocusVisible';
import { useFocusVisibleClassName } from '../../../hooks/useFocusVisibleClassName';
import { callMultiple } from '../../../lib/callMultiple';
import { HasRef, HasRootRef } from '../../../types';
import { Headline } from '../../Typography/Headline/Headline';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './SegmentedControlOption.module.css';

export interface SegmentedControlOptionProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  before?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SegmentedControl
 */
export const SegmentedControlOption = ({
  getRef,
  className,
  style,
  children,
  getRootRef,
  before,
  ...restProps
}: SegmentedControlOptionProps) => {
  const { focusVisible, onBlur, onFocus } = useFocusVisible();
  const focusVisibleClassNames = useFocusVisibleClassName({ focusVisible });

  return (
    <label
      className={classNames(
        styles['SegmentedControlOption'],
        restProps.checked && styles['SegmentedControlOption--checked'],
        focusVisibleClassNames,
        className,
      )}
      ref={getRootRef}
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
      {hasReactNode(before) && (
        <div className={styles['SegmentedControlOption__before']}>{before}</div>
      )}
      <Headline level="2" weight="2">
        {children}
      </Headline>
    </label>
  );
};
