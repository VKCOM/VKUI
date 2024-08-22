import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableProps } from '../Tappable/Tappable';
import { CheckboxInput, type CheckboxInputProps } from './CheckboxInput/CheckboxInput';
import { CheckboxSimple } from './CheckboxSimple/CheckboxSimple';

export interface CheckboxProps
  extends Omit<CheckboxInputProps, 'getRootRef'>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  description?: React.ReactNode;
  titleAfter?: React.ReactNode;
}

const CheckboxComponent = ({
  children,
  className,
  style,
  getRootRef,
  description,
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,
  titleAfter,
  ...restProps
}: CheckboxProps): React.ReactNode => {
  return (
    <SelectionControl
      className={className}
      style={style}
      disabled={restProps.disabled}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
    >
      <CheckboxInput {...restProps} />
      <SelectionControlLabel titleAfter={titleAfter} description={description}>
        {children}
      </SelectionControlLabel>
    </SelectionControl>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Checkbox
 */
export const Checkbox = (props: CheckboxProps): React.ReactNode => {
  const simple = !(hasReactNode(props.children) || hasReactNode(props.description));
  if (simple) {
    return <CheckboxSimple {...props} />;
  }

  return <CheckboxComponent {...props} />;
};

Checkbox.Input = CheckboxInput;
