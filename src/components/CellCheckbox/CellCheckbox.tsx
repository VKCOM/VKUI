import { Icon24CheckBoxOff, Icon24CheckBoxOn, Icon24CheckCircleOff, Icon24CheckCircleOn } from '@vkontakte/icons';
import { InputHTMLAttributes } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { classNames } from '../../lib/classNames';
import { ANDROID } from '../../lib/platform';
import { CellProps } from '../Cell/Cell';
import './CellCheckbox.css';

type CellCheckboxProps = Pick<CellProps, 'defaultChecked' | 'checked'> & InputHTMLAttributes<HTMLInputElement>;

export const CellCheckbox = (props: CellCheckboxProps) => {
  const platform = usePlatform();

  const IconOff = platform === ANDROID
    ? Icon24CheckBoxOff
    : Icon24CheckCircleOff;

  const IconOn = platform === ANDROID
    ? Icon24CheckBoxOn
    : Icon24CheckCircleOn;

  return (
    <span vkuiClass={classNames(getClassName('CellCheckbox', platform))}>
      <input
        vkuiClass="CellCheckbox__input"
        type="checkbox"
        {...props}
      />
      <IconOff vkuiClass="CellCheckbox__icon CellCheckbox__icon--off" />
      <IconOn vkuiClass="CellCheckbox__icon CellCheckbox__icon--on" />
    </span>
  );
};
