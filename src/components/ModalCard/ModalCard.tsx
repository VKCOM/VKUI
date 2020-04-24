import React, { Component, HTMLAttributes, MouseEventHandler, ReactNode, MouseEvent } from 'react';
import Button from '../Button/Button';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import { IOS } from '../../lib/platform';
import { isNumeric } from '../../lib/utils';
import withPlatform from '../../hoc/withPlatform';
import { HasChildren, HasInsets, HasPlatform } from '../../types';
import withAdaptivity, { AdaptivityProps, ViewMode } from '../../hoc/withAdaptivity';

export interface ModalCardActionInterface {
  title: string;
  action?(event: MouseEvent): void;
  mode?: 'secondary' | 'primary';
}

export interface ModalCardProps extends HTMLAttributes<HTMLElement>, HasPlatform, HasChildren, HasInsets, AdaptivityProps {
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
  static defaultProps: ModalCardProps = {
    actions: [],
    actionsLayout: 'horizontal',
    insets: {},
  };

  onButtonClick: MouseEventHandler = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLButtonElement;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const action = this.props.actions[Number(target.dataset.index)].action;
    event.persist();

    if (typeof action === 'function') {
      action(event);
    }
  };

  render() {
    const {
      insets,
      icon,
      header,
      caption,
      children,
      actions,
      actionsLayout,
      onClose,
      viewMode,
      platform,
    } = this.props;

    const isDesktop = viewMode >= ViewMode.TABLET;
    const canShowCloseBtn = platform === IOS || isDesktop;

    return (
      <div className={classNames(getClassName('ModalCard', platform), {
        'ModalCard--desktop': isDesktop,
      })}>
        <div className="ModalCard__in">
          <div className="ModalCard__container" style={isNumeric(insets.bottom) ? { marginBottom: insets.bottom } : null}>
            {icon && <div className="ModalCard__icon">{icon}</div>}
            {header && <div className="ModalCard__title">{header}</div>}
            {caption && <div className="ModalCard__caption">{caption}</div>}

            {children}

            {actions.length > 0 &&
            <div className={classNames('ModalCard__actions', {
              'ModalCard__actions--v': actionsLayout === 'vertical',
            })}>
              {actions.map(({ title, mode }: ModalCardActionInterface, i: number) => {
                return (
                  <Button
                    key={i}
                    data-index={i}
                    size="xl"
                    mode={mode}
                    onClick={this.onButtonClick}
                  >
                    {title}
                  </Button>
                );
              })}
            </div>
            }

            {canShowCloseBtn &&
              <PanelHeaderButton className="ModalCard__dismiss" onClick={onClose}>
                {isDesktop ? <Icon24Cancel /> : <Icon24Dismiss />}
              </PanelHeaderButton>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withAdaptivity(withPlatform(withInsets(ModalCard)), {
  viewMode: true,
});
