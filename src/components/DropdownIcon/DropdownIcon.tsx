import * as React from "react";
import {
  Icon20Dropdown,
  Icon24ChevronDown,
  Icon24ChevronUp,
  Icon20ChevronUp,
} from "@vkontakte/icons";
import { classNamesString } from "../../lib/classNames";
import { SizeYConditionalRender } from "../SizeYConditionalRender/SizeYConditionalRender";
import type { ExpectedConditionalRenderComponentProps } from "../../types";
import styles from "./DropdownIcon.module.css";

export interface DropdownIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  opened?: boolean;
}

export const DropdownIcon = ({
  opened = false,
  className: classNameProp,
  ...restProps
}: DropdownIconProps) => {
  const IconCompactWithProps = React.useCallback(
    ({ className }: ExpectedConditionalRenderComponentProps) => {
      const IconCompact = opened ? Icon20ChevronUp : Icon20Dropdown;
      return (
        <IconCompact
          className={classNamesString(
            styles["DropdownIcon"],
            classNameProp,
            className
          )}
          {...restProps}
        />
      );
    },
    [classNameProp, opened, restProps]
  );

  const IconRegularWithProps = React.useCallback(
    ({ className }: ExpectedConditionalRenderComponentProps) => {
      const IconRegular = opened ? Icon24ChevronUp : Icon24ChevronDown;
      return (
        <IconRegular
          className={classNamesString(
            styles["DropdownIcon"],
            classNameProp,
            className
          )}
          {...restProps}
        />
      );
    },
    [classNameProp, opened, restProps]
  );

  return (
    <SizeYConditionalRender
      Compact={IconCompactWithProps}
      Regular={IconRegularWithProps}
    />
  );
};
