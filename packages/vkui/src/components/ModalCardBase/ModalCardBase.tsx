import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useKeyboard } from '../../hooks/useKeyboard';
import { usePlatform } from '../../hooks/usePlatform';
import { SizeType } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { HTMLAttributesWithRootRef } from '../../types';
import { AdaptivityContext } from '../AdaptivityProvider/AdaptivityContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Title } from '../Typography/Title/Title';
import { ModalCardBaseCloseButton } from './ModalCardBaseCloseButton';
import styles from './ModalCardBase.module.css';

export interface ModalCardBaseProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
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

  /**
   * `data-testid` для кнопки закрытия
   */
  modalDismissButtonTestId?: string;
  /**
   * Расположение кнопки закрытия (внутри и вне `popout'a`)
   * Доступно только в `compact`-режиме
   * На `iOS` в `regular`-режиме всегда включен `inside`
   */
  dismissButtonMode?: 'inside' | 'outside';
}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalCardBase
 */
export const ModalCardBase = ({
  icon,
  header,
  subheader,
  children,
  actions,
  onClose,
  dismissLabel = 'Скрыть',
  style,
  size: sizeProp,
  modalDismissButtonTestId,
  dismissButtonMode = 'outside',
  ...restProps
}: ModalCardBaseProps) => {
  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const isSoftwareKeyboardOpened = useKeyboard().isOpened;

  const size = isDesktop ? sizeProp : undefined;
  const withSafeZone =
    !icon && (dismissButtonMode === 'inside' || (platform === Platform.IOS && !isDesktop));

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        'vkuiInternalModalCardBase',
        platform === Platform.IOS && styles['ModalCardBase--ios'],
        isDesktop && styles['ModalCardBase--desktop'],
        withSafeZone && styles['ModalCardBase--withSafeZone'],
      )}
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
          <Title
            level="2"
            weight="2"
            className={classNames(
              styles['ModalCardBase__header'],
              'vkuiInternalModalCardBase__header',
            )}
          >
            {header}
          </Title>
        )}
        {hasReactNode(subheader) && (
          <AdaptivityContext.Provider value={{ sizeY: SizeType.REGULAR }}>
            <Subhead
              className={classNames(
                styles['ModalCardBase__subheader'],
                'vkuiInternalModalCardBase__subheader',
              )}
            >
              {subheader}
            </Subhead>
          </AdaptivityContext.Provider>
        )}

        {children}

        {hasReactNode(actions) && <div className={styles['ModalCardBase__actions']}>{actions}</div>}

        <ModalCardBaseCloseButton
          aria-label={dismissLabel}
          testId={modalDismissButtonTestId}
          onClose={onClose}
          mode={dismissButtonMode}
        />
      </div>
    </RootComponent>
  );
};
