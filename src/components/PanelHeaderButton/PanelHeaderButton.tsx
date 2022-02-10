import * as React from "react";
import Tappable, { TappableProps } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { warnOnce } from "../../lib/warnOnce";
import { usePlatform } from "../../hooks/usePlatform";
import { getTitleFromChildren, isPrimitiveReactNode } from "../../lib/utils";
import { IOS, VKCOM, ANDROID } from "../../lib/platform";
import Text from "../Typography/Text/Text";
import Title from "../Typography/Title/Title";
import "./PanelHeaderButton.css";

export interface PanelHeaderButtonProps extends Omit<TappableProps, "label"> {
  primary?: boolean;
  label?: React.ReactNode;
}

interface ButtonTypographyProps extends React.AllHTMLAttributes<HTMLElement> {
  primary?: PanelHeaderButtonProps["primary"];
}

const ButtonTypography: React.FC<ButtonTypographyProps> = ({
  primary,
  children,
}: ButtonTypographyProps) => {
  const platform = usePlatform();

  if (platform === IOS) {
    return (
      <Title Component="span" level="3" weight={primary ? "1" : "3"}>
        {children}
      </Title>
    );
  }

  return (
    <Text weight={platform === VKCOM ? "regular" : "medium"}>{children}</Text>
  );
};

const warn = warnOnce("PanelHeaderButton");
export const PanelHeaderButton: React.FC<PanelHeaderButtonProps> = ({
  children,
  primary = false,
  label,
  ...restProps
}: PanelHeaderButtonProps) => {
  const isPrimitive = isPrimitiveReactNode(children);
  const isPrimitiveLabel = isPrimitiveReactNode(label);
  const platform = usePlatform();

  let hoverMode;
  let activeMode;

  switch (platform) {
    case ANDROID:
      hoverMode = "background";
      activeMode = "background";
      break;
    case IOS:
      hoverMode = "background";
      activeMode = "opacity";
      break;
    case VKCOM:
      hoverMode = "PanelHeaderButton--hover";
      activeMode = "PanelHeaderButton--active";
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
        "a11y: У кнопки нет названия, которое может прочитать скринридер, и она недоступна для части пользователей. Замените содержимое на текст или добавьте описание действия с помощью пропа aria-label."
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
      vkuiClass={classNames(getClassName("PanelHeaderButton", platform), {
        "PanelHeaderButton--primary": primary,
        "PanelHeaderButton--primitive": isPrimitive,
        "PanelHeaderButton--notPrimitive": !isPrimitive && !isPrimitiveLabel,
      })}
    >
      {isPrimitive ? (
        <ButtonTypography primary={primary}>{children}</ButtonTypography>
      ) : (
        children
      )}
      {isPrimitiveLabel ? (
        <ButtonTypography primary={primary}>{label}</ButtonTypography>
      ) : (
        label
      )}
    </Tappable>
  );
};
