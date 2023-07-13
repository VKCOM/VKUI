import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HasRootRef } from '../../types';
import { DefaultIcon } from '../PopperArrow/DefaultIcon';
import { PopperArrow, type PopperArrowProps } from '../PopperArrow/PopperArrow';
import { Subhead } from '../Typography/Subhead/Subhead';
import styles from './BaseTooltip.module.css';

const stylesAppearance = {
  accent: styles['BaseTooltip--appearance-accent'],
  white: styles['BaseTooltip--appearance-white'],
  black: styles['BaseTooltip--appearance-black'],
  inversion: styles['BaseTooltip--appearance-inversion'],
};

export interface BaseTooltipProps extends HasRootRef<HTMLDivElement> {
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
  floatingStyle?: React.CSSProperties;
}

/**
 * @see https://vkcom.github.io/VKUI/#/BaseTooltip
 */
export const BaseTooltip = ({
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
  className,
  ...restProps
}: BaseTooltipProps) => {
  return (
    <div
      {...restProps}
      className={classNames(
        styles['BaseTooltip'],
        appearance !== 'neutral' && stylesAppearance[appearance],
        className,
      )}
    >
      <div ref={getRootRef} style={floatingStyle}>
        {withArrow && (
          <PopperArrow
            coords={arrowCoords}
            placement={arrowPlacement}
            arrowClassName={styles['BaseTooltip__arrow']}
            getRootRef={getArrowRef}
            Icon={ArrowIcon}
          />
        )}
        <div className={styles['BaseTooltip__content']}>
          {header && <Subhead weight="2">{header}</Subhead>}
          {text && <Subhead>{text}</Subhead>}
        </div>
      </div>
    </div>
  );
};
