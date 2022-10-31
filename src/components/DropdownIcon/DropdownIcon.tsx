import * as React from "react";
import {
  Icon20Dropdown,
  Icon24ChevronDown,
  Icon24ChevronUp,
  Icon20ChevronUp,
} from "@vkontakte/icons";
import { SizeYConditionalRender } from "../SizeYConditionalRender/SizeYConditionalRender";
import styles from "./DropdownIcon.module.css";

export interface DropdownIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  opened?: boolean;
}

export const DropdownIcon = ({
  opened = false,
  ...restProps
}: DropdownIconProps) => {
  const IconCompact = opened ? Icon20ChevronUp : Icon20Dropdown;
  const IconRegular = opened ? Icon24ChevronUp : Icon24ChevronDown;

  return (
    <SizeYConditionalRender
      compact={
        <IconCompact
          className={styles["DropdownIcon"]}
          aria-hidden
          {...restProps}
        />
      }
      regular={
        <IconRegular
          className={styles["DropdownIcon"]}
          aria-hidden
          {...restProps}
        />
      }
    />
  );
};
