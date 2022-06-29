import React from "react";
import { Text, classNames } from "@vkui";
import "./Type.css";

export const TypeRenderer = ({ children, className }) => {
  return <Text className={classNames("Type", className)}>{children}</Text>;
};

export default TypeRenderer;
