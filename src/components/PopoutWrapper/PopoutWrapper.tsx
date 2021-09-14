import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { IOS } from '../../lib/platform';
import { useTimeout } from '../../hooks/useTimeout';
import { usePlatform } from '../../hooks/usePlatform';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useDOM } from '../../lib/dom';
import './PopoutWrapper.css';

export interface PopoutWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  hasMask?: boolean;
  fixed?: boolean;
  alignY?: 'top' | 'center' | 'bottom';
  alignX?: 'left' | 'center' | 'right';
  closing?: boolean;
}

export const PopoutWrapper: React.FC<PopoutWrapperProps> = ({
  alignY = 'center',
  alignX = 'center',
  closing = false,
  hasMask = true,
  fixed = true,
  children,
  onClick,
  ...restProps
}) => {
  const platform = usePlatform();
  const [opened, setOpened] = React.useState(!hasMask);
  const elRef = React.useRef<HTMLDivElement>();

  const onFadeInEnd = (e?: React.AnimationEvent) => {
    if (!e || e.animationName === 'vkui-animation-full-fade-in') {
      setOpened(true);
    }
  };
  const animationFinishFallback = useTimeout(onFadeInEnd, platform === IOS ? 300 : 200);
  React.useEffect(() => {
    !opened && animationFinishFallback.set();
  }, []);

  const { window } = useDOM();
  useGlobalEventListener(window, 'touchmove', (e) => e.preventDefault(), { passive: false });

  const baseClassNames = getClassName('PopoutWrapper', platform);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(baseClassNames, `PopoutWrapper--v-${alignY}`, `PopoutWrapper--h-${alignX}`, {
        'PopoutWrapper--closing': closing,
        'PopoutWrapper--opened': opened,
        'PopoutWrapper--fixed': fixed,
        'PopoutWrapper--masked': hasMask,
      })}
      onAnimationEnd={opened ? null : onFadeInEnd}
      ref={elRef}
    >
      <div vkuiClass="PopoutWrapper__container">
        <div
          vkuiClass="PopoutWrapper__overlay"
          onClick={onClick} />
        <div vkuiClass="PopoutWrapper__content">
          {children}
        </div>
      </div>
    </div>
  );
};
