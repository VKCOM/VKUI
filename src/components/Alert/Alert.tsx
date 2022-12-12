import * as React from 'react';
import { Tappable } from '../Tappable/Tappable';
import { PopoutWrapper } from '../PopoutWrapper/PopoutWrapper';
import { classNamesString } from '../../lib/classNames';
import { Platform } from '../../lib/platform';
import { Button, ButtonProps } from '../Button/Button';
import { hasReactNode, stopPropagation } from '../../lib/utils';
import { Title } from '../Typography/Title/Title';
import { Caption } from '../Typography/Caption/Caption';
import { Footnote } from '../Typography/Footnote/Footnote';
import { Text } from '../Typography/Text/Text';
import { ModalDismissButton } from '../ModalDismissButton/ModalDismissButton';
import { FocusTrap } from '../FocusTrap/FocusTrap';
import { useScrollLock } from '../AppRoot/ScrollContext';
import { useWaitTransitionFinish } from '../../hooks/useWaitTransitionFinish';
import { usePlatform } from '../../hooks/usePlatform';
import { useAdaptivityWithJSMediaQueries } from '../../hooks/useAdaptivityWithJSMediaQueries';
import { AnchorHTMLAttributesOnly } from '../../types';
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
  actions?: AlertActionInterface[];
  header?: React.ReactNode;
  text?: React.ReactNode;
  onClose: VoidFunction;

  /**
   * `aria-label` для кнопки закрытия. Необходим, чтобы кнопка была доступной.
   */
  dismissLabel?: string;
}

type ItemClickHandler = (item: AlertActionInterface) => void;

interface AlertTypography {
  id: string;
  children?: React.ReactNode;
}

const AlertHeader = (props: AlertTypography) => {
  const platform = usePlatform();

  switch (platform) {
    case Platform.IOS:
      return <Title className={styles['Alert__header']} weight="1" level="3" {...props} />;
    default:
      return <Title className={styles['Alert__header']} weight="2" level="2" {...props} />;
  }
};

const AlertText = (props: AlertTypography) => {
  const platform = usePlatform();

  switch (platform) {
    case Platform.VKCOM:
      return <Footnote className={styles['Alert__text']} {...props} />;
    case Platform.IOS:
      return <Caption className={styles['Alert__text']} {...props} />;
    default:
      return <Text Component="span" className={styles['Alert__text']} weight="3" {...props} />;
  }
};

interface AlertActionProps {
  action: AlertActionInterface;
  onItemClick: ItemClickHandler;
}

const AlertAction = ({ action, onItemClick, ...restProps }: AlertActionProps) => {
  const platform = usePlatform();
  const handleItemClick = React.useCallback(() => onItemClick(action), [onItemClick, action]);

  if (platform === Platform.IOS) {
    const {
      Component = 'button',
      title,
      action: actionProp,
      autoClose,
      mode,
      ...restActionProps
    } = action;

    return (
      <Tappable
        Component={restActionProps.href ? 'a' : Component}
        className={classNamesString(styles['Alert__action'], styles[`Alert__action--mode-${mode}`])}
        onClick={handleItemClick}
        {...restActionProps}
        {...restProps}
      >
        {title}
      </Tappable>
    );
  }

  let mode: ButtonProps['mode'] = 'tertiary';

  if (platform === Platform.VKCOM) {
    mode = action.mode === 'cancel' ? 'secondary' : 'primary';
  }

  return (
    <Button
      className={classNamesString(
        styles['Alert__button'],
        styles[`Alert__button--mode-${action.mode}`],
      )}
      mode={mode}
      size="m"
      onClick={handleItemClick}
      Component={action.Component}
      href={action.href}
      target={action.target}
    >
      {action.title}
    </Button>
  );
};

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
  ...restProps
}: AlertProps) => {
  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const { waitTransitionFinish } = useWaitTransitionFinish();

  const [closing, setClosing] = React.useState(false);

  const elementRef = React.useRef<HTMLDivElement>(null);

  const resolvedActionsLayout: AlertProps['actionsLayout'] =
    platform === Platform.VKCOM ? 'horizontal' : actionsLayout;

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

  const onItemClick: ItemClickHandler = React.useCallback(
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
        className={classNamesString(
          styles['Alert'],
          platform === Platform.IOS && styles['Alert--ios'],
          platform === Platform.VKCOM && styles['Alert--vkcom'],
          resolvedActionsLayout === 'vertical' ? styles['Alert--v'] : styles['Alert--h'],
          closing && styles['Alert--closing'],
          isDesktop && styles['Alert--desktop'],
        )}
        role="alertdialog"
        aria-modal
        aria-labelledby="vkui--alert--title"
        aria-describedby="vkui--alert--desc"
      >
        <div className={styles['Alert__content']}>
          {hasReactNode(header) && <AlertHeader id="vkui--alert--title">{header}</AlertHeader>}
          {hasReactNode(text) && <AlertText id="vkui--alert--desc">{text}</AlertText>}
          {children}
        </div>
        <div className={styles['Alert__actions']}>
          {actions.map((action, i) => (
            <AlertAction key={i} action={action} onItemClick={onItemClick} />
          ))}
        </div>
        {isDesktop && <ModalDismissButton onClick={close} aria-label={dismissLabel} />}
      </FocusTrap>
    </PopoutWrapper>
  );
};
