import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import type { HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { CheckboxInput, type CheckboxInputProps } from './CheckboxInput/CheckboxInput';
import { CheckboxSimple } from './CheckboxSimple/CheckboxSimple';

export interface CheckboxProps
  extends Omit<CheckboxInputProps, 'getRootRef'>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableOmitProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  /**
   * Подпись под основным текстом.
   */
  description?: React.ReactNode;
  /**
   * Контент, идущий за основным текстом.
   */
  titleAfter?: React.ReactNode;
  /**
   * Отключает отступы у чекбокса. При использовании этого свойства, значение по умолчанию для свойств `hoverMode` и `activeMode` становится `"opacity"`.
   */
  noPadding?: boolean;
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
  noPadding,
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
      noPadding={noPadding}
    >
      <CheckboxInput {...restProps} />
      <SelectionControlLabel titleAfter={titleAfter} description={description}>
        {children}
      </SelectionControlLabel>
    </SelectionControl>
  );
};

/**
 * @see https://vkui.io/components/checkbox
 */
export const Checkbox = (props: CheckboxProps): React.ReactNode => {
  const simple = !(hasReactNode(props.children) || hasReactNode(props.description));
  if (simple) {
    return <CheckboxSimple {...props} />;
  }

  return <CheckboxComponent {...props} />;
};

Checkbox.Input = CheckboxInput;
