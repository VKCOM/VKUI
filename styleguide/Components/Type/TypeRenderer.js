import React from "react";
import { Text } from "@vkui";
import "./Type.css";

export const TypeRenderer = ({ children }) => {
  return <Text className="Type">{children}</Text>;
};

export default TypeRenderer;
