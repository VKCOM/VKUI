import React, { FC, HTMLAttributes, ReactNode, useContext, useEffect } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { AdaptivityProps, ViewHeight, ViewWidth } from '../../hoc/withAdaptivity';
import ModalDismissButton from '../ModalDismissButton/ModalDismissButton';

export interface ModalPageProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  id: string;
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header: ReactNode;
  onClose?(): void;
  /**
   * Процент, на который изначально будет открыта модальная страница
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
}

const ModalPage: FC<ModalPageProps> = (props) => {
  const platform = usePlatform();
  const { updateModalHeight } = useContext(ModalRootContext);
  const {
    children,
    className,
    header,
    viewWidth,
    viewHeight,
    onClose,
  } = props;

  useEffect(() => {
    updateModalHeight();
  }, [children]);

  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && viewHeight >= ViewHeight.MEDIUM;
  const canShowCloseBtn = viewWidth >= ViewWidth.SMALL_TABLET;

  return (
    <div className={classNames(getClassName('ModalPage', platform), className, {
      'ModalPage--desktop': isDesktop,
    })}>
      <div className="ModalPage__in-wrap">
        <div className="ModalPage__in">
          <div className="ModalPage__header">
            {header}
          </div>

          <div className="ModalPage__content-wrap">
            <div className="ModalPage__content">
              <div className="ModalPage__content-in">
                {children}
              </div>
            </div>
          </div>
          {canShowCloseBtn && <ModalDismissButton onClick={onClose} />}
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
});
