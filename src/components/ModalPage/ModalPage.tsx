import * as React from 'react';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { ModalRootContext, useModalRegistry } from '../ModalRoot/ModalRootContext';
import { usePlatform } from '../../hooks/usePlatform';
import { withAdaptivity, AdaptivityProps, ViewHeight, ViewWidth } from '../../hoc/withAdaptivity';
import ModalDismissButton from '../ModalDismissButton/ModalDismissButton';
import { Ref } from '../../types';
import { multiRef } from '../../lib/utils';
import { ModalType } from '../ModalRoot/types';
import { getNavId, NavIdProps } from '../../lib/getNavId';
import { warnOnce } from '../../lib/warnOnce';
import './ModalPage.css';

export interface ModalPageProps extends React.HTMLAttributes<HTMLDivElement>, AdaptivityProps, NavIdProps {
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header?: React.ReactNode;
  onClose?: VoidFunction;
  /**
   * Процент, на который изначально будет открыта модальная страница. При `settlingHeight={100}` модальная страница раскрывается на всю высоту.
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
  getModalContentRef?: Ref<HTMLDivElement>;
}

const warn = warnOnce('ModalPage');
const ModalPage: React.FC<ModalPageProps> = (props: ModalPageProps) => {
  const platform = usePlatform();
  const { updateModalHeight } = React.useContext(ModalRootContext);
  const {
    children,
    header,
    viewWidth,
    viewHeight,
    sizeX,
    hasMouse,
    onClose,
    settlingHeight,
    dynamicContentHeight,
    getModalContentRef,
    nav,
    ...restProps
  } = props;

  React.useEffect(() => {
    updateModalHeight();
  }, [children]);

  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);
  const canShowCloseBtn = viewWidth >= ViewWidth.SMALL_TABLET;

  const modalContext = React.useContext(ModalRootContext);
  const { refs } = useModalRegistry(getNavId(props, warn), ModalType.PAGE);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('ModalPage', platform), `ModalPage--sizeX-${sizeX}`, {
        'ModalPage--desktop': isDesktop,
      })}
    >
      <div vkuiClass="ModalPage__in-wrap" ref={refs.innerElement}>
        <div vkuiClass="ModalPage__in">
          <div vkuiClass="ModalPage__header" ref={refs.headerElement}>
            {header}
          </div>

          <div vkuiClass="ModalPage__content-wrap">
            <div vkuiClass="ModalPage__content" ref={multiRef<HTMLDivElement>(refs.contentElement, getModalContentRef)}>
              <div vkuiClass="ModalPage__content-in">
                {children}
              </div>
            </div>
          </div>
          {canShowCloseBtn && <ModalDismissButton onClick={onClose || modalContext.onClose} />}
        </div>
      </div>
    </div>
  );
};

ModalPage.defaultProps = {
  settlingHeight: 75,
};

export default withAdaptivity(ModalPage, {
  viewWidth: true,
  viewHeight: true,
  sizeX: true,
  hasMouse: true,
});
