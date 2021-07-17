import { HTMLAttributes, FC, useState, useRef, useEffect } from 'react';
import FixedLayout from '../FixedLayout/FixedLayout';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { withAdaptivity, AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import { useDOM } from '../../lib/dom';
import { HasPlatform } from '../../types';
import { useGlobalEventListener } from '../../hooks/useGlobalEventListener';
import { useTimeout } from '../../hooks/useTimeout';
import { usePlatform } from '../../hooks/usePlatform';

export interface PanelHeaderContextProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps {
  opened: boolean;
  onClose: VoidFunction;
}

export interface PanelHeaderContextState {
  closing: boolean;
}

export const PanelHeaderContext: FC<PanelHeaderContextProps> = ({
  children,
  onClose,
  viewWidth,
  hasMouse,
  opened = false,
  ...restProps
}) => {
  const { document } = useDOM();
  const platform = usePlatform();
  const [closing, setClosing] = useState(false);
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;
  const elementRef = useRef<HTMLDivElement>();

  // start closing on "opened" change
  useEffect(() => !opened && setClosing(true), [opened]);

  // start closing on outer click
  useGlobalEventListener(document, 'click', isDesktop && opened && !closing && ((event) => {
    if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
      onClose();
    }
  }));

  // fallback onAnimationEnd when animationend not supported
  const onAnimationEnd = () => setClosing(false);
  const animationFallback = useTimeout(onAnimationEnd, 200);
  useEffect(() => closing ? animationFallback.set() : animationFallback.clear(), [closing]);

  const baseClassNames = getClassName('PanelHeaderContext', platform);

  return (
    <FixedLayout {...restProps} vkuiClass={classNames(baseClassNames, {
      'PanelHeaderContext--opened': opened,
      'PanelHeaderContext--closing': closing,
      'PanelHeaderContext--desktop': isDesktop,
    })} vertical="top">
      <div vkuiClass="PanelHeaderContext__in" ref={elementRef} onAnimationEnd={closing && onAnimationEnd}>
        <div vkuiClass="PanelHeaderContext__content">
          {(opened || closing) && children}
        </div>
      </div>
      {!isDesktop && (opened || closing) && <div onClick={onClose} vkuiClass="PanelHeaderContext__fade" />}
    </FixedLayout>
  );
};

export default withAdaptivity(PanelHeaderContext, {
  viewWidth: true,
  hasMouse: true,
});
