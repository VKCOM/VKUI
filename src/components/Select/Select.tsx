import * as React from "react";
import { NativeSelect } from "../NativeSelect/NativeSelect";
import { CustomSelect, CustomSelectProps } from "../CustomSelect/CustomSelect";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
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

const Select: React.FC<CustomSelectProps> = (props) => {
  const { hasMouse } = useAdaptivity();
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
export { Select };
