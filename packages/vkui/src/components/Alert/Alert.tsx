import * as React from 'react';
import { Icon20Cancel } from '@vkontakte/icons';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { usePlatform } from '../../hooks/usePlatform';
import { useWaitTransitionFinish } from '../../hooks/useWaitTransitionFinish';
import { stopPropagation } from '../../lib/utils';
import { AlignType, AnchorHTMLAttributesOnly, HasDataAttribute, HasRootRef } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { ButtonProps } from '../Button/Button';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { IconButton } from '../IconButton/IconButton';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { AlertActionProps } from './AlertAction';
import { AlertActions } from './AlertActions';
import { AlertHeader, AlertText } from './AlertTypography';
import styles from './Alert.module.css';

type AlertActionMode = 'cancel' | 'destructive' | 'default';

export interface AlertActionInterface
  extends Pick<ButtonProps, 'Component'>,
    AnchorHTMLAttributesOnly,
    HasDataAttribute {
  title: string;
  action?: VoidFunction;
  /**
   * По умолчанию клик на опцию вызывает переданную в `Alert` функцию `onClose`, данное свойство
   * позволяет отключить такое поведение
   */
  autoCloseDisabled?: boolean;
  mode: AlertActionMode;
}

export interface AlertProps extends React.HTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement> {
  actionsLayout?: 'vertical' | 'horizontal';
  actionsAlign?: AlignType;
  actions?: AlertActionInterface[];
  renderAction?: (props: AlertActionProps) => React.ReactNode;
  header?: React.ReactNode;
  text?: React.ReactNode;
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
}

/**
 * @see https://vkcom.github.io/VKUI/#/Alert
 */
export const Alert = ({
  actions = [],
  actionsLayout = 'horizontal',
  children,
  className,
  style,
  text,
  header,
  onClose,
  dismissLabel = 'Закрыть предупреждение',
  renderAction,
  actionsAlign,
  dismissButtonMode = 'outside',
  dismissButtonTestId,
  getRootRef,
  ...restProps
}: AlertProps) => {
  const generatedId = React.useId();

  const headerId = `vkui-alert-${generatedId}-header`;
  const textId = `vkui-alert-${generatedId}-text`;

  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const { waitTransitionFinish } = useWaitTransitionFinish();

  const [closing, setClosing] = React.useState(false);
  const isDismissButtonVisible = isDesktop && platform !== 'ios';

  const elementRef = React.useRef<HTMLDivElement>(null);

  const timeout = platform === 'ios' ? 300 : 200;

  const close = React.useCallback(() => {
    setClosing(true);
    waitTransitionFinish(
      elementRef.current,
      (e?: TransitionEvent) => {
        if (!e || e.propertyName === 'opacity') {
          onClose();
        }
      },
      timeout,
    );
  }, [elementRef, waitTransitionFinish, onClose, timeout]);

  const onItemClick = React.useCallback(
    (item: AlertActionInterface) => {
      const { action, autoCloseDisabled = false } = item;

      if (!autoCloseDisabled) {
        setClosing(true);
        waitTransitionFinish(
          elementRef.current,
          (e?: TransitionEvent) => {
            if (!e || e.propertyName === 'opacity') {
              onClose();
              action && action();
            }
          },
          timeout,
        );
      } else {
        action && action();
      }
    },
    [elementRef, waitTransitionFinish, onClose, timeout],
  );

  useScrollLock();

  return (
    <PopoutWrapper
      className={className}
      closing={closing}
      style={style}
      onClick={close}
      getRootRef={getRootRef}
    >
      <FocusTrap
        {...restProps}
        getRootRef={elementRef}
        onClick={stopPropagation}
        onClose={close}
        timeout={timeout}
        className={classNames(
          styles['Alert'],
          platform === 'ios' && styles['Alert--ios'],
          platform === 'vkcom' && styles['Alert--vkcom'],
          closing && styles['Alert--closing'],
          isDesktop && styles['Alert--desktop'],
        )}
        role="alertdialog"
        aria-modal
        aria-labelledby={headerId}
        aria-describedby={textId}
      >
        <div
          className={classNames(
            styles['Alert__content'],
            dismissButtonMode === 'inside' && styles['Alert__content--withButton'],
          )}
        >
          {hasReactNode(header) && <AlertHeader id={headerId}>{header}</AlertHeader>}
          {hasReactNode(text) && <AlertText id={textId}>{text}</AlertText>}
          {children}
          {isDismissButtonVisible && dismissButtonMode === 'inside' && (
            <IconButton
              label={dismissLabel}
              className={classNames(styles['Alert__dismiss'], 'vkuiInternalAlert__dismiss')}
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
  );
};
