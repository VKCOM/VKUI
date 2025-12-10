export const imageBaseSizes = [16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96] as const;

export type ImageBaseSize = (typeof imageBaseSizes)[number];

export type ImageBaseExpectedIconProps = {
  /**
   * Ширина иконки.
   */
  width?: number;
  /**
   * Высота иконки.
   */
  height?: number;
  /**
   * ClassName для иконки.
   */
  className?: string;
};

export interface ImageBaseContextProps {
  /**
   * Размер картинки.
   */
  size: ImageBaseSize | number;
  /**
   * Обработчики события `mouseOver`.
   */
  onMouseOverHandlers: VoidFunction[];
  /**
   * Обработчики события `mouseOut`.
   */
  onMouseOutHandlers: VoidFunction[];
}
