import * as React from "react";
import { Tappable } from "../Tappable/Tappable";
import { PopoutWrapper } from "../PopoutWrapper/PopoutWrapper";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { ANDROID, VKCOM, IOS } from "../../lib/platform";
import { ViewWidth } from "../../hoc/withAdaptivity";
import { Button, ButtonProps } from "../Button/Button";
import { hasReactNode, stopPropagation } from "../../lib/utils";
import { Title } from "../Typography/Title/Title";
import { Caption } from "../Typography/Caption/Caption";
import { Text } from "../Typography/Text/Text";
import { ModalDismissButton } from "../ModalDismissButton/ModalDismissButton";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { useScrollLock } from "../AppRoot/ScrollContext";
import { useWaitTransitionFinish } from "../../hooks/useWaitTransitionFinish";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./Alert.css";

export type AlertActionInterface = AlertAction &
  React.AnchorHTMLAttributes<HTMLElement>;

export interface AlertAction extends Pick<ButtonProps, "Component" | "href"> {
  title: string;
  action?: VoidFunction;
  autoclose?: boolean;
  mode: "cancel" | "destructive" | "default";
}

export interface AlertProps extends React.HTMLAttributes<HTMLElement> {
  actionsLayout?: "vertical" | "horizontal";
  actions?: AlertAction[];
  header?: React.ReactNode;
  text?: React.ReactNode;
  onClose?: VoidFunction;

  /**
   * `aria-label` для кнопки закрытия. Необходим, чтобы кнопка была доступной.
   */
  dismissLabel?: string;
}

type ItemClickHandler = (item: AlertActionInterface) => void;

interface AlertTypography {
  id: string;
}

const AlertHeader: React.FC<AlertTypography> = (props) => {
  const platform = usePlatform();

  switch (platform) {
    case IOS:
      return (
        <Title vkuiClass="Alert__header" weight="1" level="3" {...props} />
      );
    default:
      return (
        <Title vkuiClass="Alert__header" weight="2" level="2" {...props} />
      );
  }
};

const AlertText: React.FC<AlertTypography> = (props) => {
  const platform = usePlatform();

  switch (platform) {
    case VKCOM:
      return <Caption vkuiClass="Alert__text" {...props} />;
    case IOS:
      return <Caption vkuiClass="Alert__text" level="2" {...props} />;
    default:
      return (
        <Text Component="span" vkuiClass="Alert__text" weight="3" {...props} />
      );
  }
};

interface AlertActionProps {
  action: AlertActionInterface;
  onItemClick: ItemClickHandler;
}

const AlertAction: React.FC<AlertActionProps> = ({
  action,
  onItemClick,
  ...restProps
}) => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivity();
  const handleItemClick = React.useCallback(
    () => onItemClick(action),
    [onItemClick, action]
  );

  if (platform === IOS) {
    const { Component = "button" } = action;
    return (
      <Tappable
        Component={action.href ? "a" : Component}
        vkuiClass={classNames("Alert__action", `Alert__action--${action.mode}`)}
        onClick={handleItemClick}
        href={action.href}
        target={action.target}
        {...restProps}
      >
        {action.title}
      </Tappable>
    );
  }

  let mode: ButtonProps["mode"] =
    action.mode === "cancel" ? "secondary" : "primary";

  if (platform === ANDROID) {
    mode = "tertiary";

    if (viewWidth === ViewWidth.DESKTOP && action.mode === "destructive") {
      mode = "destructive";
    }
  }

  return (
    <Button
      vkuiClass={classNames("Alert__button", `Alert__button--${action.mode}`)}
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
export const Alert: React.FC<AlertProps> = ({
  actions = [],
  actionsLayout = "horizontal",
  children,
  className,
  style,
  text,
  header,
  onClose,
  dismissLabel = "Закрыть предупреждение",
  ...restProps
}) => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivity();
  const { waitTransitionFinish } = useWaitTransitionFinish();

  const [closing, setClosing] = React.useState(false);

  const elementRef = React.useRef<HTMLDivElement>(null);

  const resolvedActionsLayout: AlertProps["actionsLayout"] =
    platform === VKCOM ? "horizontal" : actionsLayout;
  const canShowCloseButton =
    platform === VKCOM ||
    (platform === ANDROID && viewWidth >= ViewWidth.SMALL_TABLET);
  const isDesktop = viewWidth >= ViewWidth.SMALL_TABLET;

  const timeout = platform === ANDROID || platform === VKCOM ? 200 : 300;

  const close = React.useCallback(() => {
    setClosing(true);
    waitTransitionFinish(
      elementRef.current,
      (e?: TransitionEvent) => {
        if (!e || e.propertyName === "opacity") {
          onClose && onClose();
        }
      },
      timeout
    );
  }, [elementRef, waitTransitionFinish, onClose, timeout]);

  const onItemClick: ItemClickHandler = React.useCallback(
    (item: AlertActionInterface) => {
      const { action, autoclose } = item;

      if (autoclose) {
        setClosing(true);
        waitTransitionFinish(
          elementRef.current,
          (e?: TransitionEvent) => {
            if (!e || e.propertyName === "opacity") {
              onClose && onClose();
              action && action();
            }
          },
          timeout
        );
      } else {
        action && action();
      }
    },
    [elementRef, waitTransitionFinish, onClose, timeout]
  );

  useScrollLock();

  return (
    <PopoutWrapper
      className={className}
      closing={closing}
      style={style}
      onClick={close}
    >
      <FocusTrap
        {...restProps}
        getRootRef={elementRef}
        onClick={stopPropagation}
        onClose={close}
        timeout={timeout}
        vkuiClass={classNames(
          getClassName("Alert", platform),
          resolvedActionsLayout === "vertical" ? "Alert--v" : "Alert--h",
          closing && "Alert--closing",
          isDesktop && "Alert--desktop"
        )}
        role="alertdialog"
        aria-modal
        aria-labelledby="vkui--alert--title"
        aria-describedby="vkui--alert--desc"
      >
        <div vkuiClass="Alert__content">
          {hasReactNode(header) && (
            <AlertHeader id="vkui--alert--title">{header}</AlertHeader>
          )}
          {hasReactNode(text) && (
            <AlertText id="vkui--alert--desc">{text}</AlertText>
          )}
          {children}
        </div>
        <div vkuiClass="Alert__actions">
          {actions.map((action, i) => (
            <AlertAction key={i} action={action} onItemClick={onItemClick} />
          ))}
        </div>
        {canShowCloseButton && (
          <ModalDismissButton onClick={close} aria-label={dismissLabel} />
        )}
      </FocusTrap>
    </PopoutWrapper>
  );
};
