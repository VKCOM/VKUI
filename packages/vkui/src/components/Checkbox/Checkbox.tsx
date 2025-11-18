'use client';

import * as React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { useMergeProps } from '../../hooks/useMergeProps';
import { onLabelClickWrapper } from '../../lib/onLabelClickWrapper';
import { warnOnce } from '../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../types';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import type { TappableOmitProps } from '../Tappable/Tappable';
import { CheckboxInput, type CheckboxInputProps } from './CheckboxInput/CheckboxInput';
import { CheckboxSimple } from './CheckboxSimple/CheckboxSimple';

const warn = warnOnce('Checkbox');

export interface CheckboxProps
  extends Pick<
      CheckboxInputProps,
      | 'indeterminate'
      | 'defaultIndeterminate'
      | 'IconOnCompact'
      | 'IconOnRegular'
      | 'IconOffCompact'
      | 'IconOffRegular'
      | 'IconIndeterminate'
      | 'getRef'
    >,
    Pick<
      React.ComponentProps<'input'>,
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
    Omit<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      'onChange' | 'onFocus' | 'onBlur' | 'slotProps'
    >,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableOmitProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в скрытый `input`.
   */
  slotProps?: {
    root?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> &
      HasRootRef<HTMLLabelElement> &
      HasDataAttribute;
    input?: React.ComponentProps<'input'> & HasRootRef<HTMLInputElement> & HasDataAttribute;
  };
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
  // CheckboxProps
  getRef,
  description,
  titleAfter,
  noPadding,
  children,

  // CheckboxInputProps
  indeterminate,
  defaultIndeterminate,
  IconOnCompact,
  IconOnRegular,
  IconOffCompact,
  IconOffRegular,
  IconIndeterminate,

  // Tappable props
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,

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
}: CheckboxProps): React.ReactNode => {
  const { onClick, ...rootRest } = useMergeProps(restProps, slotProps?.root);

  const inputRest = useMergeProps(
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

  return (
    <SelectionControl
      disabled={inputRest.disabled}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      noPadding={noPadding}
      onClick={onLabelClickWrapper(onClick)}
      {...rootRest}
    >
      <CheckboxInput
        indeterminate={indeterminate}
        defaultIndeterminate={defaultIndeterminate}
        IconIndeterminate={IconIndeterminate}
        IconOnCompact={IconOnCompact}
        IconOnRegular={IconOnRegular}
        IconOffCompact={IconOffCompact}
        IconOffRegular={IconOffRegular}
        slotProps={{ input: inputRest }}
      />
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
  if (process.env.NODE_ENV === 'development' && props.getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
  }

  const simple = !(hasReactNode(props.children) || hasReactNode(props.description));
  if (simple) {
    return <CheckboxSimple {...props} />;
  }

  return <CheckboxComponent {...props} />;
};

Checkbox.Input = CheckboxInput;
