import { GallerySlidesState } from '../types';

export interface LoopPoint {
  /**
   * Индекс слайда
   */
  index: number;
  /**
   * Функция, которая по текущему сдвигу галереи определяет нужный сдвиг слайда
   */
  target(this: void, location: number): void;
}

export interface ControlElementsState {
  /**
   * Отвечает за отображение стрелки влево
   */
  canSlideLeft: boolean;
  /**
   * Отвечает за отображение стрелки вправо
   */
  canSlideRight: boolean;
  /**
   * Возможность листаться слайды drag'ом
   */
  isDraggable: boolean;
}

export interface SlidesManagerState {
  /**
   * Общая ширина всех слайдов
   */
  contentSize: number;
  /**
   * Массив с пограничными точками слайдов, которые необходимо смещать, чтобы они всегда были в области видимости
   * (пример: для последнего слайда это n-первых слайдов, необходимых для заполнения оставшейся ширины,
   * или для первого слайда это n-последних слайдов при выравнивании по центру)
   */
  loopPoints: LoopPoint[];
  /**
   * Массив с правыми границами слайдов
   */
  snaps: number[];
  /**
   * Ширина видимой области слайдов
   */
  viewportOffsetWidth: number;
  /**
   * Массив слайдов с координатой начала слайда и шириной
   */
  slides: GallerySlidesState[];
  /**
   * Все слайды видимы без скрола
   */
  isFullyVisible: boolean;
}
