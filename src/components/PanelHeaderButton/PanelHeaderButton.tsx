import * as React from "react";
import { TappableProps, Tappable } from "../Tappable/Tappable";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import { classNamesString } from "../../lib/classNames";
import { warnOnce } from "../../lib/warnOnce";
import { usePlatform } from "../../hooks/usePlatform";
import { getTitleFromChildren, isPrimitiveReactNode } from "../../lib/utils";
import { Platform } from "../../lib/platform";
import { Text } from "../Typography/Text/Text";
import { Title } from "../Typography/Title/Title";
import styles from "./PanelHeaderButton.module.css";

export interface PanelHeaderButtonProps extends Omit<TappableProps, "label"> {
  primary?: boolean;
  label?: React.ReactNode;
}

interface ButtonTypographyProps extends React.AllHTMLAttributes<HTMLElement> {
  primary?: PanelHeaderButtonProps["primary"];
}

const ButtonTypography = ({ primary, children }: ButtonTypographyProps) => {
  const platform = usePlatform();

  if (platform === Platform.IOS) {
    return (
      <Title Component="span" level="3" weight={primary ? "1" : "3"}>
        {children}
      </Title>
    );
  }

  return (
    <Text weight={platform === Platform.VKCOM ? undefined : "2"}>
      {children}
    </Text>
  );
};

const warn = warnOnce("PanelHeaderButton");

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderButton
 */
export const PanelHeaderButton = ({
  children,
  primary = false,
  label,
  className,
  ...restProps
}: PanelHeaderButtonProps) => {
  const isPrimitive = isPrimitiveReactNode(children);
  const isPrimitiveLabel = isPrimitiveReactNode(label);
  const platform = usePlatform();

  let hoverMode;
  let activeMode;

  switch (platform) {
    case Platform.IOS:
      hoverMode = "background";
      activeMode = "opacity";
      break;
    case Platform.VKCOM:
      hoverMode = styles["PanelHeaderButton--hover"];
      activeMode = styles["PanelHeaderButton--active"];
      break;
    default:
      hoverMode = "background";
      activeMode = "background";
  }

  if (process.env.NODE_ENV === "development") {
    const hasAccessibleName = Boolean(
      getTitleFromChildren(children) ||
        getTitleFromChildren(label) ||
        restProps["aria-label"] ||
        restProps["aria-labelledby"]
    );

    if (!hasAccessibleName) {
      warn(
        "a11y: У кнопки нет названия, которое может прочитать скринридер, и она недоступна для части пользователей. Замените содержимое на текст или добавьте описание действия с помощью пропа aria-label.",
        "error"
      );
    }
  }

  return (
    <Tappable
      {...restProps}
      hoverMode={hoverMode}
      Component={restProps.href ? "a" : "button"}
      activeEffectDelay={200}
      activeMode={activeMode}
      className={classNamesString(
        styles["PanelHeaderButton"],
        getPlatformClassName(styles["PanelHeaderButton"], platform),
        isPrimitive && styles["PanelHeaderButton--primitive"],
        !isPrimitive &&
          !isPrimitiveLabel &&
          styles["PanelHeaderButton--notPrimitive"],
        className
      )}
    >
      {isPrimitive ? (
        <ButtonTypography primary={primary}>{children}</ButtonTypography>
      ) : (
        children
      )}
      {isPrimitiveLabel ? (
        <ButtonTypography
          primary={primary}
          className={styles["PanelHeaderButton__label"]}
        >
          {label}
        </ButtonTypography>
      ) : (
        label
      )}
    </Tappable>
  );
};
