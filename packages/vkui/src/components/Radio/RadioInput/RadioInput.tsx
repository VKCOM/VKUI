import * as React from 'react';
import type { HasRef, HasRootRef } from '../../../types';
import { AdaptiveIconRenderer } from '../../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { RootComponent } from '../../RootComponent/RootComponent';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import styles from './RadioInput.module.css';

function RadioIcon24(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="7" className={styles['RadioInput__pin']} fill="currentColor" />
    </svg>
  );
}

function RadioIcon20(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden {...props}>
      <circle cx="10" cy="10" r="7.75" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="10" r="5.5" className={styles['RadioInput__pin']} fill="currentColor" />
    </svg>
  );
}

function RadioIcon() {
  return (
    <div className={styles['RadioInput__icon']}>
      <AdaptiveIconRenderer IconCompact={RadioIcon20} IconRegular={RadioIcon24} />
    </div>
  );
}

export interface RadioInputProps
  extends Omit<React.ComponentProps<'input'>, 'type'>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {}

export function RadioInput({
  className,
  style,
  getRootRef,
  getRef,
  ...restProps
}: RadioInputProps) {
  return (
    <RootComponent className={className} style={style} getRootRef={getRootRef}>
      <VisuallyHidden
        {...restProps}
        Component="input"
        type="radio"
        baseClassName={styles['RadioInput__input']}
        getRootRef={getRef}
      />
      <RadioIcon />
    </RootComponent>
  );
}
