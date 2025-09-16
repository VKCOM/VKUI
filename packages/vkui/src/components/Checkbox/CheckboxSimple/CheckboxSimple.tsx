'use client';

import {
  Icon20CheckBoxIndetermanate,
  Icon20CheckBoxOff,
  Icon20CheckBoxOn,
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { Tappable } from '../../Tappable/Tappable';
import type { CheckboxProps } from '../Checkbox';
import { CheckboxInput } from '../CheckboxInput/CheckboxInput';
import styles from './CheckboxSimple.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

export function CheckboxSimple({
  children,
  className,
  style,
  getRootRef,

  // Specific props
  description,
  titleAfter,
  noPadding,

  // TappableProps
  hoverMode: hoverModeProp,
  activeMode: activeModeProp,
  hasHover,
  hasActive,
  focusVisibleMode,

  // CheckboxInputProps
  indeterminate,
  defaultIndeterminate,
  IconOnCompact = Icon20CheckBoxOn,
  IconOnRegular = Icon24CheckBoxOn,
  IconOffCompact = Icon20CheckBoxOff,
  IconOffRegular = Icon24CheckBoxOff,
  IconIndeterminate = Icon20CheckBoxIndetermanate,

  // HiddenRadioInputProps
  id,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
  required,
  readOnly,
  autoFocus,
  onChange,
  onInvalid,

  ...restProps
}: CheckboxProps) {
  const { sizeY = 'none' } = useAdaptivity();

  const hoverMode = hoverModeProp || (noPadding ? 'opacity' : 'background');
  const activeMode = activeModeProp || (noPadding ? 'opacity' : 'background');

  return (
    <Tappable
      className={classNames(
        className,
        styles.host,
        !noPadding && styles.withPadding,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      style={style}
      disabled={disabled}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      Component="label"
      {...restProps}
    >
      <CheckboxInput
        id={id}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        autoFocus={autoFocus}
        onInvalid={onInvalid}
        indeterminate={indeterminate}
        defaultIndeterminate={defaultIndeterminate}
        IconOnCompact={IconOnCompact}
        IconOnRegular={IconOnRegular}
        IconOffCompact={IconOffCompact}
        IconOffRegular={IconOffRegular}
        IconIndeterminate={IconIndeterminate}
      />
    </Tappable>
  );
}
