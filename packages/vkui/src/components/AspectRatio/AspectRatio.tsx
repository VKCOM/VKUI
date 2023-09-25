import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { CSSCustomProperties, HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './AspectRatio.module.css';

export interface AspectRatioProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  className?: string;
  /**
   * По умолчанию, вложенный контент будет растягиваться и заполнять весь блок.
   */
  mode?: 'stretch' | 'none';
  /**
   * Например 16 / 9, 4 / 3, 1920 / 1080
   */
  ratio: number;
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
  style: styleProp,
  ...props
}: AspectRatioProps): JSX.Element {
  const style: React.CSSProperties & CSSCustomProperties = {
    ['--vkui_internal--aspect_ratio']: String(ratio),
  };

  return (
    <RootComponent
      baseClassName={classNames(
        styles.AspectRatio,
        mode === 'stretch' && styles['AspectRatio--mode-stretch'],
      )}
      style={{ ...styleProp, ...style }}
      {...props}
    />
  );
}
