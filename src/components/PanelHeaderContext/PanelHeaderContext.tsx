import * as React from 'react';
import FixedLayout from '../FixedLayout/FixedLayout';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { ViewWidth } from '../AdaptivityProvider/AdaptivityContext';
import { useAdaptivity } from '../../hooks/useAdaptivity';
import { useDOM } from '../../lib/dom';
import { useIsomorphicLayoutEffect } from '../../lib/useIsomorphicLayoutEffect';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useTimeout } from '../../hooks/useTimeout';
import { usePlatform } from '../../hooks/usePlatform';
import './PanelHeaderContext.css';

export interface PanelHeaderContextProps extends React.HTMLAttributes<HTMLDivElement> {
  opened: boolean;
  onClose: VoidFunction;
}

export const PanelHeaderContext: React.FC<PanelHeaderContextProps> = ({
  children,
  onClose,
  opened = false,
  ...restProps
}) => {
  const { document } = useDOM();
  const platform = usePlatform();
  const [closing, setClosing] = React.useState(false);
  const { viewWidth } = useAdaptivity();
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;
  const elementRef = React.useRef<HTMLDivElement>();

  // start closing on "opened" change
  useIsomorphicLayoutEffect(() => {
    !opened && setClosing(true);
  }, [opened]);

  // start closing on outer click
  useGlobalEventListener(document, 'click', isDesktop && opened && !closing && ((event) => {
    if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
      onClose();
    }
  }));

  // fallback onAnimationEnd when animationend not supported
  const onAnimationEnd = () => setClosing(false);
  const animationFallback = useTimeout(onAnimationEnd, 200);
  React.useEffect(() => closing ? animationFallback.set() : animationFallback.clear(), [closing]);

  return (
    <FixedLayout {...restProps} vkuiClass={classNames(getClassName('PanelHeaderContext', platform), {
      'PanelHeaderContext--opened': opened,
      'PanelHeaderContext--closing': closing,
      'PanelHeaderContext--desktop': isDesktop,
    })} vertical="top">
      <div vkuiClass="PanelHeaderContext__in" ref={elementRef} onAnimationEnd={closing ? onAnimationEnd : null}>
        <div vkuiClass="PanelHeaderContext__content">
          {(opened || closing) && children}
        </div>
      </div>
      {!isDesktop && (opened || closing) && <div onClick={onClose} vkuiClass="PanelHeaderContext__fade" />}
    </FixedLayout>
  );
};
