import React, { FC, HTMLAttributes, ReactNode, useEffect } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';
import { HasInsets } from '../../types';
import { ModalRootContextInterface } from '../ModalRoot/ModalRootContext';
import withModalRootContext from '../ModalRoot/withModalRootContext';
import usePlatform from '../../hooks/usePlatform';

export interface ModalPageProps extends HTMLAttributes<HTMLDivElement>, HasInsets {
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
  /**
   * @ignore
   */
  updateModalHeight?: ModalRootContextInterface['updateModalHeight'];
}

const ModalPage: FC<ModalPageProps> = (props) => {
  const platform = usePlatform();
  const {
    children,
    className,
    header,
    insets,
    updateModalHeight,
  } = props;

  useEffect(() => {
    updateModalHeight();
  }, [children]);

  return (
    <div className={classNames(getClassName('ModalPage', platform), className)}>
      <div className="ModalPage__in-wrap">
        <div className="ModalPage__in">
          <div className="ModalPage__header">
            {header}
          </div>

          <div className="ModalPage__content">
            <div className="ModalPage__content-in" style={isNumeric(insets.bottom) ? { paddingBottom: insets.bottom } : null}>
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
  insets: {},
};

export default withInsets(withModalRootContext(ModalPage));
