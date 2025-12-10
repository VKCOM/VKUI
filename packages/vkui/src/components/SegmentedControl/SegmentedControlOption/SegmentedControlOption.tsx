'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import type { HasChildren, HasRef, HasRootRef } from '../../../types';
import { Clickable } from '../../Clickable/Clickable';
import { Headline } from '../../Typography/Headline/Headline';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './SegmentedControlOption.module.css';

export interface SegmentedControlOptionProps
  extends HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement>,
    HasChildren {
  rootProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  before?: React.ReactNode;
}

export const SegmentedControlOption = ({
  getRef,
  children,
  getRootRef,
  before,
  rootProps,
  inputProps,
}: SegmentedControlOptionProps): React.ReactNode => (
  <Clickable
    Component="label"
    baseClassName={styles.host}
    hoverClassName={styles.hover}
    activeClassName={styles.hover}
    getRootRef={getRootRef}
    {...rootProps}
  >
    {inputProps && (
      <VisuallyHidden {...inputProps} Component="input" getRootRef={getRef} type="radio" />
    )}
    {hasReactNode(before) && <div className={styles.before}>{before}</div>}
    <Headline level="2" weight="2">
      {children}
    </Headline>
  </Clickable>
);
