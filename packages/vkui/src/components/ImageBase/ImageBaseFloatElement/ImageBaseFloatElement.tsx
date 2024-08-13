import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import { ImageBaseContext } from '../context';
import { resolveIndent } from './helpers';
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

const horizontalIndentClassNames = {
  '2xs': styles['FloatElement--horizontalIndent-2xs'],
  'xs': styles['FloatElement--horizontalIndent-xs'],
  's': styles['FloatElement--horizontalIndent-s'],
  'm': styles['FloatElement--horizontalIndent-m'],
  'l': styles['FloatElement--horizontalIndent-l'],
  'xl': styles['FloatElement--horizontalIndent-xl'],
  '2xl': styles['FloatElement--horizontalIndent-2xl'],
  '3xl': styles['FloatElement--horizontalIndent-3xl'],
  '4xl': styles['FloatElement--horizontalIndent-4xl'],
};

const verticalIndentClassNames = {
  '2xs': styles['FloatElement--verticalIndent-2xs'],
  'xs': styles['FloatElement--verticalIndent-xs'],
  's': styles['FloatElement--verticalIndent-s'],
  'm': styles['FloatElement--verticalIndent-m'],
  'l': styles['FloatElement--verticalIndent-l'],
  'xl': styles['FloatElement--verticalIndent-xl'],
  '2xl': styles['FloatElement--verticalIndent-2xl'],
  '3xl': styles['FloatElement--verticalIndent-3xl'],
  '4xl': styles['FloatElement--verticalIndent-4xl'],
};

export interface ImageBaseFloatElementProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Позиция компонента относительно родителя
   */
  position: FloatElementPlacement | FloatElementPosition;
  /**
   * Отступ компонента от края контейнера по горизонтали
   */
  horizontalIndent?: FloatElementIndentation;
  /**
   * Отступ компонента от края контейнера по вертикали
   */
  verticalIndent?: FloatElementIndentation;
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
  horizontalIndent,
  verticalIndent,
  ...restProps
}: ImageBaseFloatElementProps) => {
  const [hidden, setHidden] = React.useState(visibility !== 'always');
  const { ref: imageWrapperRef } = React.useContext(ImageBaseContext);

  useIsomorphicLayoutEffect(
    function resetHidden() {
      setHidden(visibility === 'on-hover');
    },
    [visibility],
  );

  React.useEffect(
    function updateHiddenSubscribe() {
      const wrapper = imageWrapperRef.current;
      if (wrapper && visibility === 'on-hover') {
        const onMouseOver = () => setHidden(false);
        const onMouseOut = () => setHidden(true);

        wrapper.addEventListener('mouseover', onMouseOver);
        wrapper.addEventListener('mouseout', onMouseOut);

        return () => {
          wrapper.removeEventListener('mouseover', onMouseOver);
          wrapper.removeEventListener('mouseout', onMouseOut);
        };
      }
      return;
    },
    [visibility, imageWrapperRef],
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

  const [
    horizontalIndentStyle,
    verticalIndentStyle,
    horizontalIndentClassName,
    verticalIndentClassName,
  ] = React.useMemo(() => {
    const [horizontalIndentStyle, horizontalIndentClassName] = resolveIndent(
      horizontalIndent,
      '--vkui_internal--FloatElement_horizontal_indent',
      horizontalIndentClassNames,
    );
    const [verticalIndentStyle, verticalIndentClassName] = resolveIndent(
      verticalIndent,
      '--vkui_internal--FloatElement_vertical_indent',
      verticalIndentClassNames,
    );

    return [
      horizontalIndentStyle,
      verticalIndentStyle,
      horizontalIndentClassName,
      verticalIndentClassName,
    ];
  }, [horizontalIndent, verticalIndent]);

  return (
    <RootComponent
      {...restProps}
      style={{
        ...style,
        ...positionStyle,
        ...horizontalIndentStyle,
        ...verticalIndentStyle,
      }}
      className={classNames(
        styles['FloatElement'],
        hidden && styles['FloatElement--hidden'],
        typeof position === 'string' && positionPlacementClassNames[position],
        horizontalIndentClassName,
        verticalIndentClassName,
        className,
      )}
    />
  );
};

ImageBaseFloatElement.displayName = 'ImageBaseFloatElement';
