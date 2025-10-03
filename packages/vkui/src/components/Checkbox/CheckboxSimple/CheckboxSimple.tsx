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
  className: rootClassName,
  style: rootStyle,
  getRootRef: rootGetRootRef,
  getRef,
  description,
  hoverMode: hoverModeProp,
  activeMode: activeModeProp,
  hasHover,
  hasActive,
  focusVisibleMode,
  titleAfter,
  noPadding,

  slotsProps,
  ...restProps
}: CheckboxProps) {
  const { className, style, getRootRef, ...rootRest } = useMergeProps(
    {
      className: rootClassName,
      style: rootStyle,
      getRootRef: rootGetRootRef,
    },
    slotsProps?.root,
  );

  const inputRest = useMergeProps({ getRootRef: getRef, ...restProps }, slotsProps?.input);

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
      disabled={inputRest.disabled}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      Component="label"
      {...rootRest}
    >
      <CheckboxInput slotsProps={{ input: inputRest }} />
    </Tappable>
  );
}
