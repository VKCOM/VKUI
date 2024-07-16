import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import { ImageBaseContext } from '../context';
import styles from './ImageBasePositionedComponent.module.css';

export type PositionedComponentPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'middle-start'
  | 'middle'
  | 'middle-end';

export type PositionedComponentPosition = {
  insetInlineStart?: React.CSSProperties['insetInlineStart'];
  insetInlineEnd?: React.CSSProperties['insetInlineEnd'];
  insetBlockStart?: React.CSSProperties['insetBlockStart'];
  insetBlockEnd?: React.CSSProperties['insetBlockEnd'];
};

const positionPlacementClassNames: Record<PositionedComponentPlacement, string> = {
  'top-start': styles['PositionedComponent--position-topStart'],
  'top': styles['PositionedComponent--position-top'],
  'top-end': styles['PositionedComponent--position-topEnd'],
  'bottom-start': styles['PositionedComponent--position-bottomStart'],
  'bottom': styles['PositionedComponent--position-bottom'],
  'bottom-end': styles['PositionedComponent--position-bottomEnd'],
  'middle-start': styles['PositionedComponent--position-middleStart'],
  'middle': styles['PositionedComponent--position-middle'],
  'middle-end': styles['PositionedComponent--position-middleEnd'],
};

export interface ImageBasePositionedComponentProps
  extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Позиция компонента относительно родителя
   */
  position: PositionedComponentPlacement | PositionedComponentPosition;
  /**
   * Режим отображения компонента:
   *
   * - `"always"`: Всегда
   * - `"on-image-hover"`: При наведении на картинку
   */
  visibility?: 'always' | 'on-image-hover';
  /**
   * `ref` на контейнер, в который встраивается компонент.
   * Используется в случае использования компонента отдельно от `Image`
   */
  containerRef?: React.RefObject<HTMLElement | null>;
}

export const ImageBasePositionedComponent = ({
  position,
  visibility = 'always',
  style,
  containerRef,
  className,
  ...restProps
}: ImageBasePositionedComponentProps) => {
  const [hidden, setHidden] = React.useState(visibility !== 'always');
  const { ref: imageWrapperRef } = React.useContext(ImageBaseContext);

  useIsomorphicLayoutEffect(
    function resetHidden() {
      setHidden(visibility === 'on-image-hover');
    },
    [visibility],
  );

  React.useEffect(
    function updateHiddenSubscribe() {
      const wrapper = (containerRef && containerRef.current) || imageWrapperRef.current;
      if (wrapper && visibility === 'on-image-hover') {
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
    [visibility, imageWrapperRef, containerRef],
  );

  const positionStyle = React.useMemo(
    () =>
      typeof position === 'object'
        ? {
            '--vkui_internal--PositionedComponent_inset_inline_start': position.insetInlineStart,
            '--vkui_internal--PositionedComponent_inset_inline_end': position.insetInlineEnd,
            '--vkui_internal--PositionedComponent_inset_block_start': position.insetBlockStart,
            '--vkui_internal--PositionedComponent_inset_block_end': position.insetBlockEnd,
          }
        : {},
    [position],
  );

  return (
    <RootComponent
      {...restProps}
      style={{
        ...style,
        ...positionStyle,
      }}
      className={classNames(
        styles['PositionedComponent'],
        hidden && styles['PositionedComponent--hidden'],
        typeof position === 'string' && positionPlacementClassNames[position],
        className,
      )}
    />
  );
};

ImageBasePositionedComponent.displayName = 'ImageBasePositionedComponent';
