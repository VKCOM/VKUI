import * as React from "react";
import { classNames } from "../../lib/classNames";
import { DropdownIcon } from "../DropdownIcon/DropdownIcon";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { SelectType } from "../CustomSelect/CustomSelect";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import "../Select/Select.css";
import "./SelectMimicry.css";

export interface SelectMimicryProps
  extends React.HTMLAttributes<HTMLElement>,
    HasAlign,
    HasRootRef<HTMLElement>,
    Pick<FormFieldProps, "before" | "after"> {
  multiline?: boolean;
  disabled?: boolean;
  selectType?: SelectType;
}

const SelectMimicry: React.FunctionComponent<SelectMimicryProps> = ({
  tabIndex = 0,
  placeholder,
  children,
  align,
  getRootRef,
  multiline,
  disabled,
  onClick,
  before,
  after = <DropdownIcon />,
  selectType = SelectType.Default,
  ...restProps
}: SelectMimicryProps) => {
  const platform = usePlatform();
  const { sizeX, sizeY } = useAdaptivity();

  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? undefined : tabIndex}
      vkuiClass={classNames(
        getClassName("Select", platform),
        getSizeXClassName("Select", sizeX),
        getSizeYClassName("Select", sizeY),
        "Select--mimicry",
        `Select--mimicry-${selectType}`,
        !children && "Select--not-selected",
        multiline && "Select--multiline",
        align && `Select--align-${align}`
      )}
      getRootRef={getRootRef}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      before={before}
      after={after}
    >
      <div
        vkuiClass={classNames(
          "Select__container",
          `Select__container--${selectType}`
        )}
      >
        <span vkuiClass="Select__title">{children || placeholder}</span>
      </div>
    </FormField>
  );
};

// eslint-disable-next-line import/no-default-export
export default SelectMimicry;
