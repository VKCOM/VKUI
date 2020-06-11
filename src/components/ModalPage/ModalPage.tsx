import React, { Component, HTMLAttributes, ReactNode } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasPlatform } from '../../types';
import { ModalRootContextInterface } from '../ModalRoot/ModalRootContext';
import withModalRootContext from '../ModalRoot/withModalRootContext';
import withPlatform from '../../hoc/withPlatform';
import withAdaptivity, { AdaptivityProps, SizeType } from '../../hoc/withAdaptivity';

export interface ModalPageProps extends HTMLAttributes<HTMLDivElement>, HasPlatform, AdaptivityProps {
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

class ModalPage extends Component<ModalPageProps> {
  componentDidUpdate(prevProps: ModalPageProps) {
    if (prevProps.children !== this.props.children) {
      this.props.updateModalHeight();
    }
  }

  static defaultProps: Partial<ModalPageProps> = {
    settlingHeight: 75,
  };

  render() {
    const { children, className, header, platform, sizeX } = this.props;
    const isDesktop = sizeX === SizeType.REGULAR;

    return (
      <div className={classNames(getClassName('ModalPage', platform), className, {
        'ModalPage--desktop': isDesktop,
      })}>
        <div className="ModalPage__in-wrap">
          <div className="ModalPage__in">
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
  }
}

export default withAdaptivity(withPlatform(withModalRootContext(ModalPage)), {
  sizeX: true,
});
