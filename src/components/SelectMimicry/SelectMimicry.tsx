import * as React from "react";
import { classNames } from "../../lib/classNames";
import { DropdownIcon } from "../DropdownIcon/DropdownIcon";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { getFormFieldModeFromSelectType } from "../../lib/select";
import { SelectType, SelectTypography } from "../Select/Select";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import "../Select/Select.css";

export interface SelectMimicryProps
  extends React.HTMLAttributes<HTMLElement>,
    HasAlign,
    HasRootRef<HTMLElement>,
    Pick<FormFieldProps, "before" | "after"> {
  multiline?: boolean;
  disabled?: boolean;
  selectType?: keyof typeof SelectType;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SelectMimicry
 */
const SelectMimicry: React.FC<SelectMimicryProps> = ({
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
  selectType = SelectType.default,
  ...restProps
}) => {
  const platform = usePlatform();
  const { sizeX, sizeY } = useAdaptivity();
  const title = children || placeholder;

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
        align && `Select--align-${align}`,
        !children && "Select--empty"
      )}
      getRootRef={getRootRef}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      before={before}
      after={after}
      mode={getFormFieldModeFromSelectType(selectType)}
    >
      <div vkuiClass="Select__container">
        <SelectTypography selectType={selectType} vkuiClass="Select__title">
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};

export { SelectMimicry };
