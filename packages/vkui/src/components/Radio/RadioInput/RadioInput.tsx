'use client';

import * as React from 'react';
import { useMergeProps } from '../../../hooks/useMergeProps';
import { warnOnce } from '../../../lib/warnOnce';
import type { HasDataAttribute, HasRootRef } from '../../../types';
import { AdaptiveIconRenderer } from '../../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { RootComponent } from '../../RootComponent/RootComponent';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './RadioInput.module.css';

const warn = warnOnce('Radio.Input');

function RadioIcon24(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="7" className={styles.pin} fill="currentColor" />
    </svg>
  );
}

function RadioIcon20(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden {...props}>
      <circle cx="10" cy="10" r="7.75" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="10" r="5.5" className={styles.pin} fill="currentColor" />
    </svg>
  );
}

function RadioIcon() {
  return (
    <div className={styles.icon}>
      <AdaptiveIconRenderer IconCompact={RadioIcon20} IconRegular={RadioIcon24} />
    </div>
  );
}

export interface RadioInputProps
  extends Omit<React.ComponentProps<'input'>, 'type'>,
    HasRootRef<HTMLLabelElement> {
  /**
   * Свойства, которые можно прокинуть внутрь компонента:
   * - `root`: свойства для прокидывания в корень компонента;
   * - `input`: свойства для прокидывания в скрытый `input`.
   */
  slotProps?: {
    root?: Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> &
      HasRootRef<HTMLLabelElement> &
      HasDataAttribute;
    input?: Omit<React.ComponentProps<'input'>, 'type'> &
      HasRootRef<HTMLInputElement> &
      HasDataAttribute;
  };
  /**
   * @deprecated Since 7.9.0. Вместо этого используйте `slotProps={ input: { getRootRef: ... } }`.
   */
  getRef?: React.Ref<HTMLInputElement>;
}

export function RadioInput({
  className,
  style,
  getRootRef,
  getRef,
  slotProps,
  ...restProps
}: RadioInputProps) {
  if (process.env.NODE_ENV === 'development' && getRef) {
    warn('Свойство `getRef` устаревшее, используйте `slotProps={ input: { getRootRef: ... } }`');
  }

  const rootRest = useMergeProps({ className, style, getRootRef }, slotProps?.root);

  const inputProps = useMergeProps({ getRootRef: getRef, ...restProps }, slotProps?.input);

  return (
    <RootComponent {...rootRest}>
      <VisuallyHidden Component="input" type="radio" baseClassName={styles.input} {...inputProps} />
      <RadioIcon />
    </RootComponent>
  );
}
