import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { usePlatform } from '../../hooks/usePlatform';
import { useTimeout } from '../../hooks/useTimeout';
import { Platform } from '../../lib/platform';
import styles from './PopoutWrapper.module.css';

export interface PopoutWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
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
  className,
  ...restProps
}: PopoutWrapperProps) => {
  const platform = usePlatform();
  const [opened, setOpened] = React.useState(!hasMask);
  const elRef = React.useRef<HTMLDivElement>(null);

  const onFadeInEnd = (e?: React.AnimationEvent) => {
    if (!e || e.animationName === 'vkui-animation-full-fade-in') {
      setOpened(true);
    }
  };
  const animationFinishFallback = useTimeout(onFadeInEnd, platform === Platform.IOS ? 300 : 200);
  React.useEffect(() => {
    !opened && animationFinishFallback.set();
  }, [animationFinishFallback, opened]);

  return (
    <div
      {...restProps}
      className={classNames(
        styles['PopoutWrapper'],
        {
          center: styles['PopoutWrapper--alignY-center'],
          top: styles['PopoutWrapper--alignY-top'],
          bottom: styles['PopoutWrapper--alignY-bottom'],
        }[alignY],
        {
          center: styles['PopoutWrapper--alignX-center'],
          left: styles['PopoutWrapper--alignX-left'],
          right: styles['PopoutWrapper--alignX-right'],
        }[alignX],
        closing && styles['PopoutWrapper--closing'],
        opened && styles['PopoutWrapper--opened'],
        fixed && styles['PopoutWrapper--fixed'],
        hasMask && styles['PopoutWrapper--masked'],
        className,
      )}
      onAnimationEnd={opened ? undefined : onFadeInEnd}
      ref={elRef}
    >
      <div className={styles['PopoutWrapper__container']}>
        <div className={styles['PopoutWrapper__overlay']} onClick={onClick} />
        <div className={styles['PopoutWrapper__content']}>{children}</div>
      </div>
    </div>
  );
};
