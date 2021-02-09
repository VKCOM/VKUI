import React, { FC, HTMLAttributes, ReactNode, useContext, useEffect } from 'react';
import { getClassName } from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { ModalRootContext } from '../ModalRoot/ModalRootContext';
import usePlatform from '../../hooks/usePlatform';
import withAdaptivity, { AdaptivityProps, ViewHeight, ViewWidth } from '../../hoc/withAdaptivity';
import ModalDismissButton from '../ModalDismissButton/ModalDismissButton';

export interface ModalPageProps extends HTMLAttributes<HTMLDivElement>, AdaptivityProps {
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header?: ReactNode;
  onClose?: VoidFunction;
  /**
   * Процент, на который изначально будет открыта модальная страница. При `settlingHeight={100}` модальная страница раскрывается на всю высоту.
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
}

const ModalPage: FC<ModalPageProps> = (props: ModalPageProps) => {
  const platform = usePlatform();
  const { updateModalHeight } = useContext(ModalRootContext);
  const {
    children,
    className,
    header,
    viewWidth,
    viewHeight,
    sizeX,
    hasMouse,
    onClose,
    settlingHeight,
    dynamicContentHeight,
    ...restProps
  } = props;

  useEffect(() => {
    updateModalHeight();
  }, [children]);

  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);
  const canShowCloseBtn = viewWidth >= ViewWidth.SMALL_TABLET;

  const modalContext = useContext(ModalRootContext);

  return (
    <div
      {...restProps}
      className={classNames(getClassName('ModalPage', platform), className, `ModalPage--sizeX-${sizeX}`, {
        'ModalPage--desktop': isDesktop,
      })}
    >
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
