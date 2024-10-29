'use client';

import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useKeyboard } from '../../hooks/useKeyboard';
import { usePlatform } from '../../hooks/usePlatform';
import type { HTMLAttributesWithRootRef } from '../../types';
import { AdaptivityContext } from '../AdaptivityProvider/AdaptivityContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { Spacing } from '../Spacing/Spacing';
import { Subhead } from '../Typography/Subhead/Subhead';
import { Title } from '../Typography/Title/Title';
import { ModalCardBaseCloseButton } from './ModalCardBaseCloseButton';
import styles from './ModalCardBase.module.css';

export interface ModalCardBaseProps
  extends Omit<HTMLAttributesWithRootRef<HTMLDivElement>, 'title'> {
  /**
   * Иконка.
   *
   * Может быть компонентом иконки, например, `<Icon56MoneyTransferOutline />`, или `<Avatar size={72} src="" />`
   */
  icon?: React.ReactNode;

  /**
   * Заголовок карточки
   */
  title?: React.ReactNode;
  /* Позволяет поменять тег используемый для заголовка */
  titleComponent?: React.ElementType;

  /**
   * Описание
   */
  description?: React.ReactNode;
  /* Позволяет поменять тег используемый для описания */
  descriptionComponent?: React.ElementType;

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
   * Текст кнопки закрытия. Делает ее доступной для ассистивных технологий
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
   *
   * Доступно только в `compact`-режиме
   *
   * На `iOS` в `regular`-режиме всегда включен `inside`
   *
   * ⚠️ ВНИМАНИЕ: использование `none` скрывает крестик, это негативно сказывается на пользовательском опыте
   */
  dismissButtonMode?: 'inside' | 'outside' | 'none';
  /**
   * Позволяет отключить возможность закрытия модальной страницы (смахивание, клавиша `ESC`, клик по подложке)
   *
   * ⚠️ ВНИМАНИЕ: использование этой опции негативно сказывается на пользовательском опыте
   */
  preventClose?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/ModalCardBase
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
  dismissLabel = 'Скрыть',
  style,
  size: sizeProp,
  modalDismissButtonTestId,
  dismissButtonMode = 'outside',
  preventClose,
  ...restProps
}: ModalCardBaseProps): React.ReactNode => {
  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const isSoftwareKeyboardOpened = useKeyboard().isOpened;

  const size = isDesktop ? sizeProp : undefined;
  const withSafeZone =
    !icon &&
    (dismissButtonMode === 'inside' ||
      (platform === 'ios' && !isDesktop && dismissButtonMode !== 'none'));

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
      style={{
        maxWidth: size,
        ...style,
      }}
    >
      <div
        className={classNames(
          styles.container,
          isSoftwareKeyboardOpened && styles.containerSoftwareKeyboardOpened,
        )}
      >
        {hasReactNode(icon) && <div className={styles.icon}>{icon}</div>}
        {hasReactNode(title) && (
          <Title level="2" weight="2" className={styles.title} Component={titleComponent}>
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

        {dismissButtonMode !== 'none' && (
          <ModalCardBaseCloseButton
            testId={modalDismissButtonTestId}
            onClose={onClose}
            mode={dismissButtonMode}
          >
            {dismissLabel}
          </ModalCardBaseCloseButton>
        )}
      </div>
    </RootComponent>
  );
};
