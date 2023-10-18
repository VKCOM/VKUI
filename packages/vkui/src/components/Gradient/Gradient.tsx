import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { warnOnce } from '../../lib/warnOnce';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Gradient.module.css';

const stylesMode = {
  tint: styles['Gradient--mode-tint'],
  black: styles['Gradient--mode-black'],
  white: styles['Gradient--mode-white'],
};

export interface GradientProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Тип градиента
   * TODO [>=6]: удалить 'white' и 'black', сделать `default` по умолчанию
   */
  mode?: 'tint' | 'white' | 'black' | 'default';
  /**
   * Направление градиента
   */
  to?: 'top' | 'bottom';
}

const warn = warnOnce('UsersStack');

/**
 * @see https://vkcom.github.io/VKUI/#/Gradient
 */
export const Gradient = ({ mode = 'tint', to = 'top', ...restProps }: GradientProps) => {
  if (process.env.NODE_ENV === 'development' && (mode === 'black' || mode === 'white')) {
    // TODO [>=6]: Удалить
    warn(
      'Значения "black" и "white" свойства "mode" будут удалены в v6. Используйте "tint" или "default"',
    );
  }

  return (
    <RootComponent
      role="presentation"
      {...restProps}
      baseClassName={classNames(
        styles['Gradient'],
        mode !== 'default' && stylesMode[mode],
        to === 'bottom' && styles['Gradient--to-bottom'],
      )}
    />
  );
};
