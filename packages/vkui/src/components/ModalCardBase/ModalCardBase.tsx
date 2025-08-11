'use client';

import * as React from 'react';
import { Icon20Cancel, Icon24Dismiss } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AdaptivityContext } from '../AdaptivityProvider/AdaptivityContext';
import { ModalOutsideButton } from '../ModalOutsideButton/ModalOutsideButton';
import { ModalOutsideButtons } from '../ModalOutsideButtons/ModalOutsideButtons';
import { RootComponent } from '../RootComponent/RootComponent';
import { Spacing } from '../Spacing/Spacing';
import { Tappable } from '../Tappable/Tappable';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Title } from '../Typography/Title/Title';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden';
import styles from './ModalCardBase.module.css';

export interface ModalCardBaseProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'title'> {
  /**
   * Иконка.
   *
   * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`.
   */
  icon?: React.ReactNode;

  /**
   * Заголовок карточки.
   */
  title?: React.ReactNode;
  /**
   * Позволяет поменять тег используемый для заголовка.
   */
  titleComponent?: React.ElementType;
  /**
   * Позволяет задать id для заголовка. Используется, чтобы связать модальное окно и title через aria-labelledby, тем самым задав модальному окну имя через title.
   */
  titleId?: string;

  /**
   * Описание.
   */
  description?: React.ReactNode;
  /**
   * Позволяет поменять тег используемый для описания.
   */
  descriptionComponent?: React.ElementType;

  /**
   * Кнопки-действия. Принимает [`Button`](https://vkui.io/components/button) с параметрами:
   *
   * - `size="l" mode="primary" stretched`
   * - `size="l" mode="secondary" stretched`.
   *
   * Для набора кнопок используйте [`ButtonGroup`](https://vkui.io/components/button-group) с параметрами:
   *
   * - `gap="s" mode="horizontal" stretched`
   * - `gap="m" mode="vertical" stretched`.
   */
  actions?: React.ReactNode;
  /**
   * Обработчик закрытия модального окна.
   */
  onClose?: VoidFunction;

  /**
   * @deprecated Будет удалён в **VKUI v9**
   * Используйте `modalDismissButtonLabel` вместо этого свойства.
   *
   * Текст кнопки закрытия. Делает ее доступной для ассистивных технологий.
   */
  dismissLabel?: string;

  /**
   * Задаёт контенту максимальную ширину для десктопной версии.
   */
  size?: number;

  /**
   * Текст кнопки закрытия. Делает ее доступной для ассистивных технологий.
   */
  modalDismissButtonLabel?: string;

  /**
   * Передает атрибут `data-testid` для кнопки закрытия.
   */
  modalDismissButtonTestId?: string;
  /**
   * Расположение кнопки закрытия (внутри и вне `popout'a`).
   *
   * Доступно только в `compact`-режиме.
   *
   * На `iOS` в `regular`-режиме всегда включен `inside`.
   *
   * ⚠️ ВНИМАНИЕ: использование `none` скрывает крестик, это негативно сказывается на пользовательском опыте.
   */
  modalDismissButtonMode?: 'inside' | 'outside' | 'none';

  /**
   * @deprecated Будет удалён в **VKUI v9**
   * Используйте `modalDismissButtonMode` вместо этого свойства.
   *
   * Расположение кнопки закрытия (внутри и вне `popout'a`).
   *
   * Доступно только в `compact`-режиме.
   *
   * На `iOS` в `regular`-режиме всегда включен `inside`.
   *
   * ⚠️ ВНИМАНИЕ: использование `none` скрывает крестик, это негативно сказывается на пользовательском опыте.
   */
  dismissButtonMode?: 'inside' | 'outside' | 'none';
  /**
   * Позволяет отключить возможность закрытия модальной страницы (смахивание, клавиша `ESC`, нажатие на подложку).
   *
   * ⚠️ ВНИМАНИЕ: использование этой опции негативно сказывается на пользовательском опыте.
   */
  preventClose?: boolean;
  /**
   * Управляющие элементы под кнопкой закрытия.
   *
   * Доступно только в `compact`-режиме. Рекомендуется размещать иконки размера 20, обернутые в ModalOutsideButton.
   *
   */
  outsideButtons?: React.ReactNode;
}

/**
 * @see https://vkui.io/components/modal-card-base
 */
export const ModalCardBase = ({
  icon,
  title,
  titleComponent = 'span',
  description,
  descriptionComponent = 'span',
  children,
  actions,
  onClose,
  dismissLabel = 'Закрыть',
  modalDismissButtonLabel: modalDismissButtonLabelProp,
  size: sizeProp,
  modalDismissButtonTestId,
  dismissButtonMode = 'outside',
  modalDismissButtonMode: modalDismissButtonModeProp,
  preventClose,
  outsideButtons,
  titleId,
  ...restProps
}: ModalCardBaseProps): React.ReactNode => {
  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  const modalDismissButtonLabel = modalDismissButtonLabelProp || dismissLabel;
  const modalDismissButtonMode = modalDismissButtonModeProp || dismissButtonMode;

  const size = isDesktop ? sizeProp : undefined;
  const withSafeZone =
    !icon &&
    (modalDismissButtonMode === 'inside' ||
      (platform === 'ios' && !isDesktop && modalDismissButtonMode !== 'none'));

  const hasTitle = hasReactNode(title);
  const hasDescription = hasReactNode(description);
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        'vkuiInternalModalCardBase',
        platform === 'ios' && styles.ios,
        isDesktop && styles.desktop,
        withSafeZone && styles.withSafeZone,
      )}
      baseStyle={{
        maxWidth: size,
      }}
    >
      <div className={styles.container}>
        {hasReactNode(icon) && <div className={styles.icon}>{icon}</div>}
        {hasReactNode(title) && (
          <Title
            id={titleId}
            level="2"
            weight="2"
            className={styles.title}
            Component={titleComponent}
          >
            {title}
          </Title>
        )}
        {hasTitle && hasDescription && <Spacing size={8} />}
        {hasDescription && (
          <AdaptivityContext.Provider value={{ sizeY: 'regular' }}>
            <Subhead className={styles.description} Component={descriptionComponent}>
              {description}
            </Subhead>
          </AdaptivityContext.Provider>
        )}

        {children}

        {hasReactNode(actions) && <div className={styles.actions}>{actions}</div>}

        {isDesktop && (modalDismissButtonMode === 'outside' || outsideButtons) && (
          <ModalOutsideButtons>
            {modalDismissButtonMode === 'outside' && (
              <ModalOutsideButton
                aria-label={modalDismissButtonLabel}
                data-testid={modalDismissButtonTestId}
                onClick={onClose}
              >
                <Icon20Cancel />
              </ModalOutsideButton>
            )}
            {outsideButtons}
          </ModalOutsideButtons>
        )}

        {(modalDismissButtonMode === 'inside' ||
          (platform === 'ios' && !isDesktop && modalDismissButtonMode !== 'none')) && (
          <Tappable
            className={styles.dismiss}
            onClick={onClose}
            hoverMode="opacity"
            activeMode="opacity"
            data-testid={modalDismissButtonTestId}
          >
            <VisuallyHidden>{modalDismissButtonLabel}</VisuallyHidden>
            {platform === 'ios' ? <Icon24Dismiss /> : <Icon20Cancel />}
          </Tappable>
        )}
      </div>
    </RootComponent>
  );
};
