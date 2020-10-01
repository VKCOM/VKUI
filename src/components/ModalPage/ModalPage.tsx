import React, { FC, HTMLAttributes, ReactNode, useContext, useEffect } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import { ViewHeight } from '../AdaptivityProvider/AdaptivityContext';

export interface ModalPageProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  id: string;
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header: ReactNode;
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
  const {
    children,
    className,
    header,
    viewWidth,
    viewHeight,
  } = props;

  const isHeightOver720 = viewHeight === ViewHeight.HEIGHT_720;
  const isMobile = viewWidth <= ViewWidth.MOBILE;

  const platform = usePlatform();
  const { updateModalHeight, handleModalClose } = useContext(ModalRootContext);

  useEffect(() => {
    updateModalHeight();
  }, [children]);

  return (
    <div className={classNames(getClassName('ModalPage', platform), className, {
      'ModalPage--desktop': isHeightOver720 && !isMobile,
    })}>
      <div className="ModalPage__in-wrap">
        <div className="ModalPage__in">
          {!isMobile && (
            <div className="ModalPage__close-button" onClick={handleModalClose}>
              <div className="ModalPage__close-icon">
                <Icon24Cancel width={20} />
              </div>
            </div>
          )}

          <div className="ModalPage__header">
            {header}
          </div>

          <div className="ModalPage__content">
            <div className="ModalPage__content-in">
              {children}
            </div>
          </div>
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
