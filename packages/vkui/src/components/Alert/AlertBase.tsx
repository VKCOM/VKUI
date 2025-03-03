'use client';

import * as React from 'react';
import { Icon20Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { stopPropagation } from '../../lib/utils';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { IconButton } from '../IconButton/IconButton';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { type AlertActionInterface, type AlertProps } from './Alert';
import { AlertActions } from './AlertActions';
import { AlertDescription, AlertTitle } from './AlertTypography';
import styles from './Alert.module.css';

export interface AlertBaseProps
  extends Omit<AlertProps, 'usePortal' | 'className' | 'style' | 'getRootRef'> {
  closing?: boolean;
  setClosing?: (closing: boolean) => void;
}

export const AlertBase = ({
  actions,
  actionsLayout = 'horizontal',
  children,
  title,
  description,
  onClose,
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
  ...restProps
}: AlertBaseProps) => {
  const generatedId = React.useId();

  const titleId = `vkui-alert-${generatedId}-title`;
  const descriptionId = `vkui-alert-${generatedId}-description`;

  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const itemActionCallbackRef = React.useRef(noop);
  const [animationState, animationHandlers] = useCSSKeyframesAnimationController(
    closing ? 'exit' : 'enter',
    {
      onExited() {
        itemActionCallbackRef.current();
        itemActionCallbackRef.current = noop;
        onClose();
      },
    },
  );
  const isDismissButtonVisible = isDesktop && platform !== 'ios';
  const elementRef = React.useRef<HTMLDivElement>(null);

  const close = React.useCallback(() => {
    setClosing?.(true);
  }, [setClosing]);

  const onItemClick = React.useCallback(
    (item: AlertActionInterface) => {
      const { action: itemAction, autoCloseDisabled = false } = item;

      if (autoCloseDisabled) {
        itemAction && itemAction({ close });
      } else {
        if (itemAction) {
          itemActionCallbackRef.current = itemAction;
        }
        setClosing?.(true);
      }
    },
    [close, setClosing],
  );

  const handleClick = allowClickPropagation
    ? onClick
    : (event: React.MouseEvent<HTMLElement>) => {
        stopPropagation(event);
        onClick?.(event);
      };

  return (
    <FocusTrap
      {...animationHandlers}
      onClick={handleClick}
      getRootRef={elementRef}
      onClose={close}
      autoFocus={animationState === 'entered'}
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
      <div
        className={classNames(
          styles.content,
          dismissButtonMode === 'inside' && styles.contentWithButton,
        )}
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
            onClick={close}
            hoverMode="opacity"
            activeMode="opacity"
            data-testid={dismissButtonTestId}
          >
            <Icon20Cancel />
          </IconButton>
        )}
      </div>
      {isDismissButtonVisible && dismissButtonMode === 'outside' && (
        <ModalDismissButton onClick={close} data-testid={dismissButtonTestId}>
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
  );
};
