import * as React from "react";
import { classNames } from "../../lib/classNames";
import { DropdownIcon } from "../DropdownIcon/DropdownIcon";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRootRef } from "../../types";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import { getFormFieldModeFromSelectType } from "../../lib/select";
import { SelectType, SelectTypography } from "../Select/Select";
import "../Select/Select.css";

export interface SelectMimicryProps
  extends React.HTMLAttributes<HTMLElement>,
    HasAlign,
    HasRootRef<HTMLElement>,
    AdaptivityProps,
    Pick<FormFieldProps, "before" | "after" | "status"> {
  multiline?: boolean;
  disabled?: boolean;
  selectType?: keyof typeof SelectType;
}

const SelectMimicryComponent = ({
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
  status,
  ...restProps
}: SelectMimicryProps) => {
  const platform = usePlatform();
  const title = children || placeholder;

  return (
    <FormField
      {...restProps}
      tabIndex={disabled ? undefined : tabIndex}
      vkuiClass={classNames(
        getClassName("Select", platform),
        `Select--${selectType}`,
        !children && "Select--empty",
        multiline && "Select--multiline",
        align && `Select--align-${align}`,
        `Select--sizeX-${sizeX}`, // TODO v5.0.0 поправить под новую адаптивность
        `Select--sizeY-${sizeY}`, // TODO v5.0.0 поправить под новую адаптивность
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
        {/* TODO v5.0.0 поправить под новую адаптивность */}
        <SelectTypography selectType={selectType} vkuiClass="Select__title">
          {title}
        </SelectTypography>
      </div>
    </FormField>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/SelectMimicry
 */
export const SelectMimicry = withAdaptivity(SelectMimicryComponent, {
  sizeX: true,
  sizeY: true,
});

SelectMimicry.displayName = "SelectMimicry";
