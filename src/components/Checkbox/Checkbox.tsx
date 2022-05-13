import * as React from "react";
import Tappable, { ACTIVE_EFFECT_DELAY } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { IOS } from "../../lib/platform";

import { Icon20CheckBoxOn, Icon20CheckBoxOff } from "@vkontakte/icons";

import { HasRef, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./Checkbox.css";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  description?: React.ReactNode;
}

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  children,
  className,
  style,
  getRootRef,
  getRef,
  description,
  ...restProps
}: CheckboxProps) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  return (
    <Tappable
      Component="label"
      vkuiClass={classNames(
        getClassName("Checkbox", platform),
        getSizeYClassName("Checkbox", sizeY)
      )}
      className={className}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={platform === IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <input
        {...restProps}
        type="checkbox"
        vkuiClass="Checkbox__input"
        ref={getRef}
      />
      <div vkuiClass="Checkbox__container">
        <div vkuiClass="Checkbox__icon Checkbox__icon--on">
          <Icon20CheckBoxOn vkuiClass="Checkbox__icon--inner" />
        </div>
        <div vkuiClass="Checkbox__icon Checkbox__icon--off">
          <Icon20CheckBoxOff vkuiClass="Checkbox__icon--inner" />
        </div>
        <div vkuiClass="Checkbox__content">
          <div vkuiClass="Checkbox__children">{children}</div>
          {hasReactNode(description) && (
            <Caption vkuiClass="Checkbox__description">{description}</Caption>
          )}
        </div>
      </div>
    </Tappable>
  );
};

// eslint-disable-next-line import/no-default-export
export default Checkbox;
