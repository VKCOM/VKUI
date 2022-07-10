import * as React from "react";
import { NativeSelect } from "../NativeSelect/NativeSelect";
import { CustomSelect, SelectProps } from "../CustomSelect/CustomSelect";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { getMouseClassName } from "../../helpers/getMouseClassName";

export const SelectType = {
  default: "default",
  plain: "plain",
  accent: "accent",
} as const;

/**
 * @see https://vkcom.github.io/VKUI/#/SelectTypography
 */
export const SelectTypography = ({
  selectType = SelectType.default,
  children,
  ...restProps
}: React.PropsWithChildren<Pick<SelectProps, "selectType">>) => {
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

/**
 * @see https://vkcom.github.io/VKUI/#/Select
 */
export const Select: React.FC<SelectProps> = ({
  children,
  options = [],
  popupDirection,
  renderOption,
  ...props
}) => {
  const { hasMouse } = useAdaptivity();

  return (
    <React.Fragment>
      {(hasMouse === undefined || hasMouse === true) && (
        <CustomSelect
          vkuiClass={classNames(
            "Select__custom",
            getMouseClassName("Select__custom", hasMouse)
          )}
          options={options}
          popupDirection={popupDirection}
          renderOption={renderOption}
          {...props}
        />
      )}
      {(hasMouse === undefined || hasMouse === false) && (
        <NativeSelect
          vkuiClass={classNames(
            "Select__native",
            getMouseClassName("Select__native", hasMouse)
          )}
          {...props}
        >
          {options.map(({ label, value }) => (
            <option value={value} key={`${value}`}>
              {label}
            </option>
          ))}
        </NativeSelect>
      )}
    </React.Fragment>
  );
};
