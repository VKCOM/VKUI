import * as React from 'react';
import { classNames, hasReactNode } from '@vkontakte/vkjs';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { useId } from '../../hooks/useId';
import { usePlatform } from '../../hooks/usePlatform';
import { useWaitTransitionFinish } from '../../hooks/useWaitTransitionFinish';
import { Platform } from '../../lib/platform';
import { stopPropagation } from '../../lib/utils';
import { AlignType, AnchorHTMLAttributesOnly } from '../../types';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { ButtonProps } from '../Button/Button';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { AlertActionProps } from './AlertAction';
import { AlertActions } from './AlertActions';
import { AlertHeader, AlertText } from './AlertTypography';
import styles from './Alert.module.css';

export interface AlertActionInterface
  extends Pick<ButtonProps, 'Component'>,
    AnchorHTMLAttributesOnly {
  title: string;
  action?: VoidFunction;
  autoClose?: boolean;
  mode: 'cancel' | 'destructive' | 'default';
}

export interface AlertProps extends React.HTMLAttributes<HTMLElement> {
  actionsLayout?: 'vertical' | 'horizontal';
  actionsAlign?: AlignType;
  actions?: AlertActionInterface[];
  renderAction?: (props: AlertActionProps) => React.ReactNode;
  header?: React.ReactNode;
  text?: React.ReactNode;
  onClose: VoidFunction;

  /**
   * `aria-label` для кнопки закрытия. Необходим, чтобы кнопка была доступной.
   */
  dismissLabel?: string;
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
  ...restProps
}: AlertProps) => {
  const generatedId = useId();

  const headerId = `vkui-alert-${generatedId}-header`;
  const textId = `vkui-alert-${generatedId}-text`;

  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const { waitTransitionFinish } = useWaitTransitionFinish();

  const [closing, setClosing] = React.useState(false);

  const elementRef = React.useRef<HTMLDivElement>(null);

  const timeout = platform === Platform.IOS ? 300 : 200;

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
      const { action, autoClose } = item;

      if (autoClose) {
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
    <PopoutWrapper className={className} closing={closing} style={style} onClick={close}>
      <FocusTrap
        {...restProps}
        getRootRef={elementRef}
        onClick={stopPropagation}
        onClose={close}
        timeout={timeout}
        className={classNames(
          styles['Alert'],
          platform === Platform.IOS && styles['Alert--ios'],
          platform === Platform.VKCOM && styles['Alert--vkcom'],
          closing && styles['Alert--closing'],
          isDesktop && styles['Alert--desktop'],
        )}
        role="alertdialog"
        aria-modal
        aria-labelledby={headerId}
        aria-describedby={textId}
      >
        <div className={styles['Alert__content']}>
          {hasReactNode(header) && <AlertHeader id={headerId}>{header}</AlertHeader>}
          {hasReactNode(text) && <AlertText id={textId}>{text}</AlertText>}
          {children}
        </div>
        <AlertActions
          actions={actions}
          actionsAlign={actionsAlign}
          actionsLayout={actionsLayout}
          renderAction={renderAction}
          onItemClick={onItemClick}
        />
        {isDesktop && <ModalDismissButton onClick={close} aria-label={dismissLabel} />}
      </FocusTrap>
    </PopoutWrapper>
  );
};
