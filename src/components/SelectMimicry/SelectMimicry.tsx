import * as React from "react";
import { classNames } from "../../lib/classNames";
import { DropdownIcon } from "../DropdownIcon/DropdownIcon";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRootRef } from "../../types";
import {
  withAdaptivity,
  AdaptivityProps,
  SizeType,
} from "../../hoc/withAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import Headline from "../Typography/Headline/Headline";
import Text from "../Typography/Text/Text";
import { VKCOM } from "../../lib/platform";
import { getFormFieldModeFromSelectType } from "../../lib/select";
import { SelectType } from "../Select/Select";
import "../Select/Select.css";
import "./SelectMimicry.css";

export interface SelectMimicryProps
  extends React.HTMLAttributes<HTMLElement>,
    HasAlign,
    HasRootRef<HTMLElement>,
    AdaptivityProps,
    Pick<FormFieldProps, "before" | "after"> {
  multiline?: boolean;
  disabled?: boolean;
  selectType?: keyof typeof SelectType;
}

const SelectMimicryComponent: React.FC<SelectMimicryProps> = ({
  tabIndex = 0,
  placeholder,
  children,
  align,
  getRootRef,
  multiline,
  disabled,
  onClick,
  sizeX,
  sizeY,
  before,
  after = <DropdownIcon />,
  selectType = SelectType.default,
  ...restProps
}) => {
  const platform = usePlatform();

  const TypographyComponent =
    platform === VKCOM || sizeY === SizeType.COMPACT ? Text : Headline;

  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? undefined : tabIndex}
      vkuiClass={classNames(
        getClassName("Select", platform),
        "Select--mimicry",
        `Select--mimicry-${selectType}`,
        !children && "Select--not-selected",
        multiline && "Select--multiline",
        align && `Select--align-${align}`,
        `Select--sizeX-${sizeX}`,
        `Select--sizeY-${sizeY}`
      )}
      getRootRef={getRootRef}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      before={before}
      after={after}
      mode={getFormFieldModeFromSelectType(selectType)}
    >
      <TypographyComponent
        Component="div"
        weight={selectType === SelectType.plain ? "semibold" : "regular"}
        vkuiClass={classNames(
          "Select__container",
          `Select__container--${selectType}`
        )}
      >
        <span vkuiClass="Select__title">{children || placeholder}</span>
      </TypographyComponent>
    </FormField>
  );
};

export const SelectMimicry = withAdaptivity(SelectMimicryComponent, {
  sizeX: true,
  sizeY: true,
});
