'use client';

import * as React from 'react';
import { Icon20Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode, noop } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { useCSSKeyframesAnimationController } from '../../lib/animation';
import { stopPropagation } from '../../lib/utils';
import type {
  AlignType,
  AnchorHTMLAttributesOnly,
  HasDataAttribute,
  HasRootRef,
} from '../../types';
import type { AppRootPortalProps } from '../AppRoot/AppRootPortal';
import { ModalPopoutPortal } from '../AppRoot/ModalPopoutPortal';
import { useScrollLock } from '../AppRoot/ScrollContext';
import type { ButtonProps } from '../Button/Button';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { IconButton } from '../IconButton/IconButton';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import type { AlertActionProps } from './AlertAction';
import { AlertActions } from './AlertActions';
import { AlertDescription, AlertTitle } from './AlertTypography';
import styles from './Alert.module.css';

type AlertActionMode = 'cancel' | 'destructive' | 'default';

export interface AlertActionInterface
  extends Pick<ButtonProps, 'Component'>,
    AnchorHTMLAttributesOnly,
    HasDataAttribute {
  title: string;
  /**
   * Обработчик клика на опцию. Если свойство `autoCloseDisabled` включено,
   * то в аргументы `action` передаётся объект с функцией close,
   * вызвав которую можно закрыть `action` вручную.
   */
  action?: (args?: { close?: VoidFunction }) => void;
  /**
   * По умолчанию клик на опцию вызывает переданную в `Alert` функцию `onClose`, данное свойство
   * позволяет отключить такое поведение
   */
  autoCloseDisabled?: boolean;
  mode: AlertActionMode;
}

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'>,
    HasRootRef<HTMLDivElement> {
  actionsLayout?: 'vertical' | 'horizontal';
  actionsAlign?: AlignType;
  actions?: AlertActionInterface[];
  renderAction?: (props: AlertActionProps) => React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onClose: VoidFunction;
  /**
   * Текст кнопки закрытия. Делает ее доступной для ассистивных технологий
   */
  dismissLabel?: string;
  /**
   * Расположение кнопки закрытия (внутри и вне `popout'a`)
   * Доступно только в `compact`-режиме, не отображается на `iOS`
   */
  dismissButtonMode?: 'inside' | 'outside';
  /**
   * `data-testid` для кнопки закрытия
   */
  dismissButtonTestId?: string;
  usePortal?: AppRootPortalProps['usePortal'];
}

/**
 * @see https://vkcom.github.io/VKUI/#/Alert
 */
export const Alert = ({
  actions,
  actionsLayout = 'horizontal',
  children,
  className,
  style,
  title,
  description,
  onClose,
  dismissLabel = 'Закрыть предупреждение',
  renderAction,
  actionsAlign,
  dismissButtonMode = 'outside',
  dismissButtonTestId,
  getRootRef,
  usePortal,
  ...restProps
}: AlertProps): React.ReactNode => {
  const generatedId = React.useId();

  const titleId = `vkui-alert-${generatedId}-title`;
  const descriptionId = `vkui-alert-${generatedId}-description`;

  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();

  const [closing, setClosing] = React.useState(false);
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
    setClosing(true);
  }, []);

  const onItemClick = React.useCallback(
    (item: AlertActionInterface) => {
      const { action: itemAction, autoCloseDisabled = false } = item;

      if (autoCloseDisabled) {
        itemAction && itemAction({ close });
      } else {
        if (itemAction) {
          itemActionCallbackRef.current = itemAction;
        }
        setClosing(true);
      }
    },
    [close],
  );

  useScrollLock();

  return (
    <ModalPopoutPortal usePortal={usePortal}>
      <PopoutWrapper
        className={className}
        closing={closing}
        style={style}
        onClick={close}
        getRootRef={getRootRef}
      >
        <FocusTrap
          {...restProps}
          {...animationHandlers}
          getRootRef={elementRef}
          onClick={stopPropagation}
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
        >
          <div
            className={classNames(
              styles.content,
              dismissButtonMode === 'inside' && styles.contentWithButton,
            )}
          >
            {hasReactNode(title) && <AlertTitle id={titleId}>{title}</AlertTitle>}
            {hasReactNode(description) && (
              <AlertDescription id={descriptionId}>{description}</AlertDescription>
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
          <AlertActions
            actions={actions}
            actionsAlign={actionsAlign}
            actionsLayout={actionsLayout}
            renderAction={renderAction}
            onItemClick={onItemClick}
          />
          {isDismissButtonVisible && dismissButtonMode === 'outside' && (
            <ModalDismissButton onClick={close} data-testid={dismissButtonTestId}>
              {dismissLabel}
            </ModalDismissButton>
          )}
        </FocusTrap>
      </PopoutWrapper>
    </ModalPopoutPortal>
  );
};
