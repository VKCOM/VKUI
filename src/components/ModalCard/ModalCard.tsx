import React, { Component, HTMLAttributes, ReactNode } from 'react';
import Button from '../Button/Button';
import HeaderButton from '../HeaderButton/HeaderButton';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import { IOS } from '../../lib/platform';
import { isNumeric } from '../../lib/utils';
import withPlatform from '../../hoc/withPlatform';
import { HasPlatform, HasChildren, HasInsets } from '../../types/props';

export interface ModalCardActionInterface {
  title: string;
  action?(): void;
  type?: 'secondary' | 'primary';
}

export interface ModalCardProps extends HTMLAttributes<HTMLElement>, HasPlatform, HasChildren, HasInsets {
  /**
   * Иконка.
   *
   * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`
   */
  icon?: ReactNode;

  /**
   * Заголовок карточки
   */
  title?: string,

  /**
   * Текст, поясняющий заголовок
   */
  caption?: string,

  /**
   * Список кнопок-действий
   */
  actions?: ModalCardActionInterface[];

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
  static defaultProps = {
    actions: [],
    actionsLayout: 'horizontal',
    insets: {}
  };

  onButtonClick = (event) => {
    const target = event.currentTarget as HTMLButtonElement;
    const action = this.props.actions[target.dataset.index].action;
    event.persist();

    if (typeof action === 'function') {
      action(event);
    }
  };

  render () {
    const { insets, icon, title, caption, children, actions, actionsLayout, onClose, platform } = this.props;

    return (
      <div className={classNames(getClassName('ModalCard', platform))}>
        <div className="ModalCard__in">
          <div className="ModalCard__container" style={isNumeric(insets.bottom) ? { marginBottom: insets.bottom } : null}>
            {icon && <div className="ModalCard__icon">{icon}</div>}
            {title && <div className="ModalCard__title">{title}</div>}
            {caption && <div className="ModalCard__caption">{caption}</div>}

            {children}

            {actions.length > 0 &&
            <div className={classNames('ModalCard__actions', {
              'ModalCard__actions--v': actionsLayout === 'vertical'
            })}>
              {actions.map(({ title, type }, i) => (
                <Button
                  key={i}
                  data-index={i}
                  size="xl"
                  level={type}
                  onClick={this.onButtonClick}
                >
                  {title}
                </Button>
              ))}
            </div>
            }

            {platform === IOS &&
            <HeaderButton className="ModalCard__dismiss" onClick={onClose}>
              <Icon24Dismiss />
            </HeaderButton>}
          </div>
        </div>
      </div>
    );
  }
}

export default withPlatform(withInsets(ModalCard));
