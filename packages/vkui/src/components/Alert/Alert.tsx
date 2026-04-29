'use client';

import * as React from 'react';
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

export type AlertCloseReason = 'click-overlay' | 'click-item' | 'escape-key' | 'click-close-button';

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
  action?: ((args?: { close?: VoidFunction }) => void) | undefined;
  /**
   * По умолчанию нажатие на опцию вызывает переданную в `Alert` функцию `onClose`, данное свойство
   * позволяет отключить такое поведение.
   */
  autoCloseDisabled?: boolean | undefined;
  /**
   * Режим отображения опции.
   */
  mode: AlertActionMode;
}

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'autoFocus'>,
    Pick<AppRootPortalProps, 'usePortal'>,
    HasRootRef<HTMLDivElement> {
  /**
   * Расположение действий - вертикально или горизонтально.
   */
  actionsLayout?: 'vertical' | 'horizontal' | undefined;
  /**
   * Тип выравнивания действий.
   */
  actionsAlign?: AlignType | undefined;
  /**
   * Список действий.
   */
  actions?: AlertActionInterface[] | undefined;
  /**
   * Функция для отрисовки действия.
   */
  renderAction?: ((props: AlertActionProps) => React.ReactNode) | undefined;
  /**
   * Заголовок модального окна.
   */
  title?: React.ReactNode | undefined;
  /**
   * Описание модального окна.
   */
  description?: React.ReactNode | undefined;
  /**
   * Обработчик закрытия модального окна.
   */
  onClose?: ((reason: AlertCloseReason) => void) | undefined;
  /**
   * Обработчик закрытия модального окна, срабатывающий после окончания анимации.
   */
  onClosed: VoidFunction;
  /**
   * Текст кнопки закрытия. Делает ее доступной для ассистивных технологий.
   */
  dismissLabel?: string | undefined;
  /**
   * Расположение кнопки закрытия (внутри и вне `popout'a`)
   * Доступно только в `compact`-режиме, не отображается на `iOS`.
   *
   * ⚠️ ВНИМАНИЕ: использование `none` скрывает крестик, это негативно сказывается на пользовательском опыте.
   */
  dismissButtonMode?: 'inside' | 'outside' | 'none' | undefined;
  /**
   * Передает атрибут `data-testid` для кнопки закрытия.
   */
  dismissButtonTestId?: string | undefined;
  /**
   * Передает атрибут `data-testid` для заголовка.
   */
  titleTestId?: string | undefined;
  /**
   * Передает атрибут `data-testid` для описания.
   */
  descriptionTestId?: string | undefined;
  /**
   * По умолчанию событие onClick не всплывает.
   */
  allowClickPropagation?: boolean | undefined;
  /**
   * Управление поведением возврата фокуса при закрытии всплывающего окна.
   * @default true
   */
  restoreFocus?: boolean | (() => boolean | HTMLElement) | undefined;
  /**
   * Управление поведением автофокуса при появлении всплывающего окна.
   * При прокидывании `true` фокус будет установлен на первый элемент.
   * При прокидывании `root` фокус будет установлен в корень.
   * @default true
   */
  autoFocus?: boolean | 'root' | undefined;
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
  onClose,
  ...restProps
}: AlertProps): React.ReactNode => {
  const [closing, setClosing] = React.useState(false);

  const close = React.useCallback(() => {
    onClose?.('click-overlay');
    setClosing(true);
  }, [onClose]);

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
      >
        <AlertBase {...restProps} onClose={onClose} closing={closing} setClosing={setClosing} />
      </PopoutWrapper>
    </AppRootPortal>
  );
};
