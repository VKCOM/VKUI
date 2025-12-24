'use client';

import * as React from 'react';
import { Icon20Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useGlobalEscKeyDown } from '../../hooks/useGlobalEscKeyDown';
import { usePlatform } from '../../hooks/usePlatform';
import { useStableCallback } from '../../hooks/useStableCallback';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { stopPropagation } from '../../lib/utils';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { IconButton } from '../IconButton/IconButton';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { RootComponent } from '../RootComponent/RootComponent';
import { type AlertActionInterface, type AlertCloseReason, type AlertProps } from './Alert';
import { AlertActions } from './AlertActions';
import { AlertDescription, AlertTitle } from './AlertTypography';
import styles from './Alert.module.css';

export interface AlertBaseProps
  extends Omit<AlertProps, 'usePortal' | 'className' | 'style' | 'getRootRef'> {
  /**
   * Флаг, определяющий состояние закрытия модального окна.
   * Когда установлен в true, запускает анимацию закрытия окна.
   */
  closing?: boolean;
  /**
   * Функция обратного вызова для управления состоянием закрытия модального окна.
   * Принимает булево значение, которое определяет, находится ли окно в процессе закрытия.
   */
  setClosing?: (closing: boolean) => void;
}

export const AlertBase = ({
  actions,
  actionsLayout = 'horizontal',
  children,
  title,
  description,
  onClose: onCloseProp,
  onClosed,
  dismissLabel = 'Закрыть предупреждение',
  renderAction,
  actionsAlign,
  dismissButtonMode = 'outside',
  dismissButtonTestId,
  onClick,
  allowClickPropagation = false,
  titleTestId,
  descriptionTestId,
  closing,
  setClosing,
  // FocusTrap props
  autoFocus,
  restoreFocus,
  ...restProps
}: AlertBaseProps) => {
  const generatedId = React.useId();

  const titleId = `vkui-alert-${generatedId}-title`;
  const descriptionId = `vkui-alert-${generatedId}-description`;
  const onClose = useStableCallback(onCloseProp || noop);

  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const itemActionCallbackRef = React.useRef(noop);
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    closing ? 'exit' : 'enter',
    {
      onExited() {
        itemActionCallbackRef.current();
        itemActionCallbackRef.current = noop;
        onClosed();
      },
    },
  );
  const isDismissButtonVisible = isDesktop && platform !== 'ios';
  const elementRef = React.useRef<HTMLDivElement>(null);

  const close = React.useCallback(
    (reason: AlertCloseReason) => {
      onClose?.(reason);
      setClosing?.(true);
    },
    [onClose, setClosing],
  );

  const onItemClick = React.useCallback(
    (item: AlertActionInterface) => {
      const { action: itemAction, autoCloseDisabled = false } = item;

      if (autoCloseDisabled) {
        itemAction && itemAction({ close: () => close('click-item') });
      } else {
        if (itemAction) {
          itemActionCallbackRef.current = itemAction;
        }
        close('click-item');
      }
    },
    [close],
  );

  const handleClick = allowClickPropagation
    ? onClick
    : (event: React.MouseEvent<HTMLElement>) => {
        stopPropagation(event);
        onClick?.(event);
      };

  const onEscape = React.useCallback(() => close('escape-key'), [close]);

  const onCloseButtonClick = React.useCallback(() => close('click-close-button'), [close]);

  useGlobalEscKeyDown(true, onEscape);

  return (
    <RootComponent
      {...animationHandlers}
      onClick={handleClick}
      getRootRef={elementRef}
      className={classNames(
        styles.host,
        platform === 'ios' && styles.ios,
        platform === 'vkcom' && styles.vkcom,
        closing ? styles.closing : styles.opening,
        isDesktop && styles.desktop,
      )}
      role="alertdialog"
      aria-modal
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      {...restProps}
    >
      <FocusTrap
        rootRef={elementRef}
        autoFocus={autoFocus === undefined ? animationState === 'entered' : autoFocus}
        restoreFocus={restoreFocus}
      >
        <div
          className={classNames(
            styles.content,
            dismissButtonMode === 'inside' && styles.contentWithButton,
          )}
          tabIndex={-1}
        >
          {hasReactNode(title) && (
            <AlertTitle data-testid={titleTestId} id={titleId}>
              {title}
            </AlertTitle>
          )}
          {hasReactNode(description) && (
            <AlertDescription data-testid={descriptionTestId} id={descriptionId}>
              {description}
            </AlertDescription>
          )}
          {children}
          {isDismissButtonVisible && dismissButtonMode === 'inside' && (
            <IconButton
              label={dismissLabel}
              className={classNames(styles.dismiss, 'vkuiInternalAlert__dismiss')}
              onClick={onCloseButtonClick}
              hoverMode="opacity"
              activeMode="opacity"
              data-testid={dismissButtonTestId}
            >
              <Icon20Cancel />
            </IconButton>
          )}
        </div>
        {isDismissButtonVisible && dismissButtonMode === 'outside' && (
          <ModalDismissButton onClick={onCloseButtonClick} data-testid={dismissButtonTestId}>
            {dismissLabel}
          </ModalDismissButton>
        )}
        <AlertActions
          actions={actions}
          actionsAlign={actionsAlign}
          actionsLayout={actionsLayout}
          renderAction={renderAction}
          onItemClick={onItemClick}
        />
      </FocusTrap>
    </RootComponent>
  );
};
