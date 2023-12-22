import * as React from 'react';
import {
  Icon20CheckBoxOff,
  Icon20CheckBoxOn,
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
  Icon24CheckCircleOff,
  Icon24CheckCircleOn,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../hooks/usePlatform';
import { HasRef, HasRootRef } from '../../../types';
import { AdaptiveIconRenderer } from '../../AdaptiveIconRenderer/AdaptiveIconRenderer';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { CellProps } from '../Cell';
import styles from './CellCheckbox.module.css';

const CheckBoxOn = () => (
  <AdaptiveIconRenderer IconCompact={Icon20CheckBoxOn} IconRegular={Icon24CheckBoxOn} />
);

const CheckBoxOff = () => (
  <AdaptiveIconRenderer IconCompact={Icon20CheckBoxOff} IconRegular={Icon24CheckBoxOff} />
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
}: CellCheckboxProps) => {
  const typeIcon = useTypeIcon(type);

  const IconOff = typeIcon === 'circle' ? Icon24CheckCircleOff : CheckBoxOff;
  const IconOn = typeIcon === 'circle' ? Icon24CheckCircleOn : CheckBoxOn;

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
