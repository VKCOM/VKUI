import * as React from "react";
import { NativeSelect } from "../NativeSelect/NativeSelect";
import { CustomSelect, CustomSelectProps } from "../CustomSelect/CustomSelect";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import {
  AdaptivityContextInterface,
  AdaptivityProps,
} from "../AdaptivityProvider/AdaptivityContext";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";

export const SelectType = {
  default: "default",
  plain: "plain",
  accent: "accent",
} as const;

/**
 * @see https://vkcom.github.io/VKUI/#/SelectTypography
 */
export const SelectTypography: React.FC<
  Pick<CustomSelectProps, "selectType">
> = ({ selectType = SelectType.default, children, ...restProps }) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  return (
    <span
      vkuiClass={classNames(
        getClassName("SelectTypography", platform),
        getSizeYClassName("SelectTypography", sizeY),
        `SelectTypography--${selectType}`
      )}
      {...restProps}
    >
      {children}
    </span>
  );
};

export interface SelectProps extends CustomSelectProps, AdaptivityProps {}

const SelectComponent: React.FC<SelectProps & AdaptivityContextInterface> = ({
  hasMouse,
  ...props
}: SelectProps) => {
  // Use custom select if device has connected a mouse
  if (hasMouse) {
    const { children, ...restProps } = props;

    return <CustomSelect {...restProps} />;
  }

  const { options = [], popupDirection, renderOption, ...restProps } = props;

  return (
    <NativeSelect {...restProps}>
      {options.map(({ label, value }) => (
        <option value={value} key={`${value}`}>
          {label}
        </option>
      ))}
    </NativeSelect>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Select
 */
export const Select = withAdaptivity(SelectComponent, {
  hasMouse: true,
});
