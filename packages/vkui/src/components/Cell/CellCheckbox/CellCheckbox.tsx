'use client';

import * as React from 'react';
import {
  Icon20CheckBoxOff,
  Icon20CheckBoxOn,
  Icon20CheckCircleOff,
  Icon20CheckCircleOn,
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
  Icon24CheckCircleOff,
  Icon24CheckCircleOn,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../hooks/usePlatform';
import type { HasRef, HasRootRef } from '../../../types';
import { AdaptiveIconRenderer } from '../../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import type { CellProps } from '../Cell';
import styles from './CellCheckbox.module.css';

const CheckBoxOn = () => (
  <AdaptiveIconRenderer IconCompact={Icon20CheckBoxOn} IconRegular={Icon24CheckBoxOn} />
);

const CheckBoxOff = () => (
  <AdaptiveIconRenderer IconCompact={Icon20CheckBoxOff} IconRegular={Icon24CheckBoxOff} />
);

const CheckCircleOn = () => (
  <AdaptiveIconRenderer IconCompact={Icon20CheckCircleOn} IconRegular={Icon24CheckCircleOn} />
);

const CheckCircleOff = () => (
  <AdaptiveIconRenderer IconCompact={Icon20CheckCircleOff} IconRegular={Icon24CheckCircleOff} />
);

function useTypeIcon(type: NonNullable<CellCheckboxProps['type']>) {
  const platform = usePlatform();

  if (type !== 'auto') {
    return type;
  }

  if (platform === 'ios' || platform === 'vkcom') {
    return 'circle';
  }

  return 'square';
}

export interface CellCheckboxProps
  extends Pick<CellProps, 'defaultChecked' | 'checked'>,
    React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLSpanElement>,
    HasRef<HTMLInputElement> {
  /**
   * Вид чекбокса. Если auto, то зависит от платформы.
   */
  type?: 'auto' | 'circle' | 'square';
}

export const CellCheckbox = ({
  getRootRef,
  getRef,
  className,
  style,
  type = 'auto',
  ...restProps
}: CellCheckboxProps): React.ReactNode => {
  const typeIcon = useTypeIcon(type);

  const IconOff = typeIcon === 'circle' ? CheckCircleOff : CheckBoxOff;
  const IconOn = typeIcon === 'circle' ? CheckCircleOn : CheckBoxOn;

  return (
    <span className={classNames(styles.host, className)} style={style} ref={getRootRef}>
      <VisuallyHidden
        {...restProps}
        Component="input"
        type="checkbox"
        className={styles.input}
        getRootRef={getRef}
      />
      <span className={classNames(styles.icon, styles.iconOff)} aria-hidden>
        <IconOff />
      </span>
      <span className={classNames(styles.icon, styles.iconOn)} aria-hidden>
        <IconOn />
      </span>
    </span>
  );
};
