import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './PopoutWrapper.module.css';

const stylesAlignX = {
  center: styles.hostAlignXCenter,
  left: styles.hostAlignXLeft,
  right: styles.hostAlignXRight,
};

const stylesAlignY = {
  center: styles.hostAlignYCenter,
  top: styles.hostAlignYTop,
  bottom: styles.hostAlignYBottom,
};

export interface PopoutWrapperProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Если `true`, то при первом монтировании оверлей появится через fade-in анимацию.
   */
  hasMask?: boolean;
  /**
   * Включает фиксированное позиционирование.
   *
   * По умолчанию у компонента не задан никакой `position`.
   */
  fixed?: boolean;
  /**
   * Выравнивает контент по горизонтали.
   */
  alignX?: 'left' | 'center' | 'right';
  /**
   * Выравнивает контент по вертикали.
   */
  alignY?: 'top' | 'center' | 'bottom';
  /**
   * Спрячет компонент через fade-out анимацию.
   */
  closing?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/PopoutWrapper
 */
export const PopoutWrapper = ({
  alignY = 'center',
  alignX = 'center',
  closing = false,
  hasMask = true,
  fixed = true,
  children,
  onClick,
  ...restProps
}: PopoutWrapperProps) => {
  const platform = usePlatform();
  const [opened, setOpened] = React.useState(!hasMask);

  const onFadeInEnd = (e?: React.AnimationEvent) => {
    if (!e || e.animationName === styles.animationFullFadeIn) {
      setOpened(true);
    }
  };
  const animationFinishFallback = useTimeout(onFadeInEnd, platform === 'ios' ? 300 : 200);
  React.useEffect(() => {
    !opened && animationFinishFallback.set();
  }, [animationFinishFallback, opened]);

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles.host,
        stylesAlignY[alignY],
        stylesAlignX[alignX],
        closing && styles.hostClosing,
        opened && styles.hostOpened,
        fixed && styles.hostFixed,
        hasMask && styles.hostMasked,
      )}
      onAnimationEnd={opened ? undefined : onFadeInEnd}
    >
      <div className={styles.container}>
        <div className={styles.overlay} onClick={onClick} />
        <div className={styles.content}>{children}</div>
      </div>
    </RootComponent>
  );
};
