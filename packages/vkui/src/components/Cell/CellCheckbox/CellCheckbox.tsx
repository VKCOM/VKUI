import * as React from 'react';
import {
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
  Icon24CheckCircleOff,
  Icon24CheckCircleOn,
} from '@vkontakte/icons';
import { getPlatformClassName } from '../../../helpers/getPlatformClassName';
import { usePlatform } from '../../../hooks/usePlatform';
import { classNames } from '@vkontakte/vkjs';
import { Platform } from '../../../lib/platform';
import { CellProps } from '../Cell';
import { VisuallyHiddenInput } from '../../VisuallyHiddenInput/VisuallyHiddenInput';
import styles from './CellCheckbox.module.css';

export type CellCheckboxProps = Pick<CellProps, 'defaultChecked' | 'checked'> &
  React.InputHTMLAttributes<HTMLInputElement>;

export const CellCheckbox = ({ className, style, ...restProps }: CellCheckboxProps) => {
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
    <span
      className={classNames(
        styles['CellCheckbox'],
        getPlatformClassName(styles['CellCheckbox'], platform),
        className,
      )}
      style={style}
    >
      <VisuallyHiddenInput
        className={styles['CellCheckbox__input']}
        type="checkbox"
        {...restProps}
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
