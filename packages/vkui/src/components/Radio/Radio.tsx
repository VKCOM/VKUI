import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasDataAttribute, HasRef, HasRootRef } from '../../types';
import { AdaptiveIconRenderer } from '../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { SelectionControl } from '../SelectionControl/SelectionControl';
import { SelectionControlLabel } from '../SelectionControl/SelectionControlLabel/SelectionControlLabel';
import { type TappableProps } from '../Tappable/Tappable';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './Radio.module.css';

function RadioIcon24(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="7" className={styles['Radio__pin']} fill="currentColor" />
    </svg>
  );
}

function RadioIcon20(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-hidden {...props}>
      <circle cx="10" cy="10" r="7.75" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="10" r="5.5" className={styles['Radio__pin']} fill="currentColor" />
    </svg>
  );
}

function RadioIcon() {
  return (
    <div className={styles['Radio__icon']}>
      <AdaptiveIconRenderer IconCompact={RadioIcon20} IconRegular={RadioIcon24} />
    </div>
  );
}

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    Pick<
      TappableProps,
      'hoverMode' | 'activeMode' | 'hasHover' | 'hasActive' | 'focusVisibleMode'
    > {
  description?: React.ReactNode;
  titleAfter?: React.ReactNode;
  /**
   * Позволяет передавать data-* аттрибуты элементу label
   **/
  labelProps?: HasDataAttribute;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Radio
 */
export const Radio = ({
  children,
  description,
  style,
  className,
  getRootRef,
  titleAfter,
  getRef,
  labelProps,
  hoverMode,
  activeMode,
  hasHover,
  hasActive,
  focusVisibleMode,
  ...restProps
}: RadioProps): React.ReactNode => {
  return (
    <SelectionControl
      style={style}
      className={classNames(styles['Radio'], className)}
      disabled={restProps.disabled}
      getRootRef={getRootRef}
      hoverMode={hoverMode}
      activeMode={activeMode}
      hasHover={hasHover}
      hasActive={hasActive}
      focusVisibleMode={focusVisibleMode}
      {...labelProps}
    >
      <VisuallyHidden
        {...restProps}
        Component="input"
        type="radio"
        getRootRef={getRef}
        className={styles['Radio__input']}
      />
      <RadioIcon />
      <SelectionControlLabel titleAfter={titleAfter} description={description}>
        {children}
      </SelectionControlLabel>
    </SelectionControl>
  );
};
