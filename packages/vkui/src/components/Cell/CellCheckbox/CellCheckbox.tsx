import * as React from 'react';
import {
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
  Icon24CheckCircleOff,
  Icon24CheckCircleOn,
} from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../../hooks/usePlatform';
import { Platform } from '../../../lib/platform';
import { HasRef } from '../../../types';
import { VisuallyHidden } from '../../VisuallyHidden/VisuallyHidden';
import { CellProps } from '../Cell';
import styles from './CellCheckbox.module.css';

export interface CellCheckboxProps
  extends Pick<CellProps, 'defaultChecked' | 'checked'>,
    React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement> {}

export const CellCheckbox = ({ className, style, getRef, ...restProps }: CellCheckboxProps) => {
  const platform = usePlatform();

  const IconOff =
    platform === Platform.IOS || platform === Platform.VKCOM
      ? Icon24CheckCircleOff
      : Icon24CheckBoxOff;

  const IconOn =
    platform === Platform.IOS || platform === Platform.VKCOM
      ? Icon24CheckCircleOn
      : Icon24CheckBoxOn;

  return (
    <span className={className} style={style}>
      <VisuallyHidden
        {...restProps}
        Component="input"
        type="checkbox"
        className={styles['CellCheckbox__input']}
        getRootRef={getRef}
      />
      <span
        className={classNames(styles['CellCheckbox__icon'], styles['CellCheckbox__icon--off'])}
        aria-hidden
      >
        <IconOff />
      </span>
      <span
        className={classNames(styles['CellCheckbox__icon'], styles['CellCheckbox__icon--on'])}
        aria-hidden
      >
        <IconOn />
      </span>
    </span>
  );
};
