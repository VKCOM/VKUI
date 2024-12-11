'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { type HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import { ImageBaseContext } from '../context';
import { mutableRemoveElement, resolveIndent } from './helpers';
import styles from './ImageBaseFloatElement.module.css';

export type FloatElementPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'middle-start'
  | 'middle'
  | 'middle-end';

export type FloatElementIndentation =
  | '2xs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | number
  | string;

const positionPlacementClassNames = {
  'top-start': styles.placementTopStart,
  'top': styles.placementTop,
  'top-end': styles.placementTopEnd,
  'bottom-start': styles.placementBottomStart,
  'bottom': styles.placementBottom,
  'bottom-end': styles.placementBottomEnd,
  'middle-start': styles.placementMiddleStart,
  'middle': styles.placementMiddle,
  'middle-end': styles.placementMiddleEnd,
};

const inlineIndentClassNames = {
  '2xs': styles.inlineIndent2xs,
  'xs': styles.inlineIndentXs,
  's': styles.inlineIndentS,
  'm': styles.inlineIndentM,
  'l': styles.inlineIndentL,
  'xl': styles.inlineIndentXl,
  '2xl': styles.inlineIndent2xl,
  '3xl': styles.inlineIndent3xl,
  '4xl': styles.inlineIndent4xl,
};

const blockIndentClassNames = {
  '2xs': styles.blockIndent2xs,
  'xs': styles.blockIndentXs,
  's': styles.blockIndentS,
  'm': styles.blockIndentM,
  'l': styles.blockIndentL,
  'xl': styles.blockIndentXl,
  '2xl': styles.blockIndent2xl,
  '3xl': styles.blockIndent3xl,
  '4xl': styles.blockIndent4xl,
};

export interface ImageBaseFloatElementProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Позиция компонента относительно родителя
   */
  placement: FloatElementPlacement;
  /**
   * Отступ компонента от края контейнера по горизонтали
   */
  inlineIndent?: FloatElementIndentation;
  /**
   * Отступ компонента от края контейнера по вертикали
   */
  blockIndent?: FloatElementIndentation;
  /**
   * Режим отображения компонента:
   *
   * - `"always"`: Всегда
   * - `"on-hover"`: При наведении на картинку
   */
  visibility?: 'always' | 'on-hover';
}

export const ImageBaseFloatElement = ({
  placement,
  visibility = 'always',
  style,
  className,
  inlineIndent,
  blockIndent,
  ...restProps
}: ImageBaseFloatElementProps) => {
  const [hidden, setHidden] = React.useState(visibility !== 'always');
  const { onMouseOverHandlers, onMouseOutHandlers } = React.useContext(ImageBaseContext);

  useIsomorphicLayoutEffect(
    function resetHidden() {
      setHidden(visibility === 'on-hover');
    },
    [visibility],
  );

  useIsomorphicLayoutEffect(
    function addMouseHandlers() {
      if (visibility === 'on-hover') {
        const onMouseOver = () => setHidden(false);
        const onMouseOut = () => setHidden(true);

        onMouseOverHandlers.push(onMouseOver);
        onMouseOutHandlers.push(onMouseOut);

        return () => {
          mutableRemoveElement(onMouseOverHandlers, onMouseOver);
          mutableRemoveElement(onMouseOutHandlers, onMouseOut);
        };
      }
      return;
    },
    [visibility],
  );

  const [inlineIndentStyle, blockIndentStyle, inlineIndentClassName, blockIndentClassName] =
    React.useMemo(() => {
      const [inlineIndentStyle, inlineIndentClassName] = resolveIndent(
        inlineIndent,
        '--vkui_internal--FloatElement_horizontal_indent',
        inlineIndentClassNames,
      );
      const [blockIndentStyle, blockIndentClassName] = resolveIndent(
        blockIndent,
        '--vkui_internal--FloatElement_vertical_indent',
        blockIndentClassNames,
      );

      return [inlineIndentStyle, blockIndentStyle, inlineIndentClassName, blockIndentClassName];
    }, [inlineIndent, blockIndent]);

  return (
    <RootComponent
      {...restProps}
      style={{
        ...style,
        ...inlineIndentStyle,
        ...blockIndentStyle,
      }}
      className={classNames(
        styles.host,
        hidden && styles.hidden,
        positionPlacementClassNames[placement],
        inlineIndentClassName,
        blockIndentClassName,
        className,
      )}
    />
  );
};

ImageBaseFloatElement.displayName = 'ImageBaseFloatElement';
