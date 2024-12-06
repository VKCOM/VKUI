'use client';

import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import type { HasChildren, HasRef, HasRootRef } from '../../../types';
import { Clickable } from '../../Clickable/Clickable';
import { Headline } from '../../Typography/Headline/Headline';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './SegmentedControlOption.module.css';

type LabelProps = Pick<React.LabelHTMLAttributes<HTMLLabelElement>, 'style' | 'className'>;

type HasBefore = {
  before?: React.ReactNode;
};

export type SegmentedControlTabProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  keyof LabelProps | 'children'
> & {
  role: 'tab';
};

export type SegmentedControlRadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'children'
> & {
  role: 'radio';
};

type SegmentedControlOptionProps = LabelProps &
  HasRootRef<HTMLLabelElement> &
  HasRef<HTMLInputElement> &
  HasChildren &
  HasBefore &
  (SegmentedControlTabProps | SegmentedControlRadioProps);

const remapProps = (
  props: SegmentedControlOptionProps,
): [
  SegmentedControlTabProps | SegmentedControlRadioProps,
  Omit<SegmentedControlOptionProps, keyof (SegmentedControlTabProps | SegmentedControlRadioProps)>,
] => {
  const { getRef, className, style, children, getRootRef, before, ...restProps } = props;
  const componentProps = {
    getRef,
    className,
    style,
    children,
    getRootRef,
    before,
  };
  return [restProps, componentProps];
};

/**
 * @see https://vkcom.github.io/VKUI/#/SegmentedControl
 */
export const SegmentedControlOption = (props: SegmentedControlOptionProps): React.ReactNode => {
  const [roleProps, componentProps] = remapProps(props);

  const { getRef, className, style, children, getRootRef, before } = componentProps;

  const clickableProps = (() => {
    if (roleProps.role !== 'tab') {
      return undefined;
    }
    const { role, 'aria-selected': ariaSelected, tabIndex, ...restProps } = roleProps;
    return {
      'role': 'tab',
      'aria-selected': ariaSelected,
      'tabIndex': tabIndex ?? (ariaSelected ? 0 : -1),
      ...restProps,
    };
  })();

  const inputProps = roleProps.role === 'radio' ? roleProps : undefined;

  return (
    <Clickable
      Component="label"
      baseClassName={styles.host}
      hoverClassName={styles.hover}
      activeClassName={styles.hover}
      className={className}
      getRootRef={getRootRef}
      style={style}
      {...clickableProps}
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
};
