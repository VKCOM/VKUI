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
    Pick<FormFieldProps, "before" | "after" | "status"> {
  multiline?: boolean;
  disabled?: boolean;
  selectType?: SelectType;
}

/**
 * @see https://vkcom.github.io/VKUI/#/SelectMimicry
 */
export const SelectMimicry = ({
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
  selectType = "default",
  status,
  ...restProps
}: SelectMimicryProps) => {
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
        multiline && "Select--multiline",
        align && `Select--align-${align}`,
        before && "Select--hasBefore",
        after && "Select--hasAfter"
      )}
      getRootRef={getRootRef}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      before={before}
      after={after}
      mode={getFormFieldModeFromSelectType(selectType)}
      status={status}
    >
      <div vkuiClass="Select__container">
        <SelectTypography selectType={selectType} vkuiClass="Select__title">
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};
