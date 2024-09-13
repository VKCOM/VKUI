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
import { useScrollLock } from '../AppRoot/ScrollContext';
import type { ButtonProps } from '../Button/Button';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { IconButton } from '../IconButton/IconButton';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import type { AlertActionProps } from './AlertAction';
import { AlertActions } from './AlertActions';
import { AlertHeader, AlertText } from './AlertTypography';
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
  actions,
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
}: AlertProps): React.ReactNode => {
  const generatedId = React.useId();

  const headerId = `vkui-alert-${generatedId}-header`;
  const textId = `vkui-alert-${generatedId}-text`;

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
          styles['Alert'],
          platform === 'ios' && styles['Alert--ios'],
          platform === 'vkcom' && styles['Alert--vkcom'],
          closing ? styles['Alert--closing'] : styles['Alert--opening'],
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
