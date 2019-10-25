import React, { FunctionComponent, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';
import { HasChildren, HasClassName, HasInsets } from '../../types/props';
import usePlatform from '../../hooks/usePlatform';

export interface ModalPageProps extends HasChildren, HasClassName, HasInsets {
  id: string;
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header: ReactNode;
  onClose: () => {};
  /**
   * Процент, на который изначально будет открыта модальная страница
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
}

const ModalPage: FunctionComponent<ModalPageProps> = (props: ModalPageProps) => {
  const platform = usePlatform();
  const { children, className, header, insets } = props;

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
  insets: {}
};

export default withInsets(ModalPage);
