import * as React from "react";
import Tappable, { ACTIVE_EFFECT_DELAY } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { IOS } from "../../lib/platform";
import { HasRef, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./Radio.css";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLLabelElement> {
  description?: React.ReactNode;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Radio
 */
const Radio: React.FC<RadioProps> = (props: RadioProps) => {
  const {
    children,
    description,
    style,
    className,
    getRef,
    getRootRef,
    ...restProps
  } = props;
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      Component="label"
      style={style}
      className={className}
      vkuiClass={classNames(
        getClassName("Radio", platform),
        getSizeYClassName("Radio", sizeY)
      )}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      disabled={restProps.disabled}
      getRootRef={getRootRef}
    >
      <input
        {...restProps}
        type="radio"
        vkuiClass="Radio__input"
        ref={getRef}
      />
      <div vkuiClass="Radio__container">
        <i vkuiClass="Radio__icon" role="presentation" />
        <div vkuiClass="Radio__content">
          <div vkuiClass="Radio__children">{children}</div>
          {hasReactNode(description) && (
            <Caption vkuiClass="Radio__description">{description}</Caption>
          )}
        </div>
      </div>
    </Tappable>
  );
};

// eslint-disable-next-line import/no-default-export
export default Radio;
