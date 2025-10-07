'use client';

import { classNames } from '@vkontakte/vkjs';
import { useAdaptivity } from '../../../hooks/useAdaptivity';
import { useMergeProps } from '../../../hooks/useMergeProps.ts';
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
  getRef,
  description,
  hoverMode: hoverModeProp,
  activeMode: activeModeProp,
  hasHover,
  hasActive,
  focusVisibleMode,
  titleAfter,
  noPadding,

  indeterminate,
  defaultIndeterminate,
  IconOnCompact,
  IconOnRegular,
  IconOffCompact,
  IconOffRegular,
  IconIndeterminate,

  slotsProps,
  ...restProps
}: CheckboxProps) {
  const rootRest = useMergeProps(
    {
      className,
      style,
      getRootRef,
    },
    slotsProps?.root,
  );

  const inputRest = useMergeProps({ getRootRef: getRef, ...restProps }, slotsProps?.input);

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
        slotsProps={{ input: inputRest }}
      />
    </Tappable>
  );
}
