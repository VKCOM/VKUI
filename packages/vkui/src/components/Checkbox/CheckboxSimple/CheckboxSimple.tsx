'use client';

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
  description,
  hoverMode: hoverModeProp,
  activeMode: activeModeProp,
  hasHover,
  hasActive,
  focusVisibleMode,
  titleAfter,
  noPadding,
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
      disabled={restProps.disabled}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      Component="label"
    >
      <CheckboxInput {...restProps} />
    </Tappable>
  );
}
