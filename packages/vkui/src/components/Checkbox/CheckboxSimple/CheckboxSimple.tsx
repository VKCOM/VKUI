'use client';

import type { MouseEventHandler } from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useMergeProps } from '../../../hooks/useMergeProps';
import { Tappable } from '../../Tappable/Tappable';
import type { CheckboxProps } from '../Checkbox';
import { CheckboxInput } from '../CheckboxInput/CheckboxInput';
import styles from './CheckboxSimple.module.css';

const sizeYClassNames = {
  none: styles.sizeYNone,
  compact: styles.sizeYCompact,
};

const onRootClickWrapper = (
  onClick?: MouseEventHandler<HTMLLabelElement>,
): MouseEventHandler<HTMLLabelElement> => {
  return (event) => {
    if (onClick && (event.target as HTMLElement).tagName === 'INPUT') {
      onClick(event);
    }
  };
};

export function CheckboxSimple({
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
  hoverMode: hoverModeProp,
  activeMode: activeModeProp,
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
}: CheckboxProps) {
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

  const { sizeY = 'none' } = useAdaptivity();

  const hoverMode = hoverModeProp || (noPadding ? 'opacity' : 'background');
  const activeMode = activeModeProp || (noPadding ? 'opacity' : 'background');

  return (
    <Tappable
      baseClassName={classNames(
        styles.host,
        !noPadding && styles.withPadding,
        sizeY !== 'regular' && sizeYClassNames[sizeY],
      )}
      disabled={inputRest.disabled}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      Component="label"
      onClick={onRootClickWrapper(onClick)}
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
    </Tappable>
  );
}
