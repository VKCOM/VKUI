import * as React from 'react';
import { Title } from '../Typography/Title/Title';
import { Subhead } from '../Typography/Subhead/Subhead';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { getPlatformClassName } from '../../helpers/getPlatformClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';
import { PanelHeaderButton } from '../PanelHeaderButton/PanelHeaderButton';
import { Platform } from '../../lib/platform';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { Icon24Dismiss } from '@vkontakte/icons';
import { useKeyboard } from '../../hooks/useKeyboard';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import styles from './ModalCardBase.module.css';

export interface ModalCardBaseProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HasRootRef<HTMLDivElement> {
  /**
   * Иконка.
   *
   * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`
   */
  icon?: React.ReactNode;

  /**
   * Заголовок карточки
   */
  header?: React.ReactNode;

  /**
   * Подзаголовок
   */
  subheader?: React.ReactNode;

  /**
   * Кнопки-действия. Принимает [`Button`](https://vkcom.github.io/VKUI/#/Button) с параметрами:
   *
   * - `size="l" mode="primary" stretched`
   * - `size="l" mode="secondary" stretched`
   *
   * Для набора кнопок используйте [`ButtonGroup`](https://vkcom.github.io/VKUI/#/ButtonGroup) с параметрами:
   *
   * - `gap="s" mode="horizontal" stretched`
   * - `gap="m" mode="vertical" stretched`
   */
  actions?: React.ReactNode;

  onClose?: VoidFunction;

  /**
   * `aria-label` для кнопки закрытия. Необходим, чтобы кнопка была доступной.
   */
  dismissLabel?: string;

  /**
   * Задаёт контенту максимальную ширину для десктопной версии.
   */
  size?: number;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalCardBase
 */
export const ModalCardBase = ({
  getRootRef,
  icon,
  header,
  subheader,
  children,
  actions,
  onClose,
  dismissLabel = 'Скрыть',
  className,
  style,
  size: sizeProp,
  ...restProps
}: ModalCardBaseProps) => {
  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const isSoftwareKeyboardOpened = useKeyboard().isOpened;

  const canShowCloseButtonIOS = platform === Platform.IOS && !isDesktop;

  const size = isDesktop ? sizeProp : undefined;

  return (
    <div
      {...restProps}
      className={classNames(
        styles['ModalCardBase'],
        getPlatformClassName(styles['ModalCardBase'], platform),
        isDesktop && styles['ModalCardBase--desktop'],
        className,
      )}
      ref={getRootRef}
      style={{
        ...style,
        maxWidth: size,
      }}
    >
      <div
        className={classNames(
          styles['ModalCardBase__container'],
          isSoftwareKeyboardOpened && styles['ModalCardBase__container--softwareKeyboardOpened'],
        )}
      >
        {hasReactNode(icon) && <div className={styles['ModalCardBase__icon']}>{icon}</div>}
        {hasReactNode(header) && (
          <Title level="2" weight="2" className={styles['ModalCardBase__header']}>
            {header}
          </Title>
        )}
        {hasReactNode(subheader) && (
          <Subhead className={styles['ModalCardBase__subheader']}>{subheader}</Subhead>
        )}

        {children}

        {hasReactNode(actions) && <div className={styles['ModalCardBase__actions']}>{actions}</div>}

        {isDesktop && <ModalDismissButton onClick={onClose} />}
        {canShowCloseButtonIOS && (
          <PanelHeaderButton
            aria-label={dismissLabel}
            className={styles['ModalCardBase__dismiss']}
            onClick={onClose}
          >
            <Icon24Dismiss />
          </PanelHeaderButton>
        )}
      </div>
    </div>
  );
};
