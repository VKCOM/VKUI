import * as React from 'react';
import { HasRootRef } from '../../types';
import { withAdaptivity, ViewWidth, ViewHeight, AdaptivityProps } from '../../hoc/withAdaptivity';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { blurActiveElement, useDOM } from '../../lib/dom';
import './PopoutRoot.css';

export interface PopoutRootProps extends React.HTMLAttributes<HTMLDivElement>, AdaptivityProps, HasRootRef<HTMLDivElement> {
  popout?: React.ReactNode;
  modal?: React.ReactNode;
}

export const PopoutRootComponent: React.FC<PopoutRootProps> = (props: PopoutRootProps) => {
  const { popout, modal, viewWidth, viewHeight, hasMouse, children, getRootRef, ...restProps } = props;
  const { document } = useDOM();

  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);

  React.useEffect(() => {
    popout && blurActiveElement(document);
  }, [!!popout]);

  return (
    <div
      {...restProps}
      vkuiClass="PopoutRoot"
      ref={getRootRef}
    >
      {children}
      <AppRootPortal>
        {!!popout && <div vkuiClass={isDesktop ? 'PopoutRoot--absolute' : 'PopoutRoot__popout'}>{popout}</div>}
        {!!modal && <div vkuiClass="PopoutRoot__modal">{modal}</div>}
      </AppRootPortal>
    </div>
  );
};

PopoutRootComponent.displayName = 'PopoutRoot';

export const PopoutRoot = withAdaptivity(PopoutRootComponent, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});
