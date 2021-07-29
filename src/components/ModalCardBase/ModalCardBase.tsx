import { FC, HTMLAttributes, ReactNode } from 'react';
import { hasReactNode } from '../../lib/utils';
import Title from '../Typography/Title/Title';
import Subhead from '../Typography/Subhead/Subhead';
import { classNames } from '../../lib/classNames';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { AdaptivityProps, ViewHeight, ViewWidth, withAdaptivity } from '../../hoc/withAdaptivity';
import { HasRootRef } from '../../types';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { IOS } from '../../lib/platform';
import ModalDismissButton from '../ModalDismissButton/ModalDismissButton';
import { Icon24Dismiss } from '@vkontakte/icons';
import { useKeyboard } from '../../hooks/useKeyboard';

export interface ModalCardBaseProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
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
  onClose?: VoidFunction;
}

export const ModalCardBase: FC<ModalCardBaseProps> = withAdaptivity(({
  getRootRef,
  icon,
  header,
  subheader,
  children,
  actions,
  actionsLayout,
  viewWidth,
  hasMouse,
  viewHeight,
  onClose,
  ...restProps
}: ModalCardBaseProps & AdaptivityProps) => {
  const platform = usePlatform();
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET && (hasMouse || viewHeight >= ViewHeight.MEDIUM);
  const isSoftwareKeyboardOpened = useKeyboard().isOpened;

  const canShowCloseBtn = viewWidth >= ViewWidth.SMALL_TABLET;
  const canShowCloseBtnIos = platform === IOS && !canShowCloseBtn;

  return (
    <div
      {...restProps}
      vkuiClass={classNames(getClassName('ModalCardBase', platform), {
        'ModalCardBase--desktop': isDesktop,
      })}
      ref={getRootRef}
    >
      <div vkuiClass={classNames('ModalCardBase__container', {
        'ModalCardBase__container--softwareKeyboardOpened': isSoftwareKeyboardOpened,
      })}>
        {hasReactNode(icon) && <div vkuiClass="ModalCardBase__icon">{icon}</div>}
        {hasReactNode(header) && <Title level="2" weight="semibold" vkuiClass="ModalCardBase__header">{header}</Title>}
        {hasReactNode(subheader) && <Subhead weight="regular" vkuiClass="ModalCardBase__subheader">{subheader}</Subhead>}

        {children}

        {hasReactNode(actions) &&
          <div vkuiClass={classNames('ModalCardBase__actions', {
            'ModalCardBase__actions--v': actionsLayout === 'vertical',
          })}>
            {actions}
          </div>
        }

        {canShowCloseBtn && <ModalDismissButton onClick={onClose} />}
        {canShowCloseBtnIos &&
          <PanelHeaderButton vkuiClass="ModalCard__dismiss" onClick={onClose}>
            <Icon24Dismiss />
          </PanelHeaderButton>
        }
      </div>
    </div>
  );
}, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true,
});

