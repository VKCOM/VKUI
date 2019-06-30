import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import HeaderButton from '../HeaderButton/HeaderButton';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import { IS_PLATFORM_IOS } from '../../lib/platform';

const baseClassName = getClassName('ModalCard');

class ModalCard extends Component {
  static propTypes = {
    /**
     * Иконка.
     *
     * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`
     */
    icon: PropTypes.node,

    /**
     * Заголовок карточки
     */
    title: PropTypes.string,

    /**
     * Текст, поясняющий заголовок
     */
    caption: PropTypes.string,

    /**
     * Дополнительное содержимое, например, поле ввода
     */
    children: PropTypes.node,

    /**
     * Список кнопок-действий
     */
    actions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      action: PropTypes.func,
      type: PropTypes.oneOf(['secondary', 'primary'])
    })),

    /**
     * Тип отображения кнопок: вертикальный или горизонтальный
     */
    actionsLayout: PropTypes.oneOf(['vertical', 'horizontal']),

    /**
     * Будет вызван при закрытии карточки жестом
     */
    onClose: PropTypes.func.isRequired,

    /**
     * @ignore
     */
    insets: PropTypes.object
  };

  static defaultProps = {
    actions: [],
    actionsLayout: 'horizontal',
    insets: {}
  };

  onButtonClick = (event) => {
    const action = this.props.actions[event.currentTarget.dataset.index].action;
    event.persist();

    if (typeof action === 'function') {
      action(event);
    }
  };

  render () {
    const { insets, icon, title, caption, children, actions, actionsLayout, onClose } = this.props;

    return (
      <div className={classNames(baseClassName)}>
        <div className="ModalCard__in">
          <div className="ModalCard__container" style={{ marginBottom: !isNaN(insets.bottom) ? insets.bottom : null }}>
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

            {IS_PLATFORM_IOS &&
            <HeaderButton className="ModalCard__dismiss" onClick={onClose}>
              <Icon24Dismiss />
            </HeaderButton>}
          </div>
        </div>
      </div>
    );
  }
}

export default withInsets(ModalCard);
