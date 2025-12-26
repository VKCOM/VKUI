'use client';

import * as React from 'react';
import type {
  DensityTypeValues,
  SizeTypeValues,
  ViewHeightType,
  ViewWidthType,
} from '../../lib/adaptivity';

export interface DensityProps {
  /**
   * Тип размера экрана по горизонтали.
   * @deprecated Since 8.0.0. Будет удалено в **VKUI v10** – используйте `sizeX="compact"` → `viewWidth={ViewWidth.MOBILE}` или `sizeX="compact"` → `viewWidth={ViewWidth.SMALL_TABLET}` (см. Https://github.com/VKCOM/VKUI/issues/9015).
   */
  sizeX?: SizeTypeValues; // TODO [>=10]: #9015 удалить свойство
  /**
   * Тип размера экрана по вертикали.
   * @deprecated Since 8.0.0. Будет удалено в **VKUI v10** – используйте `density` (см. Https://github.com/VKCOM/VKUI/issues/9015).
   */
  sizeY?: SizeTypeValues; // TODO [>=10]: #9015 удалить свойство
  /**
   * Тип размера экрана.
   */
  density?: DensityTypeValues;
}

export interface AdaptivityProps extends DensityProps {
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
   * @deprecated Since 7.3.0. Будет удалено в **VKUI v9** (см. Https://github.com/VKCOM/VKUI/pull/8490).
   */
  hasHover?: boolean; // TODO [>=9]: удалить неиспользуемое свойство
}

export const AdaptivityContext: React.Context<AdaptivityProps> =
  React.createContext<AdaptivityProps>({});
