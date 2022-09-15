import * as React from "react";
import { NativeSelect } from "../NativeSelect/NativeSelect";
import { CustomSelect, SelectProps } from "../CustomSelect/CustomSelect";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import { classNamesString } from "../../lib/classNames";
import { getPlatformClassName } from "../../helpers/getPlatformClassName";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { getMouseClassName } from "../../helpers/getMouseClassName";
import styles from "./Select.module.css";

export type SelectType = "default" | "plain" | "accent";

/**
 * @see https://vkcom.github.io/VKUI/#/SelectTypography
 */
export const SelectTypography = ({
  selectType = "default",
  children,
  className,
  ...restProps
}: React.PropsWithChildren<Pick<SelectProps, "selectType" | "className">>) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  return (
    <span
      className={classNamesString(
        styles["SelectTypography"],
        getPlatformClassName("SelectTypography", platform, styles),
        getSizeYClassName("SelectTypography", sizeY, styles),
        styles[`SelectTypography--selectType-${selectType}`],
        className
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
export const Select = ({
  children,
  options = [],
  popupDirection,
  renderOption,
  className,
  ...props
}: SelectProps) => {
  const { hasMouse } = useAdaptivity();

  return (
    <React.Fragment>
      {(hasMouse === undefined || hasMouse === true) && (
        <CustomSelect
          className={classNamesString(
            styles["Select__custom"],
            getMouseClassName("Select__custom", hasMouse, styles),
            className
          )}
          options={options}
          popupDirection={popupDirection}
          renderOption={renderOption}
          {...props}
        />
      )}
      {(hasMouse === undefined || hasMouse === false) && (
        <NativeSelect
          className={classNamesString(
            styles["Select__native"],
            getMouseClassName("Select__native", hasMouse, styles),
            className
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
