import type { HasComponent, HasDataAttribute, HTMLAttributesWithRootRef } from '../../types';

export type TypographyProps = HasComponent & React.HTMLAttributes<HTMLElement> & HasDataAttribute;

export interface PanelHeaderProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  before?: React.ReactNode;
  /**
   * Добавляет элемент справа.
   *
   * При передаче нескольких элементов, расставляет отступы между ними.
   */
  after?: React.ReactNode;
  /**
   * Тип разделителя под шапкой.
   *
   * - `"none"` означает, что разделитель не нужен
   * - `"separator"` включает сепаратор при условии, что это:
   *      - либо платформа `vkcom`
   *      - либо платформа `android`/`ios` при `<AdaptivityProvider sizeX="compact" />`
   * - `"spacing"` включает отступ, если это платформа `android`/`ios` при `<AdaptivityProvider sizeX="regular" />`
   * - `"auto"` автоматически подбирает либо `"separator"`, либо `"spacing"` по их условиям
   */
  delimiter?: 'auto' | 'none' | 'separator' | 'spacing';
  transparent?: boolean;
  shadow?: boolean;
  /**
   * Высота шапки будет игнорироваться контентом панели
   */
  float?: boolean;
  /**
   * Если `false`, то шапка будет в потоке. По умолчанию `true`, но если платформа vkcom, то по умолчанию `false`.
   */
  fixed?: boolean;
  /**
   * По умолчанию как `Component` используется `span`.
   */
  typographyProps?: TypographyProps;
}
