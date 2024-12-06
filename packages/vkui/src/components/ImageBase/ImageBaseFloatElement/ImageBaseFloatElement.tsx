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

export type FloatElementPosition = {
  insetInlineStart?: React.CSSProperties['insetInlineStart'];
  insetInlineEnd?: React.CSSProperties['insetInlineEnd'];
  insetBlockStart?: React.CSSProperties['insetBlockStart'];
  insetBlockEnd?: React.CSSProperties['insetBlockEnd'];
};

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
  'top-start': styles['FloatElement--position-topStart'],
  'top': styles['FloatElement--position-top'],
  'top-end': styles['FloatElement--position-topEnd'],
  'bottom-start': styles['FloatElement--position-bottomStart'],
  'bottom': styles['FloatElement--position-bottom'],
  'bottom-end': styles['FloatElement--position-bottomEnd'],
  'middle-start': styles['FloatElement--position-middleStart'],
  'middle': styles['FloatElement--position-middle'],
  'middle-end': styles['FloatElement--position-middleEnd'],
};

const inlineIndentClassNames = {
  '2xs': styles['FloatElement--inlineIndent-2xs'],
  'xs': styles['FloatElement--inlineIndent-xs'],
  's': styles['FloatElement--inlineIndent-s'],
  'm': styles['FloatElement--inlineIndent-m'],
  'l': styles['FloatElement--inlineIndent-l'],
  'xl': styles['FloatElement--inlineIndent-xl'],
  '2xl': styles['FloatElement--inlineIndent-2xl'],
  '3xl': styles['FloatElement--inlineIndent-3xl'],
  '4xl': styles['FloatElement--inlineIndent-4xl'],
};

const blockIndentClassNames = {
  '2xs': styles['FloatElement--blockIndent-2xs'],
  'xs': styles['FloatElement--blockIndent-xs'],
  's': styles['FloatElement--blockIndent-s'],
  'm': styles['FloatElement--blockIndent-m'],
  'l': styles['FloatElement--blockIndent-l'],
  'xl': styles['FloatElement--blockIndent-xl'],
  '2xl': styles['FloatElement--blockIndent-2xl'],
  '3xl': styles['FloatElement--blockIndent-3xl'],
  '4xl': styles['FloatElement--blockIndent-4xl'],
};

export interface ImageBaseFloatElementProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Позиция компонента относительно родителя
   */
  position: FloatElementPlacement | FloatElementPosition;
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
  position,
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

  const positionStyle = React.useMemo(
    () =>
      typeof position === 'object'
        ? {
            '--vkui_internal--FloatElement_inset_inline_start': position.insetInlineStart,
            '--vkui_internal--FloatElement_inset_inline_end': position.insetInlineEnd,
            '--vkui_internal--FloatElement_inset_block_start': position.insetBlockStart,
            '--vkui_internal--FloatElement_inset_block_end': position.insetBlockEnd,
          }
        : {},
    [position],
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
        ...positionStyle,
        ...inlineIndentStyle,
        ...blockIndentStyle,
      }}
      className={classNames(
        styles['FloatElement'],
        hidden && styles['FloatElement--hidden'],
        typeof position === 'string' && positionPlacementClassNames[position],
        inlineIndentClassName,
        blockIndentClassName,
        className,
      )}
    />
  );
};

ImageBaseFloatElement.displayName = 'ImageBaseFloatElement';
