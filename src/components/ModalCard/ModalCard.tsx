import { HTMLAttributes, ReactNode, FC, useContext } from 'react';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import { getClassName } from '../../helpers/getClassName';
import { classNames } from '../../lib/classNames';
import { Icon24Dismiss } from '@vkontakte/icons';
import { IOS } from '../../lib/platform';
import { hasReactNode } from '../../lib/utils';
import { withPlatform } from '../../hoc/withPlatform';
import { HasPlatform } from '../../types';
import { withAdaptivity, AdaptivityProps, ViewHeight, ViewWidth } from '../../hoc/withAdaptivity';
import Subhead from '../Typography/Subhead/Subhead';
import Title from '../Typography/Title/Title';
import ModalDismissButton from '../ModalDismissButton/ModalDismissButton';
import ModalRootContext, { useModalRegistry } from '../ModalRoot/ModalRootContext';
import { ModalType } from '../ModalRoot/types';
import { getNavId, NavIdProps } from '../../lib/getNavId';

export interface ModalCardProps extends HTMLAttributes<HTMLElement>, HasPlatform, AdaptivityProps, NavIdProps {
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
  onClose?: VoidFunction;
}

const ModalCard: FC<ModalCardProps> = (props: ModalCardProps) => {
  const {
    icon,
    header,
    subheader,
    children,
    actions,
    actionsLayout,
    onClose,
    platform,
    viewWidth,
    viewHeight,
    hasMouse,
    nav,
    ...restProps
  } = props;

  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);
  const canShowCloseBtn = viewWidth >= ViewWidth.SMALL_TABLET;
  const canShowCloseBtnIos = platform === IOS && !canShowCloseBtn;

  const modalContext = useContext(ModalRootContext);
  const { refs } = useModalRegistry(getNavId(props), ModalType.CARD);

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('ModalCard', platform), {
        'ModalCard--desktop': isDesktop,
      })}
    >
      <div vkuiClass="ModalCard__in" ref={refs.innerElement}>
        <div vkuiClass="ModalCard__container">
          {hasReactNode(icon) && <div vkuiClass="ModalCard__icon">{icon}</div>}
          {hasReactNode(header) && <Title level="2" weight="semibold" vkuiClass="ModalCard__header">{header}</Title>}
          {hasReactNode(subheader) && <Subhead weight="regular" vkuiClass="ModalCard__subheader">{subheader}</Subhead>}

          {children}

          {hasReactNode(actions) &&
          <div vkuiClass={classNames('ModalCard__actions', {
            'ModalCard__actions--v': actionsLayout === 'vertical',
          })}>
            {actions}
          </div>
          }

          {canShowCloseBtn && <ModalDismissButton onClick={onClose || modalContext.onClose} />}
          {canShowCloseBtnIos &&
          <PanelHeaderButton vkuiClass="ModalCard__dismiss" onClick={onClose || modalContext.onClose}>
            <Icon24Dismiss />
          </PanelHeaderButton>
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
  hasMouse: true,
});
