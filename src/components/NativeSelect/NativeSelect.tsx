import * as React from "react";
import { classNames } from "../../lib/classNames";
import { DropdownIcon } from "../DropdownIcon/DropdownIcon";
import { FormField } from "../FormField/FormField";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { getClassName } from "../../helpers/getClassName";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useEnsuredControl } from "../../hooks/useEnsuredControl";
import { useExternRef } from "../../hooks/useExternRef";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { getSizeXClassName } from "../../helpers/getSizeXClassName";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import "../Select/Select.css";

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    HasRef<HTMLSelectElement>,
    HasRootRef<HTMLLabelElement>,
    HasAlign {
  placeholder?: string;
  multiline?: boolean;
}

export interface SelectState {
  value?: React.SelectHTMLAttributes<HTMLSelectElement>["value"];
  title?: string;
  notSelected?: boolean;
}

const NativeSelect: React.FC<NativeSelectProps> = ({
  style,
  defaultValue = "",
  align,
  placeholder,
  children,
  className,
  getRef,
  getRootRef,
  disabled,
  multiline,
  ...restProps
}) => {
  const platform = usePlatform();
  const [title, setTitle] = React.useState("");
  const [notSelected, setNotSelected] = React.useState(false);
  const [value, onChange] = useEnsuredControl(restProps, { defaultValue });
  const selectRef = useExternRef(getRef);
  const { sizeX, sizeY } = useAdaptivity();

  useIsomorphicLayoutEffect(() => {
    const selectedOption =
      selectRef.current?.options[selectRef.current.selectedIndex];
    if (selectedOption) {
      setTitle(selectedOption.text);
      setNotSelected(selectedOption.value === "" && placeholder != null);
    }
  }, [value, children]);

  return (
    <FormField
      Component="label"
      vkuiClass={classNames(
        getClassName("Select", platform),
        notSelected && "Select--not-selected",
        align && `Select--align-${align}`,
        getSizeXClassName("Select", sizeX),
        getSizeYClassName("Select", sizeY),
        multiline && "Select--multiline"
      )}
      className={className}
      style={style}
      getRootRef={getRootRef}
      disabled={disabled}
      after={<DropdownIcon />}
    >
      <select
        {...restProps}
        disabled={disabled}
        vkuiClass="Select__el"
        onChange={onChange}
        value={value}
        ref={selectRef}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <div vkuiClass="Select__container">
        <span vkuiClass="Select__title">{title}</span>
      </div>
    </FormField>
  );
};

export { NativeSelect };
