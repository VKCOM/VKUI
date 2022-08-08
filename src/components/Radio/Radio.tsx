import * as React from "react";
import { ACTIVE_EFFECT_DELAY, Tappable } from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import { IOS, VKCOM } from "../../lib/platform";
import { HasRef, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import {
  withAdaptivity,
  AdaptivityProps,
  SizeType,
} from "../../hoc/withAdaptivity";
import { hasReactNode } from "../../lib/utils";
import { VisuallyHiddenInput } from "../VisuallyHiddenInput/VisuallyHiddenInput";
import { Caption } from "../Typography/Caption/Caption";
import { Headline } from "../Typography/Headline/Headline";
import { Text } from "../Typography/Text/Text";
import "./Radio.css";

const RadioIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="7.5"
        vkuiClass="Radio__pin"
        fill="currentColor"
      />
    </svg>
  );
};

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    AdaptivityProps {
  description?: React.ReactNode;
}

const RadioComponent = ({
  children,
  description,
  style,
  className,
  getRootRef,
  sizeY,
  ...restProps
}: RadioProps) => {
  const platform = usePlatform();

  const RadioTypography =
    platform === VKCOM || sizeY === SizeType.COMPACT ? Text : Headline;

  return (
    <Tappable
      Component="label"
      style={style}
      className={className}
      vkuiClass={classNames("Radio", `Radio--sizeY-${sizeY}`)}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      disabled={restProps.disabled}
      getRootRef={getRootRef}
    >
      <VisuallyHiddenInput
        {...restProps}
        vkuiClass="Radio__input"
        type="radio"
      />
      <div vkuiClass="Radio__container">
        <RadioIcon vkuiClass="Radio__icon" />
        <RadioTypography vkuiClass="Radio__content" Component="div">
          <div vkuiClass="Radio__children">{children}</div>
          {hasReactNode(description) && (
            <Caption vkuiClass="Radio__description">{description}</Caption>
          )}
        </RadioTypography>
      </div>
    </Tappable>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Radio
 */
export const Radio = withAdaptivity(RadioComponent, {
  sizeY: true,
});

Radio.displayName = "Radio";
