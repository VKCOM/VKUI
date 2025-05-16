'use client';

import * as React from 'react';
import type { SizeTypeValues, ViewHeightType, ViewWidthType } from '../../lib/adaptivity';

export interface SizeProps {
  /**
   * Тип размера экрана по горизонтали.
   */
  sizeX?: SizeTypeValues;
  /**
   * Тип размера экрана по вертикали.
   */
  sizeY?: SizeTypeValues;
}

export interface AdaptivityProps extends SizeProps {
  /**
   * Тип ширины экрана для адаптивного отображения.
   */
  viewWidth?: ViewWidthType;
  /**
   * Тип высоты экрана для адаптивного отображения.
   */
  viewHeight?: ViewHeightType;
  /**
   * Флаг наличия указателя (например, мыши) на устройстве.
   */
  hasPointer?: boolean;
  /**
   * @deprecated Since 7.3.0.
   *
   * Свойство нигде не используется и будет удалено в `v8`.
   */
  hasHover?: boolean;
}

export const AdaptivityContext: React.Context<AdaptivityProps> =
  React.createContext<AdaptivityProps>({});
