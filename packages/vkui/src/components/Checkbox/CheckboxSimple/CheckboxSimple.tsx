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
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,
  titleAfter,
  ...restProps
}: CheckboxProps) {
  const { sizeY = 'none' } = useAdaptivity();

  return (
    <Tappable
      className={classNames(className, styles.host, sizeY !== 'regular' && sizeYClassNames[sizeY])}
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
