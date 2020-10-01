import React, { Component, HTMLAttributes, ReactNode } from 'react';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import { IOS } from '../../lib/platform';
import withPlatform from '../../hoc/withPlatform';
import { HasChildren, HasPlatform } from '../../types';
import withAdaptivity, { AdaptivityProps, ViewWidth } from '../../hoc/withAdaptivity';
import { hasReactNode } from '../../lib/utils';

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
  header?: string;

  /**
   * Текст, поясняющий заголовок
   */
  caption?: string;

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

class ModalCard extends Component<ModalCardProps> {
  static defaultProps: ModalCardProps = {
    actionsLayout: 'horizontal',
  };

  render() {
    const {
      icon,
      header,
      caption,
      children,
      actions,
      actionsLayout,
      onClose,
      viewWidth,
      platform,
      className,
    } = this.props;

    const isDesktop = viewWidth >= ViewWidth.TABLET;
    const canShowCloseBtn = platform === IOS || isDesktop;

    return (
      <div className={classNames(getClassName('ModalCard', platform), {
        'ModalCard--desktop': isDesktop,
      }, className)}>
        <div className="ModalCard__in">
          <div className="ModalCard__container">
            {icon && <div className="ModalCard__icon">{icon}</div>}
            {header && <div className="ModalCard__title">{header}</div>}
            {caption && <div className="ModalCard__caption">{caption}</div>}

            {children}

            {hasReactNode(actions) &&
            <div className={classNames('ModalCard__actions', {
              'ModalCard__actions--v': actionsLayout === 'vertical',
            })}>
              {actions}
            </div>
            }

            {canShowCloseBtn &&
              <PanelHeaderButton className="ModalCard__dismiss" onClick={onClose}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withAdaptivity(withPlatform(ModalCard), {
  viewWidth: true,
});
