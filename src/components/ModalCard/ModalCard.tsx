import React, { HTMLAttributes, ReactNode, FC } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { hasReactNode } from '../../lib/utils';
import withPlatform from '../../hoc/withPlatform';
import { HasChildren, HasPlatform } from '../../types';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import Subhead from '../Typography/Subhead/Subhead';
import Title from '../Typography/Title/Title';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import { ViewHeight } from '../AdaptivityProvider/AdaptivityContext';

export interface ModalCardProps extends HTMLAttributes<HTMLElement>, HasPlatform, HasChildren, AdaptivityProps {
  /**
   * Иконка.
   *
   * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`
   */
  icon?: ReactNode;

  /**
   * Заголовок карточки
   */
  header?: ReactNode;

  /**
   * Подзаголовок
   */
  subheader?: ReactNode;

  /**
   * Кнопки-действия.
   *
   * Рекомендуется использовать `<Button size="l" mode="primary" />` или `<Button size="l" mode="secondary" />`
   */
  actions?: ReactNode;

  /**
   * Тип отображения кнопок: вертикальный или горизонтальный
   */
  actionsLayout?: 'vertical' | 'horizontal';

  /**
   * Будет вызван при закрытии карточки жестом
   */
  onClose?(): void;
}

const ModalCard: FC<ModalCardProps> = (props) => {
  const {
    icon,
    header,
    subheader,
    children,
    actions,
    actionsLayout,
    onClose,
    platform,
    className,
    viewWidth,
    viewHeight,
  } = props;

  const isMobile = viewWidth <= ViewWidth.MOBILE;
  const isHeightOver720 = viewHeight === ViewHeight.HEIGHT_720;

  return (
    <div className={classNames(getClassName('ModalCard', platform), {
      'ModalCard--desktop': !isMobile && isHeightOver720,
    }, className)}>
      <div className="ModalCard__in">
        <div className="ModalCard__container">
          {!isMobile && (
            <div className="ModalCard__close-button" onClick={onClose}>
              <div className="ModalCard__close-icon">
                <Icon24Cancel width={20} />
              </div>
            </div>
          )}

          {hasReactNode(icon) && <div className="ModalCard__icon">{icon}</div>}
          {hasReactNode(header) && <Title level="2" weight="semibold" className="ModalCard__header">{header}</Title>}
          {hasReactNode(subheader) && <Subhead weight="regular" className="ModalCard__subheader">{subheader}</Subhead>}

          {children}

          {hasReactNode(actions) &&
          <div className={classNames('ModalCard__actions', {
            'ModalCard__actions--v': actionsLayout === 'vertical',
          })}>
            {actions}
          </div>
          }
        </div>
      </div>
    </div>
  );
};

ModalCard.defaultProps = {
  actionsLayout: 'horizontal',
};

export default withAdaptivity(withPlatform(ModalCard), {
  viewWidth: true,
  viewHeight: true,
});
