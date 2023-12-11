import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useKeyboard } from '../../hooks/useKeyboard';
import { usePlatform } from '../../hooks/usePlatform';
import { HTMLAttributesWithRootRef } from '../../types';
import { AdaptivityContext } from '../AdaptivityProvider/AdaptivityContext';
import { RootComponent } from '../RootComponent/RootComponent';
import { Spacing } from '../Spacing/Spacing';
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
  /* Позволяет поменять тег используемый для заголовка */
  headerComponent?: React.ElementType;

  /**
   * Подзаголовок
   */
  subheader?: React.ReactNode;
  /* Позволяет поменять тег используемый для подзаголовка */
  subheaderComponent?: React.ElementType;

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
  headerComponent = 'span',
  subheader,
  subheaderComponent = 'span',
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
    !icon && (dismissButtonMode === 'inside' || (platform === 'ios' && !isDesktop));

  const hasHeader = hasReactNode(header);
  const hasSubheader = hasReactNode(subheader);
  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        'vkuiInternalModalCardBase',
        platform === 'ios' && styles['ModalCardBase--ios'],
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
            className={styles['ModalCardBase__header']}
            Component={headerComponent}
          >
            {header}
          </Title>
        )}
        {hasHeader && hasSubheader && <Spacing size={8} />}
        {hasSubheader && (
          <AdaptivityContext.Provider value={{ sizeY: 'regular' }}>
            <Subhead className={styles['ModalCardBase__subheader']} Component={subheaderComponent}>
              {subheader}
            </Subhead>
          </AdaptivityContext.Provider>
        )}

        {children}

        {hasReactNode(actions) && <div className={styles['ModalCardBase__actions']}>{actions}</div>}

        <ModalCardBaseCloseButton
          testId={modalDismissButtonTestId}
          onClose={onClose}
          mode={dismissButtonMode}
        >
          {dismissLabel}
        </ModalCardBaseCloseButton>
      </div>
    </RootComponent>
  );
};
