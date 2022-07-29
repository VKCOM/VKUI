import * as React from "react";
import { NativeSelect } from "../NativeSelect/NativeSelect";
import { CustomSelect, CustomSelectProps } from "../CustomSelect/CustomSelect";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import { Platform, VKCOM } from "../../lib/platform";
import {
  AdaptivityContextInterface,
  AdaptivityProps,
  SizeType,
} from "../AdaptivityProvider/AdaptivityContext";
import { Paragraph } from "../Typography/Paragraph/Paragraph";
import { Text } from "../Typography/Text/Text";
import { Headline } from "../Typography/Headline/Headline";

export const SelectType = {
  default: "default",
  plain: "plain",
  accent: "accent",
} as const;

// TODO v5.0.0 поправить под новую адаптивность
/**
 * @see https://vkcom.github.io/VKUI/#/SelectTypography
 */
export const SelectTypography = ({
  selectType = SelectType.default,
  children,
  ...restProps
}: React.PropsWithChildren<Pick<CustomSelectProps, "selectType">>) => {
  const platform = usePlatform();
  const { sizeY } = useAdaptivity();

  if (selectType === SelectType.accent) {
    return (
      <Paragraph
        weight={platform === Platform.ANDROID ? "2" : "1"}
        {...restProps}
      >
        {children}
      </Paragraph>
    );
  }

  const Component =
    platform === VKCOM || sizeY === SizeType.COMPACT ? Text : Headline;

  return (
    <Component Component="span" {...restProps}>
      {children}
    </Component>
  );
};

export interface SelectProps extends CustomSelectProps, AdaptivityProps {}

const SelectComponent = ({
  hasMouse,
  ...props
}: SelectProps & AdaptivityContextInterface) => {
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

Select.displayName = "Select";
