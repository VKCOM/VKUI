import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { useDOM } from '../../lib/dom';
import { Platform } from '../../lib/platform';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './PopoutWrapper.module.css';

const stylesAlignX = {
  center: styles['PopoutWrapper--alignX-center'],
  left: styles['PopoutWrapper--alignX-left'],
  right: styles['PopoutWrapper--alignX-right'],
};

const stylesAlignY = {
  center: styles['PopoutWrapper--alignY-center'],
  top: styles['PopoutWrapper--alignY-top'],
  bottom: styles['PopoutWrapper--alignY-bottom'],
};

export interface PopoutWrapperProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  hasMask?: boolean;
  fixed?: boolean;
  alignY?: 'top' | 'center' | 'bottom';
  alignX?: 'left' | 'center' | 'right';
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
    if (!e || e.animationName === styles['animation-full-fade-in']) {
      setOpened(true);
    }
  };
  const animationFinishFallback = useTimeout(onFadeInEnd, platform === Platform.IOS ? 300 : 200);
  React.useEffect(() => {
    !opened && animationFinishFallback.set();
  }, [animationFinishFallback, opened]);

  const { window } = useDOM();
  useGlobalEventListener(window, 'touchmove', (e) => e.preventDefault(), {
    passive: false,
  });

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['PopoutWrapper'],
        stylesAlignY[alignY],
        stylesAlignX[alignX],
        closing && styles['PopoutWrapper--closing'],
        opened && styles['PopoutWrapper--opened'],
        fixed && styles['PopoutWrapper--fixed'],
        hasMask && styles['PopoutWrapper--masked'],
      )}
      onAnimationEnd={opened ? undefined : onFadeInEnd}
    >
      <div className={styles['PopoutWrapper__container']}>
        <div className={styles['PopoutWrapper__overlay']} onClick={onClick} />
        <div className={styles['PopoutWrapper__content']}>{children}</div>
      </div>
    </RootComponent>
  );
};
