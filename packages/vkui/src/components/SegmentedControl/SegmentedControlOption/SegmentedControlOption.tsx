import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import type { HasRef, HasRootRef } from '../../../types';
import { Clickable } from '../../Clickable/Clickable';
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
}: SegmentedControlOptionProps): React.ReactNode => (
  <Clickable
    Component="label"
    baseClassName={styles['SegmentedControlOption']}
    hoverClassName={styles['SegmentedControlOption--hover']}
    activeClassName={styles['SegmentedControlOption--hover']}
    className={className}
    getRootRef={getRootRef}
    style={style}
  >
    <VisuallyHidden {...restProps} Component="input" getRootRef={getRef} type="radio" />
    {hasReactNode(before) && (
      <div className={styles['SegmentedControlOption__before']}>{before}</div>
    )}
    <Headline level="2" weight="2">
      {children}
    </Headline>
  </Clickable>
);
