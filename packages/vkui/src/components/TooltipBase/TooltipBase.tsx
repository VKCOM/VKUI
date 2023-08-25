import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { DefaultIcon } from '../PopperArrow/DefaultIcon';
import { PopperArrow, type PopperArrowProps } from '../PopperArrow/PopperArrow';
import { RootComponent } from '../RootComponent/RootComponent';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './TooltipBase.module.css';

export const TOOLTIP_MAX_WIDTH = 220;

const stylesAppearance = {
  accent: styles['TooltipBase--appearance-accent'],
  white: styles['TooltipBase--appearance-white'],
  black: styles['TooltipBase--appearance-black'],
  inversion: styles['TooltipBase--appearance-inversion'],
};

export interface TooltipBaseProps extends HasRootRef<HTMLDivElement> {
  /**
   * Стиль отображения подсказки
   */
  appearance?: 'accent' | 'neutral' | 'white' | 'black' | 'inversion';
  /**
   * Текст тултипа.
   */
  text?: React.ReactNode;
  /**
   * Заголовок тултипа.
   */
  header?: React.ReactNode;
  /**
   * Отображать ли стрелку, указывающую на якорный элемент
   */
  withArrow?: boolean;
  arrowCoords?: PopperArrowProps['coords'];
  arrowPlacement?: PopperArrowProps['placement'];
  getArrowRef?: PopperArrowProps['getRootRef'];
  /**
   * Пользовательская SVG иконка.
   *
   * Требования:
   *
   * 1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).
   * 2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,
   *    растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.
   *    (см. https://github.com/VKCOM/VKUI/pull/4496).
   * 3. Убедитесь, что компонент принимает все валидные для SVG параметры.
   * 4. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.
   * 5. Если стрелка наезжает на якорный элемент, то увеличьте значение параметра `offsetY`.
   */
  ArrowIcon?: PopperArrowProps['Icon'];
  /**
   * Пользовательские css-классы, будут добавлены на root-элемент
   */
  className?: string;
  /**
   * Перебивает максимальную ширину заданную по умолчанию.
   *
   * Передача `null` полностью сбрасывает установку `max-width` на элемент.
   */
  maxWidth?: number | string | null;
  floatingStyle?: React.CSSProperties;
}

/**
 * Низкоуровневый компонент для отрисовки тултипа.
 * Примеры использования и Readme можно найти в документации Tooltip
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 */
export const TooltipBase = ({
  appearance = 'accent',
  withArrow = true,
  arrowCoords,
  arrowPlacement = 'top',
  getArrowRef,
  getRootRef,
  floatingStyle,
  ArrowIcon = DefaultIcon,
  text,
  header,
  maxWidth = TOOLTIP_MAX_WIDTH,
  ...restProps
}: TooltipBaseProps) => {
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['TooltipBase'],
        appearance !== 'neutral' && stylesAppearance[appearance],
      )}
    >
      <div ref={getRootRef} style={floatingStyle}>
        {withArrow && (
          <PopperArrow
            coords={arrowCoords}
            placement={arrowPlacement}
            arrowClassName={styles['TooltipBase__arrow']}
            getRootRef={getArrowRef}
            Icon={ArrowIcon}
          />
        )}
        <div
          className={styles['TooltipBase__content']}
          style={maxWidth !== null ? { maxWidth } : undefined}
        >
          {header && <Subhead weight="2">{header}</Subhead>}
          {text && <Subhead>{text}</Subhead>}
        </div>
      </div>
    </RootComponent>
  );
};
