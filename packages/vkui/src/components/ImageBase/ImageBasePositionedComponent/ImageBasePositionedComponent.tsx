import { useEffect } from 'react';
import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useEventListener } from '../../../hooks/useEventListener';
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect';
import { HTMLAttributesWithRootRef } from '../../../types';
import { RootComponent } from '../../RootComponent/RootComponent';
import { ImageBaseContext } from '../context';
import styles from './ImageBasePositionedComponent.module.css';

type Position = {
  insetInlineStart?: React.CSSProperties['insetInlineStart'];
  insetInlineEnd?: React.CSSProperties['insetInlineEnd'];
  insetBlockStart?: React.CSSProperties['insetBlockStart'];
  insetBlockEnd?: React.CSSProperties['insetBlockEnd'];
};

export interface ImageBasePositionedComponentProps
  extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Позиция компонента относительно родителя
   */
  position: Position;
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

  const mouseOverListener = useEventListener('mouseover', () => setHidden(false));
  const mouseOutListener = useEventListener('mouseout', () => setHidden(true));

  useIsomorphicLayoutEffect(() => {
    setHidden(visibility === 'on-image-hover');
  }, [visibility]);

  useEffect(() => {
    const wrapper = (containerRef && containerRef.current) || imageWrapperRef.current;
    if (wrapper && visibility === 'on-image-hover') {
      mouseOverListener.add(wrapper);
      mouseOutListener.add(wrapper);

      return () => {
        mouseOverListener.remove();
        mouseOutListener.remove();
      };
    }
    return;
  }, [mouseOverListener, mouseOutListener, visibility, imageWrapperRef, containerRef]);

  return (
    <RootComponent
      {...restProps}
      style={{
        ...style,
        ...position,
      }}
      className={classNames(
        styles['PositionedComponent'],
        hidden && styles['PositionedComponent--hidden'],
        className,
      )}
    />
  );
};

ImageBasePositionedComponent.displayName = 'ImageBasePositionedComponent';
