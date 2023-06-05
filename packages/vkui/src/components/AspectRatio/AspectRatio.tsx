import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { CSSCustomProperties, HasRootRef } from '../../types';
import styles from './AspectRatio.module.css';

export interface AspectRatioProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  className?: string;
  /**
   * По умолчанию, вложенный контент будет растягиваться и заполнять весь блок.
   */
  mode?: 'stretch' | 'none';
  children: React.ReactNode;
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
  children,
  mode = 'stretch',
  className,
  getRootRef,
  style: styleProp,
  ...props
}: AspectRatioProps): JSX.Element {
  const style: React.CSSProperties & CSSCustomProperties = {
    ['--vkui_internal--aspect_ratio']: String(ratio),
  };

  return (
    <div
      className={classNames(
        styles.AspectRatio,
        mode === 'stretch' && styles['AspectRatio--mode-stretch'],
        className,
      )}
      style={{ ...styleProp, ...style }}
      ref={getRootRef}
      {...props}
    >
      {children}
    </div>
  );
}
