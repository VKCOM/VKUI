import * as React from "react";
import { classNames } from "../../lib/classNames";
import { DropdownIcon } from "../DropdownIcon/DropdownIcon";
import { FormField } from "../FormField/FormField";
import { HasAlign, HasRootRef } from "../../types";
import { SizeType } from "../../hoc/withAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import { getClassName } from "../../helpers/getClassName";
import Headline from "../Typography/Headline/Headline";
import Text from "../Typography/Text/Text";
import { VKCOM } from "../../lib/platform";
import { SelectType } from "../CustomSelect/CustomSelect";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "../Select/Select.css";
import "./SelectMimicry.css";

export interface SelectMimicryProps
  extends React.HTMLAttributes<HTMLElement>,
    HasAlign,
    HasRootRef<HTMLElement> {
  multiline?: boolean;
  disabled?: boolean;
  after?: React.ReactNode;
  selectType?: SelectType;
}

const SelectMimicry: React.FunctionComponent<SelectMimicryProps> = ({
  tabIndex,
  placeholder,
  children,
  align,
  getRootRef,
  multiline,
  disabled,
  onClick,
  after = <DropdownIcon />,
  selectType = SelectType.Default,
  ...restProps
}: SelectMimicryProps) => {
  const platform = usePlatform();
  const { sizeX, sizeY } = useAdaptivity();

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
        sizeX && `Select--sizeX--${sizeX}`,
        sizeY && `Select--sizeY--${sizeY}`
      )}
      getRootRef={getRootRef}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      after={after}
    >
      <TypographyComponent
        Component="div"
        weight={selectType === SelectType.Plain ? "semibold" : "regular"}
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

SelectMimicry.defaultProps = {
  tabIndex: 0,
};

// eslint-disable-next-line import/no-default-export
export default SelectMimicry;
