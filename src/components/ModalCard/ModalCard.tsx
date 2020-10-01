import React, { HTMLAttributes, MouseEventHandler, ReactNode, MouseEvent, FC } from 'react';
import Button from '../Button/Button';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import withInsets from '../../hoc/withInsets';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import { IOS } from '../../lib/platform';
import { hasReactNode, isNumeric } from '../../lib/utils';
import withPlatform from '../../hoc/withPlatform';
import { HasChildren, HasInsets, HasPlatform } from '../../types';
import Subhead from '../Typography/Subhead/Subhead';
import Title from '../Typography/Title/Title';

export interface ModalCardActionInterface {
  title: string;
  action?(event: MouseEvent): void;
  mode?: 'secondary' | 'primary';
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
  header?: ReactNode;

  /**
   * Подзаголовок
   */
  caption?: ReactNode;

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

const ModalCard: FC<ModalCardProps> = (props) => {
  const {
    insets,
    icon,
    header,
    caption,
    children,
    actions,
    actionsLayout,
    onClose,
    platform,
    className,
  } = props;

  const onButtonClick: MouseEventHandler = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLButtonElement;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const action = actions[Number(target.dataset.index)].action;
    event.persist();

    if (typeof action === 'function') {
      action(event);
    }
  };

  const canShowCloseBtn = platform === IOS;

  return (
    <div className={classNames(getClassName('ModalCard', platform), className)}>
      <div className="ModalCard__in">
        <div className="ModalCard__container" style={isNumeric(insets.bottom) ? { marginBottom: insets.bottom } : null}>
          {hasReactNode(icon) && <div className="ModalCard__icon">{icon}</div>}
          {hasReactNode(header) && <Title level="2" weight="semibold" className="ModalCard__header">{header}</Title>}
          {hasReactNode(caption) && <Subhead weight="regular" className="ModalCard__subheader">{caption}</Subhead>}

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
                  onClick={onButtonClick}
                >
                  {title}
                </Button>
              );
            })}
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
};

ModalCard.defaultProps = {
  actions: [],
  actionsLayout: 'horizontal',
  insets: {},
};

export default withPlatform(withInsets(ModalCard));
