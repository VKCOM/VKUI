import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { CSSCustomProperties } from '../../types';
import { RootComponent, type RootComponentProps } from '../RootComponent/RootComponent';
import styles from './AspectRatio.module.css';

export interface AspectRatioProps extends Omit<RootComponentProps<HTMLElement>, 'baseClassName'> {
  className?: string;
  /**
   * По умолчанию, вложенный контент будет растягиваться и заполнять весь блок.
   */
  mode?: 'stretch' | 'none';
  /**
   * Например:
   * - в виде числа: 16 / 9, 4 / 3, 1920 / 1080,
   * - в виде css переменной: `var(--css-aspect-ratio-var)`
   * - в виде сложного выражения: `calc(<какие-то вычисления>)`
   */
  ratio: number | string;
}

/**
 * `AspectRatio` позволяет поддерживать постоянное соотношение ширины и высоты.
 * Его можно использовать для отображения изображений, карт, видео и других медиафайлов.

 * @since 5.5.0
 * @see https://vkcom.github.io/VKUI/#/AspectRatio
 */
export function AspectRatio({
  ratio,
  mode = 'stretch',
  ...props
}: AspectRatioProps): React.JSX.Element {
  const style: React.CSSProperties & CSSCustomProperties = {
    '--vkui_internal--aspect_ratio': typeof ratio === 'number' ? String(ratio) : ratio,
  };

  return (
    <RootComponent
      baseClassName={classNames(styles.host, mode === 'stretch' && styles.modeStretch)}
      baseStyle={style}
      {...props}
    />
  );
}
