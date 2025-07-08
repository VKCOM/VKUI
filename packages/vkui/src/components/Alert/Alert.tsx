'use client';

import * as React from 'react';
import { type UseFocusTrapProps } from '../../hooks/useFocusTrap';
import { warnOnce } from '../../lib/warnOnce';
import type {
  AlignType,
  AnchorHTMLAttributesOnly,
  HasDataAttribute,
  HasRootRef,
} from '../../types';
import type { AppRootPortalProps } from '../AppRoot/AppRootPortal';
import { AppRootPortal } from '../AppRoot/AppRootPortal';
import { useScrollLock } from '../AppRoot/ScrollContext';
import type { ButtonProps } from '../Button/Button';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import type { AlertActionProps } from './AlertAction';
import { AlertBase } from './AlertBase';

type AlertActionMode = 'cancel' | 'destructive' | 'default';

export type { AlertActionProps };

export interface AlertActionInterface
  extends Pick<ButtonProps, 'Component'>,
    AnchorHTMLAttributesOnly,
    HasDataAttribute {
  /**
   * Текст опции.
   */
  title: string;
  /**
   * Обработчик нажатия на опцию. Если свойство `autoCloseDisabled` включено,
   * то в аргументы `action` передаётся объект с функцией close,
   * вызвав которую можно закрыть `action` вручную.
   */
  action?: (args?: { close?: VoidFunction }) => void;
  /**
   * По умолчанию нажатие на опцию вызывает переданную в `Alert` функцию `onClose`, данное свойство
   * позволяет отключить такое поведение.
   */
  autoCloseDisabled?: boolean;
  /**
   * Режим отображения опции.
   */
  mode: AlertActionMode;
}

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'autoFocus'>,
    Pick<UseFocusTrapProps, 'restoreFocus' | 'autoFocus'>,
    Pick<AppRootPortalProps, 'usePortal'>,
    HasRootRef<HTMLDivElement> {
  /**
   * Расположение действий - вертикально или горизонтально.
   */
  actionsLayout?: 'vertical' | 'horizontal';
  /**
   * Тип выравнивания действий.
   */
  actionsAlign?: AlignType;
  /**
   * Список действий.
   */
  actions?: AlertActionInterface[];
  /**
   * Функция для отрисовки действия.
   */
  renderAction?: (props: AlertActionProps) => React.ReactNode;
  /**
   * Заголовок модального окна.
   */
  title?: React.ReactNode;
  /**
   * Описание модального окна.
   */
  description?: React.ReactNode;
  /**
   * Обработчик закрытия модального окна.
   */
  onClose: VoidFunction;
  /**
   * Текст кнопки закрытия. Делает ее доступной для ассистивных технологий.
   */
  dismissLabel?: string;
  /**
   * Расположение кнопки закрытия (внутри и вне `popout'a`)
   * Доступно только в `compact`-режиме, не отображается на `iOS`.
   *
   * ⚠️ ВНИМАНИЕ: использование `none` скрывает крестик, это негативно сказывается на пользовательском опыте.
   */
  dismissButtonMode?: 'inside' | 'outside' | 'none';
  /**
   * Передает атрибут `data-testid` для кнопки закрытия.
   */
  dismissButtonTestId?: string;
  /**
   * Передает атрибут `data-testid` для заголовка.
   */
  titleTestId?: string;
  /**
   * Передает атрибут `data-testid` для описания.
   */
  descriptionTestId?: string;
  /**
   * По умолчанию событие onClick не всплывает.
   */
  allowClickPropagation?: boolean;
}

const warn = warnOnce('Alert');

/**
 * @see https://vkui.io/components/alert
 */
export const Alert = ({
  usePortal,
  style,
  className,
  getRootRef,
  ...restProps
}: AlertProps): React.ReactNode => {
  const [closing, setClosing] = React.useState(false);

  const close = React.useCallback(() => {
    setClosing(true);
  }, []);

  useScrollLock();

  if (
    process.env.NODE_ENV === 'development' &&
    !restProps.title &&
    !restProps['aria-label'] &&
    !restProps['aria-labelledby']
  ) {
    warn(
      'Если "title" не используется, то необходимо задать либо "aria-label", либо "aria-labelledby" (см. правило axe aria-dialog-name)',
    );
  }

  return (
    <AppRootPortal usePortal={usePortal}>
      <PopoutWrapper
        className={className}
        closing={closing}
        style={style}
        onClick={close}
        getRootRef={getRootRef}
        strategy="fixed"
      >
        <AlertBase {...restProps} closing={closing} setClosing={setClosing} />
      </PopoutWrapper>
    </AppRootPortal>
  );
};
